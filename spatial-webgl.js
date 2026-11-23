(function () {
  "use strict";

  /* =========================================================================
     SPATIAL 3D CODE GLYPH TERRAIN — Full-Bleed Perspective ASCII Wave Field
     2D Canvas · True 3D Projection · Quiet-Zone Text Attenuation · Tab-Pause
     ========================================================================= */

  /* Code-native elevation ramp: valley -> slope -> ridge -> peak */
  const GLYPHS = ["·", "·", ":", "-", "=", "+", "/", "\\", "{", "}", "<", ">", "0", "1", "λ", "#"];

  function mountSpatialWorld(canvas) {
    if (!canvas) return null;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return null;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let paused = reducedMotion;
    let hidden = document.hidden;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let scrollNorm = 0;
    let targetScroll = 0;
    let ptrX = 0.5;
    let ptrY = 0.5;
    let curPtrX = 0.5;
    let curPtrY = 0.5;
    let ptrActive = 0;
    let targetPtrActive = 0;

    let pulseRadius = -1;
    let pulseStrength = 0;

    let time = 0;
    let lastTs = 0;
    let rafId = 0;

    function readScroll() {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScroll = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    }

    window.addEventListener("scroll", readScroll, { passive: true });
    readScroll();

    document.addEventListener("visibilitychange", () => {
      hidden = document.hidden;
      if (hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (!hidden && !paused && !rafId) {
        lastTs = 0;
        rafId = requestAnimationFrame(tick);
      }
    });

    if (isFinePointer) {
      window.addEventListener(
        "pointermove",
        (e) => {
          ptrX = e.clientX / Math.max(1, window.innerWidth);
          ptrY = e.clientY / Math.max(1, window.innerHeight);
          targetPtrActive = 1;
        },
        { passive: true }
      );
      window.addEventListener(
        "pointerleave",
        () => {
          targetPtrActive = 0;
        },
        { passive: true }
      );
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    }

    /* Smooth harmonic 3D heightfield */
    function waveHeight(gx, gz, t, scrollShift) {
      const zFlow = gz + scrollShift * 3.8;
      const w1 = Math.sin(gx * 0.42 + t * 0.72) * Math.cos(zFlow * 0.34 - t * 0.48);
      const w2 = Math.sin((gx * 0.25 - zFlow * 0.38) + t * 0.52) * 0.65;
      const w3 = Math.cos(Math.hypot(gx * 0.32, zFlow * 0.28) - t * 0.85) * 0.42;
      return (w1 + w2 + w3) * 0.52;
    }

    function render() {
      /* Deep obsidian void background */
      ctx.fillStyle = "#050507";
      ctx.fillRect(0, 0, width, height);

      const isNarrow = width < 768;
      const cols = isNarrow ? 34 : 68;
      const rows = isNarrow ? 28 : 42;

      /* Subtle atmospheric warm glow behind horizon crest */
      const horizonY = height * (isNarrow ? 0.34 : 0.40) - scrollNorm * height * 0.06;
      const glowX = width * (isNarrow ? 0.5 : 0.64 - scrollNorm * 0.14);
      const bgGrad = ctx.createRadialGradient(glowX, horizonY, 20, glowX, horizonY, Math.max(width, height) * 0.62);
      const scrollAtten = 1.0 - Math.min(1, scrollNorm * 4.5) * 0.54;
      bgGrad.addColorStop(0, `rgba(255, 94, 26, ${(0.11 * scrollAtten).toFixed(3)})`);
      bgGrad.addColorStop(0.42, `rgba(255, 94, 26, ${(0.03 * scrollAtten).toFixed(3)})`);
      bgGrad.addColorStop(1, "rgba(5, 5, 7, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      /* 3D Camera parameters reacting to pointer & scroll */
      const fov = Math.min(width, height) * (isNarrow ? 0.95 : 1.05);
      const camPitch = 0.34 + (curPtrY - 0.5) * 0.12 + Math.sin(scrollNorm * Math.PI) * 0.08;
      const camYaw = (curPtrX - 0.5) * 0.18 + Math.sin(scrollNorm * Math.PI * 1.2) * 0.07;
      const cosP = Math.cos(camPitch), sinP = Math.sin(camPitch);
      const cosY = Math.cos(camYaw), sinY = Math.sin(camYaw);

      const worldSpanX = isNarrow ? 16.0 : 28.0;
      const worldSpanZ = isNarrow ? 22.0 : 28.0;
      const camY = 3.8;
      const camZOffset = 5.0;

      /* Map pointer into approximate 3D grid space for interactive crest ripple */
      const ptrGridX = (curPtrX - 0.5) * worldSpanX * 0.85;
      const ptrGridZ = (1.0 - curPtrY) * worldSpanZ * 0.72 + 2.0;

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let lastFont = "";

      const heroWeight = Math.max(0, 1.0 - scrollNorm * 7.0);

      /* Draw back-to-front for natural depth hierarchy */
      for (let rz = rows - 1; rz >= 0; rz--) {
        const zNorm = rz / (rows - 1);
        const wz = zNorm * worldSpanZ + 1.2;
        const depthFade = Math.pow(1.0 - zNorm, 0.75) * Math.min(1, zNorm * 5.5);
        if (depthFade < 0.03) continue;

        for (let cx = 0; cx < cols; cx++) {
          const xNorm = cx / (cols - 1) - 0.5;
          const wx = xNorm * worldSpanX;

          let h = waveHeight(wx, wz, time, scrollNorm);

          /* Interactive pointer magnetic ridge */
          let ptrBoost = 0;
          if (ptrActive > 0.01) {
            const distPtr = Math.hypot(wx - ptrGridX, wz - ptrGridZ);
            if (distPtr < 4.6) {
              ptrBoost = Math.pow(1.0 - distPtr / 4.6, 2.0) * ptrActive;
              h += ptrBoost * 1.35;
            }
          }

          /* Radial shockwave impulse when switching flagship tabs */
          let shockBoost = 0;
          if (pulseStrength > 0.02) {
            const dCenter = Math.hypot(wx, wz - worldSpanZ * 0.42);
            const ringDist = Math.abs(dCenter - pulseRadius);
            if (ringDist < 2.2) {
              shockBoost = (1.0 - ringDist / 2.2) * pulseStrength;
              h += shockBoost * 1.1;
            }
          }

          /* 3D Transform (World -> Camera looking downward across terrain) */
          const rx0 = wx;
          const ry0 = h * 1.65 - camY;
          const rz0 = wz + camZOffset;

          const rx1 = rx0 * cosY - rz0 * sinY;
          const rz1 = rx0 * sinY + rz0 * cosY;

          const ry2 = ry0 * cosP + rz1 * sinP;
          const rz2 = -ry0 * sinP + rz1 * cosP;

          if (rz2 < 1.2) continue;

          const scale = fov / rz2;
          const sx = width * 0.5 + rx1 * scale;
          const sy = height * (isNarrow ? 0.58 : 0.60) - ry2 * scale;

          if (sx < -24 || sx > width + 24 || sy < -24 || sy > height + 24) continue;

          /* Quiet-zone attenuation behind hero copy so headlines stay razor-sharp */
          let quietFactor = 1.0;
          if (heroWeight > 0.01) {
            const inTextZone = isNarrow
              ? sy > height * 0.28 && sy < height * 0.80
              : sx < width * 0.62 && sy > height * 0.40 && sy < height * 0.90;
            if (inTextZone) {
              quietFactor = 1.0 - heroWeight * 0.76;
            }
          }

          /* Normalize elevation (0..1) to choose code glyph & luminous color */
          const elev = Math.max(0, Math.min(1, (h + 1.0) / 2.0 + ptrBoost * 0.38 + shockBoost * 0.42));
          const glyphIdx = Math.min(
            GLYPHS.length - 1,
            Math.max(0, Math.floor(elev * GLYPHS.length))
          );
          const glyph = GLYPHS[glyphIdx];

          const fontSize = Math.max(9, Math.min(18, Math.round(scale * 0.28)));
          const alpha = depthFade * (0.28 + elev * 0.72) * scrollAtten * quietFactor;
          if (alpha < 0.025) continue;

          /* Color choreography: deep muted slate -> platinum ridge -> molten amber #FF5E1A peak */
          const amberMix = Math.max(0, (elev - 0.58) / 0.42) + ptrBoost * 0.65 + shockBoost * 0.8;
          if (amberMix > 0.18) {
            const a = Math.min(0.96, alpha * (1.0 + amberMix * 0.35));
            const r = 255;
            const g = Math.round(94 + Math.min(1, amberMix) * 58);
            const b = Math.round(26 + Math.min(1, amberMix) * 32);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
          } else if (elev > 0.40) {
            ctx.fillStyle = `rgba(232, 232, 240, ${(alpha * 0.86).toFixed(3)})`;
          } else {
            ctx.fillStyle = `rgba(136, 136, 152, ${(alpha * 0.62).toFixed(3)})`;
          }

          const nextFont = `${elev > 0.68 ? 600 : 400} ${fontSize}px 'JetBrains Mono', monospace`;
          if (nextFont !== lastFont) {
            ctx.font = nextFont;
            lastFont = nextFont;
          }
          ctx.fillText(glyph, sx, sy);
        }
      }

      /* Subtle bottom vignette so footer text stays razor-sharp */
      const vig = ctx.createLinearGradient(0, height * 0.72, 0, height);
      vig.addColorStop(0, "rgba(5, 5, 7, 0)");
      vig.addColorStop(1, "rgba(5, 5, 7, 0.84)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, height * 0.72, width, height * 0.28);
    }

    function tick(ts) {
      if (hidden || paused) {
        rafId = 0;
        return;
      }
      if (!lastTs) lastTs = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      time += dt;
      scrollNorm += (targetScroll - scrollNorm) * 0.08;
      curPtrX += (ptrX - curPtrX) * 0.08;
      curPtrY += (ptrY - curPtrY) * 0.08;
      ptrActive += (targetPtrActive - ptrActive) * 0.08;

      if (pulseStrength > 0.01) {
        pulseRadius += dt * 16.0;
        pulseStrength *= 0.94;
      } else {
        pulseStrength = 0;
      }
      render();
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    resize();

    if (!reducedMotion && !hidden) {
      rafId = requestAnimationFrame(tick);
    }

    return {
      setPaused(nextPaused) {
        paused = Boolean(nextPaused);
        if (!paused && !hidden && !rafId) {
          lastTs = 0;
          rafId = requestAnimationFrame(tick);
        }
        render();
      },
      nudge() {
        pulseRadius = 0.2;
        pulseStrength = 1.0;
      },
      isWebGL: false
    };
  }

  window.mountSpatialWorld = mountSpatialWorld;
})();
