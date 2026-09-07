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
      en: "Use Kuro to cut at range or dash through an enemy, Aka to catch and reuse a sorcery attack, and Nishiki to reinforce close combat. Nishiki drains SE and builds fatigue while active.",
      ru: "Куро позволяет резать издали и проходить сквозь врага рывком, Ака — поглотить и повторить колдовскую атаку, Нисики — усилить ближний бой. Поддержание Нисики расходует SE и накапливает усталость."
    },
    abilities: [
      { slot: "Primary", name: { en: "Kuro: Slash", ru: "Куро: Разрез" }, desc: { en: "Swing Enten to send a black slash straight along your aim. Nishiki makes the slash faster, but reduces its range and damage.", ru: "Взмах Энтена выпускает чёрный разрез в направлении прицела. С Нисики разрез становится быстрее, но наносит меньше урона и не летит так далеко." } },
      { slot: "Secondary", name: { en: "Kuro: Shred", ru: "Куро: Кромсание" }, desc: { en: "Dash straight through the enemies ahead, cutting each one along the path. You pass through targets without carrying them. Nishiki changes the dash and reduces its damage.", ru: "Рывком проходит сквозь врагов перед вами и разрезает каждого на пути, не увлекая их за собой. Нисики меняет параметры рывка и уменьшает его урон." } },
      { slot: "Utility", name: { en: "Aka (Red)", ru: "Ака (Красный)" }, desc: { en: "Enter a brief absorption stance. If you catch a compatible sorcery attack, Utility becomes that attack for 20 seconds. Use Utility again to cast it before the stored attack expires.", ru: "Ненадолго принимает стойку поглощения. Если поймать подходящую колдовскую атаку, она на 20 секунд заменит этот слот. Примените его ещё раз, чтобы использовать поглощённый приём." } },
      { slot: "Special", name: { en: "Nishiki Mode", ru: "Режим Нишики" }, desc: { en: "Toggle Nishiki to move faster and strengthen melee attacks. Kuro becomes weaker. Keeping the mode active drains SE and builds fatigue, which reduces its bonuses.", ru: "Включает Нисики: вы быстрее двигаетесь и сильнее бьёте в ближнем бою, но Куро ослабевает. Режим постоянно расходует SE и накапливает усталость, из-за которой усиления уменьшаются." } },
      { slot: "Supportive 1", name: { en: "Summon Kuro", ru: "Призыв Куро" }, desc: { en: "Summon a Kuro goldfish for up to two minutes. You can keep several at once; the limit rises with your sorcery level. Enemies can kill them.", ru: "Призывает рыбку Куро на срок до двух минут. Можно держать несколько рыбок одновременно; их предел растёт с уровнем колдовства. Противник может их убить." } },
      { slot: "Supportive 2", name: { en: "Nishiki: Support", ru: "Нишики: Поддержка" }, desc: { en: "Toggle a defensive Nishiki mode for faster movement, extra armor, Absorption and Regeneration. It drains SE while active and builds fatigue.", ru: "Включает защитный режим Нисики: повышает скорость и броню, даёт Поглощение и Регенерацию. Пока режим активен, расходуется SE и накапливается усталость." } }
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
      en: "Combine rain with lightning against wet targets, or use fog and ice to hinder their movement. Lightning spends Thunder charges, which recover while you are not spending them. Hold Secondary to commit several charges to a storm.",
      ru: "Сочетайте дождь с молниями по мокрым целям или мешайте врагу двигаться туманом и льдом. Молнии тратят заряды грома, которые восстанавливаются, пока вы их не расходуете. Удержание дополнительного слота вкладывает несколько зарядов в грозу."
    },
    abilities: [
      { slot: "Primary", name: { en: "Thunder Strike", ru: "Удар грома" }, desc: { en: "Spend one Thunder charge to strike the area ahead with lightning after a brief wind-up. The hit deals extra Stability damage and briefly stuns. Wet targets take more damage.", ru: "Расходует один заряд грома и после короткого замаха бьёт молнией по области перед вами. Удар наносит повышенный урон стойкости и ненадолго оглушает. Мокрые цели получают больше урона." } },
      { slot: "Secondary", name: { en: "Lightning/Storm", ru: "Молния/Шторм" }, desc: { en: "Tap for lightning at the enemy ahead. Holding spends more Thunder charges; release with at least three consumed charges for a storm around you. Wet targets strengthen the lightning and can pass a chain strike to other wet targets.", ru: "Короткое нажатие бьёт молнией по врагу впереди. Удержание расходует дополнительные заряды грома; если потрачено хотя бы три, отпускание вызовет грозу вокруг вас. По мокрым целям молния бьёт сильнее и может перескочить на других мокрых врагов." } },
      { slot: "Utility", name: { en: "Fog/Rain", ru: "Туман/Дождь" }, desc: { en: "Tap to create rain and wet nearby targets. Hold for at least half a second and release to create fog instead. Enemies in the fog are blinded, slowed and lose Power.", ru: "Короткое нажатие вызывает дождь и намокание ближайших целей. Удерживайте не меньше полсекунды и отпустите, чтобы вместо дождя создать туман. В нём враги хуже видят, медленнее двигаются и теряют мощь." } },
      { slot: "Special", name: { en: "Thunder Dash", ru: "Рывок грома" }, desc: { en: "Toggle an electric aura to move faster and repeatedly damage enemies within reach. The aura follows you and drains SE until switched off.", ru: "Включает электрическую ауру: вы быстрее двигаетесь и периодически раните врагов рядом. Аура следует за вами и тратит SE, пока вы её не выключите." } },
      { slot: "Supportive 1", name: { en: "Cold Stream", ru: "Холодный поток" }, desc: { en: "Send a cold stream straight ahead. It damages and slows targets and briefly freezes them. Suitable blocks along the stream turn to ice temporarily.", ru: "Выпускает холодный поток прямо перед вами. Он ранит и замедляет цели, ненадолго замораживая их. Подходящие блоки на пути временно превращаются в лёд." } },
      { slot: "Supportive 2", name: { en: "Ice Spikes", ru: "Ледяные шипы" }, desc: { en: "Raise ice spikes around you. They damage and briefly freeze nearby targets; some are enclosed in ice. The ice disappears after a short time.", ru: "Поднимает ледяные шипы вокруг вас. Они ранят и ненадолго замораживают ближайшие цели; некоторых заключают в лёд. Созданный лёд позже исчезает." } }
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
      en: "Geisha attacks build Intoxication, which distorts an enemy's view and can delay their actions. Use marks to sustain it, then tear up the surroundings and throw them at your targets. The Special slot remains a placeholder.",
      ru: "Атаки гейш накапливают Опьянение, которое искажает изображение у врага и может задерживать его действия. Метки поддерживают эффект, а Игра вырывает части окружения и обращает их против целей. Особый слот пока остаётся заглушкой."
    },
    abilities: [
      { slot: "Primary", name: { en: "Banquet: First Cup", ru: "Пир: Первая чаша" }, desc: { en: "Send a geisha through the target ahead to deal light damage and attempt to add Intoxication. Blocking reduces the chance of the effect. Intoxication distorts the victim's view and can delay their actions.", ru: "Посылает гейшу сквозь цель перед вами: она слегка ранит и пытается наложить Опьянение. Блок снижает шанс эффекта. Опьянение искажает изображение у жертвы и может задерживать её действия." } },
      { slot: "Secondary", name: { en: "Play: String Pull", ru: "Игра: Нить управления" }, desc: { en: "Tap to tear loose an object and throw it at a selected enemy. Hold and release for a larger volley against several targets. The geisha uses nearby breakable scenery as ammunition.", ru: "Короткое нажатие вырывает объект и бросает его в выбранного врага. Удержание с отпусканием выпускает больший залп по нескольким целям. Гейша использует разрушаемое окружение как боеприпасы." } },
      { slot: "Utility", name: { en: "Banquet: Wake", ru: "Пир: Пробуждение" }, desc: { en: "Spread Intoxication and arm a one-use safeguard for 15 seconds. If you receive a lethal hit during that time, escape to a safer position with 30% health instead. The safeguard is then spent.", ru: "Распространяет Опьянение и на 15 секунд подготавливает одно спасение от смерти. Смертельный удар за это время вместо гибели перенесёт вас в более безопасное место с 30% здоровья. После этого защита потрачена." } },
      { slot: "Special", name: { en: "Future", ru: "Недоступно" }, desc: { en: "This slot is reserved and currently does nothing.", ru: "Зарезервированный слот. Сейчас он ничего не делает." } },
      { slot: "Supportive 1", name: { en: "Banquet: Designated Guest", ru: "Пир: Назначенный гость" }, desc: { en: "Tap to mark one target with a geisha. Hold and release to mark up to three already-intoxicated enemies. Their combat actions then feed further Intoxication.", ru: "Короткое нажатие помечает одну цель гейшей. Удержание с отпусканием помечает до трёх уже опьянённых врагов. Их боевые действия затем усиливают Опьянение." } },
      { slot: "Supportive 2", name: { en: "Play: Destructive Play", ru: "Игра: Разрушительная игра" }, desc: { en: "Aim at a structure to tear apart one section and hit creatures caught there. Hold and release to repeat the destruction in waves, using the surroundings against them.", ru: "Наведитесь на постройку, чтобы разорвать её часть и поразить существ внутри. Удержание с отпусканием повторяет разрушение волнами, обращая окружение против них." } }
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
    role: { en: "Dragonfly, Centipede, Spider and the drawn blade’s Curse", ru: "Стрекоза, Сороконожка, Паук и Проклятие обнажённого клинка" },
    summary: {
      en: "WIP. The current playable kit has Dragonfly, Centipede and Spider, plus the Curse of the drawn blade. Drawing Magatsumi strengthens its effects but drains SE. Bee and Butterfly are not currently available as slots.",
      ru: "WIP. Сейчас доступны Стрекоза, Сороконожка и Паук, а также Проклятие обнажённого клинка. Если достать Магацуми из ножен, его эффекты усиливаются, но расходуется SE. Пчела и Бабочка сейчас не доступны как слоты."
    },
    abilities: [
      { slot: "Primary", name: { en: "Dragonfly", ru: "Стрекоза" }, desc: { en: "Hold to prepare Dragonfly, then release a narrow blast straight ahead. It damages targets and breaks suitable blocks along the path. Holding longer does not increase the damage.", ru: "Удерживайте для подготовки Стрекозы, затем отпустите, чтобы выпустить узкий удар прямо перед собой. Он ранит цели и разрушает подходящие блоки на пути. Долгое удержание не увеличивает урон." } },
      { slot: "Secondary", name: { en: "Centipede", ru: "Сороконожка" }, desc: { en: "Charge without moving, then release a blast that expands in every direction. A full charge takes 1.5 seconds sheathed or half a second drawn. Releasing early cancels the attack; charging spends SE.", ru: "Заряжает атаку на месте, а при отпускании выпускает взрыв, расходящийся во все стороны. Полный заряд: 1,5 секунды в ножнах или полсекунды с обнажённым клинком. Раннее отпускание отменяет атаку; зарядка тратит SE." } },
      { slot: "Utility", name: { en: "Spider", ru: "Паук" }, desc: { en: "Spread a web around yourself. Enemies caught inside cannot move freely or use their usual attacks and sorcery, and receive True Wound. The web expires on its own; drawing Magatsumi enlarges it.", ru: "Расстилает вокруг вас паутину. Попавшие в неё враги не могут свободно двигаться и пользоваться обычными атаками и колдовством, а также получают Истинную рану. Паутина исчезает сама; обнажённый клинок увеличивает её." } },
      { slot: "Passive", name: { en: "Curse", ru: "Проклятие" }, desc: { en: "While Magatsumi is drawn and you have SE, it spreads its Curse to nearby creatures. The effect builds over time and periodically damages health directly, bypassing Stability.", ru: "Пока Магацуми обнажён и хватает SE, клинок распространяет Проклятие на ближайших существ. Эффект постепенно накапливается и периодически повреждает здоровье напрямую, обходя стойкость." } }
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
      en: "Move through feathers, swap positions and fly with Crow. Toggle Suzaku to heal yourself and allies and change some attacks. Black Flames temporarily strengthens Suzaku and removes its SE drain, but the Awakening's end is lethal under ordinary rules.",
      ru: "Перемещайтесь через перья, меняйте позиции и летайте с Вороном. Включайте Судзаку для лечения себя и союзников и изменения части атак. Чёрное пламя временно усиливает Судзаку и отменяет его расход SE, но при обычных правилах окончание Пробуждения смертельно."
    },
    abilities: [
      { slot: "Primary", name: { en: "Feather Step", ru: "Перьевой шаг" }, desc: { en: "Hold to aim at the feather marker, then release to teleport there and strike nearby enemies. Aim at a creature to appear just in front of it. With Suzaku, the arrival also burns enemies and heals allies.", ru: "Удерживайте, чтобы выбрать отмеченную перьями точку, и отпустите: вы переместитесь туда и ударите врагов рядом. При наведении на существо окажетесь перед ним. С Судзаку удар также поджигает врагов и лечит союзников." } },
      { slot: "Secondary", name: { en: "Crow Rush", ru: "Воронья атака" }, desc: { en: "Hold to fly in the direction you are looking, damaging enemies along the feather trail. Flight drains SE and a separate 15-second reserve. Release to stop; the reserve replenishes over time.", ru: "Удерживайте, чтобы лететь в направлении взгляда и ранить врагов следом из перьев. Полёт тратит SE и отдельный запас на 15 секунд. Отпустите для остановки; запас постепенно восстанавливается." } },
      { slot: "Utility", name: { en: "External Crow", ru: "Внешний ворон" }, desc: { en: "Without Suzaku, tap to swap places with the creature you aim at; hold and release to shuffle nearby creatures and projectiles. With Suzaku, pressing instead damages, burns and knocks back enemies around you.", ru: "Без Судзаку короткое нажатие меняет вас местами с существом в прицеле; удержание и отпускание перемешивают позиции существ и снарядов вокруг. С Судзаку нажатие вместо обмена ранит, поджигает и отбрасывает ближайших врагов." } },
      { slot: "Special", name: { en: "Suzaku", ru: "Судзаку" }, desc: { en: "Toggle Suzaku to heal yourself and nearby allies, remove harmful effects and restore recently damaged surroundings. It drains SE continuously. Black Flames strengthens Suzaku and removes its drain, but ordinary expiry or cancellation kills you.", ru: "Включает Судзаку: лечит вас и ближайших союзников, снимает вредные эффекты и восстанавливает недавно разрушенное окружение. Постоянно тратит SE. Чёрное пламя усиливает Судзаку и убирает этот расход, но при обычных правилах его окончание или отмена убивает вас." } },
      { slot: "Supportive 1", name: { en: "Phoenix Strike", ru: "Удар феникса" }, desc: { en: "Aim toward an enemy. Without Suzaku, feathers warn them before you appear behind their back and strike half a second later. With Suzaku, you stay in place and send two burning cuts forward in an X.", ru: "Наведитесь в сторону врага. Без Судзаку перед ним появятся перья, а через полсекунды вы окажетесь за его спиной и ударите. С Судзаку вы остаётесь на месте и выпускаете вперёд два огненных разреза крест-накрест." } },
      { slot: "Awakening", name: { en: "Black Flames", ru: "Чёрное пламя" }, desc: { en: "At full meter, press V to strengthen active Suzaku for 60 seconds without its SE drain. Activate Suzaku separately with G. Expiry or cancellation with V kills you, even with a Totem, unless infinite awakenings are enabled.", ru: "При полной шкале нажмите V: действующее Судзаку усилится на 60 секунд и перестанет тратить SE. Само Судзаку нужно включить на G. Окончание или отмена на V убивает вас даже с Тотемом, если не включено правило бесконечных пробуждений." } }
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
      en: "Summon the Flame Bone before attacking. Use its hand for explosive punches or launch it as a guided projectile. The ribs either rise in a row at your aim or surround you as a temporary barricade.",
      ru: "Перед атакой призовите Пламенную кость. Её рукой можно наносить взрывные удары или запускать её как управляемый снаряд. Рёбра вырастают рядом по направлению прицела либо окружают вас временной преградой."
    },
    abilities: [
      { slot: "Special", name: { en: "Summon Flame Bone of the Starving", ru: "Призыв Пламенной кости Голодающего" }, desc: { en: "Summon the Flame Bone into your main hand to use its attacks. Press again to dismiss it and end its active effects.", ru: "Призывает Пламенную кость в основную руку и открывает её приёмы. Повторное нажатие убирает оружие и прекращает его активные эффекты." } },
      { slot: "Primary", name: { en: "Bone Burst", ru: "Костяной взрыв" }, desc: { en: "Tap for a short rush followed by an explosive punch. Hold briefly for a stronger blast. You cannot punch while the hand is flying separately; recall it with Secondary first.", ru: "Короткое нажатие делает небольшой рывок и удар со взрывом. Небольшое удержание усиливает взрыв. Пока рука летит отдельно, бить нельзя — сначала верните её дополнительным слотом." } },
      { slot: "Secondary", name: { en: "Hand Launch", ru: "Запуск руки" }, desc: { en: "Launch the hand and steer it by moving your crosshair. It breaks through obstacles and explodes on impact. Press this slot again to recall it early; Primary remains unavailable until it returns.", ru: "Запускает руку отдельно от вас. Ведите её прицелом: она пробивает препятствия и взрывается при попадании. Повторное нажатие возвращает руку раньше; основной приём недоступен до её возвращения." } },
      { slot: "Utility", name: { en: "Ribs: Rampart", ru: "Рёбра: Бастион" }, desc: { en: "Raise a ring of ribs around yourself to obstruct approaching enemies. The ribs make room for their owner and disappear when their duration ends.", ru: "Поднимает вокруг вас кольцо рёбер, преграждая путь приближающимся врагам. Рёбра пропускают владельца и исчезают по окончании действия." } },
      { slot: "Supportive 1", name: { en: "Ribs: Uprise", ru: "Рёбра: Всплеск" }, desc: { en: "Aim at the ground to raise a row of ribs there. They emerge one after another, damaging enemies caught in their path and leaving a temporary obstacle.", ru: "Наведитесь на землю, чтобы поднять там ряд рёбер. Они вырастают друг за другом, ранят оказавшихся на пути врагов и оставляют временное препятствие." } }
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
      en: "Itazura lets you reposition yourself and other creatures. Blink behind a target, take them into the air, rescue an ally or return to a saved mark. The group mode carries nearby creatures with a compatible teleport.",
      ru: "Итадзура перемещает вас и других существ. Можно оказаться за спиной цели, перенести её в воздух, спасти союзника или вернуться к метке. Групповой режим забирает ближайших существ с собой при подходящем телепорте."
    },
    abilities: [
      { slot: "Primary", name: { en: "Tactical Shift", ru: "Тактический сдвиг" }, desc: { en: "Teleport forward along your aim. If you aim at a creature, appear behind it instead.", ru: "Мгновенно переносит вперёд по направлению прицела. Если навести на существо, вы окажетесь за его спиной." } },
      { slot: "Secondary", name: { en: "High-Altitude Drop", ru: "Сброс с высоты" }, desc: { en: "Aim at a creature to teleport up to it and attempt a light attack, then take both of you 100 blocks into the air. The target is left to fall.", ru: "Наведитесь на существо: вы переместитесь к нему и попытаетесь нанести лёгкую атаку, затем вы оба окажетесь на 100 блоков выше. После переноса цель начнёт падать." } },
      { slot: "Utility", name: { en: "Rescue Evacuation", ru: "Спасение союзника" }, desc: { en: "Find a nearby ally and teleport away with them. The ability searches for a safe place away from threats rather than taking you to your crosshair.", ru: "Находит ближайшего союзника и переносит вас обоих в безопасное место подальше от угроз. Точку выбирает способность, а не ваш прицел." } },
      { slot: "Special", name: { en: "Mass Teleport", ru: "Массовая телепортация" }, desc: { en: "Enable group transport for the next compatible teleport. Nearby creatures travel with you, then the mode switches off.", ru: "Включает групповой перенос для следующего подходящего телепорта. Ближайшие существа переместятся вместе с вами, после чего режим отключится." } },
      { slot: "Supportive 1", name: { en: "Set/Use Return Mark", ru: "Точка возврата" }, desc: { en: "Press once to save your current position. Press again to return there and clear the mark.", ru: "Первое нажатие запоминает вашу текущую позицию. Второе возвращает туда и удаляет метку." } },
      { slot: "Supportive 2", name: { en: "Mark/Pursue Entity", ru: "Метка/Преследование" }, desc: { en: "Aim at a creature and press to mark it. Press again to teleport to its current position and clear the mark.", ru: "Наведитесь на существо и нажмите, чтобы пометить его. Повторное нажатие переносит к его текущей позиции и удаляет метку." } }
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
      en: "A crossover sword kit with advancing slashes, a cutting dash and a spinning attack around the wielder. Charge to extend your attacks, or taunt nearby mobs to draw them into a counterattack.",
      ru: "Кроссоверный набор мечника: движущиеся разрезы, атакующий рывок и круговой удар. Заряжайте приёмы для большей дальности или провоцируйте ближайших мобов, чтобы встретить их контратакой."
    },
    abilities: [
      { slot: "Primary", name: { en: "Crimson Slashes", ru: "Багровые разрезы" }, desc: { en: "Hold and release to send a moving flurry of slashes ahead. It catches a target and repeatedly cuts around it. A longer charge lets the attack travel farther.", ru: "Удерживайте и отпустите, чтобы послать вперёд движущуюся серию разрезов. Она захватывает цель и многократно режет вокруг неё. Долгая зарядка увеличивает дальность." } },
      { slot: "Secondary", name: { en: "Reaper's Flash", ru: "Вспышка жнеца" }, desc: { en: "Charge, then release to dash toward the enemy ahead and unleash a series of cuts. Charging spends SE and extends the dash.", ru: "Зарядите и отпустите, чтобы рвануть к врагу перед вами и нанести серию разрезов. Зарядка тратит SE и увеличивает дистанцию рывка." } },
      { slot: "Utility", name: { en: "Blade Blender", ru: "Вихрь клинка" }, desc: { en: "Spin with the blade and damage enemies within seven blocks of you. This is an attack around your position, not a projectile.", ru: "Разворачивается с клинком и ранит врагов в радиусе семи блоков. Приём бьёт вокруг вашей позиции, а не выпускает снаряд." } },
      { slot: "Supportive 1", name: { en: "Taunt", ru: "Провокация" }, desc: { en: "Taunt nearby hostile mobs into targeting you. If at least one responds, gain Power. A hit received during the brief stance triggers a counterattack; players are not forced to attack.", ru: "Провоцирует ближайших враждебных мобов переключиться на вас. Если хотя бы один откликнулся, вы получаете мощь. Удар во время короткой стойки вызывает контратаку; игроков провокация не заставляет атаковать." } }
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
      en: "Send shockwaves ahead to damage and knock back enemies. Charge for a broader, stronger wave, or use the movement slot to propel yourself along your aim.",
      ru: "Посылайте ударные волны перед собой, чтобы ранить и отбрасывать врагов. Зарядка делает волну шире и сильнее; отдельный приём перемещения толкает вас по направлению прицела."
    },
    abilities: [
      { slot: "Primary", name: { en: "Shockwave", ru: "Ударная волна" }, desc: { en: "Send a shockwave straight ahead to damage and knock back the targets it hits.", ru: "Посылает прямо перед вами ударную волну, которая ранит и отбрасывает задетые цели." } },
      { slot: "Secondary", name: { en: "Charge Blast", ru: "Заряженный взрыв" }, desc: { en: "Hold to charge, then release a widening shockwave in the direction you are looking. A longer charge increases its damage, reach and knockback, and breaks more terrain along its path.", ru: "Удерживайте для зарядки и отпустите, чтобы выпустить расширяющуюся ударную волну по направлению взгляда. Чем дольше заряд, тем дальше и сильнее она бьёт, отбрасывает цели и разрушает рельеф на пути." } },
      { slot: "Utility", name: { en: "Aerial Dash", ru: "Воздушный рывок" }, desc: { en: "Propel yourself in the direction you are looking. Aim upward to gain height or sideways to move out of an attack.", ru: "Толкает вас в направлении взгляда. Посмотрите вверх, чтобы набрать высоту, или в сторону, чтобы уйти с линии атаки." } }
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
      en: "Spend Stored Heat on burns, beams and a blast around yourself. Movement and combat build heat; you can also convert SE into it. The strongest beam consumes the whole reserve.",
      ru: "Расходуйте накопленное тепло на ожоги, лучи и взрыв вокруг себя. Движение и бой пополняют тепло; его также можно получать из SE. Самый сильный луч расходует весь запас."
    },
    abilities: [
      { slot: "Primary", name: { en: "Scorch Touch", ru: "Ожог" }, desc: { en: "Burn a nearby target in front of you by spending Stored Heat. This attack uses your heat reserve rather than SE.", ru: "Обжигает ближайшую цель перед вами, расходуя накопленное тепло. Для этого удара нужен запас тепла, а не SE." } },
      { slot: "Secondary", name: { en: "Heat Ray", ru: "Тепловой луч" }, desc: { en: "Hold to feed Stored Heat into a beam, then release along your aim. Charging longer strengthens the beam; it can be released before the charge is full.", ru: "Удерживайте, чтобы вложить накопленное тепло в луч, и отпустите для выстрела по прицелу. Более долгая зарядка усиливает луч; полного заряда ждать необязательно." } },
      { slot: "Utility", name: { en: "Flashpoint", ru: "Вспышка" }, desc: { en: "Hold and release to send heat outward around you, damaging and burning nearby targets. A longer charge increases the area and spends more Stored Heat.", ru: "Удерживайте и отпустите, чтобы выпустить волну жара вокруг себя, раня и поджигая ближайшие цели. Более долгая зарядка увеличивает область и расход накопленного тепла." } },
      { slot: "Special", name: { en: "Hagure", ru: "Хагуре" }, desc: { en: "Spend your entire heat reserve on one beam along your aim. The more Stored Heat you have, the stronger the blast. You need a minimum reserve to fire.", ru: "Выпускает по прицелу луч, расходуя весь запас тепла. Чем больше тепла накоплено, тем сильнее удар. Без минимального запаса приём не сработает." } },
      { slot: "Supportive 1", name: { en: "Heat Generation", ru: "Генерация жара" }, desc: { en: "Toggle heat generation to convert SE into Stored Heat continuously. Press again to stop the conversion.", ru: "Включает выработку тепла: SE непрерывно превращается в накопленное тепло. Повторное нажатие прекращает выработку." } }
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
      en: "Place up to four pegs to define a trap, then hold the tendril ability to bind targets inside it. Clear the pegs or redeploy all four when you need to move the trap.",
      ru: "Поставьте до четырёх колышков, чтобы задать ловушку, затем удерживайте приём с отростками для связывания целей внутри. Убирайте колышки или переставляйте все четыре, когда нужно перенести ловушку."
    },
    abilities: [
      { slot: "Primary", name: { en: "Place Peg", ru: "Установка кола" }, desc: { en: "Place a binding peg on the surface you aim at. You can place up to four; together they define the area used by Secondary.", ru: "Ставит связывающий колышек на поверхность под прицелом. Можно поставить до четырёх: они задают область для дополнительного приёма." } },
      { slot: "Secondary", name: { en: "Binding Tendrils", ru: "Связующие щупальца" }, desc: { en: "Hold to bind targets between the pegs with black tendrils. The tendrils pull captives toward the center, damage them and restrict their actions. Release to stop spending SE and loosen the bindings.", ru: "Удерживайте, чтобы связать цели между колышками чёрными отростками. Они тянут пленников к центру, ранят их и ограничивают действия. Отпустите, чтобы прекратить расход SE и снять удержание." } },
      { slot: "Utility", name: { en: "Clear Pegs", ru: "Убрать колы" }, desc: { en: "Remove every peg you have placed so you can set up the binding area elsewhere.", ru: "Убирает все ваши колышки, чтобы можно было подготовить область связывания в другом месте." } },
      { slot: "Supportive 1", name: { en: "Quadrant Deploy", ru: "Квадрант" }, desc: { en: "Aim at a position to place all four pegs around it at once. This replaces the previous setup; use Secondary to activate the bindings.", ru: "Наведитесь на точку, чтобы сразу поставить вокруг неё четыре колышка вместо прежних. Для связывания целей затем используйте дополнительный приём." } }
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
      en: "WIP. Shape terrain into thrown stones, pillars, walls and a rising platform. Aim at suitable ground and use the resulting obstacles to change the battlefield.",
      ru: "WIP. Превращайте рельеф в метательные камни, столбы, стены и поднимающуюся платформу. Выбирайте подходящую землю и меняйте поле боя созданными препятствиями."
    },
    abilities: [
      { slot: "Primary", name: { en: "Launch Rock", ru: "Бросок камня" }, desc: { en: "Lift stones from the ground and hurl them toward the target ahead. You need terrain the ability can use.", ru: "Поднимает камни из земли и бросает их в цель перед вами. Для приёма нужен подходящий рельеф." } },
      { slot: "Secondary", name: { en: "Earth Pillar", ru: "Земляной столп" }, desc: { en: "Raise a stone pillar beneath the creature you aim at. The growing pillar carries the target upward.", ru: "Поднимает каменный столб под существом в прицеле. Растущий столб выталкивает цель вверх." } },
      { slot: "Utility", name: { en: "Build Wall", ru: "Постройка стены" }, desc: { en: "Raise a stone wall around your position. The wall is built gradually, so it does not protect every side immediately.", ru: "Возводит каменную стену вокруг вашей позиции. Она строится постепенно, поэтому не закрывает все стороны мгновенно." } },
      { slot: "Special", name: { en: "Platform Lift", ru: "Подъём платформы" }, desc: { en: "Hold to prepare a platform of terrain, then release to lift it with everything standing on it. Press again to bring it down; otherwise it descends when its duration ends.", ru: "Удерживайте для подготовки платформы из земли, затем отпустите, чтобы поднять её вместе со всем, что на ней стоит. Повторное нажатие опускает платформу; иначе она опустится по окончании действия." } },
      { slot: "Supportive 1", name: { en: "Boulder Throw", ru: "Бросок валуна" }, desc: { en: "Hold to prepare a large stone boulder, then release to throw it along your aim. It explodes on impact, damaging targets and surrounding terrain.", ru: "Удерживайте, чтобы подготовить большой каменный валун, и отпустите для броска по прицелу. При столкновении он взрывается, раня цели и разрушая окружение." } },
      { slot: "Supportive 2", name: { en: "Seismic Slam", ru: "Сейсмический удар" }, desc: { en: "Strike the ground to damage nearby creatures and break up the terrain around you.", ru: "Ударяет по земле, раня ближайших существ и разрушая рельеф вокруг вас." } }
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
      en: "Prepare marks to rescue allies or move attackers away from them. Travel through obstacles when there is a safe exit, or evacuate a group. These abilities change positions rather than deal direct damage.",
      ru: "Готовьте метки, чтобы вытянуть союзника из опасности или отвести от него нападающего. Проходите сквозь препятствия с безопасным выходом либо выводите целую группу. Приёмы меняют позиции, а не наносят прямой урон."
    },
    abilities: [
      { slot: "Primary", name: { en: "Path Mark", ru: "Метка пути" }, desc: { en: "Aim at an ally to mark them for rescue, or at an enemy to mark them for removal from their target. The mark prepares Secondary; it does not move anyone yet.", ru: "Наведитесь на союзника, чтобы пометить его для спасения, или на врага, чтобы отвести его от цели. Метка подготавливает дополнительный приём; сама по себе никого не перемещает." } },
      { slot: "Secondary", name: { en: "Intervention", ru: "Вмешательство" }, desc: { en: "Use a prepared mark to move its target. An ally is pulled to a safer position; an enemy is forced away from the person they threaten. The mark is consumed.", ru: "Расходует подготовленную метку и перемещает её цель. Союзника вытягивает в более безопасное место, врага отводит от того, кому он угрожает." } },
      { slot: "Utility", name: { en: "Phase Step", ru: "Фазовый шаг" }, desc: { en: "Move through an obstacle along your aim, provided the ability can find a safe exit on the other side. This move does not deal damage.", ru: "Проводит сквозь препятствие в направлении прицела, если с другой стороны есть безопасный выход. Само перемещение не наносит урон." } },
      { slot: "Special", name: { en: "Emergency Route", ru: "Аварийный маршрут" }, desc: { en: "Evacuate yourself and nearby allies to safer positions. Allies marked for rescue are selected first; each participant needs a clear destination.", ru: "Выводит вас и ближайших союзников в более безопасные позиции. Сначала выбирает союзников с метками спасения; для каждого нужна подходящая точка выхода." } }
    ],
    asset: undefined
  },

  {
    id: "lightning-menace",
    name: { en: "Lightning Menace", ru: "Грозовая угроза" },
    character: { en: "Natsuki Misaka", ru: "Нацуки Мисака" },
    element: "lightning",
    elementLabel: { en: "High Voltage", ru: "Высокое напряжение" },
    tier: "sorcery",
    role: { en: "Break guard up close, then carry the target through the fight", ru: "Пролом защиты вблизи и таран с переносом цели" },
    summary: {
      en: "Combine close electrical strikes with a narrow ranged shot. The charged rush catches and carries an enemy; the separate three-charge dash is for movement and deals no damage.",
      ru: "Сочетайте электрические удары вблизи с узким дальним разрядом. Заряженный рывок захватывает и тащит врага; отдельный рывок с тремя зарядами служит для перемещения и не наносит урон."
    },
    abilities: [
      { slot: "Primary", name: { en: "Voltage Strike", ru: "Разрядный удар" }, desc: { en: "Strike creatures immediately in front of you with electricity. The hit deals extra Stability damage and can break suitable blocks ahead.", ru: "Бьёт электричеством по существам прямо перед вами. Удар сильнее повреждает стойкость и может пробить подходящие блоки впереди." } },
      { slot: "Secondary", name: { en: "Thunder Ram", ru: "Громовой таран" }, desc: { en: "Charge, then release to rush forward and catch an enemy. You carry them along the dash; hitting an obstacle or reaching the end delivers the finishing blow.", ru: "Зарядите и отпустите, чтобы рвануть вперёд и захватить врага. Вы тащите его по пути рывка; столкновение с препятствием или конец пути завершает приём ударом." } },
      { slot: "Utility", name: { en: "Lightning Shot", ru: "Выстрел молнии" }, desc: { en: "Fire a narrow lightning strike along your aim. It damages and launches a target and breaks a thin path through suitable blocks.", ru: "Выпускает узкий разряд молнии по прицелу. Он ранит и подбрасывает цель, пробивая узкий проход в подходящих блоках." } },
      { slot: "Supportive 1", name: { en: "Flash Step", ru: "Молниеносный шаг" }, desc: { en: "Spend one of three charges to dash without dealing damage. Movement keys set the direction; with no movement input, follow your aim. Charges recover over time.", ru: "Тратит один из трёх зарядов на рывок без урона. Клавиши движения задают направление; без них рывок идёт по прицелу. Заряды постепенно восстанавливаются." } }
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
      en: "Bind a target with a chain or catch several creatures around you. Hold the pulling ability to bring captives closer, then release one chain or all of them when needed.",
      ru: "Свяжите цель цепью или захватите несколько существ вокруг себя. Удерживайте притяжение, чтобы приблизить пленников; при необходимости снимайте одну цепь или все сразу."
    },
    abilities: [
      { slot: "Primary", name: { en: "Chain Bind", ru: "Оковы цепью" }, desc: { en: "Send a chain straight ahead. The first creature hit is bound and cannot freely attack or use sorcery. A solid block stops the chain.", ru: "Выпускает цепь прямо перед вами. Первое задетое существо оказывается связано и не может свободно атаковать и применять колдовство. Сплошной блок останавливает цепь." } },
      { slot: "Secondary", name: { en: "Maintain Chains", ru: "Удержание цепей" }, desc: { en: "Hold to maintain your existing chains and pull bound targets toward you. This spends SE while held; it does not create new chains.", ru: "Удерживайте, чтобы поддерживать уже наложенные цепи и подтягивать связанные цели к себе. Пока держите кнопку, расходуется SE; новые цепи этот приём не создаёт." } },
      { slot: "Utility", name: { en: "Area Chain Bind", ru: "Оковы по области" }, desc: { en: "Bind several creatures around you at once, preventing light attacks and sorcery for the duration. Already-bound targets do not use another chain.", ru: "Связывает сразу несколько существ вокруг вас, запрещая им лёгкие атаки и колдовство на время действия. Уже связанные цели не занимают ещё одну цепь." } },
      { slot: "Supportive 1", name: { en: "Release Chain", ru: "Снять цепь" }, desc: { en: "Aim at one of your bound targets to release only that chain.", ru: "Наведитесь на связанную вами цель, чтобы снять только её цепь." } },
      { slot: "Supportive 2", name: { en: "Release All Chains", ru: "Снять все цепи" }, desc: { en: "Release every target you have chained.", ru: "Освобождает все цели, связанные вашими цепями." } }
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
      en: "Fire quick spreads of spikes, build a volley that follows your crosshair, or charge a large spike to break through obstacles.",
      ru: "Выпускайте быстрые вееры шипов, собирайте залп, следующий за прицелом, или заряжайте крупный шип для пробивания препятствий."
    },
    abilities: [
      { slot: "Primary", name: { en: "Spike Volley", ru: "Залп шипов" }, desc: { en: "Fire several spikes in a spread ahead of you. Aim the center of the spread at your target.", ru: "Выпускает несколько шипов веером перед вами. Направьте середину веера на цель." } },
      { slot: "Secondary", name: { en: "Charged Spikes", ru: "Заряженные шипы" }, desc: { en: "Hold to gather spikes around yourself. After release, they fire one after another toward your current crosshair. Keep aiming while the volley is firing.", ru: "Удерживайте, чтобы собрать шипы вокруг себя. После отпускания они по очереди летят к вашему текущему прицелу. Продолжайте наводиться, пока идёт залп." } },
      { slot: "Utility", name: { en: "Focused Spike", ru: "Сфокусированный шип" }, desc: { en: "Charge one large spike, then release it straight ahead. It damages targets and breaks suitable blocks along its path.", ru: "Заряжает один крупный шип, затем выпускает его прямо перед вами. Он ранит цели и разрушает подходящие блоки на пути." } }
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
      en: "WIP. Enter a personal Storehouse or fight through its projections outside. The same slots behave differently inside and outside: blades become shelf-spears, and transport gives way to reshaping aisles.",
      ru: "WIP. Входите в личное Хранилище или сражайтесь через его проекции снаружи. Одни и те же слоты работают по-разному внутри и снаружи: клинки сменяются копьями из стеллажей, а перенос — перестройкой проходов."
    },
    abilities: [
      { slot: "Primary", name: { en: "Hidden Arsenal / Shelf Spears", ru: "Скрытый арсенал / Полочные копья" }, desc: { en: "Outside the Storehouse, send katana volleys at enemies ahead. Inside, make wooden shelf-spears erupt forward along the aisle.", ru: "Снаружи Хранилища выпускает залпы катан по врагам перед вами. Внутри заставляет деревянные копья из стеллажей вырываться вперёд вдоль прохода." } },
      { slot: "Secondary", name: { en: "Route Shift / Aisle Rewrite", ru: "Сдвиг маршрута / Перестройка проходов" }, desc: { en: "Outside, move the selected creature, or yourself if no target is chosen; use Shift to open the archive. Inside, build temporary aisle walls that push nearby enemies aside.", ru: "Снаружи перемещает выбранное существо, а без цели — вас; с Shift открывает архив. Внутри создаёт временные стены прохода и оттесняет ближайших врагов." } },
      { slot: "Utility", name: { en: "Storehouse Gate", ru: "Врата Хранилища" }, desc: { en: "Enter your Storehouse and save your current position. Use the slot inside to return to the entry point.", ru: "Переносит в ваше Хранилище и запоминает место входа. Примените слот внутри, чтобы вернуться в эту точку." } },
      { slot: "Special", name: { en: "Projection / Auction Floor", ru: "Проекция / Аукционный зал" }, desc: { en: "Outside, leave a projection point for Storehouse abilities. Inside, temporarily empower the shelf attacks and aisle walls.", ru: "Снаружи оставляет точку проекции для приёмов Хранилища. Внутри временно усиливает атаки стеллажами и стены проходов." } },
      { slot: "Supportive 1", name: { en: "Claim / Door Jump", ru: "Метка / Дверной рывок" }, desc: { en: "Outside, mark the aimed target for other abilities; use Shift to register a target in the archive. Inside, teleport toward your crosshair if a safe destination is found.", ru: "Снаружи помечает цель для других приёмов; применение с Shift регистрирует цель в архиве. Внутри переносит по направлению прицела, если там найдётся безопасное место." } },
      { slot: "Supportive 2", name: { en: "Emergency Door / False Corridor", ru: "Аварийная дверь / Ложный коридор" }, desc: { en: "Outside, pull a target through a slit-like doorway to change its position. Inside, create false passages and briefly slow nearby enemies.", ru: "Снаружи протягивает цель через узкую дверь, меняя её позицию. Внутри создаёт ложные проходы и ненадолго замедляет ближайших врагов." } }
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
      en: "Form rods and beams of light to strike at range or pin a target. The charged kick closes the distance; the vertical beams hit the area around you.",
      ru: "Создавайте стержни и лучи света для дальних ударов и удержания цели. Заряженный удар ногой сокращает дистанцию, а вертикальные лучи поражают область вокруг вас."
    },
    abilities: [
      { slot: "Primary", name: { en: "Hard Light Lance", ru: "Копьё твёрдого света" }, desc: { en: "Throw a solid rod of light along your aim. It damages targets, breaks suitable blocks and briefly remains where it hits.", ru: "Бросает по прицелу твёрдый стержень света. Он ранит цели, разрушает подходящие блоки и ненадолго остаётся в месте попадания." } },
      { slot: "Secondary", name: { en: "Photon Beam", ru: "Фотонный луч" }, desc: { en: "Hold to sustain a beam along your aim, spending SE as it extends. If a nearby target is caught on activation, you first move into position to fire through it.", ru: "Удерживайте луч по направлению прицела, расходуя SE на его продолжение. Если при запуске захвачена близкая цель, вы сначала перемещаетесь в позицию для выстрела сквозь неё." } },
      { slot: "Utility", name: { en: "Light Impale", ru: "Световое пронзание" }, desc: { en: "Aim toward a creature to pin it with several rods of light. The rods hold it in place and apply Pierced.", ru: "Наведитесь в сторону существа, чтобы пронзить его несколькими стержнями света. Они удерживают цель на месте и накладывают Пронзание." } },
      { slot: "Special", name: { en: "Skyfall Beams", ru: "Нисходящие лучи" }, desc: { en: "Bring vertical beams of light down around yourself. They damage targets and break suitable blocks, but do not dig below your floor level.", ru: "Обрушивает вокруг вас вертикальные лучи света. Они ранят цели и разрушают подходящие блоки, но не уходят ниже уровня пола под вами." } },
      { slot: "Supportive 1", name: { en: "Lightspeed Kick", ru: "Пинок со скоростью света" }, desc: { en: "Hold for the full charge, then release to rush forward and kick the first target you reach. Releasing too early does not launch the kick.", ru: "Удерживайте до полного заряда, затем отпустите, чтобы рвануть вперёд и ударить ногой первую достигнутую цель. При раннем отпускании удар не начинается." } }
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
      en: "Place coins with shots, discharge electricity between them, then recall them for another attack. Electrical reinforcement increases Power but hurts the user; Regeneration is a separate mode.",
      ru: "Расставляйте монеты выстрелами, пускайте между ними электричество и возвращайте их для новой атаки. Электрическое усиление повышает мощь, но вредит владельцу; Регенерация включается отдельно."
    },
    abilities: [
      { slot: "Primary", name: { en: "Shoot Coin", ru: "Выстрел монетой" }, desc: { en: "Shoot a coin along your aim. A direct hit damages, briefly stuns and weakens the target. Up to six coins can remain active for your other abilities.", ru: "Выстреливает монетой по прицелу. Прямое попадание ранит, ненадолго оглушает и ослабляет цель. До шести монет могут оставаться активными для других приёмов." } },
      { slot: "Secondary", name: { en: "Lightning Discharge", ru: "Молниеносный разряд" }, desc: { en: "Discharge electricity between your placed coins. Creatures caught between them take damage, lose extra Stability and suffer a brief stun and True Wound. Place several coins around a target before using it.", ru: "Пускает электричество между выставленными монетами. Оказавшиеся между ними существа получают урон, дополнительный урон стойкости, короткое оглушение и Истинную рану. Сначала расставьте монеты вокруг цели." } },
      { slot: "Utility", name: { en: "Blood Flow Acceleration", ru: "Ускорение кровотока" }, desc: { en: "Recall your coins, damaging enemies on their return paths. The coins then orbit you and fire at nearby targets one at a time.", ru: "Возвращает монеты к вам, раня врагов на обратном пути. Затем монеты кружат вокруг вас и по одной выстреливают в ближайшие цели." } },
      { slot: "Special", name: { en: "Enhanced Speed", ru: "Усиленная скорость" }, desc: { en: "Toggle electrical reinforcement to increase your Power. It continuously spends SE and periodically damages your own health, bypassing Stability. Switch it off before the self-damage becomes dangerous.", ru: "Включает электрическое усиление, повышающее вашу мощь. Оно постоянно расходует SE и периодически отнимает ваше здоровье, обходя стойкость. Выключайте режим, прежде чем этот урон станет опасным." } },
      { slot: "Supportive 2", name: { en: "Coin Healing", ru: "Исцеление монетами" }, desc: { en: "Toggle Regeneration to gradually heal your health while spending SE. Press again to stop. This is a healing mode, not an instant full recovery.", ru: "Включает Регенерацию, которая постепенно лечит здоровье за SE. Повторное нажатие останавливает лечение. Режим не восстанавливает всё здоровье мгновенно." } }
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
      en: "Throw explosive dolls, guide them toward a position, then detonate one or all of them. The setup matters: the explosions happen where the dolls are, not where you stand.",
      ru: "Бросайте взрывные куклы, направляйте их к нужному месту и подрывайте одну или все сразу. Важно сначала расставить Дарумы: взрывы происходят там, где находятся куклы, а не вы."
    },
    abilities: [
      { slot: "Primary", name: { en: "Daruma Launch", ru: "Запуск дарумы" }, desc: { en: "Hold, then release to throw a Daruma along your aim. Charging longer increases its launch speed. Use a detonation ability when the doll reaches the position you want.", ru: "Удерживайте и отпустите, чтобы бросить Даруму по прицелу. Долгая зарядка увеличивает скорость броска. Когда кукла окажется в нужном месте, примените подрыв." } },
      { slot: "Secondary", name: { en: "Targeted Explosion", ru: "Направленный взрыв" }, desc: { en: "Detonate the nearest of your Darumas in the direction you are looking. The explosion damages creatures and breaks nearby blocks.", ru: "Подрывает ближайшую вашу Даруму в направлении взгляда. Взрыв ранит существ и разрушает блоки рядом." } },
      { slot: "Utility", name: { en: "Telekinesis Control", ru: "Телекинез" }, desc: { en: "Hold to guide your active Darumas toward the point under your crosshair. Moving your aim changes their destination; release to stop guiding them.", ru: "Удерживайте, чтобы вести активные Дарумы к точке под прицелом. Меняйте направление взгляда для управления ими; отпустите, чтобы прекратить управление." } },
      { slot: "Special", name: { en: "Mass Detonation", ru: "Массовая детонация" }, desc: { en: "Detonate all your active Darumas at once, wherever they are.", ru: "Одновременно подрывает все ваши активные Дарумы, где бы они ни находились." } },
      { slot: "Supportive 1", name: { en: "Daruma Volley", ru: "Залп дарум" }, desc: { en: "Throw several Darumas in a spread in front of you. Guide them or detonate them with your other slots.", ru: "Бросает несколько Дарум веером перед вами. Другими слотами можно направить их или подорвать." } }
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
      en: "WIP. Summon a Doll to fight or guard you, command a target, or take direct control of it. Armor plates block attacks from specific directions. During remote control, your body remains vulnerable.",
      ru: "WIP. Призовите Куклу для боя или охраны, укажите ей цель либо возьмите прямое управление. Бронепластины прикрывают отдельные направления. Пока вы управляете Куклой, ваше тело остаётся уязвимым."
    },
    abilities: [
      { slot: "Primary", name: { en: "Command", ru: "Команда" }, desc: { en: "Aim at an enemy to order your Doll to attack them. With no valid target, the command returns the Doll to Guard.", ru: "Наведитесь на врага и прикажите Кукле атаковать его. Если подходящей цели нет, команда возвращает Куклу к охране." } },
      { slot: "Secondary", name: { en: "Armor Plate", ru: "Бронепластина" }, desc: { en: "Create one armor plate facing an incoming threat. It absorbs up to 24 damage from one hit and then breaks; damage beyond its durability still reaches you.", ru: "Создаёт одну бронепластину навстречу угрозе. Она принимает до 24 единиц урона от одного удара и ломается; урон сверх её прочности достаётся вам." } },
      { slot: "Utility", name: { en: "Full Armor", ru: "Полная броня" }, desc: { en: "Surround yourself with four armor plates, each with 24 durability. They protect their own directions rather than making you invulnerable. A broken plate lets excess damage through.", ru: "Окружает вас четырьмя бронепластинами по 24 единицы прочности. Каждая прикрывает своё направление, а не даёт полную неуязвимость. Сломанная пластина пропускает оставшийся урон." } },
      { slot: "Supportive 1", name: { en: "Interpose", ru: "Перехват" }, desc: { en: "Order a nearby Doll to intercept the next threat during a short window. It tries to block, parry or clash; when that is not possible, it can take the hit for you.", ru: "На короткое время приказывает ближайшей Кукле перехватить следующую угрозу. Она пробует блокировать, парировать или столкнуть атаки, а если это невозможно — принять удар за вас." } },
      { slot: "Supportive 2", name: { en: "Remote Operation", ru: "Дистанционное управление" }, desc: { en: "Take direct control of your Doll to move and fight through it. Your body stays behind and remains vulnerable. Use the slot again to return.", ru: "Передаёт вам прямое управление Куклой: можно двигаться и сражаться за неё. Ваше тело остаётся на месте и уязвимо для атак. Повторное нажатие возвращает управление телом." } },
      { slot: "Special", name: { en: "Summon / Recall Doll", ru: "Призыв / отзыв Куклы" }, desc: { en: "Step back and summon one Doll using your current Sword, Hand or Dual Katana style. Press again to recall it. Only one Doll may be active.", ru: "Отступает на шаг и призывает одну Куклу с вашим текущим стилем меча, рукопашного боя или двух катан. Повторное нажатие отзывает её. Одновременно доступна только одна Кукла." } }
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
      en: "Shoot seeds into creatures or terrain, then make them grow into attacking branches or walls. Direct trunk attacks and repeated root growth let you fight while the seeds are being prepared.",
      ru: "Выстреливайте семенами в существ или рельеф, затем проращивайте их в атакующие ветви либо стены. Прямые удары стволом и повторный рост корней позволяют сражаться, пока вы готовите семена."
    },
    abilities: [
      { slot: "Primary", name: { en: "Spiral Trunk Thrust", ru: "Спиральный выпад стволом" }, desc: { en: "Drive a twisting wooden trunk straight ahead. It damages enemies along the path and puts extra pressure on their Stability.", ru: "Пускает прямо перед вами закрученный деревянный ствол. Он ранит врагов на пути и наносит повышенный урон стойкости." } },
      { slot: "Secondary", name: { en: "Seed Shot", ru: "Выстрел семечком" }, desc: { en: "Shoot a seed along your aim. A hit plants it in a creature; hitting terrain anchors it there. Use either support slot to make the seed grow.", ru: "Выстреливает семенем по прицелу. При попадании оно остаётся в существе или закрепляется на рельефе. Одним из слотов поддержки можно заставить семя прорасти." } },
      { slot: "Utility", name: { en: "Pine Bastion Wall", ru: "Сосновый бастион" }, desc: { en: "Grow a temporary wooden wall. It repairs damage while active and disappears when its duration ends.", ru: "Выращивает временную деревянную стену. Пока она активна, повреждения восстанавливаются; по окончании действия стена исчезает." } },
      { slot: "Special", name: { en: "Catastrophe Labyrinth", ru: "Катастрофический лабиринт" }, desc: { en: "For a short time, repeatedly grow roots across the area around you. Some branches turn toward nearby enemies, damaging them and filling the area with wood.", ru: "На короткое время заставляет корни раз за разом прорастать вокруг вас. Часть ветвей поворачивает к ближайшим врагам, раня их и заполняя область древесиной." } },
      { slot: "Supportive 1", name: { en: "Seed Detonation", ru: "Детонация семян" }, desc: { en: "Aim toward your planted seeds. Tap to make one erupt into growth that pursues a target; hold and release to activate all selected seeds.", ru: "Наведитесь в сторону посаженных семян. Короткое нажатие проращивает одно в преследующие цель ветви; удержание с отпусканием активирует все выбранные семена." } },
      { slot: "Supportive 2", name: { en: "Chaotic Seed Bastion", ru: "Хаотичный семенной бастион" }, desc: { en: "Make selected seeds grow into tangled walls of wood and leaves. Tap for a limited group, or hold and release to activate all selected seeds.", ru: "Проращивает выбранные семена в спутанные стены из дерева и листвы. Короткое нажатие использует ограниченную группу, удержание с отпусканием — все выбранные семена." } }
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
      en: "Use magnetic forces to move enemies and projectiles. Iron-sand attacks leave stacks on targets that you can detonate. Awakening adds a sustained sand beam, spikes and an MRI scan; Secondary remains Magnetic Focus.",
      ru: "Магнитные силы перемещают врагов и снаряды. Атаки железным песком оставляют на целях стаки, которые можно взорвать. Пробуждение добавляет продолжительный луч, шипы и МРТ; дополнительный слот остаётся «Магнитным фокусом»."
    },
    abilities: [
      { slot: "Primary", name: { en: "Iron Blade Volley", ru: "Залп железных клинков" }, desc: { en: "Hold to arrange iron blades in front of you, then release the volley along your aim. The blades strike targets across a spread.", ru: "Удерживайте, чтобы выстроить перед собой железные клинки, затем отпустите залп по прицелу. Клинки поражают цели веером." } },
      { slot: "Secondary", name: { en: "Magnetic Focus", ru: "Магнитный фокус" }, desc: { en: "Choose a point with your crosshair and pull nearby creatures, projectiles and movable objects toward it. The point is the destination of the pull, not a target that takes a direct hit.", ru: "Выбирает точку под прицелом и притягивает к ней ближайших существ, снаряды и подвижные объекты. Точка задаёт направление притяжения; сам приём не наносит прямого удара." } },
      { slot: "Utility", name: { en: "Repulsion Ring", ru: "Кольцо отталкивания" }, desc: { en: "Push creatures and movable objects away from yourself, including incoming projectiles. During Awakening, the push is followed by iron-sand spikes.", ru: "Отталкивает от вас существ и подвижные объекты, в том числе летящие снаряды. Во время Пробуждения после толчка вырываются шипы железного песка." } },
      { slot: "Special", name: { en: "Iron Sand Mode", ru: "Режим железного песка" }, desc: { en: "Toggle an iron-sand cloak. It attacks nearby enemies, leaves sand on them and reduces incoming damage while draining SE. During Awakening, this slot is used for MRI instead.", ru: "Включает покров железного песка. Он атакует ближайших врагов, оставляет на них песок и уменьшает входящий урон, постоянно расходуя SE. Во время Пробуждения этот слот используется для МРТ." } },
      { slot: "Supportive 1", name: { en: "Magnetic Polarity", ru: "Магнитная полярность" }, desc: { en: "Aim toward a creature: tap to damage and push it away, or hold and release to damage and pull it toward you. Targeting works through blocks up to 128 blocks away.", ru: "Наведитесь в сторону существа: короткое нажатие ранит и отталкивает его, удержание с отпусканием — ранит и притягивает к вам. Можно выбрать цель сквозь блоки на расстоянии до 128 блоков." } },
      { slot: "Supportive 2", name: { en: "Iron Sand Detonation", ru: "Детонация железного песка" }, desc: { en: "Aim at a target carrying your iron sand and detonate those stacks. More stacks make a stronger, wider blast that also hits nearby enemies. Without your sand on the target, nothing detonates.", ru: "Наведитесь на цель с вашим железным песком и взорвите накопленные стаки. Чем их больше, тем сильнее и шире взрыв, задевающий также врагов рядом. Без вашего песка на цели взрывать нечего." } }
    ],
    awakenedAbilities: [
      { slot: "Primary", name: { en: "Awakened Iron Sand Barrage", ru: "Пробуждённый залп песка" }, desc: { en: "Tap to fire a volley of black sand along your aim. Hits leave iron-sand stacks on the targets. Hold and release for the sustained beam instead.", ru: "Короткое нажатие выпускает по прицелу залп чёрного песка. Попадания оставляют на целях стаки железного песка. Удержание с отпусканием вместо залпа выпускает продолжительный луч." } },
      { slot: "Primary", name: { en: "Awakened Black Sand Beam", ru: "Пробуждённый луч чёрного песка" }, desc: { en: "Hold to gather black sand, then release a sustained beam. Move your crosshair to steer it while it repeatedly hits targets and leaves iron sand on them.", ru: "Удерживайте, чтобы собрать чёрный песок, затем отпустите продолжительный луч. Ведите его прицелом: он многократно задевает цели и оставляет на них железный песок." } },
      { slot: "Secondary", name: { en: "Magnetic Focus", ru: "Магнитный фокус" }, desc: { en: "Choose a point with your crosshair and pull nearby creatures, projectiles and movable objects toward it. Awakening does not replace this slot with another attack.", ru: "Выбирает точку под прицелом и притягивает к ней существ, снаряды и подвижные объекты рядом. Пробуждение не заменяет этот слот другой атакой." } },
      { slot: "Utility", name: { en: "Spike Repulsion Ring", ru: "Кольцо шипов и отталкивания" }, desc: { en: "Push nearby creatures and projectiles away, then send iron-sand spikes outward around you.", ru: "Отталкивает ближайших существ и снаряды, затем выпускает вокруг вас шипы железного песка." } },
      { slot: "Special", name: { en: "MRI Impale", ru: "МРТ-пронзание" }, desc: { en: "Press to scan for creatures through terrain. Aim at a detected target and press again to pierce it with iron sand. The second press ends the scan and starts the cooldown.", ru: "Нажмите для поиска существ сквозь рельеф. Наведитесь на обнаруженную цель и нажмите ещё раз, чтобы пронзить её железным песком. Второе нажатие завершает сканирование и запускает перезарядку." } },
      { slot: "Supportive 1", name: { en: "Magnetic Polarity", ru: "Магнитная полярность" }, desc: { en: "Aim toward a creature: tap to damage and push it away, or hold and release to damage and pull it toward you. Targeting works through blocks up to 128 blocks away.", ru: "Наведитесь в сторону существа: короткое нажатие ранит и отталкивает его, удержание с отпусканием — ранит и притягивает к вам. Можно выбрать цель сквозь блоки на расстоянии до 128 блоков." } },
      { slot: "Supportive 2", name: { en: "Iron Sand Detonation", ru: "Детонация железного песка" }, desc: { en: "Aim at a target carrying your iron sand and detonate those stacks. More stacks make a stronger, wider blast that also hits nearby enemies. Without your sand on the target, nothing detonates.", ru: "Наведитесь на цель с вашим железным песком и взорвите накопленные стаки. Чем их больше, тем сильнее и шире взрыв, задевающий также врагов рядом. Без вашего песка на цели взрывать нечего." } }
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
      en: "Use the bite to build the gauge, then spend it on projectiles and pursuing charms. Charms can attack independently or focus on a chosen target. Destroying them burdens the attacker.",
      ru: "Наполняйте шкалу укусом и расходуйте её на снаряды и преследующие талисманы. Они могут атаковать самостоятельно или сосредоточиться на выбранной цели. Уничтожение талисманов накладывает Бремя на атакующего."
    },
    abilities: [
      { slot: "Primary", name: { en: "Bite", ru: "Укус" }, desc: { en: "Snap a manifested jaw at the nearest creature ahead. Confirmed damage fills the Demon Bite gauge, which pays for the other techniques.", ru: "Смыкает призванную пасть на ближайшем существе перед вами. Нанесённый урон заполняет шкалу Демонического укуса, нужную для других приёмов." } },
      { slot: "Secondary", name: { en: "Charm Shot", ru: "Выстрел талисмана" }, desc: { en: "Tap to fire a small projectile, or hold and release a larger one that damages a wider area and breaks terrain. Both use SE and the Demon Bite gauge.", ru: "Короткое нажатие выпускает небольшой снаряд; удержание с отпусканием — крупный, который поражает большую область и разрушает рельеф. Оба расходуют SE и шкалу Демонического укуса." } },
      { slot: "Utility", name: { en: "Swarm Summon", ru: "Рой талисманов" }, desc: { en: "Summon several flying charms that seek nearby enemies and attack on their own. This spends the Demon Bite gauge as well as SE.", ru: "Призывает несколько летающих талисманов, которые сами ищут ближайших врагов и атакуют их. Приём расходует шкалу Демонического укуса вместе с SE." } },
      { slot: "Supportive 1", name: { en: "Charm Summon", ru: "Призыв талисмана" }, desc: { en: "Aim at an enemy to send three charms after that specific target. Destroying your charms places Burden on the attacker; repeated kills stack the penalty.", ru: "Наведитесь на врага, чтобы направить три талисмана именно на него. Уничтожение ваших талисманов накладывает Бремя на атакующего; повторные убийства усиливают штраф." } }
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
      en: "Dash through enemies with Enbu, hold to send repeated smoke slashes, or prepare a crosscut on one target. The smoke field slows pursuit and disrupts lock-on.",
      ru: "Проходите сквозь врагов рывком Энбу, удерживайте серию дымовых разрезов или готовьте крестовый удар по одной цели. Дымовое поле замедляет преследование и сбивает захват."
    },
    abilities: [
      { slot: "Primary", name: { en: "Enbu", ru: "Энбу" }, desc: { en: "Form a smoke blade and dash straight through the enemies ahead, cutting them along your path. Suitable obstacles can be broken by the strike.", ru: "Формирует дымовой клинок и рывком проходит сквозь врагов перед вами, разрезая их на пути. Удар может пробить подходящие препятствия." } },
      { slot: "Secondary", name: { en: "Smoke Slashes", ru: "Дымовые разрезы" }, desc: { en: "Hold to send repeated smoke slashes along your aim. Each slash spends SE; releasing stops the attack. This is a sustained series, not a charge for one larger cut.", ru: "Удерживайте, чтобы раз за разом выпускать дымовые разрезы по прицелу. Каждый тратит SE; отпускание прекращает атаку. Это непрерывная серия, а не заряд одного большого разреза." } },
      { slot: "Utility", name: { en: "Smoke Field", ru: "Дымовое поле" }, desc: { en: "Leave a smoke field that slows enemies inside and interrupts their lock-on. Use it to obscure your approach or break pursuit.", ru: "Оставляет дымовое поле, которое замедляет врагов внутри и сбивает их захват цели. Дым помогает скрыть сближение или оторваться от преследования." } },
      { slot: "Supportive 1", name: { en: "Crosscut", ru: "Крестообразный разруб" }, desc: { en: "Mark an enemy ahead. After a brief warning, dash through them with two crossing cuts. The delay gives the target time to respond.", ru: "Помечает врага перед вами. После короткого предупреждения вы проходите сквозь него рывком и наносите два разреза крест-накрест. Задержка даёт цели время отреагировать." } }
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
      en: "Press enemies down to damage their Stability, throw chunks of terrain or carry a target through obstacles with a dash. Held pressure abilities have separate reserves that recover when not used.",
      ru: "Прижимайте врагов к земле, повреждая стойкость, бросайте участки рельефа или протаскивайте цель сквозь препятствия рывком. Удерживаемые приёмы давления имеют отдельные запасы, восстанавливающиеся без использования."
    },
    abilities: [
      { slot: "Primary", name: { en: "Gravity Pressure", ru: "Гравитационное давление" }, desc: { en: "Hold to press enemies down in a small area under your crosshair. The pressure slows them and repeatedly damages Stability. It drains SE and a limited reserve; while using it, you cannot dash or jump.", ru: "Удерживайте, чтобы прижимать врагов к земле в небольшой области под прицелом. Давление замедляет их и постоянно повреждает стойкость. Тратит SE и ограниченный запас действия; во время применения нельзя прыгать и делать рывок." } },
      { slot: "Secondary", name: { en: "Gravity Terrain Mass", ru: "Гравитационная масса" }, desc: { en: "Hold to pull a chunk of terrain out of the ground and suspend it. Aim, then release to throw the captured blocks. Impacts damage targets; breaking through obstacles reduces the mass and force of the throw.", ru: "Удерживайте, чтобы вырвать участок земли и держать его в воздухе. Наведитесь и отпустите для броска. Столкновения ранят цели; пробивая препятствия, масса теряет блоки и силу удара." } },
      { slot: "Utility", name: { en: "Directional Gravity Dash", ru: "Направленный гравитационный рывок" }, desc: { en: "Dash in the direction set by movement keys. Jump sends you upward; in midair with no direction, dash downward. Enemies caught on the path are carried with you and struck against breakable obstacles.", ru: "Совершает рывок в направлении клавиш движения. Прыжок направляет вверх, а в воздухе без направления — вниз. Задетые враги увлекаются за вами и врезаются в разрушаемые препятствия." } },
      { slot: "Supportive 1", name: { en: "Wide Gravity Pressure", ru: "Широкое гравитационное давление" }, desc: { en: "Hold to press enemies down around you across a much wider area than Primary. This pressure follows your position and uses its own reserve as well as SE.", ru: "Удерживайте, чтобы прижимать врагов вокруг себя в гораздо большей области, чем основным приёмом. Давление действует вокруг вашей позиции и расходует отдельный запас действия вместе с SE." } },
      { slot: "Supportive 2", name: { en: "Gravity Collapse", ru: "Гравитационный обвал" }, desc: { en: "Force nearby enemies sharply downward in one hit. The attack damages health and Stability, then briefly stuns and slows targets that fail to resist it.", ru: "Одним ударом резко тянет ближайших врагов вниз. Наносит урон здоровью и стойкости, затем ненадолго оглушает и замедляет цели, которые не смогли защититься." } },
      { slot: "Special", name: { en: "Kurotsuchi", ru: "Куротсучи" }, desc: { en: "Toggle Kurotsuchi's black sphere to increase Power and strengthen its damaging techniques. Keeping it active drains SE; press again to switch it off.", ru: "Включает чёрную сферу Куротсучи, повышая мощь и усиливая урон его приёмов. Поддержание тратит SE; повторное нажатие отключает режим." } },
      { slot: "Passive", name: { en: "Ground Pressure", ru: "Давление весом" }, desc: { en: "Stand on the ground next to an enemy and hold Shift to weigh them down. Moving out of reach ends the pressure; it does not drag them after you.", ru: "Встаньте на землю рядом с врагом и удерживайте Shift, чтобы прижать его своим весом. Если отойти, давление прекращается; цель не тащится за вами." } },
      { slot: "Awakening", name: { en: "Burning Heaven Mass", ru: "Пылающая небесная масса" }, desc: { en: "At full meter, press V while aiming at a position. A large burning mass forms above it and falls, damaging creatures, breaking terrain and setting survivors alight.", ru: "При полной шкале нажмите V, наведясь на точку. Над ней соберётся большая горящая масса и обрушится вниз, раня существ, разрушая рельеф и поджигая выживших." } }
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
      en: "WIP. Sumika is one ability with partial activation on G and full activation through Awakening. The partial form heals and deflects some attacks; the full form locks nearby targets into a sequence of spatial piercing strikes.",
      ru: "WIP. Сумика — одна способность: частичная активация на G и полная через Пробуждение. Частичная форма лечит и позволяет избежать части атак; полная удерживает ближайшие цели для серии пространственных пронзаний."
    },
    abilities: [
      { slot: "Special", name: { en: "Sumika", ru: "Сумика" }, desc: { en: "Toggle Sumika to regenerate and make incoming attacks miss with a 30% chance. Certain direct effects, including Kurotsuchi's downward pressure, are blocked outright. This is not complete invulnerability; maintaining the field drains SE.", ru: "Включает Сумику: вы восстанавливаете здоровье, а входящие атаки промахиваются с шансом 30%. Некоторые прямые воздействия, включая давление Куротсучи вниз, блокируются полностью. Это не полная неуязвимость; поддержание поля тратит SE." } },
      { slot: "Awakening", name: { en: "Sumika", ru: "Сумика" }, desc: { en: "At full meter, press V for full activation. Targets within 64 blocks are held for a sequence of three spatial piercings. The damage bypasses Stability; this is a separate activation from the defensive field on G.", ru: "При полной шкале нажмите V для полной активации. Цели в радиусе 64 блоков удерживаются для трёх пространственных пронзаний. Урон обходит стойкость; это отдельное применение, не защитное поле на G." } }
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
      en: "A crossover sorcery that turns terrain to gold and builds Gild on creatures. Spend the stacks to make a temporary statue, or reach 100 for a lasting transformation. Awakening strengthens attacks and adds autonomous golden shards.",
      ru: "Кроссоверное колдовство: превращает рельеф в золото и накапливает Позолоту на существах. Стаки дают временную статую, а при 100 превращение сохраняется. Пробуждение усиливает атаки и добавляет самостоятельные золотые осколки."
    },
    abilities: [
      { slot: "Primary", name: { en: "Golden Bite", ru: "Золотой укус" }, desc: { en: "Strike a nearby target with gold transmutation. The hit adds Gild stacks and fills your Awakening gauge.", ru: "Ударяет ближайшую цель золотой трансмутацией. Попадание добавляет стаки Позолоты и заполняет вашу шкалу Пробуждения." } },
      { slot: "Secondary", name: { en: "Golden Sword Volley", ru: "Золотой залп мечей" }, desc: { en: "Tap to throw one golden sword. Hold and release to throw a spread of swords; a longer charge increases their number and the area hit.", ru: "Короткое нажатие бросает один золотой меч. Удержание с отпусканием выпускает веер мечей; длительность зарядки увеличивает их число и область поражения." } },
      { slot: "Utility", name: { en: "Golden Domain Burst", ru: "Золотой домен" }, desc: { en: "Charge and release to turn nearby terrain to gold, add Gild to enemies and briefly stun them. The ability needs blocks it can transmute; a longer charge widens the area.", ru: "Зарядите и отпустите, чтобы обратить рельеф вокруг в золото, добавить врагам Позолоту и ненадолго оглушить их. Нужны блоки, доступные для превращения; долгая зарядка расширяет область." } },
      { slot: "Special", name: { en: "Living Statue", ru: "Живая статуя" }, desc: { en: "Consume your Gild stacks on the aimed target to turn it into a statue. Below 100 stacks, the effect is temporary; at 100, the target remains a golden statue.", ru: "Расходует ваши стаки Позолоты на цели в прицеле и превращает её в статую. При менее чем 100 стаках эффект временный; при 100 цель остаётся золотой статуей." } },
      { slot: "Supportive 1", name: { en: "Point Transmutation", ru: "Точечная трансмутация" }, desc: { en: "Charge while aiming at a surface or creature. On release, transmute blocks at that point and apply Gild to a selected living target.", ru: "Заряжайте приём, наведясь на поверхность или существо. При отпускании он превращает блоки в выбранной точке и накладывает Позолоту на выбранную живую цель." } },
      { slot: "Supportive 2", name: { en: "Golden Sword", ru: "Золотой меч" }, desc: { en: "Summon a golden sword into your main hand for melee combat. Press again to dismiss it.", ru: "Призывает золотой меч в основную руку для ближнего боя. Повторное нажатие убирает его." } },
      { slot: "Awakening", name: { en: "Sage of Destruction", ru: "Мудрец разрушения" }, desc: { en: "At full meter, press V. After preparation, your attacks are strengthened and golden shards automatically strike nearby enemies. The empowered state lasts 30 seconds.", ru: "При полной шкале нажмите V. После подготовки ваши атаки усилятся, а золотые осколки начнут самостоятельно бить ближайших врагов. Усиленное состояние длится 30 секунд." } }
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
      en: "Select a technique after it affects you, then turn the wheel to adapt. Stored progress survives switching targets. The sword can suppress techniques you have learned; death clears progress unless the server rule says otherwise.",
      ru: "Выберите технику после её воздействия на вас и поворачивайте колесо для адаптации. Смена цели не стирает сохранённый прогресс. Меч может подавлять изученные техники; смерть сбрасывает прогресс, если правило сервера не изменено."
    },
    abilities: [
      { slot: "Primary", name: { en: "Lock Sorcery", ru: "Выбор колдовства" }, desc: { en: "Select the last hostile technique that actually affected you as the wheel's current target. You must experience a technique before selecting it.", ru: "Выбирает последнюю враждебную технику, которая действительно на вас подействовала, текущей целью колеса. Сначала нужно испытать приём на себе." } },
      { slot: "Secondary", name: { en: "Wheel Turn", ru: "Поворот колеса" }, desc: { en: "Turn the wheel one step toward adapting to the selected technique and restore some health. Each technique needs its own number of turns; the slot has a cooldown between turns.", ru: "Поворачивает колесо на один шаг к адаптации против выбранной техники и восстанавливает часть здоровья. Разным приёмам нужно разное число оборотов; между поворотами действует перезарядка." } },
      { slot: "Utility", name: { en: "Taunt / Status Turn", ru: "Провокация / Поворот состояний" }, desc: { en: "Open a short focus window. Active harmful effects grant wheel progress, and the first hostile technique that affects you during the window grants an extra turn.", ru: "Открывает короткое окно сосредоточения. Действующие вредные эффекты дают прогресс колеса, а первая техника, подействовавшая на вас в это время, добавляет ещё один оборот." } },
      { slot: "Supportive 1", name: { en: "Sword Manifest", ru: "Призыв меча" }, desc: { en: "Draw or put away the Sword of Extermination. Its confirmed hits can suppress techniques you have already adapted to.", ru: "Достаёт или убирает Меч истребления. Его успешные удары могут подавить техники, к которым вы уже адаптировались." } },
      { slot: "Supportive 2", name: { en: "Reset Adaptation", ru: "Сброс адаптации" }, desc: { en: "Clear the wheel's current target so you can select another technique. Previously stored adaptation progress is not erased.", ru: "Снимает текущую цель колеса, чтобы можно было выбрать другую технику. Уже сохранённый прогресс адаптации не стирается." } }
    ],
    asset: undefined
  }
];
