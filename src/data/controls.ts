export const controls = [
  {
    action: { en: "Combat Mode", ru: "Боевой режим" },
    key: "Y",
    description: {
      en: "Enables the combat stack: style detection, lock-on context, attack flow, HUD sync, and sorcery-ready state.",
      ru: "Включает боевой стек: определение стиля, lock-on контекст, цепочки атак, HUD-синхронизацию и готовность колдовства."
    }
  },
  {
    action: { en: "Light / Heavy attack", ru: "Лёгкая / тяжёлая атака" },
    key: "Tap / hold LMB",
    description: {
      en: "Release before 5 ticks for a light attack; hold for 5 ticks to promote the same press into your style's heavy attack. The server validates and can buffer either action near cooldown end.",
      ru: "Отпустите раньше 5 тиков для лёгкой атаки; удерживайте 5 тиков, чтобы тот же ввод стал тяжёлой атакой текущего стиля. Сервер проверяет и может буферизовать оба действия перед концом перезарядки."
    }
  },
  {
    action: { en: "Block / Parry", ru: "Блок / парирование" },
    key: "Shift",
    description: {
      en: "Defensive read. Guard stress, stability and reaction profiles decide whether the result is block, slide, break or parry.",
      ru: "Защитное чтение атаки. Guard stress, stability и reaction-профили решают: блок, сдвиг, пробитие или парирование."
    }
  },
  {
    action: { en: "Dodge", ru: "Уклонение" },
    key: "Ctrl",
    description: {
      en: "Server-owned movement burst with cooldown and charge recovery. Used for spacing and survival, not free invulnerability.",
      ru: "Серверный рывок с cooldown и восстановлением зарядов. Нужен для дистанции и выживания, не как бесплатная неуязвимость."
    }
  },
  {
    action: { en: "Signature technique", ru: "Сигнатурная техника" },
    key: "Tap / hold Tab",
    description: {
      en: "Tap to execute the selected technique. Hold for at least 200 ms to open the selector. Signatures spend Style points, not SE.",
      ru: "Нажмите Tab для применения выбранной техники. Удержание Tab от 200 мс открывает выбор. Расходуется шкала стиля."
    }
  },
  {
    action: { en: "Sorcery Mode", ru: "Режим колдовства" },
    key: "R",
    description: {
      en: "Switches the input layer from weapon-first combat to sorcery slots. Control mode can be hold or toggle.",
      ru: "Переключает ввод с оружейного боя на слоты колдовства. Режим управления может быть hold или toggle."
    }
  },
  {
    action: { en: "Primary slot", ru: "Слот Primary" },
    key: "R + LMB",
    description: {
      en: "Casts the sorcery's Primary ability while in sorcery mode.",
      ru: "Применяет способность Primary колдовства в режиме колдовства."
    }
  },
  {
    action: { en: "Secondary slot", ru: "Слот Secondary" },
    key: "R + RMB",
    description: {
      en: "Casts the sorcery's Secondary ability.",
      ru: "Применяет способность Secondary колдовства."
    }
  },
  {
    action: { en: "Utility slot", ru: "Слот Utility" },
    key: "R + Shift",
    description: {
      en: "Casts the sorcery's Utility ability.",
      ru: "Применяет способность Utility колдовства."
    }
  },
  {
    action: { en: "Supportive 1 slot", ru: "Слот Supportive 1" },
    key: "Z",
    description: {
      en: "Casts the sorcery's first Supportive ability.",
      ru: "Применяет первую способность Supportive колдовства."
    }
  },
  {
    action: { en: "Supportive 2 slot", ru: "Слот Supportive 2" },
    key: "X",
    description: {
      en: "Casts the sorcery's second Supportive ability.",
      ru: "Применяет вторую способность Supportive колдовства."
    }
  },
  {
    action: { en: "Special slot", ru: "Слот Special" },
    key: "G",
    description: {
      en: "Casts the sorcery's Special ability (often a toggle).",
      ru: "Применяет способность Special колдовства (часто переключатель)."
    }
  },
  {
    action: { en: "Awakening", ru: "Пробуждение" },
    key: "V",
    description: {
      en: "Activates the sorcery's Awakening once its meter reaches 100%. Temporarily empowers the kit.",
      ru: "Активирует Пробуждение колдовства при заполнении шкалы до 100%. Временно усиливает набор."
    }
  },
  {
    action: { en: "Draw / sheathe katana", ru: "Достать / убрать катану" },
    key: "H",
    description: {
      en: "Toggles weapon presentation and style readiness for katana-based combat.",
      ru: "Переключает визуальное состояние оружия и готовность катана-стилей."
    }
  },
  {
    action: { en: "Lock-on", ru: "Захват цели" },
    key: "Middle mouse",
    description: {
      en: "Tracks a target for camera, preview damage, target-aware sorcery and combat context.",
      ru: "Отслеживает цель для камеры, preview-урона, target-aware колдовства и боевого контекста."
    }
  },
  {
    action: { en: "Open player stats", ru: "Открыть статистику" },
    key: "Configured key",
    description: {
      en: "Shows SE, mastery, style, settings and progression state.",
      ru: "Показывает SE, мастерство, стиль, настройки и прогресс."
    }
  }
];
