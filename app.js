(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const params = new URLSearchParams(window.location.search);
  const state = {
    lang: params.get("lang") === "en" ? "en" : "ru",
    spotlightId: params.get("spotlight") || "veil-h2",
    dialogProjectId: null,
    lastFocusEl: null,
    motionPaused: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  };

  if (!data.projects.some((p) => p.flagship && p.id === state.spotlightId)) {
    state.spotlightId = "veil-h2";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function protectTechTerms(text) {
    const safe = escapeHtml(text);
    return safe.replace(
      /\b(Veil-H2|Rust|Swift|Java|Python|JavaScript|MOEX|SPBEX|IFRS|RAS|SHA-256|PolarGate|Qwen2\.5-1\.5B-Instruct|Advexo|Sanofi|Telegram|Kotlin|PostgreSQL|PyTorch|NumPy|LaTeX|Android|macOS|Apple Silicon|OpenXML|GitHub Pages|Mom Test|JTBD|MVP|L3|air-gap)\b/g,
      '<span translate="no">$1</span>'
    );
  }

  function syncUrl() {
    const next = new URLSearchParams();
    if (state.lang !== "ru") next.set("lang", state.lang);
    if (state.spotlightId !== "veil-h2") next.set("spotlight", state.spotlightId);
    if (state.dialogProjectId) next.set("project", state.dialogProjectId);
    const qs = next.toString();
    const target = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState({}, "", target);
  }

  /* Summary panels for private builds + data visuals for public/empirical builds */
  function renderFlagshipVisual(id) {
    const isRu = state.lang === "ru";

    if (id === "veil-h2") {
      return `
        <div class="nda-panel">
          <div class="nda-head">
            <span class="nda-badge">${isRu ? "ЗАКРЫТЫЙ ПРОЕКТ · NDA" : "PRIVATE PROJECT · NDA"}</span>
            <span class="nda-scope">${isRu ? "Сетевая безопасность и транспорт" : "Network Security & Transport"}</span>
          </div>
          <div class="nda-grid">
            <div class="nda-cell">
              <span class="nda-k">${isRu ? "Платформы" : "Platforms"}</span>
              <span class="nda-v">Android · macOS · Linux</span>
            </div>
            <div class="nda-cell">
              <span class="nda-k">${isRu ? "Стек" : "Languages"}</span>
              <span class="nda-v">Rust · Java · Swift · C</span>
            </div>
            <div class="nda-cell">
              <span class="nda-k">${isRu ? "Профиль защиты" : "Security Profile"}</span>
              <span class="nda-v">${isRu ? "Постквантовый L3" : "Post-Quantum L3"}</span>
            </div>
          </div>
          <p class="nda-note">${isRu ? "Внутренняя архитектура протокола, криптографическая схема и исходный код не публикуются." : "Internal protocol architecture, cryptographic design, and source code are not publicly disclosed."}</p>
        </div>
      `;
    }

    if (id === "logos") {
      return `
        <div class="nda-panel">
          <div class="nda-head">
            <span class="nda-badge">${isRu ? "ЗАКРЫТЫЙ ПРОЕКТ · NDA" : "PRIVATE PROJECT · NDA"}</span>
            <span class="nda-scope">${isRu ? "Локальный корпоративный ИИ" : "On-Premise Enterprise AI"}</span>
          </div>
          <div class="nda-grid">
            <div class="nda-cell">
              <span class="nda-k">${isRu ? "Контур" : "Deployment"}</span>
              <span class="nda-v">${isRu ? "100% локально (Apple Silicon)" : "100% Offline (Apple Silicon)"}</span>
            </div>
            <div class="nda-cell">
              <span class="nda-k">${isRu ? "Форматы" : "Deliverables"}</span>
              <span class="nda-v">${isRu ? "Excel · Word · MD · слайды" : "Excel · Word · MD · Decks"}</span>
            </div>
            <div class="nda-cell">
              <span class="nda-k">${isRu ? "Вычислительное ядро" : "Compute Core"}</span>
              <span class="nda-v">${isRu ? "Детерминированные расчёты" : "Deterministic Solvers"}</span>
            </div>
          </div>
          <p class="nda-note">${isRu ? "Внутренняя архитектура, состав модулей и исходный код не публикуются." : "Internal architecture, module topology, and source code are not publicly disclosed."}</p>
        </div>
      `;
    }

    if (id === "moex") {
      const m = isRu ? "М" : "M";
      return `
        <table class="quant-table" aria-label="${isRu ? "Срез скоринга акций Мосбиржи при ставке ЦБ 14%" : "Top ranked MOEX equities under 14% CBR rate"}">
          <thead>
            <tr>
              <th>${isRu ? "Тикер" : "Ticker"}</th>
              <th>${isRu ? "Цена" : "Price"}</th>
              <th>${isRu ? "Коридор входа" : "Entry Band"}</th>
              <th>${isRu ? "Модельная оценка" : "Model Fair Value"}</th>
              <th>${isRu ? "Горизонт" : "Horizon"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="quant-ticker" translate="no">BSPB</td>
              <td>256,00 ₽</td>
              <td>247,04–257,28</td>
              <td class="quant-up">375,30 (+67,7%)</td>
              <td>6–12${m}</td>
            </tr>
            <tr>
              <td class="quant-ticker" translate="no">SNGSP</td>
              <td>40,97 ₽</td>
              <td>39,12–40,76</td>
              <td class="quant-up">60,38 (+68,5%)</td>
              <td>8–12${m}</td>
            </tr>
            <tr>
              <td class="quant-ticker" translate="no">HEAD</td>
              <td>2 719,00 ₽</td>
              <td>2 596,6–2 705,4</td>
              <td class="quant-up">3 532,0 (+46,8%)</td>
              <td>12–36${m}</td>
            </tr>
            <tr>
              <td class="quant-ticker" translate="no">LKOH</td>
              <td>6 024,00 ₽</td>
              <td>5 873,4–6 024,0</td>
              <td class="quant-up">8 795,0 (+63,0%)</td>
              <td>2–3${m} / 36${m}</td>
            </tr>
            <tr>
              <td class="quant-ticker" translate="no">MOEX</td>
              <td>154,80 ₽</td>
              <td>147,83–154,03</td>
              <td class="quant-up">215,79 (+55,2%)</td>
              <td>6–12${m}</td>
            </tr>
          </tbody>
        </table>
        <p class="quant-footnote">${isRu ? "Срез открытого терминала · ключевая ставка ЦБ РФ 14,0% · модельные оценки, не инвестрекомендация" : "Open terminal snapshot · 14.0% CBR key rate · model fair values, not investment advice"}</p>
      `;
    }

    if (id === "polargate") {
      const dec = (v) => (isRu ? v.replace(".", ",") : v);
      const qwenLine = isRu
        ? "Qwen2.5-1.5B: 45,92 мс/шаг (−33,4% std)"
        : "Qwen2.5-1.5B: 45.92 ms/step (−33.4% std)";
      const pgLine = isRu
        ? "PolarGate: 0,0032 мс/шаг"
        : "PolarGate: 0.0032 ms/step";
      return `
        <svg class="diagram-svg" viewBox="0 0 680 200" role="img" aria-label="${isRu ? "Сравнение Macro-F1 PolarGate на 528 голосованиях Конгресса США" : "PolarGate vs Qwen2.5 dispersion and Congress Macro-F1 benchmark"}">
          <text x="20" y="28" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="11">${isRu ? "КОНГРЕСС США (528 ГОЛОСОВАНИЙ) · MACRO-F1" : "117TH U.S. CONGRESS (528 HELD-OUT) · MACRO-F1"}</text>
          <text x="20" y="64" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="11">Linear Threshold</text>
          <rect x="160" y="52" width="165" height="16" rx="4" fill="rgba(255,255,255,0.12)"/>
          <text x="336" y="64" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="11">${dec("0.3860")}</text>

          <text x="20" y="96" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="11">Unsigned GNN</text>
          <rect x="160" y="84" width="184" height="16" rx="4" fill="rgba(255,255,255,0.22)"/>
          <text x="355" y="96" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="11">${dec("0.4311")}</text>

          <text x="20" y="128" fill="#F4F4F5" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">PolarGate</text>
          <rect x="160" y="116" width="246" height="16" rx="4" fill="#FF5E1A"/>
          <text x="417" y="128" fill="#FF8C5A" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">${dec("0.5731 (+0.1420)")}</text>

          <line x1="20" y1="154" x2="660" y2="154" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <text x="20" y="180" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="11">${qwenLine}</text>
          <text x="660" y="180" text-anchor="end" fill="#22C55E" font-family="JetBrains Mono, monospace" font-size="11">${pgLine}</text>
        </svg>
      `;
    }

    if (id === "russia-macro") {
      return `
        <svg class="diagram-svg" viewBox="0 0 680 176" role="img" aria-label="${isRu ? "Схематичные траектории четырёх макросценариев РФ на 48 месяцев" : "Schematic trajectories across four macro scenarios over 48 months"}">
          <text x="20" y="24" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="10.5">${isRu ? "СХЕМАТИЧНЫЙ ИНДЕКС МАКРОДАВЛЕНИЯ · 4 СЦЕНАРИЯ (ДЕКАБРЬ 2026 — НОЯБРЬ 2030)" : "SCHEMATIC MACRO PRESSURE INDEX · 4 SCENARIOS (DEC 2026 — NOV 2030)"}</text>
          <line x1="20" y1="54" x2="590" y2="54" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <line x1="20" y1="90" x2="590" y2="90" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <line x1="20" y1="126" x2="590" y2="126" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <line x1="20" y1="142" x2="590" y2="142" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
          <line x1="444" y1="38" x2="444" y2="142" stroke="rgba(255,255,255,0.14)" stroke-dasharray="3 3"/>
          <text x="438" y="48" text-anchor="end" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="9.5">2030</text>
          <polyline points="24,86 164,74 304,60 444,48 584,38" fill="none" stroke="#FF5E1A" stroke-width="2.2"/>
          <polyline points="24,86 164,82 304,76 444,72 584,68" fill="none" stroke="#FB923C" stroke-dasharray="6 3" stroke-width="1.6"/>
          <polyline points="24,86 164,94 304,100 444,104 584,102" fill="none" stroke="#F4F4F5" stroke-width="1.6"/>
          <polyline points="24,86 164,108 304,120 444,128 584,126" fill="none" stroke="#22C55E" stroke-dasharray="4 3" stroke-width="1.5"/>
          <text x="598" y="41" fill="#FF8C5A" font-family="JetBrains Mono, monospace" font-size="10">${isRu ? "Стресс" : "Stress"}</text>
          <text x="598" y="71" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="10">${isRu ? "Жёсткий" : "Tight"}</text>
          <text x="598" y="105" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="10">${isRu ? "Базовый" : "Base"}</text>
          <text x="598" y="129" fill="#22C55E" font-family="JetBrains Mono, monospace" font-size="10">${isRu ? "Мягкий" : "Soft"}</text>
          <text x="24" y="162" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="10">${isRu ? "Дек 2026" : "Dec 2026"}</text>
          <text x="304" y="162" text-anchor="middle" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="10">2028</text>
          <text x="584" y="162" text-anchor="end" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="10">${isRu ? "Ноя 2030" : "Nov 2030"}</text>
        </svg>
      `;
    }

    return `
      <div class="nda-panel">
        <div class="nda-head">
          <span class="nda-badge">${isRu ? "ПРИВАТНЫЙ ПРОДУКТ" : "PRIVATE PRODUCT"}</span>
          <span class="nda-scope">${isRu ? "Продуктовая разработка 0 → 1" : "0 → 1 Product Engineering"}</span>
        </div>
        <div class="nda-grid">
          <div class="nda-cell">
            <span class="nda-k">${isRu ? "Поверхности" : "Surfaces"}</span>
            <span class="nda-v">${isRu ? "Веб · Telegram-бот · Android" : "Web · Telegram Bot · Android"}</span>
          </div>
          <div class="nda-cell">
            <span class="nda-k">${isRu ? "Дискавери" : "Discovery"}</span>
            <span class="nda-v">${isRu ? "20 интервью Mom Test" : "20 Mom Test interviews"}</span>
          </div>
          <div class="nda-cell">
            <span class="nda-k">${isRu ? "Цикл" : "Lifecycle"}</span>
            <span class="nda-v">${isRu ? "От гипотез до MVP 0 → 1" : "Discovery to MVP 0 → 1"}</span>
          </div>
        </div>
        <p class="nda-note">${isRu ? "Исходный код организации Advexo-SMM закрыт; демонстрация продукта доступна на встрече." : "Advexo-SMM organization source code is private; product walkthrough available on request."}</p>
      </div>
    `;
  }

  function renderResearchVisual(cardId) {
    const isRu = state.lang === "ru";
    const dec = (v) => (isRu ? v.replace(".", ",") : v);

    if (cardId === "polargate-proof") {
      return `
        <svg class="diagram-svg" viewBox="0 0 360 156" role="img" aria-label="${isRu ? "Сравнение удержания дисперсии мнений на 360 шагах" : "Dispersion preservation benchmark"}">
          <text x="20" y="20" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "УДЕРЖАНИЕ ДИСПЕРСИИ (360 ШАГОВ)" : "DISPERSION PRESERVATION (360 STEPS)"}</text>
          <line x1="20" y1="126" x2="340" y2="126" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <line x1="20" y1="44" x2="340" y2="44" stroke="#22C55E" stroke-dasharray="4 4" stroke-width="1"/>
          <text x="20" y="37" text-anchor="start" fill="#22C55E" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "Эталон Std 0,247" : "Ground-Truth Std 0.247"}</text>

          <rect x="38" y="72" width="42" height="54" rx="3" fill="rgba(255,255,255,0.16)"/>
          <text x="59" y="88" text-anchor="middle" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="8.5">${dec("0.165")}</text>
          <text x="59" y="142" text-anchor="middle" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="9">Qwen2.5</text>

          <rect x="118" y="60" width="42" height="66" rx="3" fill="rgba(255,255,255,0.26)"/>
          <text x="139" y="76" text-anchor="middle" fill="#F4F4F5" font-family="JetBrains Mono, monospace" font-size="8.5">${dec("0.200")}</text>
          <text x="139" y="142" text-anchor="middle" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="9">FJ-Damp</text>

          <rect x="198" y="53" width="42" height="73" rx="3" fill="rgba(255,94,26,0.55)"/>
          <text x="219" y="69" text-anchor="middle" fill="#F4F4F5" font-family="JetBrains Mono, monospace" font-size="8.5">${dec("0.222")}</text>
          <text x="219" y="142" text-anchor="middle" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="9">Hybrid</text>

          <rect x="278" y="50" width="42" height="76" rx="3" fill="#FF5E1A"/>
          <text x="299" y="66" text-anchor="middle" fill="#050507" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="600">${dec("0.230")}</text>
          <text x="299" y="142" text-anchor="middle" fill="#F4F4F5" font-family="JetBrains Mono, monospace" font-size="9">PolarGate</text>
        </svg>`;
    }

    if (cardId === "macro-proof") {
      return `
        <svg class="diagram-svg" viewBox="0 0 360 156" role="img" aria-label="${isRu ? "Схематичный индекс макродавления в четырёх сценариях на 48 месяцев" : "Schematic macro pressure index across 4 scenarios"}">
          <text x="20" y="20" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "ИНДЕКС ДАВЛЕНИЯ · 4 СЦЕНАРИЯ" : "PRESSURE INDEX · 4 SCENARIOS"}</text>
          <line x1="20" y1="54" x2="294" y2="54" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <line x1="20" y1="88" x2="294" y2="88" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
          <line x1="20" y1="126" x2="294" y2="126" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <line x1="224" y1="30" x2="224" y2="126" stroke="rgba(255,255,255,0.16)" stroke-dasharray="3 3"/>
          <text x="219" y="38" text-anchor="end" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">2030</text>
          <polyline points="22,74 90,64 158,52 226,42 292,34" fill="none" stroke="#FF5E1A" stroke-width="2"/>
          <polyline points="22,74 90,71 158,66 226,62 292,58" fill="none" stroke="#FB923C" stroke-dasharray="5 3" stroke-width="1.5"/>
          <polyline points="22,74 90,82 158,88 226,92 292,90" fill="none" stroke="#F4F4F5" stroke-width="1.5"/>
          <polyline points="22,74 90,94 158,104 226,112 292,110" fill="none" stroke="#22C55E" stroke-dasharray="4 3" stroke-width="1.4"/>
          <text x="299" y="37" fill="#FF8C5A" font-family="JetBrains Mono, monospace" font-size="8">${isRu ? "Стресс" : "Stress"}</text>
          <text x="299" y="61" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="8">${isRu ? "Жёстк." : "Tight"}</text>
          <text x="299" y="93" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="8">${isRu ? "База" : "Base"}</text>
          <text x="299" y="113" fill="#22C55E" font-family="JetBrains Mono, monospace" font-size="8">${isRu ? "Мягкий" : "Soft"}</text>
          <text x="22" y="142" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "Дек 26" : "Dec 26"}</text>
          <text x="158" y="142" text-anchor="middle" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">2028</text>
          <text x="292" y="142" text-anchor="end" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "Ноя 30" : "Nov 30"}</text>
        </svg>`;
    }

    return `
      <svg class="diagram-svg" viewBox="0 0 360 156" role="img" aria-label="${isRu ? "Пайплайн верификации данных MOEX и СПБ Биржи" : "MOEX and SPBEX verification pipeline"}">
        <line x1="88" y1="78" x2="272" y2="78" stroke="rgba(255,255,255,0.22)" stroke-width="1.2"/>
        <rect x="20" y="51" width="84" height="54" rx="6" fill="#121218" stroke="rgba(255,255,255,0.2)"/>
        <text x="62" y="75" text-anchor="middle" fill="#F4F4F5" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">757</text>
        <text x="62" y="91" text-anchor="middle" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "MOEX + СПБ" : "MOEX + SPB"}</text>

        <rect x="134" y="51" width="92" height="54" rx="6" fill="#21140E" stroke="#FF5E1A"/>
        <text x="180" y="75" text-anchor="middle" fill="#FF8C5A" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">${isRu ? "31 эмитент" : "31 Issuers"}</text>
        <text x="180" y="91" text-anchor="middle" fill="#D4D4D8" font-family="JetBrains Mono, monospace" font-size="8.5">${isRu ? "МСФО / РСБУ" : "IFRS / RAS"}</text>

        <rect x="256" y="51" width="84" height="54" rx="6" fill="#121218" stroke="#22C55E"/>
        <text x="298" y="75" text-anchor="middle" fill="#22C55E" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">SHA-256</text>
        <text x="298" y="91" text-anchor="middle" fill="#8E8E98" font-family="JetBrains Mono, monospace" font-size="8">${isRu ? "Контроль" : "Provenance"}</text>
      </svg>`;
  }

  let spatialWorld = null;

  function renderMetaAndHeader() {
    const t = data.ui[state.lang];
    const m = data.meta[state.lang];
    document.documentElement.lang = state.lang;
    document.title = m.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", m.description);

    document.getElementById("skip-link").textContent = t.skipLink;
    document.getElementById("brand-name").textContent = t.brandName;

    document.querySelectorAll("[data-nav]").forEach((el) => {
      const key = el.getAttribute("data-nav");
      if (t.nav[key]) el.textContent = t.nav[key];
    });

    document.getElementById("header-cta").textContent = t.ctaPrimary;
    document.getElementById("mobile-cta").textContent = t.ctaPrimary;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === state.lang ? "true" : "false");
    });

    document.getElementById("hero-role").textContent = t.heroRole;
    document.getElementById("hero-title").textContent = t.heroTitle;
    document.getElementById("hero-lead").textContent = t.heroLead;
    document.getElementById("hero-cta").textContent = t.ctaPrimary;

    const heroPdf = document.getElementById("hero-pdf");
    heroPdf.textContent = t.ctaPdf;
    heroPdf.setAttribute("href", m.pdfFile);

    document.body.classList.toggle("motion-paused", state.motionPaused);
    if (spatialWorld) spatialWorld.setPaused(state.motionPaused);
  }

  function renderSpotlight(animateSwap = false) {
    const t = data.ui[state.lang];
    document.getElementById("spotlight-heading").textContent = t.spotlightHeading;
    document.getElementById("spotlight-lead").textContent = t.spotlightLead;

    const flagships = data.projects.filter((p) => p.flagship);
    const tabsEl = document.getElementById("spotlight-tabs");

    tabsEl.innerHTML = flagships
      .map((p) => {
        const copy = p[state.lang];
        const selected = p.id === state.spotlightId;
        return `
        <button
          type="button"
          class="chapter-tab"
          role="tab"
          id="tab-${p.id}"
          aria-controls="spotlight-panel"
          aria-selected="${selected ? "true" : "false"}"
          data-spotlight-id="${p.id}"
        >
          <span class="chapter-num">${escapeHtml(p.order)}</span>
          <span class="chapter-label-group">
            <span class="chapter-name" translate="no">${escapeHtml(copy.name)}</span>
            <span class="chapter-sub">${escapeHtml(copy.category)}</span>
          </span>
        </button>`;
      })
      .join("");

    const active = flagships.find((p) => p.id === state.spotlightId) || flagships[0];
    const copy = active[state.lang];
    const panelEl = document.getElementById("spotlight-panel");
    panelEl.setAttribute("aria-labelledby", `tab-${active.id}`);

    const visibilityClass = active.visibility === "public" ? "visibility-tag visibility-tag--public" : "visibility-tag";
    const visibilityText = copy.statusLabel || "";
    const dotHtml = active.visibility === "public" ? `<span class="status-dot" aria-hidden="true"></span>` : "";

    let actionLinks = `<button type="button" class="btn btn-primary" data-open-case="${active.id}">${escapeHtml(t.openCaseLabel)}</button>`;
    if (active.liveUrl) {
      actionLinks += `<a class="btn btn-secondary" href="${active.liveUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.openLiveLabel)}</a>`;
    }
    if (active.publicUrl) {
      actionLinks += `<a class="btn btn-secondary" href="${active.publicUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.openGithubLabel)}</a>`;
    }

    panelEl.innerHTML = `
      <div class="spotlight-visual">${renderFlagshipVisual(active.id)}</div>
      <div class="spotlight-head">
        <h3 class="spotlight-name" translate="no">${escapeHtml(copy.name)}</h3>
        <span class="${visibilityClass}">${dotHtml}${escapeHtml(visibilityText)}</span>
      </div>
      <p class="spotlight-summary">${protectTechTerms(copy.architecture)}</p>
      <div class="spotlight-bottom">
        <div class="spotlight-metrics">
          ${copy.metrics
            .map(
              (m) => `
            <div class="spotlight-metric-cell">
              <div class="metric-val">${escapeHtml(m.value)}</div>
              <div class="metric-lbl">${escapeHtml(m.label)}</div>
            </div>`
            )
            .join("")}
        </div>
        <div class="spotlight-actions">${actionLinks}</div>
      </div>
    `;

    if (animateSwap && !state.motionPaused) {
      panelEl.classList.remove("is-swapping");
      void panelEl.offsetWidth;
      panelEl.classList.add("is-swapping");
    }
  }

  function renderResearchAndStatement() {
    const t = data.ui[state.lang];
    document.getElementById("research-heading").textContent = t.researchHeading;
    document.getElementById("research-lead").textContent = t.researchLead;

    const rGrid = document.getElementById("research-grid");
    rGrid.innerHTML = t.researchCards
      .map(
        (c) => `
      <article class="research-card">
        <div class="research-visual">${renderResearchVisual(c.id)}</div>
        <div class="research-body">
          <span class="mono-meta">${escapeHtml(c.category)}</span>
          <h3 class="research-title">${protectTechTerms(c.title)}</h3>
          <p class="research-text">${protectTechTerms(c.body)}</p>
          <button type="button" class="research-link" data-open-case="${c.projectId}">${escapeHtml(t.openCaseLabel)} →</button>
        </div>
      </article>`
      )
      .join("");

    const stmtEl = document.getElementById("statement-text");
    const statementCopy = t.statement || (
      state.lang === "ru"
        ? "Инженерная ценность измеряется воспроизводимыми расчётами, формальной верификацией и кодом, который работает автономно в реальном контуре."
        : "Engineering value is measured in reproducible math, formal verification, and systems that ship cleanly into real-world operation."
    );
    const words = statementCopy.split(" ");
    stmtEl.innerHTML = words
      .map((w, idx) => `<span class="statement-word${state.motionPaused ? " is-lit" : ""}" data-word-idx="${idx}">${escapeHtml(w)}</span>`)
      .join(" ");

    updateStatementHighlight();
  }

  function updateStatementHighlight() {
    const stmtBand = document.querySelector(".statement-band");
    const words = document.querySelectorAll(".statement-word");
    if (!stmtBand || !words.length) return;
    if (state.motionPaused) {
      words.forEach((w) => w.classList.add("is-lit"));
      return;
    }
    const rect = stmtBand.getBoundingClientRect();
    const vh = window.innerHeight || 900;
    const progress = Math.max(0.15, Math.min(1, (vh * 0.84 - rect.top) / (vh * 0.62)));
    const litCount = Math.ceil(progress * words.length);
    words.forEach((w, idx) => {
      w.classList.toggle("is-lit", idx < litCount);
    });
  }

  function renderWorkAndExperience() {
    const t = data.ui[state.lang];
    document.getElementById("work-heading").textContent = t.workHeading;
    document.getElementById("work-lead").textContent = t.workLead;

    document.getElementById("tracks-grid").innerHTML = t.workTracks
      .map(
        (track) => `
      <article class="track-card">
        <div class="track-index">${escapeHtml(track.index)}</div>
        <h3 class="track-title">${escapeHtml(track.title)}</h3>
        <p class="track-body">${protectTechTerms(track.body)}</p>
        <p class="track-deliverable">${escapeHtml(track.deliverable)}</p>
      </article>`
      )
      .join("");

    document.getElementById("process-grid").innerHTML = t.processSteps
      .map(
        (step, i) => `
      <div class="process-step">
        <div class="process-step-num">0${i + 1}</div>
        <h3 class="process-step-title">${escapeHtml(step.title)}</h3>
        <p class="process-step-body">${escapeHtml(step.body)}</p>
      </div>`
      )
      .join("");

    document.getElementById("experience-heading").textContent = t.experienceHeading;
    document.getElementById("experience-grid").innerHTML = (t.experienceList || [])
      .map(
        (exp) => `
      <div class="exp-row${exp.current ? " exp-row--current" : ""}">
        <div class="exp-period">
          ${exp.current ? `<span class="status-dot" aria-hidden="true"></span>` : ""}
          <span>${escapeHtml(exp.period)}</span>
        </div>
        <div class="exp-org-block">
          <h3 class="exp-org" translate="no">${escapeHtml(exp.org)}</h3>
          <div class="exp-role">${escapeHtml(exp.role)}</div>
        </div>
        <p class="exp-detail">${protectTechTerms(exp.detail)}</p>
      </div>`
      )
      .join("");
  }

  function renderFooter() {
    const t = data.ui[state.lang];
    document.getElementById("close-heading").textContent = t.closeHeading;
    document.getElementById("close-lead").textContent = t.closeLead;
    document.getElementById("location-note").textContent = t.locationNote;
    document.getElementById("btn-telegram").textContent = t.contactTelegram;
    document.getElementById("btn-email").textContent = t.contactEmail;
    document.getElementById("btn-github").textContent = t.contactGithub;
    document.getElementById("download-ru").textContent = t.downloadRu;
    document.getElementById("download-en").textContent = t.downloadEn;
    document.getElementById("privacy-link").textContent = t.privacyLink;
    document.getElementById("copyright").textContent = t.copyright;
  }

  function renderDialog(projectId) {
    const project = data.projects.find((p) => p.id === projectId);
    if (!project) return;
    const t = data.ui[state.lang];
    const d = t.drawer;
    const copy = project[state.lang];

    document.getElementById("dialog-category").textContent = `${project.order} / ${copy.category}`;
    document.getElementById("dialog-prev").textContent = `← ${d.prev}`;
    document.getElementById("dialog-next").textContent = `${d.next} →`;

    const visualHtml = project.flagship && project.visibility === "public"
      ? `<div class="dialog-visual">${renderFlagshipVisual(project.id)}</div>`
      : "";
    const detailHeading = project.visibility === "private"
      ? (state.lang === "ru" ? "Масштаб и результат" : "Scope & Outcomes")
      : d.architecture;

    const actions = [];
    if (project.liveUrl) {
      actions.push(`<a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.openLiveLabel)}</a>`);
    }
    if (project.publicUrl) {
      actions.push(`<a class="btn btn-secondary" href="${project.publicUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.openGithubLabel)}</a>`);
    }
    if (!actions.length) {
      actions.push(`<a class="btn btn-primary" href="https://t.me/Zubenko_Michail_Petrovich" target="_blank" rel="noopener noreferrer">${escapeHtml(t.contactTelegram)}</a>`);
    }

    document.getElementById("dialog-body").innerHTML = `
      <h2 class="dialog-title" id="dialog-title" translate="no">${escapeHtml(copy.name)}</h2>
      ${visualHtml}
      <div class="dialog-block">
        <div class="dialog-label">${escapeHtml(d.problem)}</div>
        <p class="dialog-text">${protectTechTerms(copy.problem)}</p>
      </div>
      <div class="dialog-block">
        <div class="dialog-label">${escapeHtml(detailHeading)}</div>
        <p class="dialog-text">${protectTechTerms(copy.architecture)}</p>
      </div>
      <div class="dialog-block">
        <div class="dialog-label">${escapeHtml(d.metrics)}</div>
        <div class="dialog-metrics">
          ${copy.metrics
            .map(
              (m) => `
            <div class="dialog-metric-cell">
              <div class="metric-val">${escapeHtml(m.value)}</div>
              <div class="metric-lbl">${escapeHtml(m.label)}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>
      <div class="dialog-block">
        <div class="dialog-label">${escapeHtml(d.stack)}</div>
        <div class="dialog-stack">
          ${copy.stack.map((item) => `<span class="stack-chip" translate="no">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
      <div class="dialog-block">
        <div class="dialog-label">${escapeHtml(d.access)}</div>
        <p class="dialog-text">${escapeHtml(copy.accessNote)}</p>
      </div>
      <div class="dialog-actions">${actions.join("")}</div>
    `;
  }

  function openCase(projectId, triggerEl) {
    state.dialogProjectId = projectId;
    state.lastFocusEl = triggerEl || document.activeElement;
    renderDialog(projectId);
    const dialog = document.getElementById("case-dialog");
    if (!dialog.open) dialog.showModal();
    syncUrl();
    document.getElementById("dialog-body").scrollTop = 0;
  }

  function closeCase() {
    const dialog = document.getElementById("case-dialog");
    if (dialog.open) dialog.close();
    state.dialogProjectId = null;
    syncUrl();
    if (state.lastFocusEl && typeof state.lastFocusEl.focus === "function") {
      state.lastFocusEl.focus();
    }
  }

  function stepCase(delta) {
    if (!state.dialogProjectId) return;
    const idx = data.projects.findIndex((p) => p.id === state.dialogProjectId);
    const nextIdx = (idx + delta + data.projects.length) % data.projects.length;
    state.dialogProjectId = data.projects[nextIdx].id;
    renderDialog(state.dialogProjectId);
    syncUrl();
    document.getElementById("dialog-body").scrollTop = 0;
  }

  function renderAll() {
    renderMetaAndHeader();
    renderSpotlight();
    renderResearchAndStatement();
    renderWorkAndExperience();
    renderFooter();
    if (state.dialogProjectId) {
      renderDialog(state.dialogProjectId);
    }
  }

  /* Scroll Statement Scrubbing */
  function onScroll() {
    updateStatementHighlight();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest(".lang-btn");
    if (langBtn) {
      const nextLang = langBtn.getAttribute("data-lang");
      if (nextLang !== state.lang) {
        state.lang = nextLang;
        syncUrl();
        renderAll();
        document.getElementById("live-status").textContent =
          nextLang === "en" ? "Switched to English" : "Переключено на русский язык";
      }
      return;
    }

    const tabBtn = e.target.closest("[data-spotlight-id]");
    if (tabBtn) {
      state.spotlightId = tabBtn.getAttribute("data-spotlight-id");
      syncUrl();
      renderSpotlight(true);
      if (spatialWorld) spatialWorld.nudge(1.6);
      return;
    }

    const openBtn = e.target.closest("[data-open-case]");
    if (openBtn) {
      openCase(openBtn.getAttribute("data-open-case"), openBtn);
      return;
    }
  });

  document.getElementById("spotlight-tabs").addEventListener("keydown", (e) => {
    const tabs = Array.from(document.querySelectorAll(".chapter-tab"));
    const cur = tabs.indexOf(document.activeElement);
    if (cur === -1) return;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (cur + 1) % tabs.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (cur - 1 + tabs.length) % tabs.length;
    if (next !== -1) {
      e.preventDefault();
      state.spotlightId = tabs[next].getAttribute("data-spotlight-id");
      syncUrl();
      renderSpotlight(true);
      document.getElementById(`tab-${state.spotlightId}`).focus();
    }
  });

  document.getElementById("dialog-close").addEventListener("click", closeCase);
  document.getElementById("dialog-prev").addEventListener("click", () => stepCase(-1));
  document.getElementById("dialog-next").addEventListener("click", () => stepCase(1));
  document.getElementById("case-dialog").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeCase();
  });
  document.getElementById("case-dialog").addEventListener("close", () => {
    state.dialogProjectId = null;
    syncUrl();
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  function setMenuOpen(open) {
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobileDrawer.hidden = !open;
  }
  menuToggle.addEventListener("click", () => setMenuOpen(mobileDrawer.hidden));
  mobileDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  /* Subtle 3D Perspective Tilt on Research Cards (Fine Pointer Only) */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.addEventListener("pointermove", (e) => {
      if (state.motionPaused) return;
      const card = e.target.closest(".research-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      card.style.setProperty("--rx", `${((0.5 - py) * 5).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${((px - 0.5) * 5).toFixed(2)}deg`);
      card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    });

    document.addEventListener(
      "pointerout",
      (e) => {
        const card = e.target.closest(".research-card");
        if (!card || card.contains(e.relatedTarget)) return;
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      },
      true
    );
  }

  /* Mount Full-Bleed 3D Perspective Glyph Terrain */
  if (typeof window.mountSpatialWorld === "function") {
    spatialWorld = window.mountSpatialWorld(document.getElementById("spatial-canvas"));
  }

  renderAll();
  onScroll();

  const initialProject = params.get("project");
  if (initialProject && data.projects.some((p) => p.id === initialProject)) {
    openCase(initialProject, document.body);
  }
})();
