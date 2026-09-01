import { assets } from "./assets";
import type { SorceryEntry } from "../types";

// Player-facing summary of the abilities currently implemented in the mod.
// Slot → input: Primary = R+LMB, Secondary = R+RMB, Utility = R+Shift,
//               Supportive 1 = Z, Supportive 2 = X, Special = G, Awakening = V (at 100%).

export const sorceries: SorceryEntry[] = [
  // ── ENCHANTED BLADES (妖刀) CURRENTLY IMPLEMENTED IN THE MOD ────────────────
  {
    id: "enten",
    name: { en: "Enten", ru: "Энтен" },
    character: { en: "Chihiro Rokuhira", ru: "Тихиро Рокухира" },
    element: "mirror",
    elementLabel: { en: "Spirit Energy / Goldfish", ru: "Духовная энергия / Рыбки" },
    tier: "enchanted-blade",
    role: { en: "A flexible blade kit built around Kuro, Aka and Nishiki", ru: "Гибкий набор приёмов Куро, Ака и Нисики" },
    summary: {
      en: "Enten can change the pace of a fight without changing weapons. Kuro covers distance, Aka turns a well-timed defence into a stored counter, and Nishiki trades some of Kuro's power for speed and close-range pressure. The extra Nishiki modes unlock at Mastery II.",
      ru: "Энтен позволяет менять темп боя, не меняя оружие. Куро достаёт врагов на расстоянии, Ака превращает своевременную защиту в ответный удар, а Нисики жертвует частью силы Куро ради скорости и ближнего натиска. Дополнительные режимы Нисики открываются на II ранге мастерства."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Kuro: Slash", ru: "Куро: Разрез" }, desc: { en: "A quick Spirit Energy cut for fighting at range. Nishiki makes it faster, but trims 30% of its reach and 40% of its damage.", ru: "Быстрый разрез духовной энергии для боя на расстоянии. В режиме Нисики он становится быстрее, но теряет 30% дальности и 40% урона." } },
      { slot: "Secondary", name: { en: "Kuro: Shred", ru: "Куро: Кромсание" }, desc: { en: "Spend 1000 SE to carve through every enemy in a straight dash.", ru: "Рывок по прямой за 1000 SE, рассекающий всех врагов на пути." } },
      { slot: "Utility",  name: { en: "Aka (Red)", ru: "Ака (Красный)" }, desc: { en: "Hold the stance for up to 1.5 seconds. Catch one compatible sorcery attack and you can return it within the next 20 seconds.", ru: "Стойка длится до 1,5 секунды. Поймайте одну подходящую колдовскую атаку, чтобы вернуть её противнику в течение следующих 20 секунд." } },
      { slot: "Special",  name: { en: "Nishiki Mode", ru: "Режим Нисики" }, desc: { en: "Unlocked at Mastery II. Gain 50% movement speed and 30% melee damage at the cost of a weaker Kuro.", ru: "Открывается на II ранге мастерства. Даёт +50% к скорости и +30% к урону в ближнем бою, но ослабляет Куро." } },
      { slot: "Supportive 1", name: { en: "Summon Kuro", ru: "Призыв Куро" }, desc: { en: "Call out the Kuro goldfish. It is vulnerable, and the ability ends if an enemy kills it.", ru: "Призывает золотую рыбку Куро. Она уязвима: если враг убьёт рыбку, способность прервётся." } },
      { slot: "Supportive 2", name: { en: "Nishiki: Support", ru: "Нисики: Поддержка" }, desc: { en: "A defensive Nishiki mode unlocked at Mastery II: 20% movement speed, 5 armor, Absorption and Regeneration.", ru: "Защитный режим Нисики, доступный со II ранга мастерства: +20% к скорости, +5 к броне, Поглощение и Регенерация." } }
    ],
    asset: assets.enten
  },

  {
    id: "cloud-gouger",
    name: { en: "Cloud Gouger", ru: "Пронзающее Облако" },
    character: { en: "Genichi Sojo", ru: "Гэнъити Содзё" },
    element: "ice",
    elementLabel: { en: "Weather / Thunder", ru: "Погода / Гром" },
    tier: "enchanted-blade",
    role: { en: "Weather control that rewards careful use of Thunder charges", ru: "Управление погодой с расчётливым расходом зарядов грома" },
    summary: {
      en: "Cloud Gouger turns Mei, Yui and Kou into a broad weather-control kit. Thunder charges can be spent on a precise strike, chain lightning or a full storm, while fog, rain and ice make it easier to control the fight. Wet enemies take extra damage from Mei.",
      ru: "«Пронзающее Облако» превращает Мэй, Юи и Ко в полноценный набор для управления погодой. Заряды грома можно потратить на точный удар, цепную молнию или целую грозу, а туман, дождь и лёд помогают держать поле боя под контролем. Мэй наносит больше урона мокрым целям."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Mei: Thunder Strike", ru: "Мэй: Удар грома" }, desc: { en: "A near-instant lightning strike for 1 Thunder charge and 300 SE. It deals 50% more Stability damage, and wet targets take 50% more damage.", ru: "Почти мгновенный удар молнии за 1 заряд грома и 300 SE. Он наносит на 50% больше урона по стойкости, а мокрые цели получают на 50% больше обычного урона." } },
      { slot: "Secondary", name: { en: "Mei: Lightning / Storm", ru: "Мэй: Молния / Гроза" }, desc: { en: "Spend 1–2 Thunder charges on chain lightning. Save at least 3 to unleash a large storm around you.", ru: "За 1–2 заряда грома по цели проходит цепная молния. Накопите не меньше трёх, чтобы вызвать большую грозу вокруг себя." } },
      { slot: "Utility",  name: { en: "Kou: Fog / Rain", ru: "Ко: Туман / Дождь" }, desc: { en: "Tap for blinding, weakening fog; hold for rain that leaves targets wet for one minute.", ru: "Короткое нажатие укрывает область туманом, который ослепляет, замедляет и ослабляет. Удержание вызывает дождь и оставляет цели мокрыми на минуту." } },
      { slot: "Special",  name: { en: "Mei: Thunder Dash", ru: "Мэй: Громовой рывок" }, desc: { en: "Move with Speed II and hurt enemies on contact while blue echoes trail behind you. The mode drains SE until switched off.", ru: "Даёт Скорость II и позволяет ранить врагов при столкновении, оставляя за собой синие следы. Режим расходует SE, пока не будет выключен." } },
      { slot: "Supportive 1", name: { en: "Kou: Cold Stream", ru: "Ко: Холодный поток" }, desc: { en: "A freezing stream that deals damage and inflicts Slowness V. Any suitable blocks it touches turn to ice.", ru: "Ледяной поток наносит урон, замораживает и накладывает Замедление V. Подходящие блоки на его пути превращаются в лёд." } },
      { slot: "Supportive 2", name: { en: "Yui: Ice Spikes", ru: "Юи: Ледяные шипы" }, desc: { en: "Fill a 32-block area with ice spikes that damage, freeze and weaken enemies. Some targets become trapped in ice.", ru: "Заполняет область шириной 32 блока ледяными шипами. Они ранят, замораживают и ослабляют врагов, а некоторых запирают во льду." } }
    ],
    asset: assets.cloudGouger
  },

  {
    id: "kumeyuri",
    name: { en: "Kumeyuri", ru: "Кумэюри" },
    character: { en: "Hiruhiko — Kumeyuri", ru: "Хирухико — Кумэюри" },
    element: "illusion",
    elementLabel: { en: "Banquet / Play", ru: "Пир / Игра" },
    tier: "enchanted-blade",
    role: { en: "Build Intoxication, then turn the surroundings into weapons", ru: "Накопление Опьянения и превращение окружения в оружие" },
    summary: {
      en: "Kumeyuri fights in two steps. Banquet builds Intoxication and marks valuable targets; Play then tears loose nearby blocks and objects and hurls them across the arena. Several attacks become easier to land once the enemy is intoxicated.",
      ru: "Кумэюри строит бой в два этапа. Пир накапливает Опьянение и помечает важные цели, а Игра вырывает из окружения блоки и предметы и швыряет их по полю боя. По опьянённому врагу легче провести несколько ключевых приёмов."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Banquet: First Cup", ru: "Пир: Первая чаша" }, desc: { en: "Send a geisha apparition through the enemy to start building Intoxication and put them under pressure.", ru: "Образ гейши проходит сквозь врага, начинает накапливать Опьянение и мешает ему действовать свободно." } },
      { slot: "Secondary", name: { en: "Play: String Pull", ru: "Игра: Натяжение струн" }, desc: { en: "Tap to tear loose and throw one object, or hold to gather several for a full wave. Intoxicated targets are easier to control.", ru: "Короткое нажатие вырывает и бросает один объект; удержание собирает несколько для целой волны. Опьянёнными целями управлять легче." } },
      { slot: "Utility",  name: { en: "Banquet: Wake", ru: "Пир: Пробуждение" }, desc: { en: "Spread Intoxication and gain a 15-second safeguard. If a hit would kill you, it restores 30% health and moves you to safety instead.", ru: "Распространяет Опьянение и на 15 секунд страхует от гибели. Смертельный удар вместо этого восстановит 30% здоровья и перенесёт в безопасное место." } },
      { slot: "Special",  name: { en: "Unrevealed Third Ability", ru: "Неназванная третья способность" }, desc: { en: "Kumeyuri's third primary ability has been confirmed in the manga, but its name and effect have not been revealed. This slot currently has no gameplay effect.", ru: "Третья основная способность Кумэюри подтверждена в манге, но её название и эффект пока не раскрыты. Сейчас этот слот ничего не делает." } },
      { slot: "Supportive 1", name: { en: "Banquet: Designated Guest", ru: "Пир: Назначенный гость" }, desc: { en: "Tap to place one strong mark. Hold to spread up to three weaker marks among enemies who are already intoxicated.", ru: "Короткое нажатие оставляет одну сильную метку. Удержание распределяет до трёх более слабых меток между уже опьянёнными врагами." } },
      { slot: "Supportive 2", name: { en: "Play: Destructive Play", ru: "Игра: Разрушительная игра" }, desc: { en: "Tap to rip open one section of a structure. Hold to follow it with repeated waves of destruction.", ru: "Короткое нажатие разрывает часть постройки. Удержание продолжает атаку серией разрушительных волн." } }
    ],
    asset: assets.kumeyuri
  },

  {
    id: "magatsumi",
    name: { en: "Magatsumi", ru: "Магацуми" },
    status: { en: "WIP", ru: "WIP" },
    character: { en: "Akemura Soga", ru: "Акэмура Сога" },
    element: "wither",
    elementLabel: { en: "Insects / Curse", ru: "Насекомые / Проклятие" },
    tier: "enchanted-blade",
    role: { en: "Five insect manifestations backed by the blade's Curse", ru: "Пять образов насекомых и проклятие обнажённого клинка" },
    summary: {
      en: "Magatsumi covers movement, restraint and heavy cuts through five insect manifestations: Dragonfly, Centipede, Spider, Bee and Butterfly. Keeping the blade unsheathed also spreads its Curse to nearby targets. The Curse deals periodic damage that bypasses Stability.",
      ru: "Магацуми использует пять образов насекомых — Стрекозу, Сороконожку, Паука, Пчелу и Бабочку — для перемещения, сдерживания и тяжёлых разрезов. Пока клинок обнажён, на ближайших врагах накапливается Проклятие. Его периодический урон обходит стойкость."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Dragonfly", ru: "Стрекоза" }, desc: { en: "Hold and release for a fixed-damage blast. It costs 500 SE and takes 5 seconds to recover.", ru: "После удержания выпускает взрыв с фиксированным уроном. Приём стоит 500 SE и восстанавливается 5 секунд." } },
      { slot: "Secondary", name: { en: "Centipede", ru: "Сороконожка" }, desc: { en: "Only a full charge releases the 360° blast; let go early and the attack is lost. Charging drains about 1000 SE per second.", ru: "Круговой взрыв срабатывает только при полном заряде; раннее отпускание отменяет атаку. Зарядка расходует около 1000 SE в секунду." } },
      { slot: "Utility",  name: { en: "Spider", ru: "Паук" }, desc: { en: "Spread a web that holds enemies in place and inflicts True Wound while it lasts.", ru: "Расстилает паутину, которая удерживает врагов на месте и накладывает Истинную рану, пока остаётся активной." } },
      { slot: "Special",  name: { en: "Butterfly", ru: "Бабочка" }, desc: { en: "With the blade drawn, the violet title Chō appears before a sweeping slash tears through the terrain.", ru: "С обнажённым клинком появляется фиолетовая надпись Chō, после чего широкий разрез проходит сквозь рельеф." } },
      { slot: "Supportive 1", name: { en: "Bee", ru: "Пчела" }, desc: { en: "With the blade drawn, finish the charge to carve through a 50-block line and appear at its far end.", ru: "С обнажённым клинком полностью зарядите приём, чтобы прорубить линию длиной 50 блоков и оказаться в её конце." } },
      { slot: "Passive",  name: { en: "Curse", ru: "Проклятие" }, desc: { en: "While the blade is drawn, nearby targets accumulate Magatsumi's Curse. Its periodic damage ignores Stability.", ru: "Пока клинок обнажён, ближайшие цели получают проклятие Магацуми. Его периодический урон игнорирует стойкость." } }
    ],
    asset: assets.magatsumi
  },

  {
    id: "tobimune",
    name: { en: "Tobimune", ru: "Тобимунэ" },
    character: { en: "Samura", ru: "Самура" },
    element: "feather",
    elementLabel: { en: "Crow / Suzaku", ru: "Ворон / Судзаку" },
    tier: "enchanted-blade",
    awakening: { en: "Black Flames", ru: "Чёрное пламя" },
    role: { en: "Feather movement, sustained flight and Suzaku support", ru: "Перемещения по перьям, долгий полёт и поддержка Судзаку" },
    summary: {
      en: "Tobimune is built for constant movement. Feather Step and External Crow rearrange positions, Crow Rush keeps you airborne, and Suzaku handles healing and recovery. Black Flames turns that mobility into a more aggressive set of attacks.",
      ru: "Тобимунэ рассчитан на непрерывное движение. Шаг пера и Внешний ворон меняют позиции участников боя, Натиск ворона удерживает владельца в воздухе, а Судзаку отвечает за лечение и восстановление. Чёрное пламя делает этот подвижный набор заметно агрессивнее."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Feather Step", ru: "Шаг пера" }, desc: { en: "Leave a cluster of feathers and release to blink to it. During Phoenix Evasion, the blink takes you to the nearest enemy instead.", ru: "Оставляет скопление перьев и при отпускании переносит к нему. Во время Уклонения феникса телепортирует к ближайшему врагу." } },
      { slot: "Secondary", name: { en: "Crow Rush", ru: "Натиск ворона" }, desc: { en: "Hold to fly and leave a damaging feather trail. The 15-second reserve regains 1 second every 3 seconds, and flight drains SE each tick.", ru: "Удержание позволяет лететь и оставлять ранящий след из перьев. Запас рассчитан на 15 секунд, восстанавливает 1 секунду каждые 3 секунды и во время полёта расходует SE." } },
      { slot: "Utility",  name: { en: "External Crow", ru: "Внешний ворон" }, desc: { en: "Without Suzaku, swap with the nearest target or hold to rearrange several targets within 40 blocks. With Suzaku, the move becomes a feather-and-flame burst that knocks enemies away.", ru: "Без Судзаку меняет вас местами с ближайшей целью; удержание позволяет переставить несколько целей в радиусе 40 блоков. С Судзаку приём превращается во вспышку перьев и пламени, отбрасывающую врагов." } },
      { slot: "Special",  name: { en: "Suzaku", ru: "Судзаку" }, desc: { en: "Sustain regeneration, cleanse harmful effects and restore blocks for 300 SE per tick. Black Flames removes that drain while active.", ru: "Поддерживает регенерацию, снимает вредные эффекты и восстанавливает блоки за 300 SE в тик. Чёрное пламя временно убирает этот расход." } },
      { slot: "Supportive 1", name: { en: "Phoenix Strike", ru: "Удар феникса" }, desc: { en: "Mark an enemy; after a short pause, you blink to it and strike automatically. The move has a 15-second cooldown.", ru: "Помечает врага; после короткой паузы владелец телепортируется к нему и автоматически наносит удар. Перезарядка — 15 секунд." } }
    ],
    awakenedAbilities: [
      { slot: "Primary",  name: { en: "Feather Step (Black Flames)", ru: "Шаг пера (Чёрное пламя)" }, desc: { en: "Phoenix Evasion redirects Feather Step to the nearest enemy instead of the feather cluster.", ru: "Во время Уклонения феникса Шаг пера переносит к ближайшему врагу вместо скопления перьев." } },
      { slot: "Secondary", name: { en: "Crow Rush", ru: "Натиск ворона" }, desc: { en: "The damaging flight still uses its limited reserve, but Suzaku stops draining SE while Black Flames are burning.", ru: "Ранящий полёт по-прежнему расходует ограниченный запас, но Судзаку не тратит SE, пока горит Чёрное пламя." } },
      { slot: "Utility",  name: { en: "External Crow (Flame Burst)", ru: "Внешний ворон (огневзрыв)" }, desc: { en: "A burst of feathers and black fire knocks enemies back and leaves them burning.", ru: "Вспышка перьев и чёрного пламени отбрасывает врагов и оставляет их гореть." } },
      { slot: "Special",  name: { en: "Suzaku", ru: "Судзаку" }, desc: { en: "Regeneration and cleansing remain active, but their usual 300 SE-per-tick drain is suspended for the Awakening.", ru: "Регенерация и очищение продолжают работать, а обычный расход 300 SE в тик отключается до конца Пробуждения." } },
      { slot: "Supportive 1", name: { en: "Phoenix Strike (Cross Slash)", ru: "Удар феникса (крестовый разрез)" }, desc: { en: "Send a burning cross slash across 60 blocks, cutting and igniting everything in its path.", ru: "Огненный крестовый разрез проходит 60 блоков, рассекая и поджигая всё на пути." } }
    ],
    asset: assets.tobimune
  },

  // ── STANDALONE SORCERIES & WEAPONS ───────────────────────────────────────────
  {
    id: "flame-bone",
    name: { en: "Flame Bone of the Starving", ru: "Пламенная кость Голодающего" },
    character: { en: "Hiyuki Kagari", ru: "Хиюки Кагари" },
    element: "fire",
    elementLabel: { en: "Bone / Flame", ru: "Кость / Пламя" },
    tier: "sorcery",
    role: { en: "Explosive hand-to-hand pressure backed by the Flame Bone's ribs", ru: "Взрывной ближний бой и защита рёбрами Пламенной кости" },
    summary: {
      en: "Summon the Flame Bone, then choose between staying close with explosive punches or sending its hand out as a guided projectile. The ribs can lock down a position, shield the owner or erupt beneath an enemy. Most of the kit is unavailable until the weapon is summoned.",
      ru: "Сначала призовите Пламенную кость, а затем решайте: давить врага взрывными ударами вблизи или отправить её руку в полёт как управляемый снаряд. Рёбра удерживают позицию, защищают владельца и вырываются из-под противника. Большая часть набора недоступна без призванного оружия."
    },
    abilities: [
      { slot: "Special",  name: { en: "Summon Flame Bone of the Starving", ru: "Призыв Пламенной кости Голодающего" }, desc: { en: "Call the Flame Bone into your main hand. Use the slot again when you want to dismiss it.", ru: "Призывает Пламенную кость в основную руку. Повторное применение убирает оружие." } },
      { slot: "Primary",  name: { en: "Bone Burst", ru: "Костяной взрыв" }, desc: { en: "Tap for a short rush into an explosive punch, or hold for a heavier blast. The move is locked while the hand is detached.", ru: "Короткое нажатие переходит из рывка во взрывной удар; удержание готовит более тяжёлый взрыв. Пока рука отделена, приём недоступен." } },
      { slot: "Secondary", name: { en: "Hand Launch", ru: "Запуск руки" }, desc: { en: "Detach the hand and steer it with your aim. It punches through blocks, explodes on impact and then returns.", ru: "Отделяет руку и позволяет вести её прицелом. Она пробивает блоки, взрывается при столкновении и затем возвращается." } },
      { slot: "Utility",  name: { en: "Bone Fortress", ru: "Костяная крепость" }, desc: { en: "Close a rib cage around yourself to absorb incoming damage. You cannot move until the shield is released.", ru: "Смыкает вокруг владельца клетку из рёбер, принимающую входящий урон. Двигаться нельзя, пока защита не будет снята." } },
      { slot: "Supportive 1", name: { en: "Ribs: Uprise", ru: "Рёбра: Всплеск" }, desc: { en: "Mark an area for a delayed eruption of flaming ribs.", ru: "Отмечает область, где после короткой задержки вырвутся пылающие рёбра." } },
      { slot: "Supportive 2", name: { en: "Ribs: Rampart", ru: "Рёбра: Бастион" }, desc: { en: "Grow a temporary barricade of ribs around yourself. It parts for its owner and crumbles when the duration ends.", ru: "Возводит вокруг владельца временную преграду из рёбер. Она расступается перед ним и рассыпается по окончании действия." } }
    ],
    asset: assets.flameBone
  },

  {
    id: "shiba-teleportation",
    name: { en: "Itazura", ru: "Итадзура" },
    character: { en: "Togo Shiba", ru: "Того Сиба" },
    element: "teleport",
    elementLabel: { en: "Teleportation", ru: "Телепортация" },
    tier: "sorcery",
    role: { en: "Reposition yourself, your allies and your enemies", ru: "Перемещение себя, союзников и противников" },
    summary: {
      en: "Itazura wins fights by putting everyone in the wrong place at the right time. Blink behind a target, drop an enemy from the sky, pull an ally out of danger or prepare a return point before committing. Most of these moves deal no damage on their own.",
      ru: "Итадзура выигрывает бой правильной расстановкой участников. Можно оказаться за спиной врага, сбросить его с высоты, вытащить союзника из опасности или заранее оставить точку возврата. Большинство этих приёмов сами по себе не наносят урон."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Tactical Shift", ru: "Тактический сдвиг" }, desc: { en: "Blink forward, or aim at an enemy to appear directly behind it.", ru: "Переносит вперёд, а при наведении на врага — прямо ему за спину." } },
      { slot: "Secondary", name: { en: "High-Altitude Drop", ru: "Сброс с высоты" }, desc: { en: "Take a nearby target high into the air with you. The strike that follows bypasses Stability.", ru: "Захватывает ближайшую цель и переносит вас обоих высоко в воздух. Следующий удар обходит стойкость." } },
      { slot: "Utility",  name: { en: "Ally Rescue", ru: "Спасение союзника" }, desc: { en: "Pull the chosen ally out of danger and reappear together at a safer position.", ru: "Выдёргивает выбранного союзника из опасности и переносит вас обоих в более безопасное место." } },
      { slot: "Special",  name: { en: "Mass Teleport", ru: "Массовый телепорт" }, desc: { en: "Arm your next teleport so it drags nearby enemies along. The mode switches off after the jump.", ru: "Следующий телепорт утащит с собой ближайших врагов, после чего режим отключится." } },
      { slot: "Supportive 1", name: { en: "Set / Use Return Mark", ru: "Метка возврата" }, desc: { en: "The first press saves your position; the second takes you straight back to it.", ru: "Первое нажатие запоминает позицию, второе мгновенно возвращает к ней." } },
      { slot: "Supportive 2", name: { en: "Mark / Pursue Target", ru: "Метка / Преследование" }, desc: { en: "Mark a nearby target, then use the slot again to blink to it.", ru: "Помечает ближайшую цель. Повторное применение телепортирует прямо к ней." } }
    ],
    asset: undefined
  },

  {
    id: "murasama",
    name: { en: "Murasama", ru: "Мурасама" },
    character: { en: "-", ru: "-" },
    element: "blade",
    elementLabel: { en: "Crimson Blade", ru: "Багровый клинок" },
    tier: "sorcery",
    role: { en: "Charged sword pressure with a taunt-based counter", ru: "Заряжаемые атаки клинком и контратака через провокацию" },
    summary: {
      en: "Murasama is a bonus crossover weapon for players who like deliberate sword pressure. Charge a burst of slashes, cut through a target with Reaper's Flash or clear space with Blade Vortex. Taunt rewards you for reading the enemy and answering at the right moment.",
      ru: "Мурасама — бонусное кроссоверное оружие для размеренного давления клинком. Заряжайте серию разрезов, проходите сквозь цель Вспышкой жнеца или освобождайте пространство Вихрем клинков. Провокация награждает за верно прочитанную атаку врага и своевременный ответ."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Crimson Slashes", ru: "Багровые разрезы" }, desc: { en: "Pour energy into the blade, then release the charge as a rapid series of cuts.", ru: "Наполняет клинок энергией, а при отпускании обрушивает на цель быструю серию разрезов." } },
      { slot: "Secondary", name: { en: "Reaper's Flash", ru: "Вспышка жнеца" }, desc: { en: "Charge an energy-hungry dash that closes the distance to your target.", ru: "Заряжает требовательный к энергии рывок, который мгновенно сокращает дистанцию до цели." } },
      { slot: "Utility",  name: { en: "Blade Vortex", ru: "Вихрь клинков" }, desc: { en: "A spinning cut that catches every enemy within 7 blocks.", ru: "Круговой разрез, задевающий всех врагов в радиусе 7 блоков." } },
      { slot: "Supportive 1", name: { en: "Taunt", ru: "Провокация" }, desc: { en: "Bait the enemy into attacking. A successful taunt grants +1 Strength and primes a counter when you are hit.", ru: "Вынуждает врага атаковать. Успешная провокация даёт +1 к Силе и готовит контратаку на полученный удар." } }
    ],
    asset: undefined
  },

  {
    id: "isou",
    name: { en: "Isou", ru: "Исоу" },
    character: { en: "Sazanami Clan", ru: "клан Садзанами" },
    element: "void",
    elementLabel: { en: "Shockwave", ru: "Ударная волна" },
    tier: "sorcery",
    role: { en: "Fast ranged pressure, a charged blast and an air dash", ru: "Быстрый натиск с расстояния, заряженный взрыв и воздушный рывок" },
    summary: {
      en: "Isou is all about keeping a clean rhythm. Use the quick wave to check an approaching enemy, commit to the charged blast when you have room, then take a new angle with the air dash.",
      ru: "Исоу держится на ритме. Быстрая волна останавливает сближение, заряд превращает следующий удар в крупный взрыв, а воздушный рывок помогает сразу занять новый угол."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Shockwave", ru: "Ударная волна" }, desc: { en: "A fast, straight shockwave for keeping enemies at mid-range.", ru: "Быстрая прямая волна, которой удобно сдерживать врага на средней дистанции." } },
      { slot: "Secondary", name: { en: "Charge Blast", ru: "Заряд-взрыв" }, desc: { en: "Hold to feed energy into a larger, harder-hitting explosion.", ru: "Удержание расходует энергию и готовит более крупный и сильный взрыв." } },
      { slot: "Utility",  name: { en: "Aerial Dash", ru: "Воздушный рывок" }, desc: { en: "A quick air dash for escaping pressure or lining up the next shot.", ru: "Короткий рывок по воздуху — чтобы уйти из-под удара или выстроить следующий выстрел." } }
    ],
    asset: undefined
  },

  {
    id: "twilight-wave",
    name: { en: "Twilight Wave", ru: "Сумеречная волна" },
    character: { en: "Kuguri", ru: "Кугури" },
    element: "wave",
    elementLabel: { en: "Heat / Stored Heat", ru: "Жар / Запас жара" },
    tier: "sorcery",
    role: { en: "Build heat, then cash it out in high-impact attacks", ru: "Накопление жара и его расход на решающие атаки" },
    summary: {
      en: "Stored Heat sets the pace of this kit. Build it while you have breathing room, spend a little on Scorch or Flashpoint, or protect the meter until Heat Ray and Hagure are ready. The strongest answer is not always the best one if it leaves you empty.",
      ru: "Запас жара задаёт темп всего набора. Накапливайте его в безопасный момент, тратьте понемногу на Ожог и Вспышку или берегите шкалу ради Теплового луча и Хагуре. Самый мощный ответ не всегда лучший, если после него ничего не остаётся."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Scorch", ru: "Ожог" }, desc: { en: "Spend some Stored Heat to sear the nearest enemy at close range.", ru: "Расходует часть запаса жара и обжигает ближайшего врага." } },
      { slot: "Secondary", name: { en: "Heat Ray", ru: "Тепловой луч" }, desc: { en: "Feed Stored Heat into a focused beam and release it once the charge is complete.", ru: "Направляет запас жара в сфокусированный луч, который срабатывает после полной зарядки." } },
      { slot: "Utility",  name: { en: "Flashpoint", ru: "Вспышка" }, desc: { en: "Build the charge, then wash the space around you in a wave of heat.", ru: "Накапливает заряд, а затем накрывает пространство вокруг волной жара." } },
      { slot: "Special",  name: { en: "Hagure", ru: "Хагуре" }, desc: { en: "Empty the entire Stored Heat meter into one decisive beam.", ru: "Вкладывает весь запас жара в один решающий луч." } },
      { slot: "Supportive 1", name: { en: "Heat Generation", ru: "Генерация жара" }, desc: { en: "Convert SE into Stored Heat until the mode is switched off.", ru: "Преобразует SE в запас жара, пока режим не будет отключён." } }
    ],
    asset: undefined
  },

  {
    id: "jobaku",
    name: { en: "Jobaku", ru: "Дзёбаку" },
    character: { en: "Kiyohiko Uzuki", ru: "Киёхико Удзуки" },
    element: "chain",
    elementLabel: { en: "Pegs / Binding", ru: "Колья / Связывание" },
    tier: "sorcery",
    role: { en: "Prepare the ground with pegs, then lock enemies between them", ru: "Подготовка поля кольями и связывание врагов между ними" },
    summary: {
      en: "Jobaku needs a little setup. Place the pegs where the fight is going, then connect them with tendrils that pull enemies off their path and hold them in place. A prepared area is dangerous; an empty one gives the technique almost nothing to work with.",
      ru: "Дзёбаку требует небольшой подготовки. Ставьте колья там, куда смещается бой, а затем соединяйте их щупальцами, которые стягивают врагов с маршрута и удерживают на месте. На подготовленной территории техника опасна, без кольев ей почти нечем работать."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Place Peg", ru: "Установить кол" }, desc: { en: "Set one of up to four pegs that define where Jobaku can bind its targets.", ru: "Ставит один из четырёх кольев, между которыми Дзёбаку сможет связывать цели." } },
      { slot: "Secondary", name: { en: "Binding Tendrils", ru: "Связующие щупальца" }, desc: { en: "Bring the links to life. Black tendrils pull targets inward, hold them and inflict True Wound while draining SE.", ru: "Оживляет связи между кольями. Чёрные щупальца стягивают цели к центру, удерживают их и накладывают Истинную рану, постепенно расходуя SE." } },
      { slot: "Utility",  name: { en: "Clear Pegs", ru: "Убрать колья" }, desc: { en: "Clear the field by dismissing every peg you placed.", ru: "Очищает поле и убирает все поставленные колья." } },
      { slot: "Supportive 1", name: { en: "Quadrant Deploy", ru: "Развёртка квадранта" }, desc: { en: "Skip the setup and drop all four pegs in a square around the chosen point.", ru: "Позволяет пропустить подготовку и сразу поставить четыре кола квадратом вокруг выбранной точки." } }
    ],
    asset: undefined
  },

  {
    id: "gansui",
    name: { en: "Gansui", ru: "Гансуй" },
    status: { en: "WIP", ru: "WIP" },
    character: { en: "Shiyumi Harima", ru: "Сиюми Харима" },
    element: "spike",
    elementLabel: { en: "Earth / Rock", ru: "Земля / Камень" },
    tier: "sorcery",
    role: { en: "Turn the terrain into weapons, walls and moving platforms", ru: "Превращение рельефа в оружие, стены и движущиеся платформы" },
    summary: {
      en: "Gansui treats the ground as part of the moveset. Loose stone becomes ammunition, walls and pillars change the route of a fight, and Platform Lift can carry an entire patch of terrain into the sky. It is strongest where there is enough solid ground to reshape.",
      ru: "Для Гансуя земля — часть набора приёмов. Камни становятся снарядами, стены и столбы меняют маршрут боя, а Подъём платформы уносит в небо целый участок рельефа. Лучше всего техника работает там, где вокруг достаточно твёрдых блоков."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Launch Rock", ru: "Бросок камня" }, desc: { en: "Rip loose stone from the ground and hurl it at an enemy.", ru: "Вырывает камень из земли и швыряет его во врага." } },
      { slot: "Secondary", name: { en: "Earth Pillar", ru: "Земляной столп" }, desc: { en: "Drive a stone pillar up beneath the chosen enemy and throw it into the air.", ru: "Поднимает под выбранным врагом каменный столб и подбрасывает цель в воздух." } },
      { slot: "Utility",  name: { en: "Build Wall", ru: "Возведение стены" }, desc: { en: "Build a rough wall around yourself, one block at a time.", ru: "Блок за блоком возводит вокруг владельца грубую земляную стену." } },
      { slot: "Special",  name: { en: "Platform Lift", ru: "Подъём платформы" }, desc: { en: "Charge to lift a patch of terrain as high as 150 blocks. It stays up for 90 seconds, or descends when the slot is pressed again.", ru: "После зарядки поднимает участок земли на высоту до 150 блоков. Он держится 90 секунд или опускается по повторному нажатию." } },
      { slot: "Supportive 1", name: { en: "Boulder Throw", ru: "Бросок валуна" }, desc: { en: "Hurl a 5×5×5 boulder that explodes when it hits.", ru: "Швыряет валун размером 5×5×5, который взрывается при столкновении." } },
      { slot: "Supportive 2", name: { en: "Seismic Slam", ru: "Сейсмический удар" }, desc: { en: "Smash the ground hard enough to hurt nearby targets and tear up the surrounding blocks.", ru: "Сотрясает землю, ранит ближайшие цели и разносит блоки вокруг точки удара." } }
    ],
    asset: undefined
  },

  {
    id: "warriors-path",
    name: { en: "Warrior's Path", ru: "Путь воина" },
    character: { en: "Kudo", ru: "Кудо" },
    element: "warrior",
    elementLabel: { en: "Marks / Rescue & Displacement", ru: "Метки / спасение и смещение" },
    tier: "sorcery",
    role: { en: "Remote rescue and displacement through marked targets", ru: "Спасение и смещение отмеченных целей на расстоянии" },
    summary: {
      en: "Warrior's Path is about intervening before a bad situation gets worse. Mark the person who matters, then pull an ally clear or drag an enemy away from its target. Phase Step and Emergency Route give the whole team safer ways through a crowded fight.",
      ru: "Путь воина позволяет вмешаться до того, как неудачная ситуация станет критической. Отметьте нужную цель, а затем вытащите союзника или оторвите врага от его жертвы. Фазовый шаг и Аварийный маршрут помогают безопаснее проходить через плотный бой."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Path Mark", ru: "Метка пути" }, desc: { en: "Mark an ally who may need rescuing, or an enemy you want to pull off its target.", ru: "Помечает союзника, которому может понадобиться помощь, или врага, которого нужно оттащить от его цели." } },
      { slot: "Secondary", name: { en: "Intervention", ru: "Вмешательство" }, desc: { en: "Spend the active mark to pull an ally to safety or force an enemy away from its target.", ru: "Расходует активную метку: союзника вытаскивает в безопасное место, а врага отбрасывает от его цели." } },
      { slot: "Utility",  name: { en: "Phase Step", ru: "Фазовый шаг" }, desc: { en: "Slip through a solid obstacle without harming anyone on the other side.", ru: "Позволяет проскользнуть сквозь твёрдое препятствие, не задевая тех, кто находится по другую сторону." } },
      { slot: "Special",  name: { en: "Emergency Route", ru: "Аварийный маршрут" }, desc: { en: "Carry yourself and nearby allies along a protected escape route.", ru: "Проводит владельца и ближайших союзников по защищённому пути отхода." } }
    ],
    asset: undefined
  },

  {
    id: "lightning-menace",
    name: { en: "Lightning Menace", ru: "Грозовая угроза" },
    character: { en: "Natsuki Misaka", ru: "Нацуки Мисаки" },
    element: "lightning",
    elementLabel: { en: "High Voltage", ru: "Высокое напряжение" },
    tier: "sorcery",
    role: { en: "Break guard up close, then carry the target through the fight", ru: "Пролом защиты вблизи и таран с переносом цели" },
    summary: {
      en: "Lightning Menace wants to stay close. Voltage Strike chews through Stability and guard, while Thunder Ram catches an enemy and carries it into the next collision. Lightning Shot covers a narrow lane at range, and Flash Step gets you in or out without spending an attack.",
      ru: "Грозовая угроза раскрывается вблизи. Разрядный удар быстро ломает стойкость и защиту, а Громовой таран подхватывает врага и тащит его до следующего столкновения. Выстрел молнии держит узкую линию на расстоянии, а Молниеносный шаг позволяет войти в бой или выйти из него без лишней атаки."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Voltage Strike", ru: "Разрядный удар" }, desc: { en: "A point-blank lightning blow that hits Stability and blocking enemies especially hard.", ru: "Удар молнией в упор, особенно сильно бьющий по стойкости и поставленной защите." } },
      { slot: "Secondary", name: { en: "Thunder Ram", ru: "Громовой таран" }, desc: { en: "Charge a long rush that catches one target and drags it with you. The next collision delivers the finishing hit.", ru: "Заряжаемый дальний рывок подхватывает одну цель и тащит её за собой. Следующее столкновение завершает приём ударом." } },
      { slot: "Utility",  name: { en: "Lightning Shot", ru: "Выстрел молнии" }, desc: { en: "A narrow lightning shot that launches its target and burns a thin path through obstacles.", ru: "Узкий разряд подбрасывает цель и прожигает тонкий путь сквозь препятствия." } },
      { slot: "Supportive 1", name: { en: "Flash Step", ru: "Молниеносный шаг" }, desc: { en: "A harmless movement dash with three charges. One charge returns every 3 seconds.", ru: "Рывок без урона с тремя зарядами. Один заряд восстанавливается каждые 3 секунды." } }
    ],
    asset: undefined
  },

  {
    id: "yellow-chains",
    name: { en: "Yellow Chains", ru: "Жёлтые цепи" },
    character: { en: "Elder Shigyu brother", ru: "старший брат Сигю" },
    element: "yellowchain",
    elementLabel: { en: "Chains / Restraint", ru: "Цепи / Удержание" },
    tier: "sorcery",
    role: { en: "Catch enemies with chains and reel them out of position", ru: "Захват врагов цепями и вытягивание с позиции" },
    summary: {
      en: "Yellow Chains turns one clean hit into control. Catch a single enemy for a stronger bind or spread the chains across a group, then keep spending SE to reel the captives toward you. Release tools let you drop one link without throwing away the whole setup.",
      ru: "Жёлтые цепи превращают одно точное попадание в контроль над позицией. Поймайте одного врага прочной связью или накройте цепями группу, а затем расходуйте SE, чтобы подтягивать пленников к себе. Отдельные команды позволяют снять одну связь, не разрушая всю расстановку."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Chain Bind", ru: "Цепное связывание" }, desc: { en: "Land the chain projectile to bind one target and inflict True Wound.", ru: "Попадание цепью связывает одну цель и накладывает Истинную рану." } },
      { slot: "Secondary", name: { en: "Maintain Chains", ru: "Удержание цепей" }, desc: { en: "Keep every active chain taut and pull its captive toward you. SE drains for as long as you maintain the links.", ru: "Натягивает все активные цепи и тянет связанных врагов к владельцу. Пока связи поддерживаются, расходуется SE." } },
      { slot: "Utility",  name: { en: "Area Chain Bind", ru: "Связывание области" }, desc: { en: "Trade precision for coverage and bind several targets in the same area.", ru: "Жертвует точностью ради охвата и связывает сразу несколько целей в одной области." } },
      { slot: "Supportive 1", name: { en: "Release Chain", ru: "Снять цепь" }, desc: { en: "Cut the link to the target under your crosshair and leave the other chains intact.", ru: "Снимает цепь с цели под прицелом, не затрагивая остальные связи." } },
      { slot: "Supportive 2", name: { en: "Release All Chains", ru: "Снять все цепи" }, desc: { en: "Drop every active chain at once.", ru: "Одним действием снимает все активные цепи." } }
    ],
    asset: undefined
  },

  {
    id: "airborne-spikes",
    name: { en: "Airborne Spikes", ru: "Воздушные шипы" },
    character: { en: "Younger Shigyu brother", ru: "младший брат Сигю" },
    element: "spike",
    elementLabel: { en: "Aerial Spikes", ru: "Воздушные шипы" },
    tier: "sorcery",
    role: { en: "Choose between wide volleys and one focused piercing shot", ru: "Выбор между широким залпом и одним пробивающим выстрелом" },
    summary: {
      en: "Airborne Spikes has a simple choice: cover more space or punch through one line. Quick volleys keep several enemies busy, a longer charge adds more projectiles, and Focused Spike trades that spread for a single shot that can break through terrain.",
      ru: "Воздушные шипы предлагают простой выбор: накрыть больше пространства или пробить одну линию. Быстрые залпы сдерживают группу, долгий заряд добавляет снаряды, а Сфокусированный шип меняет разброс на один выстрел, способный пройти сквозь рельеф."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Spike Volley", ru: "Залп шипов" }, desc: { en: "Scatter several airborne spikes across the targets ahead.", ru: "Рассыпает несколько воздушных шипов по целям впереди." } },
      { slot: "Secondary", name: { en: "Charged Spikes", ru: "Заряженные шипы" }, desc: { en: "Keep charging to add more spikes to the next volley.", ru: "Чем дольше длится зарядка, тем больше шипов будет в следующем залпе." } },
      { slot: "Utility",  name: { en: "Focused Spike", ru: "Сфокусированный шип" }, desc: { en: "Put the full charge into one spike that breaks suitable blocks along its path.", ru: "Собирает весь заряд в одном шипе, который ломает подходящие блоки на пути." } }
    ],
    asset: undefined
  },

  {
    id: "storehouse",
    name: { en: "Storehouse", ru: "Хранилище" },
    status: { en: "WIP", ru: "WIP" },
    character: { en: "Sazanami Clan", ru: "клан Садзанами" },
    element: "storage",
    elementLabel: { en: "Territory / Storehouse", ru: "Территория / Хранилище" },
    tier: "sorcery",
    role: { en: "A different control kit inside and outside the Storehouse", ru: "Два набора контроля: внутри Хранилища и за его пределами" },
    summary: {
      en: "Storehouse plays like two connected kits. Outside, it uses katana volleys, target displacement and projection anchors; inside, the same slots become shelf spears, temporary walls, door jumps and false corridors. The system is playable but still being developed.",
      ru: "Хранилище работает как два связанных набора. Снаружи доступны залпы катан, смещение целей и якоря проекции; внутри те же слоты превращаются в копья из полок, временные стены, прыжки через двери и ложные коридоры. Система уже работает, но всё ещё дорабатывается."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Hidden Arsenal / Shelf Spears", ru: "Скрытый арсенал / Полки-копья" }, desc: { en: "Outside, send katana volleys across the space ahead. Inside, make shelf-spears erupt down the aisle.", ru: "Снаружи выпускает залпы катан по пространству впереди. Внутри заставляет полки-копья вырываться вдоль прохода." } },
      { slot: "Secondary", name: { en: "Route Shift / Aisle Rewrite", ru: "Сдвиг маршрута / Перестройка прохода" }, desc: { en: "Outside, force a target into a new position. Inside, close and reopen routes with temporary walls.", ru: "Снаружи принудительно перемещает цель. Внутри перекрывает и открывает маршруты временными стенами." } },
      { slot: "Utility",  name: { en: "Storehouse Gate", ru: "Врата Хранилища" }, desc: { en: "Step into the Storehouse, or leave it and return to the position saved on entry.", ru: "Переносит в Хранилище, а при выходе возвращает к позиции, сохранённой перед входом." } },
      { slot: "Special",  name: { en: "Projection / Auction Floor", ru: "Проекция / Аукционный зал" }, desc: { en: "Outside, set anchors for Storehouse projections. Inside, claim the Auction Floor for stronger territorial control.", ru: "Снаружи ставит якоря для проекций Хранилища. Внутри захватывает Аукционный зал и усиливает контроль над территорией." } },
      { slot: "Supportive 1", name: { en: "Claim / Door Jump", ru: "Метка владения / Прыжок через дверь" }, desc: { en: "Outside, mark a target as Storehouse property. Inside, use a nearby door for a quick jump.", ru: "Снаружи помечает цель как собственность Хранилища. Внутри позволяет быстро переместиться через ближайшую дверь." } },
      { slot: "Supportive 2", name: { en: "Emergency Door / False Corridor", ru: "Аварийная дверь / Ложный коридор" }, desc: { en: "Outside, drag a target through a slit-door in an emergency. Inside, mislead enemies with false corridors and a brief slow.", ru: "Снаружи в экстренный момент утаскивает цель через дверь-щель. Внутри сбивает врагов с пути ложными коридорами и ненадолго замедляет их." } }
    ],
    asset: undefined
  },

  {
    id: "light",
    name: { en: "Light", ru: "Свет" },
    character: { en: "-", ru: "-" },
    element: "light",
    elementLabel: { en: "Hard Light", ru: "Твёрдый свет" },
    tier: "sorcery",
    role: { en: "Hard-light weapons that pierce, pin and cut through space", ru: "Оружие твёрдого света для пробивания, фиксации и контроля линии" },
    summary: {
      en: "Light controls straight lines with solid constructs. Lances provide steady ranged pressure, Photon Beam commits to a full pierce, and Light Impale pins one target in place. Skyfall Beams punishes enemies who stay too close together.",
      ru: "Свет контролирует прямые линии с помощью твёрдых конструкций. Копья держат постоянное давление на расстоянии, Фотонный луч пробивает линию насквозь, а Пронзание светом фиксирует одну цель. Лучи с небес наказывают врагов, которые держатся слишком близко друг к другу."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Hard Light Lance", ru: "Копьё твёрдого света" }, desc: { en: "Throw a solid rod of light that breaks tagged blocks and remains lodged in a target or wall for a moment.", ru: "Бросает твёрдый стержень света, который ломает помеченные блоки и ненадолго остаётся в цели или стене." } },
      { slot: "Secondary", name: { en: "Photon Beam", ru: "Фотонный луч" }, desc: { en: "Hold to extend the beam. If it catches a target on activation, you snap into position and fire straight through it.", ru: "Удержание продлевает луч. Если при активации он захватывает цель, владелец резко сближается с ней и пробивает её насквозь." } },
      { slot: "Utility",  name: { en: "Light Impale", ru: "Пронзание светом" }, desc: { en: "Pin the nearest target in place with several hard-light rods.", ru: "Прибивает ближайшую цель к месту несколькими стержнями твёрдого света." } },
      { slot: "Special",  name: { en: "Skyfall Beams", ru: "Лучи с небес" }, desc: { en: "Rain vertical beams around yourself; each one tears through blocks and anything caught below.", ru: "Обрушивает вокруг вертикальные лучи, которые пробивают блоки и всё, что оказалось под ними." } },
      { slot: "Supportive 1", name: { en: "Lightspeed Kick", ru: "Световой удар" }, desc: { en: "After a 2.5-second charge, rush forward and drive a powerful kick into the first target you meet.", ru: "После 2,5 секунды зарядки бросает владельца вперёд и обрушивает мощный удар ногой на первую встреченную цель." } }
    ],
    asset: undefined
  },

  {
    id: "coin",
    name: { en: "Coin", ru: "Монета" },
    character: { en: "Soshiro Azami", ru: "Сосиро Адзами" },
    element: "coin",
    elementLabel: { en: "Coins / Precision", ru: "Монеты / Точность" },
    tier: "sorcery",
    role: { en: "Set six coins, then turn their positions into an electric trap", ru: "Расстановка шести монет и превращение их позиций в электрическую ловушку" },
    summary: {
      en: "Coin rewards good placement. Scatter up to six coins, wait for an enemy to cross the space between them, then send lightning through the entire network. Recalled coins become a short-lived orbiting arsenal, while the two sustained modes trade SE for speed or healing.",
      ru: "Монета награждает за точную расстановку. Разбросайте до шести монет, дождитесь, когда враг окажется между ними, и пропустите разряд через всю сеть. Отозванные монеты превращаются во временный орбитальный арсенал, а два постоянных режима обменивают SE на скорость или лечение."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Shoot Coin", ru: "Выстрел монетой" }, desc: { en: "Shoot one of up to six active coins. A direct hit deals damage, stuns for 0.5 seconds and adds a level of Weakness.", ru: "Выстреливает одну из шести доступных монет. Прямое попадание наносит урон, оглушает на 0,5 секунды и добавляет уровень Слабости." } },
      { slot: "Secondary", name: { en: "Lightning Discharge", ru: "Разряд молнии" }, desc: { en: "Send electricity through every placed coin. Enemies standing between them take damage and suffer a longer stun.", ru: "Проводит электричество через все размещённые монеты. Враги между ними получают урон и более долгое оглушение." } },
      { slot: "Utility",  name: { en: "Blood Flow Acceleration", ru: "Ускорение кровотока" }, desc: { en: "Call every coin back, striking enemies along the return path. Once in orbit, the coins fire at nearby targets one by one.", ru: "Возвращает все монеты, задевая врагов на обратном пути. На орбите они по очереди выстреливают в ближайшие цели." } },
      { slot: "Special",  name: { en: "Enhanced Speed", ru: "Усиленная скорость" }, desc: { en: "Drain SE for 30% more Power, 150% more melee damage and periodic direct damage that bypasses Stability.", ru: "Расходует SE ради +30% к силе, +150% к урону в ближнем бою и периодического прямого урона в обход стойкости." } },
      { slot: "Supportive 2", name: { en: "Coin Healing", ru: "Лечение монетами" }, desc: { en: "Keep spending SE to maintain Regeneration I.", ru: "Поддерживает Регенерацию I за постоянный расход SE." } }
    ],
    asset: assets.coinSorcery
  },

  {
    id: "daruma",
    name: { en: "Invincible (Daruma)", ru: "Неуязвимый (Дарума)" },
    character: { en: "Norisaku Madoka", ru: "Норисаку Мадока" },
    element: "doll",
    elementLabel: { en: "Dolls / Detonation", ru: "Куклы / Детонация" },
    tier: "sorcery",
    role: { en: "Plant explosive Darumas, reposition them and choose the moment", ru: "Расстановка взрывных дарум, их перемещение и выбор момента подрыва" },
    summary: {
      en: "Daruma is a trap kit with room for improvisation. Place dolls where enemies are likely to move, steer them into better positions with Telekinesis, then detonate one precise charge or set off the entire field at once.",
      ru: "Дарума — набор ловушек, который оставляет место для импровизации. Расставляйте кукол на вероятном пути врага, поправляйте их положение Телекинезом, а затем подрывайте одну точную ловушку или всё поле разом."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Daruma Launch", ru: "Запуск куклы дарума" }, desc: { en: "Charge and throw one Daruma. A longer charge sends the doll flying faster.", ru: "Заряжает и бросает одну куклу дарума. Чем дольше зарядка, тем выше скорость полёта." } },
      { slot: "Secondary", name: { en: "Targeted Explosion", ru: "Точечный взрыв" }, desc: { en: "Detonate the nearest Daruma along your line of sight.", ru: "Подрывает ближайшую куклу дарума по направлению взгляда." } },
      { slot: "Utility",  name: { en: "Telekinesis Control", ru: "Телекинез" }, desc: { en: "Hold to guide every active Daruma toward the point under your crosshair.", ru: "Пока кнопка удерживается, все активные дарумы движутся к точке под прицелом." } },
      { slot: "Special",  name: { en: "Mass Detonation", ru: "Массовая детонация" }, desc: { en: "Set off every active Daruma in the same instant.", ru: "В один момент подрывает все активные дарумы." } },
      { slot: "Supportive 1", name: { en: "Daruma Volley", ru: "Залп кукол дарума" }, desc: { en: "Throw several Darumas in a wide spread to prepare the area quickly.", ru: "Разбрасывает несколько дарум широким веером и быстро подготавливает область." } }
    ],
    asset: undefined
  },

  {
    id: "armored-doll",
    name: { en: "Armored Doll Creation", ru: "Создание бронированной куклы" },
    status: { en: "WIP", ru: "WIP" },
    character: { en: "Mod-original sorcery", ru: "Оригинальное колдовство мода" },
    element: "doll",
    elementLabel: { en: "Doll / Armor Plates", ru: "Кукла / Бронепластины" },
    tier: "sorcery",
    role: { en: "Fight beside a style-copying Doll and intercept attacks with armor plates", ru: "Бой рядом с копирующей стиль Куклой и перехват атак бронепластинами" },
    summary: {
      en: "This mod-original sorcery gives you a second fighter to command. The Armored Doll copies your Sword, Hand or Dual Katana style, can guard or pursue a chosen target, and may be controlled directly. Armor plates protect the owner when the Doll cannot be everywhere at once.",
      ru: "Это оригинальное колдовство мода даёт владельцу второго бойца. Бронированная кукла копирует выбранный стиль — катану, рукопашный бой или две катаны, — умеет защищать владельца, преследовать указанную цель и переходить под прямое управление. Бронепластины прикрывают хозяина, когда Кукла не успевает оказаться рядом."
    },
    abilities: [
      { slot: "Primary", name: { en: "Command", ru: "Команда" }, desc: { en: "Aim at an enemy to order the Doll to attack it. With no valid target, the Doll returns to Guard.", ru: "Наведитесь на врага, чтобы приказать Кукле атаковать. Если подходящей цели нет, она вернётся в режим защиты." } },
      { slot: "Secondary", name: { en: "Armor Plate", ru: "Бронепластина" }, desc: { en: "Meet the nearest incoming attack with one disposable plate. It absorbs 24 damage; anything left over still reaches you.", ru: "Выставляет одноразовую пластину навстречу ближайшей атаке. Она поглощает 24 урона, а остаток всё равно проходит по владельцу." } },
      { slot: "Utility", name: { en: "Full Armor", ru: "Полная броня" }, desc: { en: "Surround yourself with four directional plates, each with 24 durability. A heavier hit breaks its plate and carries the remaining damage through.", ru: "Окружает владельца четырьмя направленными пластинами прочностью 24 каждая. Более сильный удар ломает свою пластину и наносит оставшийся урон." } },
      { slot: "Supportive 1", name: { en: "Interpose", ru: "Перехват" }, desc: { en: "Open a brief rescue window. A nearby Doll steps between you and the next attack to block, parry, clash or take the hit itself.", ru: "Открывает короткое окно для спасения. Ближайшая Кукла встаёт между владельцем и следующей атакой, чтобы заблокировать, парировать, встретить её в столкновении или принять удар на себя." } },
      { slot: "Supportive 2", name: { en: "Remote Operation", ru: "Дистанционное управление" }, desc: { en: "See and fight through the Doll directly. Your real body remains where you left it and can still be attacked.", ru: "Переносит камеру и управление на Куклу. Настоящее тело остаётся на месте и всё ещё уязвимо для атак." } },
      { slot: "Special", name: { en: "Summon / Recall Doll", ru: "Призыв / отзыв Куклы" }, desc: { en: "Backstep and summon one Doll with your current Sword, Hand or Dual Katana style. Use the slot again to recall it.", ru: "Отступает рывком и призывает одну Куклу с текущим стилем: катана, рукопашный бой или две катаны. Повторное применение отзывает её." } }
    ],
    asset: undefined
  },

  {
    id: "pine-tree",
    name: { en: "Pine Tree Sorcery", ru: "Колдовство сосны" },
    character: { en: "Yura", ru: "Юра" },
    element: "nature",
    elementLabel: { en: "Pine / Seeds", ru: "Сосна / Семена" },
    tier: "sorcery",
    role: { en: "Grow the battlefield into walls, traps and erupting roots", ru: "Превращение поля боя в стены, ловушки и вырывающиеся корни" },
    summary: {
      en: "Pine Tree Sorcery steadily takes over the arena. Seeds become delayed traps, fresh trees close routes, and Spiral Trunk Thrust gives the kit a direct attack. Catastrophe Labyrinth is the payoff: ten seconds of roots and trunks erupting across a wide area.",
      ru: "Колдовство сосны постепенно захватывает поле боя. Семена становятся отложенными ловушками, новые деревья перекрывают маршруты, а Спиральный ствол даёт прямую атаку. Лабиринт катастрофы завершает подготовку десятью секундами непрерывных прорывов корней и стволов."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Spiral Trunk Thrust", ru: "Спиральный ствол" }, desc: { en: "Drill a tight spiral of trunks forward, hitting Stability as it advances.", ru: "Пускает вперёд плотную спираль стволов, которая пробивает путь и бьёт по стойкости." } },
      { slot: "Secondary", name: { en: "Seed Shot", ru: "Выстрел семенем" }, desc: { en: "Plant a seed in an enemy or anchor it to the terrain, then leave it there for a manual detonation.", ru: "Вживляет семя во врага или закрепляет его в земле, оставляя до ручного подрыва." } },
      { slot: "Utility",  name: { en: "Pine Bastion Wall", ru: "Сосновый бастион" }, desc: { en: "Grow a temporary wall of pines that repairs itself while active and vanishes when its time runs out.", ru: "Выращивает временную стену из сосен. Пока она действует, повреждённые деревья отрастают заново, а затем вся преграда исчезает." } },
      { slot: "Special",  name: { en: "Catastrophe Labyrinth", ru: "Лабиринт катастрофы" }, desc: { en: "For 10 seconds, roots and trunks keep bursting from a wide ring, with some growths bending toward nearby enemies.", ru: "В течение 10 секунд из широкого кольца непрерывно вырываются корни и стволы; часть побегов изгибается в сторону врагов." } },
      { slot: "Supportive 1", name: { en: "Seed Detonation", ru: "Детонация семян" }, desc: { en: "Tap to burst one seed under your crosshair. Hold for 1.5 seconds to set off every seed in the cone.", ru: "Короткое нажатие подрывает одно семя под прицелом. Удержание в течение 1,5 секунды взрывает все семена в конусе." } },
      { slot: "Supportive 2", name: { en: "Chaotic Seed Bastion", ru: "Хаотичный бастион семян" }, desc: { en: "Force the aimed seeds to erupt into a tangled wall of wood and leaves.", ru: "Заставляет семена в прицеле прорасти спутанной стеной из древесины и листвы." } }
    ],
    asset: undefined
  },

  {
    id: "jikai",
    name: { en: "Jikai", ru: "Дзикай" },
    character: { en: "Ikuto Hagiwara", ru: "Икуто Хагивара" },
    element: "magnet",
    elementLabel: { en: "Magnetism / Iron Sand", ru: "Магнетизм / Железный песок" },
    tier: "sorcery",
    awakening: { en: "Iron Sand Ascendance", ru: "Восхождение железного песка" },
    role: { en: "Control metal at range, then overwhelm the field with iron sand", ru: "Дальний контроль металла и наступление железным песком" },
    summary: {
      en: "Jikai controls both weapons and movement. Build a blade volley in the air, drag enemies and projectiles toward a magnetic point, or blast them away when they get too close. Awakening replaces that measured control with black-sand barrages, beams and MRI Impale.",
      ru: "Дзикай управляет и оружием, и движением. Собирайте в воздухе залп клинков, тяните врагов и снаряды к магнитной точке или отбрасывайте их при сближении. В Пробуждении размеренный контроль сменяется шквалами чёрного песка, лучами и МРТ-пронзанием."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Iron Blade Volley", ru: "Залп железных клинков" }, desc: { en: "Hold to arrange iron blades in the air, then release the entire spread at once.", ru: "Удержание выстраивает в воздухе веер железных клинков, отпускание выпускает весь залп разом." } },
      { slot: "Secondary", name: { en: "Magnetic Focus", ru: "Магнитный фокус" }, desc: { en: "Create a magnetic point that draws in enemies, projectiles and anything else it can move.", ru: "Создаёт магнитную точку, которая стягивает врагов, снаряды и другие подвижные объекты." } },
      { slot: "Utility",  name: { en: "Repulsion Ring", ru: "Кольцо отталкивания" }, desc: { en: "Clear the space around you with a magnetic burst that throws back enemies, projectiles and loose objects.", ru: "Освобождает пространство магнитным взрывом, отбрасывая врагов, снаряды и подвижные объекты." } },
      { slot: "Special",  name: { en: "Iron Sand Mode", ru: "Режим железного песка" }, desc: { en: "Surround yourself with iron sand that attacks nearby enemies and softens incoming pressure. Once the meter reaches 100%, press V to Awaken.", ru: "Окружает владельца железным песком, который атакует ближайших врагов и ослабляет входящее давление. Когда шкала достигнет 100%, нажмите V для Пробуждения." } },
      { slot: "Supportive 1", name: { en: "Magnetic Polarity", ru: "Магнитная полярность" }, desc: { en: "Tap to repel the aimed target or hold to pull it toward you. The lock works through blocks at up to 128 blocks.", ru: "Короткое нажатие отталкивает цель в прицеле, удержание притягивает её. Захват работает сквозь блоки на расстоянии до 128 блоков." } },
      { slot: "Supportive 2", name: { en: "Iron Sand Detonation", ru: "Детонация железного песка" }, desc: { en: "Burst every grain of iron sand built up on the aimed target and catch nearby enemies in the blast.", ru: "Взрывает весь железный песок, накопленный на цели в прицеле, и задевает врагов рядом." } }
    ],
    awakenedAbilities: [
      { slot: "Primary",  name: { en: "Awakened Iron Sand Barrage", ru: "Пробуждённый залп железного песка" }, desc: { en: "Tap for a quick black-sand volley, or hold to charge a beam that follows your aim.", ru: "Короткое нажатие выпускает быстрый залп чёрного песка; удержание заряжает луч, следующий за прицелом." } },
      { slot: "Secondary", name: { en: "Air Beam / Sand Cone", ru: "Воздушный луч / Конус песка" }, desc: { en: "Choose between a focused air beam at long range and a wide cone of iron sand against a group.", ru: "Позволяет выбрать между дальним направленным лучом воздуха и широким конусом железного песка против группы." } },
      { slot: "Utility",  name: { en: "Spike Repulsion Ring", ru: "Шиповое кольцо отталкивания" }, desc: { en: "After the magnetic push, a second wave scatters iron-sand spikes in every direction.", ru: "Сразу после магнитного толчка вторая волна разбрасывает шипы железного песка во все стороны." } },
      { slot: "Special",  name: { en: "MRI Impale", ru: "МРТ-пронзание" }, desc: { en: "Scan through terrain with MRI sight, then aim at a found target and press G again to pierce it with the mask and black sand.", ru: "МРТ-зрение находит цели сквозь рельеф. Наведитесь на обнаруженного врага и снова нажмите G, чтобы пронзить его маской и чёрным песком." } },
      { slot: "Supportive 1", name: { en: "Magnetic Polarity", ru: "Магнитная полярность" }, desc: { en: "Tap to repel the aimed target or hold to pull it toward you, even through blocks at up to 128 blocks.", ru: "Короткое нажатие отталкивает цель, удержание притягивает её даже сквозь блоки на расстоянии до 128 блоков." } },
      { slot: "Supportive 2", name: { en: "Iron Sand Detonation", ru: "Детонация железного песка" }, desc: { en: "Burst the iron sand accumulated on the aimed target and catch nearby enemies in the blast.", ru: "Взрывает железный песок, накопленный на цели в прицеле, и задевает врагов рядом." } }
    ],
    asset: undefined
  },

  {
    id: "demon-bite",
    name: { en: "Demon Bite", ru: "Укус демона" },
    character: { en: "Bingo", ru: "Бинго" },
    element: "creature",
    elementLabel: { en: "Talisman / Charms", ru: "Талисман / Чары" },
    tier: "sorcery",
    role: { en: "Fight beside autonomous charms and feed the Demon Bite meter", ru: "Бой рядом с автономными чарами и накопление шкалы Укуса демона" },
    summary: {
      en: "Demon Bite mixes direct attacks with disposable helpers. Bites build the meter up close, Charm Shot handles range, and flying charms hunt on their own. Killing those summons is useful, but the attacker pays a growing penalty for doing it repeatedly.",
      ru: "Укус демона сочетает личные атаки с расходуемыми помощниками. Укусы наполняют шкалу вблизи, Выстрел чарами работает на расстоянии, а летающие чары сами ищут врагов. Призывы можно уничтожить, но за повторные убийства нападающий получает всё более сильный штраф."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Bite", ru: "Укус" }, desc: { en: "Snap a talisman jaw shut at close range and add to the Demon Bite meter.", ru: "Мгновенно смыкает рядом пасть из талисмана и пополняет шкалу Укуса демона." } },
      { slot: "Secondary", name: { en: "Charm Shot", ru: "Выстрел чарами" }, desc: { en: "Tap for a small charm projectile, or finish the charge for a much larger destructive shot.", ru: "Короткое нажатие выпускает небольшой снаряд из чар; полный заряд создаёт гораздо более крупный и разрушительный выстрел." } },
      { slot: "Utility",  name: { en: "Swarm Summon", ru: "Призыв роя" }, desc: { en: "Release a group of flying charms that choose and chase nearby enemies on their own.", ru: "Выпускает группу летающих чар, которые сами выбирают и преследуют ближайших врагов." } },
      { slot: "Supportive 1", name: { en: "Charm Summon", ru: "Призыв чар" }, desc: { en: "Call one autonomous flying charm. Whoever destroys it receives a penalty that grows with each repeated kill.", ru: "Призывает одни автономные летающие чары. Уничтоживший их противник получает штраф, который растёт с каждым повторным убийством." } }
    ],
    asset: undefined
  },

  {
    id: "smoke-axe",
    name: { en: "Smoke Axe", ru: "Дымовой топор" },
    character: { en: "Fushimi", ru: "Фусими" },
    element: "smoke",
    elementLabel: { en: "Smoke / Enbu", ru: "Дым / Энбу" },
    tier: "sorcery",
    role: { en: "Cut through targets, hide the approach and break enemy lock-on", ru: "Сквозные разрезы, скрытие подхода и срыв захвата цели" },
    summary: {
      en: "Smoke Axe is built around obscuring the approach. Enbu cuts straight through a target, smoke crescents keep pressure on at range, and Smoke Field makes it difficult for enemies to track you. Crosscut punishes a marked target after a short, visible wind-up.",
      ru: "Дымовой топор скрывает момент сближения. Энбу проходит сквозь цель с разрезом, дымовые полумесяцы поддерживают давление на расстоянии, а Дымовое поле мешает врагам удерживать захват. Крестовый разрез наказывает отмеченную цель после короткого заметного замаха."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Enbu", ru: "Энбу" }, desc: { en: "Stretch a bar of smoke between your hands, then follow it through the target with a cleaving dash.", ru: "Растягивает между руками полосу дыма, а затем проходит по ней сквозь цель рубящим рывком." } },
      { slot: "Secondary", name: { en: "Crescent / Grand Enbu", ru: "Полумесяц / Большой Энбу" }, desc: { en: "Tap for a quick smoke crescent. Complete the charge to turn it into Grand Enbu, a wider and heavier slash.", ru: "Короткое нажатие выпускает быстрый дымовой полумесяц. Полный заряд превращает его в Большой Энбу — более широкий и тяжёлый разрез." } },
      { slot: "Utility",  name: { en: "Smoke Field", ru: "Дымовое поле" }, desc: { en: "Fill the area with smoke that slows enemies and breaks their lock-on while they remain inside.", ru: "Заполняет область дымом, который замедляет врагов и сбивает их захват цели, пока они остаются внутри." } },
      { slot: "Supportive 1", name: { en: "Crosscut", ru: "Крестовый разрез" }, desc: { en: "Mark one target, endure the short wind-up, then pass through it with a cross-shaped cut.", ru: "Помечает одну цель и после короткого замаха проходит сквозь неё крестовым разрезом." } }
    ],
    asset: undefined
  },

  {
    id: "kurotsuchi",
    name: { en: "Kurotsuchi", ru: "Куротсучи" },
    character: { en: "Soga clan", ru: "Клан Сога" },
    element: "void",
    elementLabel: { en: "Gravity / Directional Force", ru: "Гравитация / Направленная сила" },
    tier: "sorcery",
    awakening: { en: "Island Breaker: Burning Heaven Mass", ru: "Разрушитель острова: Пылающая небесная масса" },
    role: { en: "Pin enemies with gravity, carry them through terrain and weaponize the ground", ru: "Прижимание гравитацией, перенос сквозь рельеф и превращение земли в оружие" },
    summary: {
      en: "Kurotsuchi controls weight on both a small and a massive scale. Hold enemies down with focused or wide pressure, tear a real chunk of terrain free and throw it, or catch targets in a directional dash. At full meter, Burning Heaven Mass turns all of that force into one catastrophic impact.",
      ru: "Куротсучи управляет весом — от одной цели до огромного участка земли. Прижимайте врагов точечным или широким полем, вырывайте цельный массив настоящих блоков и бросайте его или подхватывайте цели направленным рывком. При полной шкале Пылающая небесная масса собирает всю эту силу в одном катастрофическом ударе."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Gravity Pressure", ru: "Гравитационное давление" }, desc: { en: "Hold a 4-block pressure field at the point under your crosshair. It tracks nearby targets and keeps forcing them down for up to 60 ticks. The field costs 5 SE per tick and restores 1 tick of reserve every 2 idle ticks.", ru: "Удерживает поле давления радиусом 4 блока в точке под прицелом. Оно следует за ближайшими целями и прижимает их вниз не более 60 тиков. Поле расходует 5 SE в тик и возвращает 1 тик запаса за каждые 2 тика без использования." } },
      { slot: "Secondary", name: { en: "Gravity Terrain Mass", ru: "Гравитационная масса ландшафта" }, desc: { en: "Hold to tear out and suspend a chunk of real terrain, aim it, then release to throw. The 450 SE cost and cooldown apply only after a successful extraction. Each obstacle strips away some blocks, speed and impact force.", ru: "Удержание вырывает и поднимает цельный участок настоящего рельефа; наведите его и отпустите кнопку для броска. 450 SE и перезарядка списываются только после успешного захвата. Каждое препятствие отнимает часть блоков, скорости и силы удара." } },
      { slot: "Utility",  name: { en: "Directional Gravity Dash", ru: "Направленный гравитационный рывок" }, desc: { en: "WASD sets the direction, Space sends you up, and using the move in midair without a direction drives you down. Enemies caught on the way are carried with you; a downward dash can punch through three solid blocks.", ru: "WASD задаёт направление, Пробел отправляет вверх, а применение в воздухе без направления — вниз. Задетые враги переносятся вместе с владельцем; рывок вниз способен пробить до трёх сплошных блоков." } },
      { slot: "Supportive 1", name: { en: "Wide Gravity Pressure", ru: "Широкое гравитационное давление" }, desc: { en: "Hold to weigh down every enemy within roughly 32 blocks. This field has its own 60-tick reserve, costs 4 SE per tick and restores 1 tick after every 3 idle ticks.", ru: "Удержание прижимает всех врагов примерно в 32 блоках. У поля свой запас на 60 тиков, расход 4 SE в тик и восстановление 1 тика запаса за каждые 3 тика без использования." } },
      { slot: "Supportive 2", name: { en: "Gravity Collapse", ru: "Гравитационный сброс" }, desc: { en: "Crush every nearby enemy downward, dealing damage, staggering them and making it difficult to recover.", ru: "С силой вдавливает всех ближайших врагов вниз, наносит урон, сбивает их и мешает быстро восстановиться." } },
      { slot: "Special",  name: { en: "Kurotsuchi", ru: "Куротсучи" }, desc: { en: "Call out the black sphere to strengthen the rest of the kit and gain control over your descent.", ru: "Призывает чёрную сферу, которая усиливает остальные приёмы и позволяет управлять падением." } },
      { slot: "Passive", name: { en: "Ground Pressure", ru: "Давление весом" }, desc: { en: "While grounded, hold ordinary Shift within about one block of an enemy to pin it beneath your weight. Step away and the pressure ends immediately without dragging the target.", ru: "Стоя на земле примерно в одном блоке от врага, удерживайте обычный Shift, чтобы прижать его своим весом. Стоит отойти — давление сразу прекратится, не потащив цель следом." } },
      { slot: "Awakening", name: { en: "Burning Heaven Mass", ru: "Пылающая небесная масса" }, desc: { en: "At full meter, assemble an enormous burning mass above the point under your crosshair and send it down at extreme speed. The impact devastates health, Stability and terrain, and sets survivors alight.", ru: "При полной шкале собирает над точкой под прицелом огромную горящую массу и с чудовищной скоростью обрушивает её вниз. Удар сокрушает здоровье, стойкость и рельеф, а выживших поджигает." } }
    ],
    asset: undefined
  },

  {
    id: "sumika",
    name: { en: "Sumika", ru: "Сумика" },
    status: { en: "WIP", ru: "WIP" },
    character: { en: "Ariu Mikaboshi", ru: "Ариу Микабоси" },
    element: "creature",
    elementLabel: { en: "Space", ru: "Пространство" },
    tier: "sorcery",
    awakening: { en: "Sumika", ru: "Сумика" },
    role: { en: "Spatial control, regeneration and one overwhelming full activation", ru: "Контроль пространства, восстановление и одна сокрушительная полная активация" },
    summary: {
      en: "Sumika is the kit's only named ability. Its partial manifestation alters the space around the owner, obscures their movement, regenerates them and prevents certain foreign sorcery from affecting them. At full power, the same ability stops every valid target in a huge area and pierces each one three times.",
      ru: "Сумика — единственная именованная способность этого набора. Её частичное проявление изменяет пространство вокруг владельца, мешает противникам воспринимать его движения, восстанавливает здоровье и не даёт части чужого колдовства воздействовать на него. На полной силе та же способность останавливает все подходящие цели на огромной территории и трижды пронзает каждую."
    },
    abilities: [
      { slot: "Special", name: { en: "Sumika", ru: "Сумика" }, desc: { en: "Partially manifest Sumika within 20 blocks. Nearby enemies struggle to read your movement, you regenerate, and certain foreign sorcery cannot affect you. Enchanted Blades are exempt.", ru: "Частично проявляет Сумику в радиусе 20 блоков. Противникам сложнее воспринимать движения владельца, он восстанавливает здоровье, а часть чужого колдовства не может на него воздействовать. Зачарованные клинки — исключение." } },
      { slot: "Awakening", name: { en: "Sumika", ru: "Сумика" }, desc: { en: "Fully activate Sumika at a full meter. Every valid target within 64 blocks is stopped and pierced three times. The attack ignores Stability and instantly kills weaker creatures.", ru: "При полной шкале полностью активирует Сумику. Все подходящие цели в радиусе 64 блоков останавливаются и получают три пробивающих отверстия. Атака обходит стойкость и сразу убивает слабых существ." } }
    ],
    asset: undefined
  },

  {
    id: "di-algodze",
    name: { en: "Diagoldze", ru: "Диагользе" },
    character: { en: "-", ru: "-" },
    element: "spear",
    elementLabel: { en: "Gold / Transmutation", ru: "Золото / Трансмутация" },
    tier: "sorcery",
    awakening: { en: "Sage of Destruction", ru: "Мудрец разрушения" },
    role: { en: "Build Gild with golden weapons, then transmute the target completely", ru: "Накопление Позолоты золотым оружием и полная трансмутация цели" },
    summary: {
      en: "Diagoldze is a bonus crossover sorcery built around Gild. Close strikes, golden weapons and area transmutation add it to the target; once enough has accumulated, Living Statue makes the change permanent. Sage of Destruction upgrades the regular constructs into a far more destructive set.",
      ru: "Диагользе — бонусное кроссоверное колдовство, построенное вокруг Позолоты. Ближние удары, золотое оружие и трансмутация области накапливают её на цели; когда Позолоты достаточно, Живая статуя делает превращение постоянным. Мудрец разрушения заменяет обычные конструкции гораздо более разрушительным набором."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Golden Bite", ru: "Золотой укус" }, desc: { en: "A close transmutation strike that adds Gild to the target and fills the Diagoldze meter.", ru: "Ближний трансмутирующий удар добавляет цели Позолоту и заполняет шкалу Диагользе." } },
      { slot: "Secondary", name: { en: "Golden Sword Volley", ru: "Залп золотых мечей" }, desc: { en: "Tap to throw one golden sword. Keep charging to widen the volley and add more blades.", ru: "Короткое нажатие бросает один золотой меч. Дальнейшая зарядка расширяет залп и добавляет клинки." } },
      { slot: "Utility",  name: { en: "Golden Domain Burst", ru: "Взрыв золотого домена" }, desc: { en: "Finish the charge to turn the space around you to gold and briefly stun everyone nearby.", ru: "Полный заряд превращает пространство вокруг в золото и ненадолго оглушает всех поблизости." } },
      { slot: "Special",  name: { en: "Living Statue", ru: "Живая статуя" }, desc: { en: "Spend all Gild stored on a visible target and permanently turn it into a living golden statue.", ru: "Расходует всю Позолоту на видимой цели и навсегда превращает её в живую золотую статую." } },
      { slot: "Supportive 1", name: { en: "Point Transmutation", ru: "Точечная трансмутация" }, desc: { en: "Charge while aiming at terrain to gild an area, or aim at a living target to apply Gild directly.", ru: "Зарядите приём, наведясь на рельеф, чтобы позолотить область, или на живую цель, чтобы сразу наложить Позолоту." } },
      { slot: "Supportive 2", name: { en: "Golden Sword", ru: "Золотой меч" }, desc: { en: "Call an 8-damage golden sword into your main hand, or use the slot again to dismiss it.", ru: "Призывает в основную руку золотой меч с 8 единицами урона. Повторное применение убирает его." } }
    ],
    asset: assets.diAlgodze
  },

  {
    id: "adaptation",
    name: { en: "Adaptation", ru: "Адаптация" },
    character: { en: "-", ru: "-" },
    element: "adapt",
    elementLabel: { en: "Adaptation / Wheel", ru: "Адаптация / Колесо" },
    tier: "sorcery",
    role: { en: "Study one hostile technique until it stops being a threat", ru: "Изучение одной вражеской техники до полной устойчивости к ней" },
    summary: {
      en: "Adaptation is a bonus crossover kit that studies one threat at a time. Lock the last hostile technique that truly affected you, then turn the wheel through repeated exposure and negative effects until resistance builds. Death clears that progress unless the server rule says otherwise.",
      ru: "Адаптация — бонусный кроссоверный набор, который изучает по одной угрозе за раз. Зафиксируйте последнюю враждебную технику, действительно подействовавшую на владельца, а затем поворачивайте колесо повторными попаданиями и вредными эффектами, пока не вырастет сопротивление. По умолчанию смерть сбрасывает прогресс."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Lock Phenomenon", ru: "Зафиксировать явление" }, desc: { en: "Choose the last hostile sorcery that genuinely affected you as the wheel's current target.", ru: "Выбирает последнюю враждебную технику, действительно подействовавшую на владельца, как текущую цель колеса." } },
      { slot: "Secondary", name: { en: "Wheel Turn", ru: "Поворот колеса" }, desc: { en: "Advance the wheel one step against the recorded technique. Each manual turn has a 5-second cooldown.", ru: "Продвигает колесо на один шаг против записанной техники. Ручной поворот восстанавливается 5 секунд." } },
      { slot: "Utility",  name: { en: "Sword Manifest", ru: "Призыв меча" }, desc: { en: "Draw or sheath the Sword of Extermination. Its hits disable techniques you have already adapted to.", ru: "Достаёт или убирает Меч истребления. Его удары отключают техники, к которым владелец уже приспособился." } },
      { slot: "Supportive 1", name: { en: "Taunt / Status Turn", ru: "Провокация / Оборот статуса" }, desc: { en: "Enter a brief taunt stance. Gain one wheel turn for each active negative effect, plus one for the first hostile technique that hits during the stance.", ru: "Входит в короткую провоцирующую стойку. Даёт по одному обороту за каждый активный вредный эффект и ещё один — за первую враждебную технику, попавшую во время стойки." } },
      { slot: "Supportive 2", name: { en: "Reset Adaptation", ru: "Сброс адаптации" }, desc: { en: "Abandon the current target and all wheel progress so you can begin adapting to something else.", ru: "Отказывается от текущей цели и всего прогресса колеса, чтобы начать адаптацию к другой технике." } }
    ],
    asset: undefined
  }
];
