import type { WikiArticle } from "../types";

export const wikiArticles: WikiArticle[] = [
  // ── OVERVIEW ────────────────────────────────────────────────────────────────
  {
    id: "what-is-kbc",
    section: "overview",
    title: { en: "What is Kagurabachi Craft?", ru: "Что такое Кагурабати Craft?" },
    summary: {
      en: "A combat-first NeoForge 1.21.1 mod inspired by the Kagurabachi manga - deep melee combat, fighting styles, hand-to-hand and a huge roster of sorceries.",
      ru: "Боевой мод по манге Кагурабати для NeoForge 1.21.1. В моде есть оружейные стили, рукопашный бой и колдовства."
    },
    body: [
      {
      en: "Kagurabachi Craft changes Minecraft combat. It adds combat mode, weapon and hand-to-hand styles, signature techniques, parries, clashes, Stability, stamina and block destruction.",
        ru: "Кагурабати Craft - в первую очередь боевой мод. Он заменяет ванильный бой авторским action-фреймворком: боевой режим, несколько стилей оружия и рукопашного боя, сигнатурные техники, тайминги парирования и столкновений, системы стойки и выносливости, а также полный пайплайн разрушения."
      },
      {
        en: "On top of that combat core sits a large library of sorceries - from the canon Enchanted Blades to dozens of standalone abilities like teleportation, illusions, chains, fire, lightning and summons. A survival game mode is currently in development.",
        ru: "Поверх боевого ядра - большая библиотека колдовств: от канонических зачарованных клинков до десятков отдельных способностей вроде телепортации, иллюзий, цепей, огня, молнии и призывов. Режим выживания сейчас в разработке."
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
        en: "Your weapon determines the active style automatically. This changes HP and Stability damage, guard pressure, block strength, parry timing, reach, attack arcs, target count, heavy attacks and which signatures can execute. The Fighting Styles section shows every exact profile.",
        ru: "Оружие автоматически определяет активный стиль. От него зависят урон по HP и стабильности, давление на блок, сила защиты, окно парирования, дальность, дуги атак, число целей, тяжёлые атаки и доступные сигнатуры. Точные профили собраны в разделе «Боевые стили»."
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
      ru: "Войдите в боевой режим, освойте дистанцию и стили, затем добавьте колдовство."
    },
    body: [
      {
      en: "Choose an origin, then press Y to enter combat mode. LMB attacks, Shift blocks and parries, and Ctrl dodges. Press R for sorcery controls and Tab for signature techniques.",
      ru: "Выберите происхождение и нажмите Y для входа в боевой режим. LMB отвечает за атаки, Shift за блок и парирование, Ctrl за уклонение. R включает управление колдовством, Tab применяет сигнатурные техники."
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
    title: { en: "Spiritual Energy (SE)", ru: "Духовная Энергия (SE)" },
    summary: {
      en: "SE is your sorcery fuel. All active abilities cost SE - manage it carefully.",
      ru: "SE - топливо колдовства. Все активные способности стоят SE - расходуйте с умом."
    },
    body: [
      {
        en: "SE regenerates over time. Some sorceries have per-tick costs (sustained abilities), others have flat activation costs. Check each ability's description for the exact cost. Use /kbc set currentSE to refill it for testing.",
        ru: "SE восстанавливается со временем. У одних колдовств затраты за тик (длительные способности), у других - фиксированная стоимость активации. Смотрите описание способности для точной цены. Команда /kbc set currentSE пополняет его для тестов."
      }
    ],
    tags: ["se", "energy", "resource", "quickstart"]
  },

  {
    id: "sorcery-mode",
    section: "quickstart",
    title: { en: "Sorcery mode & slots", ru: "Режим колдовства и слоты" },
    summary: {
      en: "Hold R for sorcery mode. Every sorcery has six slots bound to the same keys.",
      ru: "Удержите R для режима колдовства. У каждого колдовства шесть слотов на одних и тех же клавишах."
    },
    body: [
      {
        en: "The slot bindings are the same for every sorcery: Primary = R + LMB, Secondary = R + RMB, Utility = R + Shift, Supportive 1 = Z, Supportive 2 = X, Special = G. So once you learn the controls, you can pick up any new sorcery instantly - only the abilities in each slot change.",
        ru: "Привязки слотов одинаковы для всех колдовств: Primary = R + ЛКМ, Secondary = R + ПКМ, Utility = R + Shift, Supportive 1 = Z, Supportive 2 = X, Special = G. Освоив управление, вы мгновенно берёте любое новое колдовство - меняются только способности в слотах."
      },
      {
        en: "Set your control style with /kbc settings sorceryMode toggle (or hold) - toggle keeps sorcery mode active after releasing R.",
        ru: "Настройте управление командой /kbc settings sorceryMode toggle (или hold) - toggle оставляет режим колдовства активным после отпускания R."
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
      en: "Combat is about reading openings and applying pressure - not spamming attacks.",
      ru: "Бой - это чтение открытий и давление, а не спам атаками."
    },
    body: [
      {
        en: "Combat mode (Y) enables the full attack stack and HUD. Tap LMB for a light attack or keep holding the same press for 5 ticks to promote it into your style's heavy. Inputs made shortly before a cooldown ends can be buffered, but the server still validates the action. Shift opens a one-shot parry window and then remains a block while held; it does not repeatedly re-parry.",
        ru: "Боевой режим (Y) включает полный стек атак и HUD. Коротко нажмите LMB для лёгкой атаки или продолжайте удерживать то же нажатие 5 тиков, чтобы повысить его до тяжёлой атаки текущего стиля. Ввод незадолго до конца перезарядки может попасть в буфер, но действие всё равно проверяет сервер. Shift открывает одно окно парирования, а затем остаётся блоком при удержании; повторное парирование само не запускается."
      }
    ],
    tags: ["combat", "attack", "basics"]
  },

  {
    id: "resources",
    section: "combat",
    title: { en: "HP is not the only way to lose", ru: "HP - не единственный способ проиграть" },
    summary: {
      en: "Stability, guard stress, fatigue, adrenaline and effective power all decide a duel.",
      ru: "Стабильность, напряжение защиты, усталость, адреналин и эффективная сила решают исход дуэли."
    },
    body: [
      {
        en: "Stability is posture: drain it to stagger and expose the target. Guard stress makes repeated blocking less sustainable. Fatigue punishes repeated demanding actions. Adrenaline is a temporary survival response under pressure. Style points are a separate temporary offensive resource generated by varied combat and spent on signatures. Style Mastery is persistent progression and must not be confused with that meter.",
        ru: "Стабильность - это стойка: истощите её, чтобы ошеломить и открыть цель. Напряжение защиты делает постоянный блок менее устойчивым. Усталость наказывает за повторение требовательных действий. Адреналин - временная реакция выживания под давлением. Очки стиля - отдельный временный наступательный ресурс за разнообразный бой, который расходуется на сигнатуры. Не путайте его с постоянным мастерством стиля."
      }
    ],
    tags: ["stability", "guard", "fatigue", "adrenaline", "combat"]
  },

  {
    id: "parry-system",
    section: "combat",
    title: { en: "Block, parry and clash", ru: "Блок, парирование и столкновение" },
    summary: {
      en: "Block to reduce damage, parry on perfect timing to negate it, and clash when two attacks meet.",
      ru: "Блок снижает урон, парирование в идеальный тайминг отменяет его, а столкновение - когда встречаются две атаки."
    },
    body: [
      {
        en: "Pressing Shift creates one parry attempt; keeping Shift held continues as block after that opening window. Releasing and pressing again is required for another parry. Blocking reduces incoming damage according to your style profile and builds guard stress under repeated pressure. A clash is resolved when compatible attack intents meet before confirmed damage.",
        ru: "Нажатие Shift создаёт одну попытку парирования; дальнейшее удержание продолжает работать как блок после стартового окна. Для нового парирования Shift нужно отпустить и нажать снова. Блок снижает входящий урон по профилю текущего стиля и накапливает напряжение защиты под серией ударов. Столкновение разрешается, когда совместимые атаки встречаются до подтверждённого урона."
      }
    ],
    tags: ["parry", "block", "clash", "combat", "timing"]
  },

  {
    id: "heavy-attacks",
    section: "combat",
    title: { en: "Light-to-heavy input", ru: "Переход от лёгкой к тяжёлой атаке" },
    summary: {
      en: "One LMB press carries both intents: release early for light, hold for heavy.",
      ru: "Одно нажатие LMB несёт оба намерения: раннее отпускание даёт лёгкую атаку, удержание - тяжёлую."
    },
    body: [
      {
        en: "The server records the initial press. Releasing before 5 ticks requests a light attack; reaching 5 ticks promotes it into the current style's heavy and prevents the release from firing a second action. Sword, Hand, Dual Katana, Sheathed Katana and Trident each route to a different heavy and dash attack.",
        ru: "Сервер запоминает начальное нажатие. Отпускание раньше 5 тиков запрашивает лёгкую атаку; на 5-м тике ввод повышается до тяжёлой атаки текущего стиля, а отпускание уже не запускает второе действие. У одного меча, рук, двух катан, катаны в ножнах и трезубца разные тяжёлые атаки и атаки в рывке."
      }
    ],
    tags: ["heavy", "combat", "input", "style"]
  },

  {
    id: "signature-techniques",
    section: "combat",
    title: { en: "Signature techniques", ru: "Сигнатурные техники" },
    summary: {
      en: "Tap Tab to execute; hold it for 200 ms to choose. Signatures spend Style points, not SE.",
      ru: "Нажмите Tab для применения. Удержание Tab в течение 200 мс открывает выбор. Расходуется шкала стиля."
    },
    body: [
      {
        en: "The implemented set is Iai, Execution, Freedom Style and Cigarette Cross Slash. Each has an equipment requirement, its own Style-point cost and cooldown. The dedicated Signature Techniques section lists exact controls, requirements and numbers. Unlocks are managed by the progression state or /kbc add signature for testing.",
        ru: "Реализованный набор: Иай, Экзекуция, Стиль Свободы и Сигаретный разрез. У каждой техники есть требование к экипировке, собственная цена в очках стиля и перезарядка. Точные кнопки, требования и числа собраны в отдельном разделе «Сигнатурные техники». Для тестов разблокировкой можно управлять через /kbc add signature."
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
      ru: "Глобальное позиционное правило: урон игрока повышается, когда цель смотрит от атакующего."
    },
    body: [
      {
        en: "When kbcBackstabDamage is enabled, a hit from the target's rear arc multiplies final incoming damage by 1 + kbcBackstabDamageModifier / 100. The default modifier is 25%, so a 10-damage hit becomes 12.5. Eligible combat targets also grant 200 Style points for the backstab.",
        ru: "Когда включено правило kbcBackstabDamage, попадание из задней полусферы цели умножает итоговый входящий урон на 1 + kbcBackstabDamageModifier / 100. По умолчанию бонус равен 25%, поэтому удар на 10 урона становится 12,5. Подходящая боевая цель также даёт 200 очков стиля за удар в спину."
      },
      {
        en: "Freedom Style has an additional authored rear finish that deals 14 damage and ignores Stability. That technique-specific effect is separate from the global backstab multiplier.",
        ru: "У Стиля Свободы дополнительно есть собственный выход за спину на 14 урона, игнорирующий стабильность. Этот эффект техники существует отдельно от глобального множителя удара в спину."
      }
    ],
    tags: ["backstab", "rear", "damage", "style points", "combat"]
  },

  {
    id: "awakenings",
    section: "combat",
    title: { en: "Awakenings", ru: "Пробуждения" },
    summary: {
      en: "Some sorceries can Awaken - charge a meter to 100%, press V, and temporarily upgrade your entire kit.",
      ru: "Некоторые колдовства могут Пробуждаться - заполните шкалу до 100%, нажмите V и временно усильте весь набор."
    },
    body: [
      {
      en: "Some sorceries fill an Awakening meter during combat. At 100%, press V to activate it. Awakening changes or strengthens the ability set for a limited time. Tobimune uses Black Flames, Jikai uses Schizophrenia, and Di Algodze uses Sage of Destruction.",
      ru: "Некоторые колдовства заполняют шкалу Пробуждения во время боя. При 100% нажмите V. Пробуждение временно меняет или усиливает способности. У Tobimune это Чёрное пламя, у Jikai Шизофрения, у Di Algodze Мудрец разрушения."
      },
      {
        en: "Server owners control awakenings with gamerules: kbcAwakeningsEnabled toggles the mechanic, kbcAwakeningDurationTicks sets the duration, and kbcInfiniteAwakenings removes the timer entirely.",
        ru: "Администраторы управляют пробуждениями через gamerules: kbcAwakeningsEnabled включает механику, kbcAwakeningDurationTicks задаёт длительность, а kbcInfiniteAwakenings полностью убирает таймер."
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
      en: "Ctrl dodge is a charged burst for spacing - not free invulnerability.",
      ru: "Уклонение Ctrl - заряжаемый рывок для дистанции, а не бесплатная неуязвимость."
    },
    body: [
      {
        en: "Dodge has a charge pool that depletes on use and regenerates over time (default cooldown ~0.5s). Use it to escape stagger windows, reposition after a guard break, or close distance for a follow-up.",
        ru: "Уклонение имеет пул зарядов, тратящихся при использовании и восстанавливающихся со временем (кулдаун ~0.5с). Используйте, чтобы выйти из окна шатания, перестроиться после пробития блока или закрыть дистанцию."
      }
    ],
    tags: ["dodge", "movement", "spacing"]
  },

  {
    id: "advanced-movement",
    section: "movement",
    title: { en: "Advanced movement", ru: "Продвинутое движение" },
    summary: {
      en: "Extra jump, wall running and water walking are gameplay states, gated by sorcery and gear.",
      ru: "Доп. прыжок, бег по стенам и хождение по воде - игровые состояния, зависящие от колдовства и снаряжения."
    },
    body: [
      {
        en: "These options are unlocked by sorcery state, equipment and server-validated conditions - they aren't always available. Check your current sorcery's passive mobility grants. Movement locks during some abilities release automatically when the ability resolves.",
        ru: "Эти возможности открываются состоянием колдовства, снаряжением и серверными условиями - они доступны не всегда. Смотрите пассивные мобильные бонусы текущего колдовства. Блокировки движения во время способностей снимаются автоматически по их завершении."
      }
    ],
    tags: ["movement", "wall-run", "water-walk", "jump"]
  }
];
