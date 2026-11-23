window.PORTFOLIO_DATA = {
  meta: {
    ru: {
      title: "Роман Ткачев — AI-системы и прикладной R&D",
      description: "Портфолио Романа Ткачева: локальные нейросимвольные системы, защищённый сетевой транспорт на Rust и Swift, количественный анализ акций, прикладное машинное обучение, макромодели и запуск продуктов 0 → 1.",
      pdfFile: "./Roman_Tkachev_Portfolio_RU.pdf"
    },
    en: {
      title: "Roman Tkachev — AI Systems & Applied R&D",
      description: "Portfolio of Roman Tkachev: local neuro-symbolic systems, post-quantum Rust and Swift network transport, quantitative equities, applied ML, macroeconomic modeling, and 0 → 1 products.",
      pdfFile: "./Roman_Tkachev_Portfolio_EN.pdf"
    }
  },
  ui: {
    ru: {
      skipLink: "Перейти к содержанию",
      brandName: "Роман Ткачев",
      nav: {
        systems: "Проекты",
        research: "Исследования",
        work: "Форматы",
        experience: "Опыт",
        contact: "Контакты"
      },
      ctaPrimary: "Обсудить проект",
      ctaPdf: "Скачать PDF-досье",
      heroRole: "Роман Ткачев — инженер ИИ-систем и прикладного R&D",
      heroTitle: "AI-СИСТЕМЫ И ПРИКЛАДНОЙ R&D",
      heroLead: "6 систем и исследований: от постквантового транспорта на Rust и Swift и автономной нейросимвольной СППР на Apple Silicon до открытого количественного терминала, графового ML, макромоделирования и запуска продуктов 0 → 1.",
      spotlightHeading: "Ключевые проекты",
      spotlightLead: "Шесть разработок на стыке прикладного ИИ, системного инжиниринга, количественных финансов, макромоделирования и запуска продуктов 0 → 1.",
      openCaseLabel: "Открыть разбор кейса",
      openLiveLabel: "Открыть живой терминал",
      openGithubLabel: "Открыть репозиторий GitHub",
      researchHeading: "Исследования и эмпирическая проверка",
      researchLead: "Математические гипотезы, воспроизводимые расчёты и проверяемые метрики на открытых и исследовательских данных.",
      researchCards: [
        {
          id: "polargate-proof",
          category: "Графовая социофизика и ML",
          title: "PolarGate: удержание дисперсии мнений в графовой динамике",
          body: "На 360 шагах симуляции Qwen2.5-1.5B-Instruct теряет 33,4% разброса позиций из-за конформности (0,165 против 0,247), тогда как математическое демпфирование Фридкина–Джонсена удерживает 0,230 при задержке 0,0032 мс на шаг и даёт +0,1420 Macro-F1 на 528 контрольных голосованиях.",
          projectId: "polargate"
        },
        {
          id: "macro-proof",
          category: "Макроэкономика и бюджет",
          title: "Замкнутый макропрогноз РФ 2026–2030 на 120 микрокогортах",
          body: "Семиблочная модель сопрягает торговый баланс, федеральный бюджет и ликвидную часть ФНБ с эндогенной реакцией регуляторов в четырёх сценариях на горизонте 48 месяцев.",
          projectId: "russia-macro"
        },
        {
          id: "moex-proof",
          category: "Количественные финансы",
          title: "Скринер 510 бумаг Мосбиржи и 247 инструментов СПБ Биржи",
          body: "Сверка бухгалтерских тождеств МСФО и РСБУ по 31 эмитенту, поправка на неторгуемые пакеты, живая ставка ЦБ РФ и контроль целостности артефактов по SHA-256.",
          projectId: "moex"
        }
      ],
      workHeading: "Форматы взаимодействия для бизнеса и инвесторов",
      workLead: "Помогаю основателям, корпоративным командам и инвестиционным группам переводить сложные технические задачи в проверяемые продукты.",
      workTracks: [
        {
          index: "01",
          title: "Локальные ИИ-контуры и верифицируемая аналитика",
          body: "Проектирование закрытых систем на Apple Silicon и выделенных GPU с формальной проверкой вычислений, отсутствием передачи данных во внешние облака и сквозным контролем числового паритета.",
          deliverable: "Результат: рабочий стек, контрольные прогоны и документация развёртывания"
        },
        {
          index: "02",
          title: "Запуск продуктов 0 → 1 и системный инжиниринг",
          body: "Полный цикл от проблемных интервью и проверки гипотез до архитектуры бэкенда, клиентских приложений под macOS/Android, баз данных и защищённого сетевого транспорта.",
          deliverable: "Результат: проверенная продуктовая гипотеза и рабочий MVP в продакшне"
        },
        {
          index: "03",
          title: "R&D, финансовое и сценарное моделирование",
          body: "Построение воспроизводимых расчётных пайплайнов, многолистовых моделей МСФО, макроэкономического сценарного анализа и прикладного машинного обучения.",
          deliverable: "Результат: верифицированный код, модель и аналитический меморандум"
        }
      ],
      processSteps: [
        {
          step: "Шаг 1",
          title: "Фиксация задачи и ограничений",
          body: "Определяем измеряемый критерий успеха, требования по безопасности контура и экономику расчётов до написания основного кода."
        },
        {
          step: "Шаг 2",
          title: "Детерминированное ядро и прототип",
          body: "Отделяем вероятностную модель от строгих математических вычислений, автотестов и правил маршрутизации."
        },
        {
          step: "Шаг 3",
          title: "Передача в эксплуатацию",
          body: "Фиксируем воспроизводимую сборку, спецификацию протокола и проверочные прогоны, пригодные для независимого аудита."
        }
      ],
      experienceHeading: "Опыт и образование",
      experienceList: [
        {
          org: "Аксиома ИИ",
          role: "Разработчик ПО",
          period: "Июнь 2026 — настоящее время",
          detail: "Разработка программного обеспечения, системных сервисов и прикладных ИИ-модулей.",
          current: true
        },
        {
          org: "Sanofi",
          role: "Intern Public Affairs",
          period: "Ноябрь 2025 — апрель 2026",
          detail: "Анализ национальных программ здравоохранения, мониторинг регуляторной среды и подготовка аналитических справок."
        },
        {
          org: "Минпромторг России",
          role: "Аналитик (стажёр, ФКР ОПК)",
          period: "Июнь — август 2025",
          detail: "Стажировка по программе ФКР ОПК от НИУ ВШЭ: аналитика импортозамещения нитиноловых медизделий, технологических разрывов и реестра специалистов."
        },
        {
          org: "РАТИМИР",
          role: "Практикант-экономист",
          period: "Июль 2024",
          detail: "Автоматизация управленческой отчётности в Excel и анализ данных о полях и урожайности с применением ИИ."
        },
        {
          org: "НИУ ВШЭ · ВШБ",
          role: "Управление бизнесом",
          period: "Выпуск 2027 · Москва",
          detail: "Бакалавриат Высшей школы бизнеса; участник ПМЭФ; английский язык B2 для академического общения."
        }
      ],
      closeHeading: "Обсудим совместный проект или пилот",
      closeLead: "Отвечаю лично в Telegram и по почте. Демонстрация закрытых проектов доступна на встрече.",
      contactTelegram: "Написать в Telegram",
      contactEmail: "Отправить письмо",
      contactGithub: "Открыть профиль GitHub",
      downloadRu: "PDF-портфолио (RU)",
      downloadEn: "PDF Portfolio (EN)",
      privacyLink: "Конфиденциальность",
      locationNote: "Москва · гибрид и удалённое сотрудничество",
      copyright: "© 2026 Роман Ткачев",
      drawer: {
        close: "Закрыть разбор",
        problem: "Задача и контекст",
        architecture: "Архитектура и реализация",
        metrics: "Ключевые характеристики",
        stack: "Технологический стек",
        access: "Доступ и статус",
        prev: "Предыдущий",
        next: "Следующий"
      }
    },
    en: {
      skipLink: "Skip to content",
      brandName: "Roman Tkachev",
      nav: {
        systems: "Projects",
        research: "Research",
        work: "Formats",
        experience: "Experience",
        contact: "Contact"
      },
      ctaPrimary: "Discuss a project",
      ctaPdf: "Download PDF Dossier",
      heroRole: "Roman Tkachev — AI Systems & Applied R&D Engineer",
      heroTitle: "AI SYSTEMS & APPLIED R&D",
      heroLead: "6 shipped systems and studies: post-quantum Rust and Swift network transport, air-gapped neuro-symbolic DSS on Apple Silicon, live quantitative equities terminal, applied ML, macro modeling, and 0 → 1 products.",
      spotlightHeading: "Selected Projects",
      spotlightLead: "Six builds across applied AI, systems engineering, quantitative finance, macroeconomic modeling, and 0 → 1 product delivery.",
      openCaseLabel: "Open case study",
      openLiveLabel: "Open live terminal",
      openGithubLabel: "Open GitHub repository",
      researchHeading: "Research & Empirical Verification",
      researchLead: "Mathematical inductive biases, strict chronological splits, and reproducible empirical benchmarks.",
      researchCards: [
        {
          id: "polargate-proof",
          category: "Graph Sociophysics & ML",
          title: "PolarGate: Preserving Ideological Dispersion in Graph Rollouts",
          body: "Over 360 rollout steps Qwen2.5-1.5B-Instruct loses 33.4% of ground-truth dispersion (0.165 vs 0.247) to conformity drift; explicit Friedkin–Johnsen damping preserves 0.230 at 0.0032 ms per step and adds +0.1420 Macro-F1 across 528 held-out votes.",
          projectId: "polargate"
        },
        {
          id: "macro-proof",
          category: "Macro-Fiscal Modeling",
          title: "Closed 2026–2030 Macro-Fiscal Forecast Across 120 Micro-Cohorts",
          body: "A seven-block system coupling external trade, federal budget, and liquid NWF reserves with endogenous monetary and fiscal reaction loops across four scenarios over 48 months.",
          projectId: "russia-macro"
        },
        {
          id: "moex-proof",
          category: "Quantitative Equities",
          title: "Automated Screener for 510 MOEX & 247 SPBEX Instruments",
          body: "Parses IFRS/RAS statements for 31 issuers across 8 sectors, verifies accounting identities, adjusts multi-class share caps, and checks SHA-256 bundle integrity.",
          projectId: "moex"
        }
      ],
      workHeading: "Collaboration Formats for Founders & Teams",
      workLead: "Structuring complex R&D and product challenges into verifiable engineering systems ready for real-world deployment.",
      workTracks: [
        {
          index: "01",
          title: "On-Premise AI & Deterministic Analytics",
          body: "Local execution on Apple Silicon or dedicated GPUs with formal mathematical verification, zero external cloud leakage, and cross-document numerical parity.",
          deliverable: "Deliverable: working software stack, verification suite, deployment docs"
        },
        {
          index: "02",
          title: "0 → 1 Product Engineering & Infrastructure",
          body: "End-to-end delivery from Mom Test discovery and hypothesis testing to backend APIs, native macOS/Android clients, PostgreSQL schemas, and custom transport.",
          deliverable: "Deliverable: validated product scope and production-ready architecture"
        },
        {
          index: "03",
          title: "Applied R&D, Quantitative & Macro Modeling",
          body: "Reproducible market data collectors, multi-sheet IFRS engines, scenario stress testing, and out-of-time validated ML models.",
          deliverable: "Deliverable: deterministic scripts, models, and technical memorandum"
        }
      ],
      processSteps: [
        {
          step: "Step 1",
          title: "Scope & Hard Constraints",
          body: "Define measurable acceptance criteria, security boundaries, and latency or unit-economics budgets before writing application code."
        },
        {
          step: "Step 2",
          title: "Deterministic Core First",
          body: "Separate probabilistic generation from exact formulas, formal constraints, automated tests, and routing logic."
        },
        {
          step: "Step 3",
          title: "Verified Handoff",
          body: "Ship reproducible builds, protocol specifications, and benchmark suites designed for independent review."
        }
      ],
      experienceHeading: "Experience & Education",
      experienceList: [
        {
          org: "Axioma AI",
          role: "Software Developer",
          period: "Jun 2026 — Present",
          detail: "Software engineering, backend systems, and applied AI modules.",
          current: true
        },
        {
          org: "Sanofi",
          role: "Public Affairs Intern",
          period: "Nov 2025 — Apr 2026",
          detail: "Analysis of national healthcare programs, regulatory monitoring, and structured briefing decks for management."
        },
        {
          org: "Ministry of Industry & Trade",
          role: "Analyst Intern (FKR OPK)",
          period: "Jun — Aug 2025",
          detail: "FKR OPK internship (nominated by HSE University): analysis of nitinol medical device import substitution, technological gaps, and specialist registry concept."
        },
        {
          org: "RATIMIR",
          role: "Economist Intern",
          period: "Jul 2024",
          detail: "Automated managerial Excel reporting and applied AI analysis to agricultural field and yield datasets."
        },
        {
          org: "HSE Graduate School of Business",
          role: "B.Sc. Business Management",
          period: "Class of 2027 · Moscow",
          detail: "Undergraduate student combining coursework with engineering and R&D; SPIEF participant; English B2."
        }
      ],
      closeHeading: "Start a Conversation or Pilot",
      closeLead: "Direct communication via Telegram or email. Live walkthroughs of private systems are available on call.",
      contactTelegram: "Message on Telegram",
      contactEmail: "Send Email",
      contactGithub: "View GitHub Profile",
      downloadRu: "PDF Portfolio (RU)",
      downloadEn: "PDF Portfolio (EN)",
      privacyLink: "Privacy & Disclosure",
      locationNote: "Moscow · remote & hybrid collaboration",
      copyright: "© 2026 Roman Tkachev",
      drawer: {
        close: "Close case study",
        problem: "Problem & Context",
        architecture: "Architecture & Build",
        metrics: "Key Highlights",
        stack: "Technology Stack",
        access: "Availability",
        prev: "Previous",
        next: "Next"
      }
    }
  },
  projects: [
    {
      id: "veil-h2",
      flagship: true,
      order: "01",
      track: "systems",
      visibility: "private",
      publicUrl: "",
      liveUrl: "",
      ru: {
        name: "Veil-H2",
        category: "Системы и криптография",
        statusLabel: "Закрытый проект · NDA",
        shortDesc: "Защищённый кроссплатформенный сетевой транспорт с постквантовой криптографией и нативными клиентами для Android и macOS.",
        problem: "Классические сетевые туннели уязвимы для фильтрации трафика, а прикладные прокси не изолируют системные утечки устройства и не рассчитаны на долгосрочную постквантовую защиту.",
        architecture: "Кроссплатформенная система защищённого транспорта с серверной и клиентской частями, нативными приложениями для Android и macOS и автоматизированным контуром нагрузочного тестирования и проверок безопасности. Внутренняя архитектура протокола и исходный код закрыты.",
        metrics: [
          { value: "3 платформы", label: "серверная инфраструктура, Android и macOS" },
          { value: "Постквантовый", label: "профиль долгосрочной защиты трафика" },
          { value: "L3 туннель", label: "изоляция всего трафика ОС без утечек" }
        ],
        stack: ["Rust", "Java", "Swift", "C", "macOS", "Android"],
        accessNote: "Закрытый проект под NDA. Архитектура и исходный код не раскрываются публично; демонстрация продукта возможна на встрече."
      },
      en: {
        name: "Veil-H2",
        category: "Systems & Cryptography",
        statusLabel: "Private project · NDA",
        shortDesc: "Cross-platform post-quantum secure network transport with native Android and macOS clients and automated security testing.",
        problem: "Standard tunnels are exposed to deep packet filtering, while application-layer proxies leave OS traffic outside full device isolation and lack post-quantum forward resistance.",
        architecture: "End-to-end encrypted transport platform spanning server infrastructure, native Android and macOS applications, and continuous security and load testing. Internal protocol design and source code are proprietary.",
        metrics: [
          { value: "3 platforms", label: "server infrastructure, native Android & macOS" },
          { value: "Post-Quantum", label: "long-term traffic protection profile" },
          { value: "L3 tunnel", label: "OS-wide traffic isolation & leak protection" }
        ],
        stack: ["Rust", "Java", "Swift", "C", "macOS", "Android"],
        accessNote: "Private project under NDA. Architecture and source code are not publicly disclosed; product demo available on request."
      }
    },
    {
      id: "logos",
      flagship: true,
      order: "02",
      track: "ai",
      visibility: "private",
      publicUrl: "",
      liveUrl: "",
      ru: {
        name: "СППР «Логос»",
        category: "Локальный ИИ",
        statusLabel: "Закрытый проект · NDA",
        shortDesc: "Автономная локальная система поддержки принятия решений для Apple Silicon для финансового контроллинга и моделирования без передачи данных в облако.",
        problem: "Облачные чат-боты допускают арифметические ошибки в таблицах и неприемлемы при работе с закрытой корпоративной отчётностью и режимом коммерческой тайны.",
        architecture: "Полностью автономный программный комплекс для локальных рабочих станций Apple Silicon: обработка корпоративной отчётности, детерминированный расчёт многолистовых финансовых моделей и сквозная сверка числового паритета между Excel, Word, Markdown и презентациями. Внутренняя архитектура и код закрыты.",
        metrics: [
          { value: "100% локально", label: "автономный air-gap на Apple Silicon без облака" },
          { value: "4 формата", label: "единый числовой паритет: Excel, Word, MD, слайды" },
          { value: "Детерминизм", label: "финансовые расчёты и сверки вне языковой модели" }
        ],
        stack: ["Python", "C", "Apple Silicon", "OpenXML", "IFRS"],
        accessNote: "Закрытый проект под NDA. Архитектура и исходный код не раскрываются публично; демонстрация результатов доступна на встрече."
      },
      en: {
        name: "Logos DSS",
        category: "Local AI",
        statusLabel: "Private project · NDA",
        shortDesc: "Air-gapped local decision support platform for Apple Silicon built for corporate financial controlling and deterministic modeling with zero cloud data transfer.",
        problem: "Cloud LLMs hallucinate spreadsheet math and break data confidentiality when processing internal corporate financial statements.",
        architecture: "Fully offline software platform running on Apple Silicon workstations: structured corporate reporting ingestion, deterministic multi-sheet financial modeling, and automated numerical parity verification across Excel, Word, Markdown, and slide decks. Internal architecture and code are proprietary.",
        metrics: [
          { value: "100% local", label: "air-gapped Apple Silicon execution, zero cloud" },
          { value: "4 formats", label: "cross-document parity: Excel, Word, MD, decks" },
          { value: "Deterministic", label: "exact financial math isolated from LLM" }
        ],
        stack: ["Python", "C", "Apple Silicon", "OpenXML", "IFRS"],
        accessNote: "Private project under NDA. Internal architecture and source code are not publicly disclosed; output demo available on request."
      }
    },
    {
      id: "moex",
      flagship: true,
      order: "03",
      track: "research",
      visibility: "public",
      publicUrl: "https://github.com/Co4an/moex-spb-quant-advisor",
      liveUrl: "https://co4an.github.io/moex-spb-quant-advisor/",
      ru: {
        name: "MOEX & SPBEX Quant Advisor",
        category: "Количественные финансы",
        statusLabel: "Публичный код",
        shortDesc: "Открытый количественный терминал по российским акциям: парсинг МСФО/РСБУ, сверка бухгалтерских тождеств, живая ставка ЦБ РФ и 3 горизонта инвестирования.",
        problem: "Розничные и частные аналитики работают с разрозненными таблицами без единой проверки тождеств EV и FCF, без поправки на привилегированные/неторгуемые классы акций и без макросценарного моделирования ставки ЦБ.",
        architecture: "Детерминированный пайплайн на стандартной библиотеке Python и веб-интерфейс терминала: сбор котировок по 510 бумагам TQBR Московской биржи и 247 инструментам СПБ Биржи, считывание ключевой ставки и курсов валют Банка России, нормализация отчётности МСФО и РСБУ по 31 ведущему эмитенту 8 секторов, автоматическая проверка бухгалтерских тождеств с поправкой на неторгуемые классы акций, очистка 120 новостных катализаторов, пятифакторный Z-скоринг на 3 горизонта (1–3М, 6–12М, 1–3Г), модельные портфели и контроль целостности по SHA-256.",
        metrics: [
          { value: "757 бумаг", label: "510 Мосбиржа TQBR + 247 СПБ Биржа" },
          { value: "31 эмитент", label: "нормализация МСФО и РСБУ по 8 секторам" },
          { value: "3 горизонта", label: "пятифакторный скоринг, портфели и SHA-256" }
        ],
        stack: ["Python", "JavaScript", "MOEX ISS", "CBR API", "IFRS/RAS", "GitHub Pages"],
        accessNote: "Открытый репозиторий и работающий дашборд на GitHub Pages."
      },
      en: {
        name: "MOEX & SPBEX Quant Advisor",
        category: "Quantitative Equities",
        statusLabel: "Public repository",
        shortDesc: "Public quantitative equity pipeline and live terminal covering 757 MOEX/SPBEX listings, IFRS/RAS accounting checks, live CBR rates, and 3-horizon scoring.",
        problem: "Fragmented equity data sources overlook multi-class share adjustments, accounting consistency checks, and interest-rate sensitivity across shifting monetary policy regimes.",
        architecture: "Zero-dependency Python pipeline plus interactive web terminal: pulls 510 MOEX TQBR stocks and 247 SPBEX instruments, ingests live Bank of Russia key rate and FX series, reconciles IFRS/RAS accounting identities across 31 issuers in 8 sectors, deduplicates 120 news triggers, runs 5-factor Z-scoring across 1–3M, 6–12M, and 1–3Y horizons, builds lot-exact portfolios, and validates SHA-256 provenance manifests.",
        metrics: [
          { value: "757 listings", label: "510 MOEX TQBR + 247 SPB Exchange" },
          { value: "31 issuers", label: "IFRS/RAS reconciliation across 8 sectors" },
          { value: "3 horizons", label: "5-factor scoring, model portfolios & SHA-256" }
        ],
        stack: ["Python", "JavaScript", "MOEX ISS", "CBR API", "IFRS/RAS", "GitHub Pages"],
        accessNote: "Public GitHub repository and live interactive GitHub Pages terminal."
      }
    },
    {
      id: "polargate",
      flagship: true,
      order: "04",
      track: "research",
      visibility: "private",
      publicUrl: "",
      liveUrl: "",
      ru: {
        name: "PolarGate",
        category: "Прикладное ML и социофизика",
        statusLabel: "Закрытое исследование",
        shortDesc: "Графовая нейросетевая модель коллективной динамики и прогнозирования голосований с явным демпфированием Фридкина–Джонсена.",
        problem: "Стандартные графовые модели и компактные LLM-агенты сглаживают поляризацию мнений и теряют резкие переходы динамики на длинных горизонтах.",
        architecture: "Научно-исследовательская модель прогнозирования групповой динамики с проверкой без утечки данных во времени. Удерживает дисперсию мнений на уровне 0,230 против эталонных 0,247 (тогда как Qwen2.5-1.5B-Instruct теряет 33,4% до 0,165) при задержке расчёта шага 0,0032 мс и приросте +0,1420 Macro-F1 на 528 контрольных голосованиях Конгресса США. Исходный код закрыт.",
        metrics: [
          { value: "+0,1420", label: "прирост Macro-F1 (0,5731 против 0,4311 у Unsigned GNN)" },
          { value: "0,230 / 0,247", label: "удержание дисперсии (против 0,165 у Qwen2.5-1.5B)" },
          { value: "0,0032 мс", label: "задержка шага симуляции (против 45,92 мс у LLM)" }
        ],
        stack: ["PyTorch", "Python", "LaTeX"],
        accessNote: "Закрытый исследовательский проект. Архитектура и код не раскрываются публично; обзор результатов доступен по запросу."
      },
      en: {
        name: "PolarGate",
        category: "Applied ML & Graph Dynamics",
        statusLabel: "Private research",
        shortDesc: "Graph neural forecasting model for collective dynamics and roll-call polarization with explicit Friedkin–Johnsen damping.",
        problem: "Standard graph models and compact LLM agents smooth out opinion polarization and collapse variance over multi-step rollouts.",
        architecture: "Research forecasting architecture evaluated strictly out-of-time across historical roll calls. Preserves opinion dispersion at 0.230 vs 0.247 ground truth (while Qwen2.5-1.5B-Instruct drops 33.4% to 0.165), runs at 0.0032 ms/step latency, and delivers a +0.1420 Macro-F1 gain across 528 held-out 117th U.S. Congress votes. Architecture details and source code are private.",
        metrics: [
          { value: "+0.1420", label: "Macro-F1 gain (0.5731 vs 0.4311 Unsigned GNN)" },
          { value: "0.230 / 0.247", label: "dispersion preservation (vs 0.165 Qwen2.5-1.5B)" },
          { value: "0.0032 ms", label: "step inference latency (vs 45.92 ms LLM baseline)" }
        ],
        stack: ["PyTorch", "Python", "LaTeX"],
        accessNote: "Private research project. Architecture and source code are not publicly disclosed; findings overview on request."
      }
    },
    {
      id: "russia-macro",
      flagship: true,
      order: "05",
      track: "research",
      visibility: "private",
      publicUrl: "",
      liveUrl: "",
      ru: {
        name: "Макроэкономическая модель РФ",
        category: "Макроэкономика и бюджет",
        statusLabel: "Закрытое исследование",
        shortDesc: "Замкнутая 48-месячная сценарная макроэкономическая и бюджетная модель России (2026–2030) на 120 микрокогортах.",
        problem: "Линейные прогнозы отдельных макропоказателей игнорируют обратные связи между курсом рубля, инфляцией, ключевой ставкой и ликвидными резервами бюджета на среднесрочном горизонте.",
        architecture: "Семиблочная модель сопрягает внешний торговый баланс, федеральный бюджет и ликвидную часть ФНБ с тремя эндогенными контурами реакции денежно-кредитной и бюджетной политики в четырёх макросценариях на горизонте 48 месяцев (декабрь 2026 — ноябрь 2030). Расчётный код и калибровочные данные закрыты.",
        metrics: [
          { value: "48 мес.", label: "горизонт прогноза (декабрь 2026 — ноябрь 2030)" },
          { value: "120", label: "микрокогорт в семиблочной замкнутой системе" },
          { value: "4 сценария", label: "эндогенные траектории ставки, ИПЦ, курса и ФНБ" }
        ],
        stack: ["Python", "NumPy", "LaTeX"],
        accessNote: "Закрытый исследовательский проект. Архитектура расчёта и код не раскрываются публично; обзор сценариев доступен по запросу."
      },
      en: {
        name: "Russia Macro Model (2026–2030)",
        category: "Macroeconomic & Fiscal Modeling",
        statusLabel: "Private research",
        shortDesc: "Closed 48-month macroeconomic and fiscal scenario model across 120 micro-cohorts coupling external trade, budget, and NWF reserves.",
        problem: "Single-equation macro forecasts miss feedback loops linking FX rates, CPI inflation, policy rates, and liquid fiscal buffers over multi-year horizons.",
        architecture: "Seven-block dynamical system coupling external trade balance, federal budget execution, and liquid National Wealth Fund reserves with three endogenous monetary and fiscal reaction loops across four scenarios over 48 months (Dec 2026 — Nov 2030). Model code and calibration datasets are private.",
        metrics: [
          { value: "48 mo", label: "forecast horizon (Dec 2026 — Nov 2030)" },
          { value: "120", label: "micro-cohorts in a seven-block coupled system" },
          { value: "4 scenarios", label: "endogenous rate, CPI, FX & fiscal reserve paths" }
        ],
        stack: ["Python", "NumPy", "LaTeX"],
        accessNote: "Private research project. Model code is not publicly disclosed; scenario walkthrough available on request."
      }
    },
    {
      id: "advexo",
      flagship: true,
      order: "06",
      track: "products",
      visibility: "private",
      publicUrl: "",
      liveUrl: "",
      ru: {
        name: "Advexo",
        category: "Продукты",
        statusLabel: "Приватный продукт",
        shortDesc: "AI-SMM-платформа для Telegram (веб-кабинет, бот и мобильный клиент), прошедшая полный продуктовый цикл от проблемных интервью до релиза.",
        problem: "Владельцы малого бизнеса и e-commerce тратят 2–3 часа на каждый пост и сталкиваются с шаблонными текстами, не попадающими в голос бренда.",
        architecture: "Продуктовая платформа для автоматизации контент-маркетинга в Telegram с сохранением голоса бренда, веб-кабинетом, ботом и нативным Android-клиентом. Проведён полный продуктовый цикл от проблемных интервью по методике Mom Test и формулировки JTBD до проверки продуктовых гипотез и выпуска MVP. Внутренняя архитектура и код закрыты.",
        metrics: [
          { value: "20 интервью", label: "проблемных кастдев-интервью по методике Mom Test" },
          { value: "0 → 1 MVP", label: "полный продуктовый цикл от гипотез до релиза" },
          { value: "3 клиента", label: "веб-кабинет, Telegram-бот и мобильный клиент Android" }
        ],
        stack: ["Python", "PostgreSQL", "Kotlin", "Telegram"],
        accessNote: "Приватный продукт (Advexo-SMM). Внутренняя архитектура и исходный код не раскрываются; демонстрация доступна по запросу."
      },
      en: {
        name: "Advexo",
        category: "Products",
        statusLabel: "Private product",
        shortDesc: "AI-SMM platform for Telegram with web dashboard, bot, and mobile client, validated across 20 Mom Test discovery interviews.",
        problem: "Small businesses spend 2–3 hours per post and reject generic AI copy that misses their brand tone of voice.",
        architecture: "Product platform automating Telegram content workflows while preserving brand tone of voice across a web dashboard, bot interface, and native Android app. Completed end-to-end discovery from 20 Mom Test customer interviews and JTBD framing through hypothesis validation and MVP delivery. Internal architecture and code are proprietary.",
        metrics: [
          { value: "20 interviews", label: "Mom Test customer discovery sessions" },
          { value: "0 → 1 MVP", label: "end-to-end product validation and delivery" },
          { value: "3 surfaces", label: "web dashboard, Telegram bot, and Android client" }
        ],
        stack: ["Python", "PostgreSQL", "Kotlin", "Telegram"],
        accessNote: "Private product (Advexo-SMM). Internal architecture and source code are not publicly disclosed; walkthrough available on request."
      }
    }
  ]
};
