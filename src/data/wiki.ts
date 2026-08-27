import type { WikiArticle } from "../types";

export const wikiArticles: WikiArticle[] = [
  // ── OVERVIEW ────────────────────────────────────────────────────────────────
  {
    id: "what-is-kbc",
    section: "overview",
    title: { en: "What is Kagurabachi Craft?", ru: "Что такое Kagurabachi Craft?" },
    summary: {
      en: "A NeoForge 1.21.1 combat mod inspired by Kagurabachi, with weapon styles, hand-to-hand combat, signature techniques and sorcery.",
      ru: "Боевой мод по манге Кагурабати для NeoForge 1.21.1. В моде есть оружейные стили, рукопашный бой, фирменные приёмы и колдовство."
    },
    body: [
      {
        en: "Kagurabachi Craft changes Minecraft combat. It adds combat mode, weapon and hand-to-hand styles, signature techniques, parries, clashes, Stability, stamina and block destruction.",
        ru: "Kagurabachi Craft меняет боевую систему Minecraft. Мод добавляет боевой режим, оружейные и рукопашные стили, фирменные приёмы, парирование, столкновения атак, стойкость, выносливость и разрушение блоков."
      },
      {
        en: "The mod also includes Enchanted Blades from the manga and many standalone sorceries built around teleportation, illusions, chains, fire, lightning and summons. A survival mode is in development.",
        ru: "В моде также есть зачарованные клинки из манги и множество отдельных колдовств: телепортация, иллюзии, цепи, огонь, молния и призывы. Режим выживания находится в разработке."
      },
      {
        en: "Major combat NPCs react to distance, threats, position, defence and cooldowns. Cascade and Quasar provide their visual effects, while Veil adds distortion and post-processing.",
        ru: "Основные боевые NPC учитывают дистанцию, угрозы, положение, защиту и перезарядки. Cascade и Quasar отвечают за визуальные эффекты, а Veil — за искажения и постобработку."
      }
    ],
    tags: ["overview", "combat", "sorcery"]
  },

  {
    id: "styles-overview",
    section: "overview",
    title: { en: "Fighting styles, not just blades", ru: "Боевые стили, а не только клинки" },
    summary: {
      en: "Combat has five equipment-driven styles: Sword, Hand, Dual Katana, Sheathed Katana and Trident.",
      ru: "В бою пять стилей, зависящих от экипировки: один меч, рукопашный бой, две катаны, катана в ножнах и трезубец."
    },
    body: [
      {
      en: "Your weapon determines the active style automatically. This changes HP and Stability damage, guard pressure, block strength, parry timing, reach, attack arcs, target count, heavy attacks and which signature techniques are available. The Fighting Styles section lists the exact values.",
        ru: "Оружие автоматически определяет активный стиль. От него зависят урон по здоровью и стойкости, давление на блок, сила защиты, окно парирования, дальность, ширина атак, число целей, тяжёлые атаки и доступные фирменные приёмы. Точные значения собраны в разделе «Боевые стили»."
      }
    ],
    tags: ["styles", "hand-to-hand", "combat"]
  },

  // ── QUICKSTART ──────────────────────────────────────────────────────────────
  {
    id: "first-steps",
    section: "quickstart",
    title: { en: "First five minutes", ru: "Первые пять минут" },
    summary: {
      en: "Enter combat mode, learn spacing and styles, then layer sorcery on top.",
      ru: "Включите боевой режим, освойте дистанцию и выбранный стиль, а затем подключайте колдовство."
    },
    body: [
      {
      en: "Choose an origin, then press Y to enter combat mode. LMB attacks, Shift blocks and parries, and Ctrl dodges. Press R for sorcery controls and Tab for signature techniques.",
      ru: "Выберите происхождение и нажмите Y, чтобы войти в боевой режим. ЛКМ отвечает за атаки, Shift — за блок и парирование, Ctrl — за уклонение. R включает управление колдовством, а Tab применяет фирменные приёмы."
      },
      {
        en: "Learn one style and its rhythm before piling on sorcery - combat fundamentals carry every fight.",
      ru: "Сначала разберитесь с атаками, блоком и уклонением выбранного стиля. После этого подключайте колдовство."
      }
    ],
    tags: ["quickstart", "tutorial", "beginner"]
  },

  {
    id: "se-system",
    section: "quickstart",
    title: { en: "Spirit Energy (SE)", ru: "Духовная энергия (SE)" },
    summary: {
      en: "SE powers active sorcery abilities and regenerates over time.",
      ru: "SE расходуется на активные способности колдовства и со временем восстанавливается."
    },
    body: [
      {
        en: "Sustained abilities spend SE continuously, while others charge a fixed amount when activated. Check each ability for its exact cost. Administrators can set the resource for testing with /kbc set currentSE <value> [targets].",
        ru: "Длительные способности постоянно расходуют SE, а другие списывают фиксированную стоимость при активации. Точная цена указана в описании каждого приёма. Для тестирования администратор может использовать /kbc set currentSE <value> [targets]."
      }
    ],
    tags: ["se", "energy", "resource", "quickstart"]
  },

  {
    id: "sorcery-mode",
    section: "quickstart",
    title: { en: "Sorcery mode & slots", ru: "Режим колдовства и слоты" },
    summary: {
      en: "Use R to enter sorcery mode. Every sorcery has six slots bound to the same keys.",
      ru: "R включает режим колдовства. У каждого колдовства шесть слотов с одинаковыми клавишами."
    },
    body: [
      {
        en: "Every sorcery uses the same bindings: Primary = R + LMB, Secondary = R + RMB, Utility = R + Shift, Support 1 = Z, Support 2 = X and Special = G. Only the abilities assigned to those slots change.",
        ru: "Все колдовства используют одинаковые клавиши: основной слот — R + ЛКМ, дополнительный — R + ПКМ, вспомогательный — R + Shift, поддержка 1 — Z, поддержка 2 — X, особый — G. Меняются только способности в этих слотах."
      },
      {
        en: "Choose how R behaves with /kbc settings sorceryMode toggle or /kbc settings sorceryMode hold. Toggle mode stays active after R is released; hold mode does not.",
        ru: "Выберите поведение R командой /kbc settings sorceryMode toggle или /kbc settings sorceryMode hold. В режиме переключения колдовство остаётся активным после отпускания R, а в режиме удержания — нет."
      }
    ],
    tags: ["sorcery", "controls", "slots", "quickstart"]
  },

  // ── COMBAT ──────────────────────────────────────────────────────────────────
  {
    id: "combat-basics",
    section: "combat",
    title: { en: "Combat basics", ru: "Основы боя" },
    summary: {
      en: "Combat rewards timing, distance control and deliberate attacks.",
      ru: "В бою важны точный момент, контроль дистанции и осмысленные атаки."
    },
    body: [
      {
        en: "Press Y to enable combat controls and the HUD. Tap LMB for a light attack or hold it for 5 ticks to use your style's heavy attack. An input just before the cooldown ends may be queued. Pressing Shift attempts one parry, then continues as a block while held.",
        ru: "Нажмите Y, чтобы включить боевое управление и интерфейс. Коротко нажмите ЛКМ для лёгкой атаки или удерживайте её 5 тиков для тяжёлой атаки текущего стиля. Нажатие перед концом перезарядки может встать в очередь. Shift сначала выполняет одну попытку парирования, а затем работает как блок, пока клавиша удерживается."
      }
    ],
    tags: ["combat", "attack", "basics"]
  },

  {
    id: "resources",
    section: "combat",
    title: { en: "HP is not the only way to lose", ru: "HP — не единственный способ проиграть" },
    summary: {
      en: "Stability, guard stress, fatigue, adrenaline and Style Points all affect a duel.",
      ru: "На исход дуэли влияют стойкость, нагрузка на защиту, усталость, адреналин и очки стиля."
    },
    body: [
      {
        en: "Drain Stability to stagger an opponent and create an opening. Repeated blocking builds guard stress, while repeating costly actions builds fatigue. Adrenaline briefly helps you survive under pressure. Varied combat earns temporary Style Points for signature techniques; Style Mastery is separate, permanent progression.",
        ru: "Истощите стойкость противника, чтобы ошеломить его и открыть для атаки. Постоянный блок накапливает нагрузку на защиту, а повторение затратных действий — усталость. Адреналин ненадолго помогает выжить под давлением. Разнообразный бой приносит временные очки стиля для фирменных приёмов; мастерство стиля развивается отдельно и сохраняется."
      }
    ],
    tags: ["stability", "guard", "fatigue", "adrenaline", "combat"]
  },

  {
    id: "parry-system",
    section: "combat",
    title: { en: "Block, parry and clash", ru: "Блок, парирование и столкновение" },
    summary: {
      en: "Block to reduce damage, parry with precise timing to stop it, and clash when two attacks meet.",
      ru: "Блок снижает урон, своевременное парирование отменяет его, а две встречные атаки могут столкнуться."
    },
    body: [
      {
        en: "Pressing Shift creates one parry attempt; after that brief window, holding Shift continues as a block. Release and press it again for another parry. Blocking reduces damage according to your style and builds guard stress under repeated hits. A clash occurs when two compatible attacks meet before either one lands.",
        ru: "Нажатие Shift даёт одну попытку парирования; после короткого окна удержание продолжает работать как блок. Для следующей попытки отпустите и снова нажмите Shift. Блок снижает урон в зависимости от стиля и накапливает нагрузку на защиту под серией ударов. Столкновение возникает, когда две совместимые атаки встречаются раньше, чем одна из них попадёт в цель."
      }
    ],
    tags: ["parry", "block", "clash", "combat", "timing"]
  },

  {
    id: "heavy-attacks",
    section: "combat",
    title: { en: "Light-to-heavy input", ru: "Переход от лёгкой к тяжёлой атаке" },
    summary: {
      en: "Release LMB early for a light attack; keep holding for a heavy attack.",
      ru: "Быстро отпустите ЛКМ для лёгкой атаки или продолжайте удерживать её для тяжёлой."
    },
    body: [
      {
        en: "Release LMB before 5 ticks for a light attack. Hold it for 5 ticks to use the heavy attack of your current style; releasing afterward does not trigger a second move. Sword, Hand, Dual Katana, Sheathed Katana and Trident each have different heavy and dash attacks.",
        ru: "Отпустите ЛКМ раньше 5 тиков для лёгкой атаки. Удерживайте её 5 тиков для тяжёлой атаки текущего стиля; последующее отпускание не запустит второй приём. У стилей одного меча, рукопашного боя, двух катан, катаны в ножнах и трезубца разные тяжёлые атаки и атаки в рывке."
      }
    ],
    tags: ["heavy", "combat", "input", "style"]
  },

  {
    id: "signature-techniques",
    section: "combat",
    title: { en: "Signature techniques", ru: "Фирменные приёмы" },
    summary: {
      en: "Tap Tab to use the selected technique; hold it for 200 ms to choose another. Signature techniques spend Style Points, not SE.",
      ru: "Нажмите Tab, чтобы применить выбранный приём, или удерживайте 200 мс, чтобы выбрать другой. Фирменные приёмы расходуют очки стиля, а не SE."
    },
    body: [
      {
        en: "The current set is Iai, Execution, Freedom Style and Cigarette Cross Slash. Each requires particular equipment and has its own Style Point cost and cooldown. The Signature Techniques section lists the exact controls, requirements and values. For testing, administrators can unlock them with /kbc add signature.",
        ru: "Сейчас доступны Иай, Казнь, Свободный стиль и Крестовый сигаретный разрез. Для каждого приёма нужны определённое снаряжение, очки стиля и время на перезарядку. Точные требования и значения собраны в разделе «Фирменные приёмы». Для тестирования администратор может открыть их командой /kbc add signature."
      }
    ],
    tags: ["signature", "technique", "tab", "combat"]
  },

  {
    id: "backstab",
    section: "combat",
    title: { en: "Backstab bonus", ru: "Бонус за удар в спину" },
    summary: {
      en: "A global positional rule: player-attributed damage is increased when the target is facing away.",
      ru: "Глобальное позиционное правило: урон игрока повышается, когда цель отворачивается от атакующего."
    },
    body: [
      {
      en: "When kbcBackstabDamage is enabled, a hit from the target's rear arc multiplies final incoming damage by 1 + kbcBackstabDamageModifier / 100. The default modifier is 25%, so a 10-damage hit becomes 12.5. Eligible combat targets also grant 200 Style Points for the backstab.",
        ru: "Когда включено правило kbcBackstabDamage, попадание из задней полусферы цели умножает итоговый получаемый урон на 1 + kbcBackstabDamageModifier / 100. По умолчанию бонус равен 25%, поэтому удар на 10 урона становится 12,5. Подходящая боевая цель также даёт 200 очков стиля за удар в спину."
      },
      {
        en: "Freedom Style has a separate rear finisher that deals 14 damage and ignores Stability. It is not part of the global backstab multiplier.",
        ru: "У Свободного стиля есть отдельный удар со спины на 14 урона, игнорирующий стойкость. Он не зависит от общего множителя урона за удар в спину."
      }
    ],
    tags: ["backstab", "rear", "damage", "style points", "combat"]
  },

  {
    id: "awakenings",
    section: "combat",
    title: { en: "Awakenings", ru: "Пробуждения" },
    summary: {
      en: "In the mod, some sorceries fill an Awakening meter and unlock a stronger mode or a single finishing attack at 100%.",
      ru: "В моде некоторые колдовства заполняют шкалу пробуждения и при 100% открывают усиленный режим или один завершающий приём."
    },
    body: [
      {
      en: "When the meter reaches 100%, press V. Tobimune, Jikai and Diagoldze enter empowered modes, while Sumika's True Realm and Kurotsuchi's Burning Heaven Mass are single finishing attacks.",
      ru: "Когда шкала заполнится до 100%, нажмите V. Тобимунэ, Дзикай и Диагользе входят в усиленные режимы, а Истинная область Сумики и Пылающая небесная масса Куротсучи срабатывают как одиночные завершающие атаки."
      },
      {
        en: "Server rules control Awakenings: kbcAwakeningsEnabled enables the mechanic, kbcAwakeningDurationTicks sets its duration, and kbcInfiniteAwakenings removes the timer.",
        ru: "Пробуждения настраиваются правилами сервера: kbcAwakeningsEnabled включает механику, kbcAwakeningDurationTicks задаёт длительность, а kbcInfiniteAwakenings убирает ограничение по времени."
      }
    ],
    tags: ["awakening", "black-flames", "combat", "v-key"]
  },

  // ── MOVEMENT ────────────────────────────────────────────────────────────────
  {
    id: "dodge",
    section: "movement",
    title: { en: "Dodge", ru: "Уклонение" },
    summary: {
      en: "Ctrl spends one dodge charge to move quickly in your chosen direction.",
      ru: "Ctrl расходует один заряд уклонения и быстро перемещает вас в выбранном направлении."
    },
    body: [
      {
        en: "Dodge spends one charge. The move has a 10-tick cooldown; by default, one charge regenerates every 100 ticks (5 seconds). Use it to escape pressure, recover after a guard break or close the distance.",
        ru: "Уклонение расходует один заряд. Между рывками проходит 10 тиков, а один заряд по умолчанию восстанавливается за 100 тиков (5 секунд). Используйте уклонение, чтобы выйти из-под давления, прийти в себя после пробития защиты или сократить дистанцию."
      }
    ],
    tags: ["dodge", "movement", "spacing"]
  },

  {
    id: "advanced-movement",
    section: "movement",
    title: { en: "Advanced movement", ru: "Продвинутое движение" },
    summary: {
      en: "Extra jumps, wall running and water walking depend on your sorcery and equipment.",
      ru: "Дополнительные прыжки, бег по стенам и хождение по воде зависят от колдовства и снаряжения."
    },
    body: [
      {
        en: "These movement options are not always available. Check the passive effects of your current sorcery and equipment. If an ability temporarily locks movement, the lock ends automatically with the ability.",
        ru: "Эти способы перемещения доступны не всегда. Проверяйте пассивные свойства текущего колдовства и снаряжения. Если способность временно ограничивает движение, ограничение снимается после её завершения."
      }
    ],
    tags: ["movement", "wall-run", "water-walk", "jump"]
  }
];
