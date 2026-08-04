import { assets } from "./assets";
import type { SorceryEntry } from "../types";

// Ability data mirrors the mod's lang file (en_us.json) - slots are authoritative.
// Slot → input: Primary = R+LMB, Secondary = R+RMB, Utility = R+Shift,
//               Supportive 1 = Z, Supportive 2 = X, Special = G, Awakening = V (at 100%).

export const sorceries: SorceryEntry[] = [
  // ── ENCHANTED BLADES (canon 魔剣) ────────────────────────────────────────────
  {
    id: "enten",
    name: { en: "Enten", ru: "Энтен" },
    character: { en: "Chihiro Rokuhira", ru: "Тихиро Рокухира" },
    element: "mirror",
    elementLabel: { en: "Spirit Energy / Goldfish", ru: "Духовная энергия / Рыбки" },
    tier: "enchanted-blade",
    role: { en: "Kuro attacks, Aka counters, Nishiki handles movement", ru: "Куро атакует, Ака отвечает на удары, Нисики ускоряет владельца" },
    summary: {
      en: "Kuro fires spirit-energy slashes. Aka catches an attack on the blade and returns it later. Nishiki wraps the wielder in spirit energy for speed and close-range pressure; its extra modes unlock at Mastery II.",
      ru: "Куро выпускает разрезы духовной энергии. Ака принимает атаку на клинок и позволяет вернуть её позже. Нисики окутывает владельца энергией, ускоряя движение и ближний бой; дополнительные режимы открываются на II ранге мастерства."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Kuro: Slash", ru: "Kuro: Разрез" }, desc: { en: "A long-range spirit-energy slash. In Nishiki mode it's faster but shorter-ranged (-30%) and weaker (-40%).", ru: "Дальний разрез духовной энергии. В режиме Nishiki быстрее, но короче (-30%) и слабее (-40%)." } },
      { slot: "Secondary", name: { en: "Kuro: Shred", ru: "Kuro: Шред" }, desc: { en: "A fixed dash slash (1000 SE) that pierces every target in a line.", ru: "Фиксированный рывок-разрез (1000 SE), пронзающий все цели на линии." } },
      { slot: "Utility",  name: { en: "Aka (Red)", ru: "Aka (Красный)" }, desc: { en: "A 1.5s defensive stance - block, then copy one attacking sorcery for 20 seconds.", ru: "Защитная стойка 1.5с - блокирует и копирует одно атакующее колдовство на 20с." } },
      { slot: "Special",  name: { en: "Nishiki Mode", ru: "Режим Nishiki" }, desc: { en: "Toggle (Mastery II): +50% speed and +30% melee damage, but Kuro abilities become weaker.", ru: "Переключатель (Mastery II): +50% скорости и +30% урона в ближнем бою, но способности Kuro слабее." } },
      { slot: "Supportive 1", name: { en: "Summon Kuro", ru: "Призыв Kuro" }, desc: { en: "Summon a Kuro fish. The fish is vulnerable - enemies can kill it to disrupt you.", ru: "Призвать рыбу Kuro. Рыба уязвима - враги могут убить её, сорвав ваши планы." } },
      { slot: "Supportive 2", name: { en: "Nishiki: Support", ru: "Nishiki: Поддержка" }, desc: { en: "Defensive toggle (Mastery II): +20% speed, +5 armor, absorption and regeneration.", ru: "Защитный переключатель (Mastery II): +20% скорости, +5 брони, поглощение и регенерация." } }
    ],
    asset: assets.enten
  },

  {
    id: "cloud-gouger",
    name: { en: "Kuregumo", ru: "Курегумо" },
    character: { en: "Genichi Sojo", ru: "Гэнъити Содзё" },
    element: "ice",
    elementLabel: { en: "Weather / Thunder", ru: "Погода / Гром" },
    tier: "enchanted-blade",
    role: { en: "Spend Thunder charges on lightning, ice and water", ru: "Заряды Грома тратятся на молнию, лёд и воду" },
    summary: {
      en: "Kuregumo stores Thunder charges during combat. Use them for direct lightning strikes, ice walls and spikes, rain, fog or a stream of cold water. The kit covers several ranges, but has no dedicated defensive move.",
      ru: "Курегумо накапливает заряды Грома в бою. Они расходуются на прямые удары молнии, ледяные стены и шипы, дождь, туман и поток холодной воды. Набор работает на разных дистанциях, но отдельной защиты у него нет."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Thunder Strike", ru: "Удар грома" }, desc: { en: "Instant strike for 1 Thunder + 300 SE. Deals x1.5 stability damage; wet targets take x1.5.", ru: "Мгновенный удар за 1 Гром + 300 SE. x1.5 урона по стабильности; по мокрым целям x1.5." } },
      { slot: "Secondary", name: { en: "Lightning / Storm", ru: "Молния / Гроза" }, desc: { en: "1-2 Thunder: chain lightning to the target. 3+ Thunder: a large storm around you.", ru: "1-2 Грома: цепная молния по цели. 3+ Грома: большая гроза вокруг вас." } },
      { slot: "Utility",  name: { en: "Fog / Rain", ru: "Туман / Дождь" }, desc: { en: "Tap for fog (blindness, slowness, weakness); hold for rain that makes targets Wet for a minute.", ru: "Нажатие - туман (слепота, замедление, слабость); удержание - дождь, делающий цели Мокрыми на минуту." } },
      { slot: "Special",  name: { en: "Thunder Dash", ru: "Громовой рывок" }, desc: { en: "Toggle: Speed II, blue afterimages and contact damage to enemies. Drains SE per tick.", ru: "Переключатель: Скорость II, синие афтеримиджи и контактный урон. Расходует SE за тик." } },
      { slot: "Supportive 1", name: { en: "Cold Stream", ru: "Холодный поток" }, desc: { en: "A stream that damages, freezes and applies Slowness V; blocks it touches turn to ice.", ru: "Поток, наносящий урон, замораживающий и дающий Замедление V; задетые блоки становятся льдом." } },
      { slot: "Supportive 2", name: { en: "Ice Spikes", ru: "Ледяные шипы" }, desc: { en: "A 32-block field of ice spikes - damage, freeze, weakness; traps enemies in ice.", ru: "Поле ледяных шипов 32 блока - урон, заморозка, слабость; запирает врагов во льду." } }
    ],
    asset: assets.cloudGouger
  },

  {
    id: "kumeyuri",
    name: { en: "Kumeyuri", ru: "Кумэюри" },
    character: { en: "Hiruhiko", ru: "Хирухико" },
    element: "illusion",
    elementLabel: { en: "Banquet / Play", ru: "Пир / Игра" },
    tier: "enchanted-blade",
    role: { en: "Intoxication marks and telekinetic attacks with nearby objects", ru: "Опьянение и телекинетические атаки предметами вокруг" },
    summary: {
      en: "Banquet places Intoxication on enemies and makes their reads less reliable. Play tears loose blocks or objects, gathers them and throws them. Several abilities become stronger against targets that already have Intoxication.",
      ru: "Пир накладывает на врагов Опьянение и мешает им читать атаки. Игра вырывает блоки и предметы, собирает их и бросает в цель. Часть способностей сильнее действует по уже опьянённым противникам."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Banquet: First Cup", ru: "Пир: Первая чаша" }, desc: { en: "A forward geisha-scene projectile that pressures on contact and applies the first Intoxication stacks.", ru: "Снаряд гейша-сцены вперёд: давит при контакте и накладывает первые стаки Опьянения." } },
      { slot: "Secondary", name: { en: "Play: String Pull", ru: "Игра: Натяжение струн" }, desc: { en: "Tap to rip and throw one object; hold to gather several and release a wave. Drunk targets are controlled harder.", ru: "Нажатие - вырвать и бросить один объект; удержание - собрать несколько и выпустить волну. Пьяные цели контролируются сильнее." } },
      { slot: "Utility",  name: { en: "Banquet: Wake", ru: "Пир: Пробуждение" }, desc: { en: "Spreads Intoxication and grants a 15s safeguard - a lethal hit restores 30% HP and teleports you to safety.", ru: "Распространяет Опьянение и даёт защиту на 15с - смертельный удар восстанавливает 30% HP и телепортирует в безопасность." } },
      { slot: "Special",  name: { en: "Future", ru: "Будущее" }, desc: { en: "Reserved for a future canon Kumeyuri ability - no gameplay effect yet.", ru: "Зарезервировано под будущую каноничную способность Кумэюри - пока без эффекта." } },
      { slot: "Supportive 1", name: { en: "Banquet: Designated Guest", ru: "Пир: Назначенный гость" }, desc: { en: "Tap for a strong mark on one target; hold for up to 3 weaker marks on already-intoxicated enemies.", ru: "Нажатие - сильная метка на одной цели; удержание - до 3 слабых меток на уже опьянённых врагах." } },
      { slot: "Supportive 2", name: { en: "Play: Destructive Play", ru: "Игра: Разрушительная игра" }, desc: { en: "Tap to rip apart a structure section; hold to escalate into repeated tearing waves.", ru: "Нажатие - разорвать часть постройки; удержание - нарастающие волны разрушения." } }
    ],
    asset: assets.kumeyuri
  },

  {
    id: "magatsumi",
    name: { en: "Magatsumi", ru: "Магатсуми" },
    status: { en: "WIP", ru: "В разработке" },
    character: { en: "-", ru: "-" },
    element: "wither",
    elementLabel: { en: "Insects / Curse", ru: "Насекомые / Проклятие" },
    tier: "enchanted-blade",
    role: { en: "Five insect techniques and a Curse active while unsheathed", ru: "Пять техник насекомых и Проклятие обнажённого клинка" },
    summary: {
      en: "Magatsumi has five insect techniques: Dragonfly, Centipede, Spider, Bee and Butterfly. They cover movement, control and large cuts. While the blade is unsheathed, nearby targets accumulate its Curse; the periodic damage ignores Stability.",
      ru: "У Магатсуми пять техник: Стрекоза, Сороконожка, Паук, Пчела и Бабочка. Они отвечают за перемещение, контроль и крупные разрезы. Пока клинок обнажён, цели рядом получают Проклятие; его периодический урон игнорирует Стабильность."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Dragonfly", ru: "Стрекоза" }, desc: { en: "A fixed-damage blast - hold and release when ready (500 SE, 5s cooldown).", ru: "Взрыв фиксированного урона - удержать и отпустить при готовности (500 SE, кулдаун 5с)." } },
      { slot: "Secondary", name: { en: "Centipede", ru: "Сороконожка" }, desc: { en: "Charge to max for a 360° blast; releasing early cancels it (~1000 SE/sec while charging).", ru: "Зарядить до максимума для 360° взрыва; ранний отпуск отменяет (~1000 SE/с при зарядке)." } },
      { slot: "Utility",  name: { en: "Spider", ru: "Паук" }, desc: { en: "Weave a cobweb that immobilizes enemies and applies True Wound for its lifetime.", ru: "Сплести паутину, обездвиживающую врагов и накладывающую True Wound на время жизни." } },
      { slot: "Special",  name: { en: "Butterfly", ru: "Бабочка" }, desc: { en: "Unsheathed only: shows the violet title Chō, then unleashes a near-horizontal world-cutting slash.", ru: "Только обнажённым: показывает фиолетовый титул Chō, затем - почти горизонтальный мирорежущий разрез." } },
      { slot: "Supportive 1", name: { en: "Bee", ru: "Пчела" }, desc: { en: "Unsheathed only: after a full charge, breach a 50-block cylinder and teleport to its endpoint.", ru: "Только обнажённым: после полной зарядки пробить 50-блочный цилиндр и телепортироваться в его конец." } },
      { slot: "Passive",  name: { en: "Curse", ru: "Проклятие" }, desc: { en: "While the blade is unsheathed, nearby targets accumulate Magatsumi's Curse. Its periodic damage ignores Stability.", ru: "Пока клинок обнажён, цели рядом получают Проклятие Магатсуми. Периодический урон Проклятия игнорирует Стабильность." } }
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
    role: { en: "Feather teleports, flight and the Suzaku support mode", ru: "Телепорты по перьям, полёт и режим поддержки Судзаку" },
    summary: {
      en: "Place feathers and teleport to them, fly with Crow Rush or swap positions with another entity. Suzaku restores health and removes common debuffs. At full awakening, Black Flames adds fire to the movement and attack abilities.",
      ru: "Расставляйте перья и телепортируйтесь к ним, летите через Натиск ворона или меняйтесь местами с другой сущностью. Судзаку восстанавливает здоровье и снимает обычные негативные эффекты. При полном Пробуждении Чёрное пламя добавляет огонь к перемещению и атакам."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Feather Step", ru: "Шаг пера" }, desc: { en: "Create a feather cluster; releasing teleports you to it. During Phoenix Evasion it teleports to the nearest enemy.", ru: "Создать пучок перьев; отпускание телепортирует к нему. В Phoenix Evasion - к ближайшему врагу." } },
      { slot: "Secondary", name: { en: "Crow Rush", ru: "Натиск ворона" }, desc: { en: "Hold to fly with a damaging feather trail (15s reserve, regenerates +1s every 3s). Costs SE per tick.", ru: "Удержание - полёт с уроносящим следом перьев (запас 15с, +1с каждые 3с). Расход SE за тик." } },
      { slot: "Utility",  name: { en: "External Crow", ru: "Внешний ворон" }, desc: { en: "No Suzaku: swap with the nearest entity, or hold for a mass swap in a 40-block area. With Suzaku: a feather+flame knockback burst.", ru: "Без Судзаку: обмен с ближайшей сущностью или удержание для массового обмена в 40 блоках. С Судзаку: вспышка перьев и пламени с отбросом." } },
      { slot: "Special",  name: { en: "Suzaku", ru: "Судзаку" }, desc: { en: "Toggle: regeneration, cleanse and block restoration. Drains 300 SE/tick (disabled while Black Flames is active).", ru: "Переключатель: регенерация, очищение и восстановление блока. Расход 300 SE/тик (отключён при активном Чёрном пламени)." } },
      { slot: "Supportive 1", name: { en: "Phoenix Strike", ru: "Удар феникса" }, desc: { en: "Mark a target, then after a short delay teleport in for an auto-strike (15s cooldown).", ru: "Пометить цель, затем после задержки телепортироваться для авто-удара (кд 15с)." } }
    ],
    awakenedAbilities: [
      { slot: "Primary",  name: { en: "Feather Step (Black Flames)", ru: "Шаг пера (Чёрное пламя)" }, desc: { en: "During Phoenix Evasion, the feather teleport snaps you to the nearest enemy instead of the cluster.", ru: "В Phoenix Evasion телепорт пера переносит к ближайшему врагу, а не к пучку." } },
      { slot: "Secondary", name: { en: "Crow Rush", ru: "Натиск ворона" }, desc: { en: "Fly with a damaging feather trail. Reserve still applies, but Suzaku's SE drain is paused while Black Flames burns.", ru: "Полёт с уроносящим следом перьев. Запас работает, но расход SE от Судзаку приостановлен, пока горит Чёрное пламя." } },
      { slot: "Utility",  name: { en: "External Crow (Flame Burst)", ru: "Внешний ворон (огневзрыв)" }, desc: { en: "Tap for a feather + black-flame burst that knocks targets back and sets them alight.", ru: "Нажатие - вспышка перьев и чёрного пламени, отбрасывающая и поджигающая цели." } },
      { slot: "Special",  name: { en: "Suzaku", ru: "Судзаку" }, desc: { en: "The regeneration/cleanse support stays active, and its 300 SE/tick drain is disabled while Black Flames is up.", ru: "Поддержка регенерации и очищения активна, а её расход 300 SE/тик отключён, пока активно Чёрное пламя." } },
      { slot: "Supportive 1", name: { en: "Phoenix Strike (Cross Slash)", ru: "Удар феникса (крест-разрез)" }, desc: { en: "Fires a 60-block cross flame slash that ignites and cuts everything along its path.", ru: "Выпускает 60-блочный крестовой огненный разрез, поджигающий и режущий всё на пути." } }
    ],
    asset: assets.tobimune
  },

  // ── STANDALONE SORCERIES & WEAPONS ───────────────────────────────────────────
  {
    id: "flame-bone",
    name: { en: "Flame Bone", ru: "Пламенная Кость" },
    character: { en: "Hiyuki Kagari", ru: "Хиюки Кагари" },
    element: "fire",
    elementLabel: { en: "Bone / Flame", ru: "Кость / Пламя" },
    tier: "sorcery",
    role: { en: "Summon the Flame Bone for punches, projectiles and rib shields", ru: "Призыв Пламенной Кости: удары, рука-снаряд и защита рёбрами" },
    summary: {
      en: "The Special slot summons or dismisses the Flame Bone. With it active, the Primary becomes an explosive punch, the Secondary launches the hand, and the support slots create rib attacks or a rib shield.",
      ru: "Особая способность призывает или убирает Пламенную Кость. Пока она активна, Primary становится взрывным ударом, Secondary запускает отделённую руку, а вспомогательные слоты создают атаку рёбрами или щит."
    },
    abilities: [
      { slot: "Special",  name: { en: "Summon Flame Bone", ru: "Призыв Пламенной Кости" }, desc: { en: "Summon the Flame Bone into your main hand; use again to despawn it.", ru: "Призвать Пламенную Кость в основную руку; повторно - убрать." } },
      { slot: "Primary",  name: { en: "Bone Burst", ru: "Костяной взрыв" }, desc: { en: "Tap for a short rush and explosive punch; hold for a stronger burst. Unavailable while the hand is detached.", ru: "Нажатие - короткий рывок и взрывной удар; удержание - мощнее. Недоступно, пока рука отделена." } },
      { slot: "Secondary", name: { en: "Hand Launch", ru: "Запуск руки" }, desc: { en: "Launch the detached hand: it steers with your aim, breaches blocks, explodes on impact and returns.", ru: "Запустить отделённую руку: наводится прицелом, пробивает блоки, взрывается при ударе и возвращается." } },
      { slot: "Utility",  name: { en: "Bone Fortress", ru: "Костяная крепость" }, desc: { en: "Toggle: anchors you and routes incoming damage into a rib shield. Blocks movement until release.", ru: "Переключатель: фиксирует и направляет урон в щит из рёбер. Блокирует движение до отпускания." } },
      { slot: "Supportive 1", name: { en: "Ribs: Uprise", ru: "Рёбра: Восход" }, desc: { en: "Summon temporary bone-flame rib constructs at a zone that trigger delayed eruptive strikes.", ru: "Призвать временные костяно-огненные рёбра в зоне с отложенными извержениями." } },
      { slot: "Supportive 2", name: { en: "Ribs: Rampart", ru: "Рёбра: Вал" }, desc: { en: "Raise defensive ribs around you; they open for you and collapse after their lifetime.", ru: "Поднять защитные рёбра вокруг себя; открываются для вас и рушатся со временем." } }
    ],
    asset: assets.flameBone
  },

  {
    id: "shiba-teleportation",
    name: { en: "Shiba Teleportation", ru: "Телепортация Сибы" },
    character: { en: "Togo Shiba", ru: "Того Сиба" },
    element: "teleport",
    elementLabel: { en: "Teleportation", ru: "Телепортация" },
    tier: "sorcery",
    role: { en: "Short teleports, target grabs, ally rescue and return marks", ru: "Короткие телепорты, захват цели, спасение союзника и метки возврата" },
    summary: {
      en: "Blink in the direction of movement, grab and relocate an enemy, pull an ally out of danger or leave a point to return to later. Most abilities change position without dealing damage by themselves.",
      ru: "Телепортируйтесь по направлению движения, хватайте и переносите врага, вытаскивайте союзника из опасности или оставляйте точку для последующего возврата. Большинство способностей меняют позицию и сами по себе не наносят урон."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Tactical Shift", ru: "Тактический сдвиг" }, desc: { en: "Teleport forward instantly; if aimed at an entity, teleport behind it.", ru: "Мгновенный телепорт вперёд; при наведении на сущность - за её спину." } },
      { slot: "Secondary", name: { en: "High-Altitude Drop", ru: "Сброс с высоты" }, desc: { en: "Grab a nearby entity and teleport both of you high up; the follow-up strike ignores Stability.", ru: "Схватить сущность и телепортировать обоих ввысь; добивающий удар игнорирует Стабильность." } },
      { slot: "Utility",  name: { en: "Rescue Evacuation", ru: "Спасательная эвакуация" }, desc: { en: "Teleport you and a targeted ally to a safe spot away from enemies.", ru: "Телепортировать вас и выбранного союзника в безопасное место от врагов." } },
      { slot: "Special",  name: { en: "Mass Teleport", ru: "Массовый телепорт" }, desc: { en: "Toggle: while ON, your next teleport drags nearby enemies along with you.", ru: "Переключатель: пока ВКЛ, следующий телепорт утащит с собой ближних врагов." } },
      { slot: "Supportive 1", name: { en: "Set / Use Return Mark", ru: "Метка возврата" }, desc: { en: "First press sets a return point; second press teleports you back to it.", ru: "Первое нажатие - точка возврата; второе - телепорт к ней." } },
      { slot: "Supportive 2", name: { en: "Mark / Pursue Entity", ru: "Метка / Преследование" }, desc: { en: "First press marks a nearby entity; second press teleports you to it.", ru: "Первое нажатие - метка сущности; второе - телепорт к ней." } }
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
    role: { en: "Charged slashes, forward dashes and a spinning area attack", ru: "Заряжаемые разрезы, рывки вперёд и круговая атака" },
    summary: {
      en: "Hold the main attacks to increase their reach or damage, dash through a target with Reaper, or use the spinning attack when surrounded. Taunt creates an opening if the enemy commits to an attack.",
      ru: "Удерживайте основные атаки, чтобы увеличить дальность или урон, проходите сквозь цель рывком Жнеца и используйте вращение против группы. Провокация создаёт окно для ответа, если враг начинает атаку."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Crimson Slashes", ru: "Багровые разрезы" }, desc: { en: "Charge the attack, then release a burst of slashes. Charging drains energy.", ru: "Зарядить атаку и выпустить серию разрезов. Зарядка расходует энергию." } },
      { slot: "Secondary", name: { en: "Reaper's Flash", ru: "Вспышка жнеца" }, desc: { en: "Charge a dash to your target. Charging drains energy.", ru: "Зарядить рывок к цели. Зарядка расходует энергию." } },
      { slot: "Utility",  name: { en: "Blade Blender", ru: "Клинковый блендер" }, desc: { en: "Spin in place, damaging all enemies within 7 blocks.", ru: "Вращение на месте, урон всем врагам в 7 блоках." } },
      { slot: "Supportive 1", name: { en: "Taunt", ru: "Провокация" }, desc: { en: "Taunt enemies; a successful taunt grants +1 Strength and counters when you take damage.", ru: "Спровоцировать врагов; успех даёт +1 Силы и контратаку при получении урона." } }
    ],
    asset: undefined
  },

  {
    id: "isou",
    name: { en: "Isou", ru: "Исоу" },
    character: { en: "-", ru: "-" },
    element: "void",
    elementLabel: { en: "Shockwave", ru: "Ударная волна" },
    tier: "sorcery",
    role: { en: "Shockwaves at range, a charged blast and an air dash", ru: "Ударные волны на дистанции, заряжаемый взрыв и рывок в воздухе" },
    summary: {
      en: "Primary fires a quick shockwave. Secondary can be charged for a larger blast, while Utility moves you through the air. The kit is simple: pressure from range, then change position before the next shot.",
      ru: "Primary выпускает быструю ударную волну. Secondary заряжается для более крупного взрыва, а Utility перемещает вас по воздуху. Схема простая: держать дистанцию и менять позицию между выстрелами."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Shockwave", ru: "Ударная волна" }, desc: { en: "Fire a shockwave forward.", ru: "Выпустить ударную волну вперёд." } },
      { slot: "Secondary", name: { en: "Charge Blast", ru: "Заряд-взрыв" }, desc: { en: "Hold to charge a larger blast, consuming energy over time for a bigger explosion.", ru: "Удержание заряжает больший взрыв, расходуя энергию для большего поражения." } },
      { slot: "Utility",  name: { en: "Aerial Dash", ru: "Воздушный рывок" }, desc: { en: "Propel yourself through the air.", ru: "Рвануть по воздуху." } }
    ],
    asset: undefined
  },

  {
    id: "twilight-wave",
    name: { en: "Twilight Wave", ru: "Сумеречная Волна" },
    character: { en: "-", ru: "-" },
    element: "wave",
    elementLabel: { en: "Heat / Stored Heat", ru: "Жар / Запас жара" },
    tier: "sorcery",
    role: { en: "Generate Stored Heat and spend it on stronger attacks", ru: "Накопление Запаса жара и его расход на усиленные атаки" },
    summary: {
      en: "One ability fills the Stored Heat meter. The other slots consume that meter for a burning touch, a channelled beam, an area burst or Hagure. Saving more heat gives you access to the expensive attacks sooner.",
      ru: "Одна способность заполняет шкалу Запаса жара. Остальные тратят её на обжигающее касание, поддерживаемый луч, вспышку по площади или Хагурэ. Чем больше жара сохранено, тем раньше доступны дорогие атаки."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Scorch Touch", ru: "Обжигающее касание" }, desc: { en: "Burn a nearby enemy, consuming Stored Heat.", ru: "Сжечь ближнего врага, расходуя Запас жара." } },
      { slot: "Secondary", name: { en: "Heat Ray", ru: "Тепловой луч" }, desc: { en: "Channel Stored Heat into a beam until fully charged.", ru: "Направить Запас жара в луч до полной зарядки." } },
      { slot: "Utility",  name: { en: "Flashpoint", ru: "Вспышка" }, desc: { en: "Charge up, then release a wave of heat around you.", ru: "Зарядиться и выпустить волну жара вокруг себя." } },
      { slot: "Special",  name: { en: "Hagure", ru: "Hagure" }, desc: { en: "Spend all Stored Heat on one beam.", ru: "Потратить весь Запас жара на один луч." } },
      { slot: "Supportive 1", name: { en: "Heat Generation", ru: "Генерация жара" }, desc: { en: "Toggle: constantly spend SE to build Stored Heat.", ru: "Переключатель: постоянно тратить SE, накапливая Запас жара." } }
    ],
    asset: undefined
  },

  {
    id: "jobaku",
    name: { en: "Jobaku", ru: "Дзёбаку" },
    character: { en: "-", ru: "-" },
    element: "chain",
    elementLabel: { en: "Pegs / Binding", ru: "Колья / Связывание" },
    tier: "sorcery",
    role: { en: "Place pegs and connect them with restraining tendrils", ru: "Установка кольев и связывание целей между ними" },
    summary: {
      en: "Place pegs around the fight, then activate the links between them. Targets caught in a link are pulled and held; the binding can also apply True Wound. Jobaku is strongest after the area has been prepared.",
      ru: "Расставьте колья вокруг места боя, затем активируйте связи между ними. Попавшие в связь цели притягиваются и удерживаются; связывание также может наложить Истинную рану. Дзёбаку лучше работает на заранее подготовленной территории."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Place Peg", ru: "Установить кол" }, desc: { en: "Place magical pegs (up to 4) used to bind targets.", ru: "Установить магические колья (до 4) для связывания целей." } },
      { slot: "Secondary", name: { en: "Binding Tendrils", ru: "Связывающие усики" }, desc: { en: "Activate black tendrils that restrain and pull targets to the center. Inflicts True Wound; drains SE.", ru: "Активировать чёрные усики, сковывающие и тянущие цели к центру. Накладывает True Wound; расходует SE." } },
      { slot: "Utility",  name: { en: "Clear Pegs", ru: "Убрать колья" }, desc: { en: "Remove all placed pegs.", ru: "Убрать все установленные колья." } },
      { slot: "Supportive 1", name: { en: "Quadrant Deploy", ru: "Развёртка квадранта" }, desc: { en: "Instantly deploy all 4 pegs in a square around a target point.", ru: "Мгновенно развернуть все 4 кола квадратом вокруг точки." } }
    ],
    asset: undefined
  },

  {
    id: "gansui",
    name: { en: "Gansui", ru: "Гансуй" },
    status: { en: "WIP", ru: "В разработке" },
    character: { en: "-", ru: "-" },
    element: "spike",
    elementLabel: { en: "Earth / Rock", ru: "Земля / Камень" },
    tier: "sorcery",
    role: { en: "Move terrain: throw rocks, raise walls and lift platforms", ru: "Управление рельефом: камни, стены, столбы и подъём платформ" },
    summary: {
      en: "Gansui directly changes the terrain. It can throw loose rock, raise a wall or pillar, drop a large boulder and lift a selected platform high above the ground. Use it to cut routes or move the fight vertically.",
      ru: "Гансуй напрямую меняет рельеф. Он бросает камни, поднимает стену или столб, обрушивает крупный валун и может поднять выбранную площадку над землёй. Это позволяет перекрывать пути и переносить бой по вертикали."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Launch Rock", ru: "Бросок камня" }, desc: { en: "Launch rocks at enemies with telekinetic force.", ru: "Запускать камни во врагов телекинетической силой." } },
      { slot: "Secondary", name: { en: "Earth Pillar", ru: "Земляной столб" }, desc: { en: "Launch a targeted enemy upward on a rising stone pillar.", ru: "Подбросить цель вверх на поднимающемся каменном столбе." } },
      { slot: "Utility",  name: { en: "Build Wall", ru: "Возвести стену" }, desc: { en: "Summon an earth wall that builds block by block around you.", ru: "Призвать земляную стену, строящуюся блок за блоком вокруг вас." } },
      { slot: "Special",  name: { en: "Platform Lift", ru: "Подъём платформы" }, desc: { en: "Charge to lift terrain up to 150 blocks high. Lasts 90s or drops on a second press.", ru: "Зарядить подъём рельефа до 150 блоков. Держится 90с или падает по повторному нажатию." } },
      { slot: "Supportive 1", name: { en: "Boulder Throw", ru: "Бросок валуна" }, desc: { en: "Launch a 5×5×5 boulder. It explodes on impact.", ru: "Запустить валун размером 5×5×5. При ударе он взрывается." } },
      { slot: "Supportive 2", name: { en: "Seismic Slam", ru: "Сейсмический удар" }, desc: { en: "Hit the ground, damaging targets and breaking nearby blocks.", ru: "Ударить по земле, нанести урон целям и разрушить блоки рядом." } }
    ],
    asset: undefined
  },

  {
    id: "warriors-path",
    name: { en: "Warrior's Path", ru: "Путь Воина" },
    character: { en: "-", ru: "-" },
    element: "warrior",
    elementLabel: { en: "Marks / Peel & Rescue", ru: "Метки / Спасение и пил" },
    tier: "sorcery",
    role: { en: "Mark allies for rescue and enemies for forced movement", ru: "Метки для спасения союзников и принудительного перемещения врагов" },
    summary: {
      en: "Mark an ally or enemy, then use the mark to intervene from a distance. Allies can be pulled out of danger; enemies can be pushed off their route. One movement ability passes through solid geometry to reach the marked position.",
      ru: "Пометьте союзника или врага, чтобы вмешаться с расстояния. Союзника можно вытащить из опасности, а врага - сбить с выбранного маршрута. Одна из способностей позволяет пройти сквозь препятствие к отмеченной позиции."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Path Mark", ru: "Метка пути" }, desc: { en: "Mark an ally for rescue or an enemy for peel routing.", ru: "Пометить союзника для спасения или врага для смещения." } },
      { slot: "Secondary", name: { en: "Intervention", ru: "Вмешательство" }, desc: { en: "Consume a mark to rescue an ally or displace an enemy from its target.", ru: "Потратить метку, чтобы спасти союзника или оттащить врага от его цели." } },
      { slot: "Utility",  name: { en: "Phase Step", ru: "Фазовый шаг" }, desc: { en: "Traverse through geometry to reposition without dealing damage.", ru: "Пройти сквозь геометрию для перестановки без урона." } },
      { slot: "Special",  name: { en: "Emergency Route", ru: "Аварийный маршрут" }, desc: { en: "Reposition yourself and nearby allies through safe spatial lanes.", ru: "Переместить себя и ближних союзников безопасными коридорами." } }
    ],
    asset: undefined
  },

  {
    id: "lightning-menace",
    name: { en: "Lightning Menace", ru: "Грозовая Угроза" },
    character: { en: "-", ru: "-" },
    element: "lightning",
    elementLabel: { en: "High Voltage", ru: "Высокое напряжение" },
    tier: "sorcery",
    role: { en: "Close lightning attacks, a carrying charge and Flash Step", ru: "Ближние атаки молнией, таран с захватом и Молниеносный шаг" },
    summary: {
      en: "The close-range attacks deal high Stability and guard damage. Thunder Ram carries a caught target along the dash. Lightning Shot gives the kit one narrow ranged option, and Flash Step is used to enter or leave close range.",
      ru: "Ближние атаки сильно бьют по Стабильности и защите. Грозовой таран захватывает цель и тащит её по траектории рывка. Узкий выстрел молнией даёт один вариант на дистанции, а Молниеносный шаг помогает войти в ближний бой или выйти из него."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Voltage Strike", ru: "Удар напряжения" }, desc: { en: "A high-voltage close strike with heavy guard and stability pressure.", ru: "Высоковольтный ближний удар с сильным давлением на защиту и стабильность." } },
      { slot: "Secondary", name: { en: "Thunder Ram", ru: "Громовой таран" }, desc: { en: "Charge and release a long carry dash that captures a target, drags it along, and cashes out on impact.", ru: "Зарядить и выпустить длинный рывок-захват: подхватывает цель, тащит и выбивает при ударе." } },
      { slot: "Utility",  name: { en: "Lightning Shot", ru: "Выстрел молнии" }, desc: { en: "A fast, narrow shot that launches targets and carves a thin readable beam path.", ru: "Быстрый узкий выстрел, подбрасывающий цели и прорезающий тонкий читаемый путь луча." } },
      { slot: "Supportive 1", name: { en: "Flash Step", ru: "Вспышка-шаг" }, desc: { en: "A damage-free mobility dash. 3 charges, one restored every 3 seconds.", ru: "Мобильный рывок без урона. 3 заряда, восстановление каждые 3с." } }
    ],
    asset: undefined
  },

  {
    id: "yellow-chains",
    name: { en: "Yellow Chains", ru: "Жёлтые Цепи" },
    character: { en: "-", ru: "-" },
    element: "yellowchain",
    elementLabel: { en: "Chains / Restraint", ru: "Цепи / Удержание" },
    tier: "sorcery",
    role: { en: "Bind targets with chains and pull them toward you", ru: "Связывание целей цепями и притягивание к владельцу" },
    summary: {
      en: "Hit one target with the chain projectile, keep the chain active to reel it in, or use the area version to catch several enemies. The initial bind can apply True Wound.",
      ru: "Попадите цепью в одну цель, удерживайте связь, чтобы подтянуть её, или используйте вариант по площади против группы. Первичное связывание может наложить Истинную рану."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Chain Bind", ru: "Цепное связывание" }, desc: { en: "Launch a chain that binds the target on hit and inflicts True Wound.", ru: "Запустить цепь, связывающую цель при попадании и накладывающую True Wound." } },
      { slot: "Secondary", name: { en: "Maintain Chains", ru: "Удержание цепей" }, desc: { en: "Keep the chains active, pulling bound targets toward you. Drains SE over time.", ru: "Держать цепи активными, притягивая связанных. Расходует SE со временем." } },
      { slot: "Utility",  name: { en: "Area Chain Bind", ru: "Связывание области" }, desc: { en: "Bind multiple targets in an area at once.", ru: "Связать несколько целей в области сразу." } },
      { slot: "Supportive 1", name: { en: "Release Chain", ru: "Снять цепь" }, desc: { en: "Remove the chain from the target you're looking at.", ru: "Снять цепь с цели, на которую смотрите." } },
      { slot: "Supportive 2", name: { en: "Release All Chains", ru: "Снять все цепи" }, desc: { en: "Remove every active chain.", ru: "Снять все активные цепи." } }
    ],
    asset: undefined
  },

  {
    id: "airborne-spikes",
    name: { en: "Airborne Spikes", ru: "Воздушные Шипы" },
    character: { en: "-", ru: "-" },
    element: "spike",
    elementLabel: { en: "Aerial Spikes", ru: "Воздушные шипы" },
    tier: "sorcery",
    role: { en: "Quick spike volleys or one charged block-breaking shot", ru: "Быстрые залпы шипов или один заряженный пробивающий выстрел" },
    summary: {
      en: "Tap for a small volley, hold for more projectiles, or focus the charge into one heavy spike. The focused shot travels through blocks along its route.",
      ru: "Нажатие выпускает небольшой залп, удержание добавляет снаряды, а отдельный режим собирает заряд в один тяжёлый шип. Сфокусированный выстрел пробивает блоки на своей линии."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Spike Volley", ru: "Залп шипов" }, desc: { en: "Launch multiple air-spike projectiles at targets.", ru: "Запустить несколько воздушных шипов по целям." } },
      { slot: "Secondary", name: { en: "Charged Spikes", ru: "Заряженные шипы" }, desc: { en: "Charge a volley. Longer charge adds more spikes.", ru: "Зарядить залп. Длительность зарядки увеличивает число шипов." } },
      { slot: "Utility",  name: { en: "Focused Spike", ru: "Сфокусированный шип" }, desc: { en: "Charge one spike that breaks suitable blocks on its path.", ru: "Зарядить один шип, который ломает подходящие блоки на пути." } }
    ],
    asset: undefined
  },

  {
    id: "storehouse",
    name: { en: "Storehouse", ru: "Хранилище" },
    status: { en: "WIP", ru: "В разработке" },
    character: { en: "-", ru: "-" },
    element: "storage",
    elementLabel: { en: "Territory / Storehouse", ru: "Территория / Склад" },
    tier: "sorcery",
    role: { en: "Katana attacks outside; corridor control inside the Storehouse", ru: "Катаны снаружи; управление проходами внутри Хранилища" },
    summary: {
      en: "Outside the Storehouse, the kit fires katana volleys, moves targets and places projection anchors. Entering the Storehouse replaces those actions with shelf spears, temporary aisle walls, door jumps and false corridors. This kit is still WIP.",
      ru: "Снаружи Хранилища набор выпускает катаны, перемещает цели и ставит проекционные якоря. После входа способности меняются на копья из полок, временные стены в проходах, прыжки через двери и ложные коридоры. Набор ещё в разработке."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Hidden Arsenal / Shelf Spears", ru: "Скрытый арсенал / Полки-копья" }, desc: { en: "Outside: katana volleys in front of you. Inside: shelf-spears erupt along your lane.", ru: "Снаружи: залпы катан перед вами. Внутри: полки-копья вырываются вдоль линии." } },
      { slot: "Secondary", name: { en: "Route Shift / Aisle Rewrite", ru: "Сдвиг маршрута / Переписать проход" }, desc: { en: "Outside: spatial reposition. Inside: rewrite aisles with temporary matter walls.", ru: "Снаружи: пространственная перестановка. Внутри: переписать проходы временными стенами материи." } },
      { slot: "Utility",  name: { en: "Storehouse Gate", ru: "Врата склада" }, desc: { en: "Enter your Storehouse territory or exit back to saved return coordinates.", ru: "Войти в территорию Склада или выйти к сохранённым координатам." } },
      { slot: "Special",  name: { en: "Projection / Auction Floor", ru: "Проекция / Аукционный зал" }, desc: { en: "Outside: deploy projection anchors. Inside: activate the territory-empowering Auction Floor phase.", ru: "Снаружи: разместить якоря проекции. Внутри: включить фазу Auction Floor, усиливающую контроль." } },
      { slot: "Supportive 1", name: { en: "Claim / Door Jump", ru: "Захват / Прыжок через дверь" }, desc: { en: "Outside: apply a tactical claim. Inside: fast door-jump through local space.", ru: "Снаружи: тактический захват. Внутри: быстрый прыжок через дверь в локальном пространстве." } },
      { slot: "Supportive 2", name: { en: "Emergency Door / False Corridor", ru: "Аварийная дверь / Ложный коридор" }, desc: { en: "Outside: emergency pull via slit-door. Inside: decoy corridors and a short enemy slow.", ru: "Снаружи: аварийное притягивание через дверь-щель. Внутри: ложные коридоры и короткое замедление врагов." } }
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
    role: { en: "Hard-light projectiles, a beam and a movement pin", ru: "Снаряды твёрдого света, луч и фиксация цели" },
    summary: {
      en: "Fire hard-light lances for regular ranged pressure or channel the photon beam through a line. One ability pins a hit target in place; another calls several vertical beams around the caster.",
      ru: "Копья твёрдого света используются как обычная дальняя атака, а фотонный луч проводится по прямой линии. Одна способность фиксирует попавшуюся цель на месте, другая вызывает несколько вертикальных лучей вокруг владельца."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Hard Light Lance", ru: "Копьё твёрдого света" }, desc: { en: "Launch a hard-light rod that breaks tagged blocks and stays embedded in targets or walls briefly.", ru: "Запустить стержень твёрдого света: ломает помеченные блоки и ненадолго застревает в целях или стенах." } },
      { slot: "Secondary", name: { en: "Photon Beam", ru: "Фотонный луч" }, desc: { en: "Hold to extend a hard-light beam; if a target is caught at activation, snap to it and fire straight through.", ru: "Удержание вытягивает луч; если цель поймана при активации - притянуться и пробить насквозь." } },
      { slot: "Utility",  name: { en: "Light Impale", ru: "Пронзание светом" }, desc: { en: "Drive multiple light rods through the nearest target, applying PIERCED and locking its movement.", ru: "Вонзить несколько стержней в ближайшую цель, накладывая PIERCED и блокируя движение." } },
      { slot: "Special",  name: { en: "Skyfall Beams", ru: "Лучи с небес" }, desc: { en: "Call repeated vertical beams of light around you that destroy blocks and damage on the way down.", ru: "Призвать вертикальные лучи света вокруг себя, разрушающие блоки и наносящие урон при падении." } },
      { slot: "Supportive 1", name: { en: "Lightspeed Kick", ru: "Удар светоскорости" }, desc: { en: "Charge 2.5s, then rush in a straight line at extreme speed and stop before the first target with a heavy kick.", ru: "Зарядить 2.5с, затем рвануть по прямой на огромной скорости и встать перед первой целью мощным ударом." } }
    ],
    asset: undefined
  },

  {
    id: "coin",
    name: { en: "Coin", ru: "Монета" },
    character: { en: "-", ru: "-" },
    element: "coin",
    elementLabel: { en: "Coins / Precision", ru: "Монеты / Точность" },
    tier: "sorcery",
    role: { en: "Place up to six coins and use them as lightning relays", ru: "До шести монет, работающих как проводники для молнии" },
    summary: {
      en: "Throw up to six coins into the arena. Lightning can jump between placed coins, and recalled coins orbit the caster and fire automatically. The remaining modes trade the coin setup for a speed or healing effect.",
      ru: "Разместите на поле до шести монет. Молния перескакивает между ними, а отозванные монеты вращаются вокруг владельца и стреляют автоматически. Оставшиеся режимы позволяют обменять подготовленные монеты на ускорение или лечение."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Shoot Coin", ru: "Выстрел монетой" }, desc: { en: "Shoot a coin (max 6 active). On hit: damage, a 0.5s stun and stacking Weakness.", ru: "Выстрелить монетой (макс. 6). При попадании: урон, оглушение 0.5с и стаки Слабости." } },
      { slot: "Secondary", name: { en: "Lightning Discharge", ru: "Разряд молнии" }, desc: { en: "Arc electricity between all shot coins, hitting enemies along the paths with a hard stun.", ru: "Пустить электричество между всеми монетами, поражая врагов на путях жёстким оглушением." } },
      { slot: "Utility",  name: { en: "Blood Flow Acceleration", ru: "Ускорение кровотока" }, desc: { en: "Recall all coins (damaging on the way) into orbit; they auto-launch at nearby enemies one by one.", ru: "Отозвать монеты (с уроном на пути) в орбиту; они авто-стреляют по ближним врагам по очереди." } },
      { slot: "Special",  name: { en: "Enhanced Speed", ru: "Усиленная скорость" }, desc: { en: "Toggle: +30% Power, +150% melee, and periodic direct damage that bypasses Stability. Drains SE.", ru: "Переключатель: +30% Силы, +150% ближнего урона и периодический прямой урон в обход Стабильности. Расход SE." } },
      { slot: "Supportive 2", name: { en: "Coin Healing", ru: "Лечение монетами" }, desc: { en: "Toggle: drains SE to keep Regeneration I refreshed.", ru: "Переключатель: расход SE для поддержания Регенерации I." } }
    ],
    asset: assets.coinSorcery
  },

  {
    id: "daruma",
    name: { en: "Daruma", ru: "Дарума" },
    character: { en: "-", ru: "-" },
    element: "doll",
    elementLabel: { en: "Dolls / Detonation", ru: "Куклы / Детонация" },
    tier: "sorcery",
    role: { en: "Place Daruma dolls, move them and choose when they explode", ru: "Размещение кукол Дарума, их перемещение и управляемый подрыв" },
    summary: {
      en: "Throw dolls and leave them where enemies will have to pass. Telekinesis lets you adjust their position. Detonate the nearest doll for a small setup or trigger every active doll at once.",
      ru: "Бросайте кукол в места, через которые придётся пройти врагу. Телекинез позволяет поправить их положение. Можно подорвать ближайшую куклу или одновременно активировать все размещённые."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Daruma Launch", ru: "Запуск Дарумы" }, desc: { en: "Charge to launch a single Daruma - longer charge throws it faster.", ru: "Зарядить и запустить одну Даруму - дольше заряд, быстрее бросок." } },
      { slot: "Secondary", name: { en: "Targeted Explosion", ru: "Точечный взрыв" }, desc: { en: "Explode the nearest Daruma in the direction you're looking.", ru: "Взорвать ближайшую Даруму в направлении взгляда." } },
      { slot: "Utility",  name: { en: "Telekinesis Control", ru: "Телекинез" }, desc: { en: "While held, steer all active Darumas toward your aim point.", ru: "При удержании направлять всех активных Дарум к точке прицела." } },
      { slot: "Special",  name: { en: "Mass Detonation", ru: "Массовая детонация" }, desc: { en: "Explode all active Darumas at once.", ru: "Одновременно взорвать всех активных Дарум." } },
      { slot: "Supportive 1", name: { en: "Daruma Volley", ru: "Залп Дарум" }, desc: { en: "Launch multiple Darumas in a spread pattern.", ru: "Запустить несколько Дарум веером." } }
    ],
    asset: undefined
  },

  {
    id: "pine-tree",
    name: { en: "Pine Tree", ru: "Сосна" },
    character: { en: "-", ru: "-" },
    element: "nature",
    elementLabel: { en: "Pine / Seeds", ru: "Сосна / Семена" },
    tier: "sorcery",
    role: { en: "Plant pines, detonate them and block routes with new trees", ru: "Посадка сосен, их подрыв и перекрытие путей деревьями" },
    summary: {
      en: "Primary sends a rotating trunk forward. Seeds grow into pines and can be detonated later. Another slot raises a line of trees as cover, while Catastrophe Labyrinth sends roots through the nearby ground for ten seconds.",
      ru: "Primary запускает вперёд вращающийся ствол. Семена вырастают в сосны, которые позже можно подорвать. Другая способность поднимает линию деревьев как укрытие, а Лабиринт катастрофы в течение десяти секунд проводит корни по земле рядом."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Spiral Trunk Thrust", ru: "Спиральный ствол" }, desc: { en: "A narrow spiral surge of trunks that drills forward and pressures stability.", ru: "Узкий спиральный всплеск стволов, бурящий вперёд и давящий на стабильность." } },
      { slot: "Secondary", name: { en: "Seed Shot", ru: "Выстрел семенем" }, desc: { en: "Fire a seed that implants in a target or anchors in terrain for manual detonation.", ru: "Выстрелить семя, вживляющееся в цель или закрепляющееся в рельефе для ручной детонации." } },
      { slot: "Utility",  name: { en: "Pine Bastion Wall", ru: "Сосновый бастион" }, desc: { en: "Raise a temporary pine bastion that restores while active, then cleanly vanishes.", ru: "Поднять временный сосновый бастион, восстанавливающийся пока активен, затем чисто исчезающий." } },
      { slot: "Special",  name: { en: "Catastrophe Labyrinth", ru: "Лабиринт катастрофы" }, desc: { en: "A 10s spread: roots and trunks keep erupting from a wide ring, some braiding toward enemies.", ru: "10с разрастание: корни и стволы извергаются из широкого кольца, часть плетётся к врагам." } },
      { slot: "Supportive 1", name: { en: "Seed Detonation", ru: "Детонация семян" }, desc: { en: "Tap to detonate one seed in your aim; hold 1.5s to detonate every seed in the cone.", ru: "Нажатие - детонировать одно семя в прицеле; удержание 1.5с - все семена в конусе." } },
      { slot: "Supportive 2", name: { en: "Chaotic Seed Bastion", ru: "Хаотичный бастион семян" }, desc: { en: "Detonate seeds in your aim into a dense chaotic wall of wood and leaves.", ru: "Детонировать семена в прицеле в плотную хаотичную стену из дерева и листьев." } }
    ],
    asset: undefined
  },

  {
    id: "jikai",
    name: { en: "Jikai", ru: "Дзикай" },
    character: { en: "-", ru: "-" },
    element: "magnet",
    elementLabel: { en: "Magnetism / Iron Sand", ru: "Магнетизм / Железный песок" },
    tier: "sorcery",
    awakening: { en: "Schizophrenia", ru: "Шизофрения" },
    role: { en: "Iron blades, magnetic push and pull, then black sand in Awakening", ru: "Железные клинки, притяжение и отталкивание; в Пробуждении - чёрный песок" },
    summary: {
      en: "Suspend iron blades, then launch them as a volley. The magnetic field can pull objects and enemies toward a point or push them away. At full Awakening, the regular slots are replaced by black-sand attacks and MRI Impale.",
      ru: "Подвесьте железные клинки, затем выпустите их залпом. Магнитное поле притягивает предметы и врагов к точке либо отталкивает их. При полном Пробуждении обычные слоты заменяются атаками чёрным песком и MRI-пронзанием."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Iron Blade Volley", ru: "Залп железных клинков" }, desc: { en: "Hold to suspend a spread of iron blades, release to fire the full volley.", ru: "Удержание подвешивает веер железных клинков, отпускание - полный залп." } },
      { slot: "Secondary", name: { en: "Magnetic Focus", ru: "Магнитный фокус" }, desc: { en: "Place a magnetic point that drags in enemies, projectiles and combat objects.", ru: "Поставить магнитную точку, втягивающую врагов, снаряды и боевые объекты." } },
      { slot: "Utility",  name: { en: "Repulsion Ring", ru: "Кольцо отталкивания" }, desc: { en: "Blast everything away from your position - enemies, projectiles and objects.", ru: "Оттолкнуть всё от себя - врагов, снаряды и объекты." } },
      { slot: "Special",  name: { en: "Iron Sand Mode", ru: "Режим железного песка" }, desc: { en: "G toggles an iron-sand orbit that auto-strikes and softens pressure. At 100%, press V to awaken.", ru: "G включает орбиту железного песка с авто-ударами и смягчением давления. При 100% - V для пробуждения." } },
      { slot: "Supportive 1", name: { en: "Magnetic Polarity", ru: "Магнитная полярность" }, desc: { en: "Tap to repel, hold to pull; locks the nearest aimed target through blocks up to 128 blocks.", ru: "Нажатие - оттолкнуть, удержание - притянуть; захват ближайшей цели сквозь блоки до 128 блоков." } },
      { slot: "Supportive 2", name: { en: "Iron Sand Detonation", ru: "Детонация железного песка" }, desc: { en: "Detonate all iron-sand stacks on the aimed target, splashing nearby enemies.", ru: "Детонировать все стаки железного песка на цели, задевая ближних врагов." } }
    ],
    awakenedAbilities: [
      { slot: "Primary",  name: { en: "Awakened Iron Sand Barrage", ru: "Пробуждённый залп железного песка" }, desc: { en: "Tap for a fast awakened volley that builds awakening faster and applies black-sand pressure. Hold to charge a steerable Black Sand Beam.", ru: "Нажатие - быстрый пробуждённый залп, ускоряющий пробуждение и давящий чёрным песком. Удержание - управляемый Луч чёрного песка." } },
      { slot: "Secondary", name: { en: "Air Beam / Sand Cone", ru: "Луч воздуха / Конус песка" }, desc: { en: "Fire a focused magnetic air beam for precise ranged pressure, or unload a broad cone of iron sand that tags multiple targets.", ru: "Сфокусированный магнитный воздушный луч для точного давления или широкий конус железного песка, метящий несколько целей." } },
      { slot: "Utility",  name: { en: "Spike Repulsion Ring", ru: "Шиповое кольцо отталкивания" }, desc: { en: "The repulsion burst now throws iron-sand spikes outward as a second wave after the push.", ru: "Взрыв отталкивания теперь выбрасывает шипы железного песка второй волной после толчка." } },
      { slot: "Special",  name: { en: "MRI Impale", ru: "MRI-пронзание" }, desc: { en: "Scan through terrain with MRI sight, then press G again on a target to send the mask and black sand straight through the map for a heavy impale.", ru: "Сканировать сквозь рельеф MRI-зрением, затем снова нажать G на цели, чтобы пробить маской и чёрным песком сквозь карту мощным пронзанием." } },
      { slot: "Supportive 1", name: { en: "Magnetic Polarity", ru: "Магнитная полярность" }, desc: { en: "Tap to repel, hold to pull; locks the nearest aimed target through blocks up to 128 blocks.", ru: "Нажатие - оттолкнуть, удержание - притянуть; захват ближайшей цели сквозь блоки до 128 блоков." } },
      { slot: "Supportive 2", name: { en: "Iron Sand Detonation", ru: "Детонация железного песка" }, desc: { en: "Detonate all iron-sand stacks on the aimed target, splashing nearby enemies.", ru: "Детонировать все стаки железного песка на цели, задевая ближних врагов." } }
    ],
    asset: undefined
  },

  {
    id: "demon-bite",
    name: { en: "Demon Bite", ru: "Укус Демона" },
    character: { en: "-", ru: "-" },
    element: "creature",
    elementLabel: { en: "Talisman / Charms", ru: "Талисман / Чары" },
    tier: "sorcery",
    role: { en: "Talisman bites, charm projectiles and summoned flying charms", ru: "Укусы талисманами, чары-снаряды и призываемые летающие чары" },
    summary: {
      en: "Close-range bites fill the Demon Bite meter. Charged charms provide the ranged attack, while summoned flying charms pursue targets on their own. Destroying one of those summons applies a penalty to the attacker.",
      ru: "Укусы вблизи заполняют шкалу Укуса Демона. Заряжаемые чары дают дальнюю атаку, а призванные летающие чары сами преследуют цели. Уничтоживший такой призыв получает штраф."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Bite", ru: "Укус" }, desc: { en: "Manifest a talisman jaw at melee range and bite instantly. Fills the Demon Bite Gauge.", ru: "Создать талисманную пасть вблизи и мгновенно укусить. Наполняет шкалу Demon Bite." } },
      { slot: "Secondary", name: { en: "Charm Shot", ru: "Выстрел чарами" }, desc: { en: "Tap for a small charm projectile; hold to full charge for a large destructive shot.", ru: "Нажатие - малый снаряд-чары; удержание до полного заряда - крупный разрушительный выстрел." } },
      { slot: "Utility",  name: { en: "Swarm Summon", ru: "Призыв роя" }, desc: { en: "Summon multiple autonomous flying charms that hunt enemies around you.", ru: "Призвать несколько автономных летающих чар, охотящихся на врагов вокруг." } },
      { slot: "Supportive 1", name: { en: "Charm Summon", ru: "Призыв чары" }, desc: { en: "Summon one autonomous flying charm. Killing charms burdens the killer with stacking penalties.", ru: "Призвать одну летающую чару. Убийство чар накладывает на убийцу растущие штрафы." } }
    ],
    asset: undefined
  },

  {
    id: "smoke-axe",
    name: { en: "Smoke Axe", ru: "Дымовой Топор" },
    character: { en: "-", ru: "-" },
    element: "smoke",
    elementLabel: { en: "Smoke / Enbu", ru: "Дым / Enbu" },
    tier: "sorcery",
    role: { en: "A cutting dash, smoke projectiles and a field that breaks lock-on", ru: "Режущий рывок, дымовые снаряды и поле, сбивающее захват цели" },
    summary: {
      en: "Enbu moves through the target with a cut. The ranged slots fire smoke crescents, including a charged version. The smoke field interrupts lock-on, and marked enemies can be hit by a delayed crosscut.",
      ru: "Энбу проходит через цель с разрезом. Дальние слоты выпускают дымовые полумесяцы, включая заряжаемый вариант. Дымовое поле сбивает захват цели, а отмеченного врага можно поразить отложенным крестовым разрезом."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Enbu", ru: "Enbu" }, desc: { en: "Form a horizontal smoke-bolt between your arms, then dash through and cleave along the line.", ru: "Сформировать горизонтальный дымовой болт между рук, рвануть сквозь и рубануть вдоль линии." } },
      { slot: "Secondary", name: { en: "Crescent / Grand Enbu", ru: "Полумесяц / Grand Enbu" }, desc: { en: "Tap for a fast smoke crescent; full charge releases Grand Enbu with a wider, stronger slash.", ru: "Нажатие - быстрый дымовой полумесяц; полный заряд - Grand Enbu с шире и сильнее разрезом." } },
      { slot: "Utility",  name: { en: "Smoke Field", ru: "Дымовое поле" }, desc: { en: "Deploy a smoke zone that slows enemies and disrupts their lock-on while inside.", ru: "Развернуть дымовую зону, замедляющую врагов и сбивающую их захват внутри." } },
      { slot: "Supportive 1", name: { en: "Crosscut", ru: "Крестовой срез" }, desc: { en: "Mark a target, then after a short telegraph perform a passing crosscut through the marked line.", ru: "Пометить цель, затем после короткого замаха пройти крестовым срезом по линии." } }
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
    awakening: { en: "Island Breaker", ru: "Разрушитель острова" },
    role: { en: "Force targets downward, pull them into zones and control your fall", ru: "Прижимание целей к земле, зоны притяжения и управление падением" },
    summary: {
      en: "Push targets into the ground, throw a boulder or place a zone that pulls enemies inward. The black sphere changes the caster's descent and improves the gravity attacks. Full Awakening unlocks Island Breaker, a large-area downward strike.",
      ru: "Прижимайте цели к земле, бросайте валун или ставьте зону, которая стягивает врагов к центру. Чёрная сфера меняет падение владельца и усиливает гравитационные атаки. Полное Пробуждение открывает Разрушитель острова - удар вниз по большой площади."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Gravity Crush", ru: "Гравитационный пресс" }, desc: { en: "Spike gravity on the target in your sightline for heavy damage, severe slowness and a slam into the ground.", ru: "Резко усилить гравитацию на цели в линии взгляда: большой урон, сильное замедление и вдавливание в землю." } },
      { slot: "Secondary", name: { en: "Gravity Hurl", ru: "Гравитационный бросок" }, desc: { en: "Rip a boulder loose and fling it forward, crushing the first enemy caught in its path.", ru: "Сорвать валун и швырнуть его вперёд, дробя первого врага на пути." } },
      { slot: "Utility",  name: { en: "Directional Dash", ru: "Направленный рывок" }, desc: { en: "Angle gravity into a burst dash in the direction you look, then hover briefly with controlled descent.", ru: "Сменить угол гравитации для рывка в сторону взгляда, затем коротко зависнуть с контролем падения." } },
      { slot: "Supportive 1", name: { en: "Gravity Well", ru: "Гравитационный колодец" }, desc: { en: "Open a crushing well ahead of you that drags enemies inward, pins them and denies jumping.", ru: "Открыть впереди давящий колодец, который тянет врагов к центру, придавливает и не даёт прыгать." } },
      { slot: "Supportive 2", name: { en: "Null-Gravity Burst", ru: "Всплеск невесомости" }, desc: { en: "Cancel gravity around yourself and launch nearby enemies helplessly upward.", ru: "Отменить гравитацию вокруг себя и беспомощно подбросить ближайших врагов вверх." } },
      { slot: "Special",  name: { en: "Kurotsuchi", ru: "Куротсучи" }, desc: { en: "Toggle the black sphere for empowered gravity output and controlled descent while it remains active.", ru: "Включить чёрный шар для усиленного гравитационного выхода и контроля падения, пока он активен." } }
    ],
    asset: undefined
  },

  {
    id: "sumika",
    name: { en: "Sumika", ru: "Сумика" },
    status: { en: "WIP", ru: "В разработке" },
    character: { en: "Ariu Mikaboshi", ru: "Ариу Микабоши" },
    element: "creature",
    elementLabel: { en: "Carapace / Anti-Sorcery", ru: "Панцирь / Анти-колдовство" },
    tier: "sorcery",
    awakening: { en: "True Realm Access", ru: "Доступ к Истинному Царству" },
    role: { en: "A piercing dash, a slowing field, healing and anti-sorcery defence", ru: "Пронзающий рывок, замедляющее поле, лечение и защита от колдовства" },
    summary: {
      en: "Scorpion Piercer rushes through a target. Sumika Field slows and weakens enemies inside it, Molt Step changes position, and Carapace Regeneration heals the caster or an ally. Null Carapace reduces incoming sorcery damage. This kit is still WIP.",
      ru: "Скорпионий прокол проходит рывком через цель. Поле Сумики замедляет и ослабляет врагов внутри, Шаг линьки меняет позицию, а Регенерация панциря лечит владельца или союзника. Нулевой панцирь снижает входящий урон от колдовства. Набор ещё в разработке."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Scorpion Piercer", ru: "Скорпионий Прокол" }, desc: { en: "A high-speed puncture through the target in your sightline. Awakening sharpens the strike and deepens the sensory disruption.", ru: "Высокоскоростной пронзающий рывок по цели в линии взгляда. В пробуждении удар становится острее и сильнее сбивает чувства." } },
      { slot: "Secondary", name: { en: "Sumika Field", ru: "Поле Sumika" }, desc: { en: "Deploy warped airspace ahead that slows reactions, weakens enemies, and boosts your movement while you remain inside it.", ru: "Развернуть впереди искажённое воздушное пространство, которое режет реакцию врагов, ослабляет их и усиливает твою подвижность внутри зоны." } },
      { slot: "Utility",  name: { en: "Molt Step", ru: "Шаг Линьки" }, desc: { en: "A sudden displacement step that bursts you forward, briefly obscures your outline, and resets your footing for the next exchange.", ru: "Резкий сдвиг вперёд, который на миг скрывает силуэт и даёт позиционный сброс перед следующим разменом." } },
      { slot: "Supportive 1", name: { en: "Carapace Regeneration", ru: "Регенерация Панциря" }, desc: { en: "Rapidly stabilizes your body, restores health, applies regeneration, and strips common combat debuffs from yourself.", ru: "Быстро стабилизирует тело, восстанавливает здоровье, даёт регенерацию и снимает часть типичных боевых дебаффов с себя." } },
      { slot: "Supportive 2", name: { en: "Chosen Restoration", ru: "Избранное Восстановление" }, desc: { en: "Heal the target in your sightline, or yourself if no target is chosen, and grant a short defensive buffer.", ru: "Лечить цель в линии взгляда, а если цель не выбрана - самого себя, и дать короткую защитную прокладку." } },
      { slot: "Special",  name: { en: "Null Carapace", ru: "Нулевой Панцирь" }, desc: { en: "Toggle a spirit shell that drains SE over time and heavily suppresses incoming sorcery damage while active.", ru: "Включить духовную оболочку, которая постепенно сжигает SE, но резко гасит входящий урон от колдовства, пока активна." } }
    ],
    asset: undefined
  },

  {
    id: "di-algodze",
    name: { en: "Di Algodze", ru: "Ди Агольце" },
    character: { en: "-", ru: "-" },
    element: "spear",
    elementLabel: { en: "Gold / Transmutation", ru: "Золото / Трансмутация" },
    tier: "sorcery",
    awakening: { en: "Sage of Destruction", ru: "Мудрец разрушения" },
    role: { en: "Apply Gild, launch golden weapons and turn a target into a statue", ru: "Накопление Позолоты, золотое оружие и превращение цели в статую" },
    summary: {
      en: "Attacks apply Gild and create golden swords or a trident. With enough setup, one ability turns the target into a living golden statue. The Awakening, Sage of Destruction, replaces the regular attacks with stronger gold constructs.",
      ru: "Атаки накладывают Позолоту и создают золотые мечи или трезубец. После подготовки одну цель можно превратить в живую золотую статую. Пробуждение Мудрец разрушения заменяет обычные атаки усиленными золотыми конструкциями."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Golden Bite", ru: "Золотой укус" }, desc: { en: "A close transmutation strike that applies gild stacks and feeds your Di Algodze progress.", ru: "Ближний удар-трансмутация: накладывает стаки позолоты и копит прогресс Di Algodze." } },
      { slot: "Secondary", name: { en: "Golden Sword Volley", ru: "Залп золотых мечей" }, desc: { en: "Tap launches a flying golden sword; hold for a wider volley - charge raises count and area.", ru: "Нажатие - летящий золотой меч; удержание - шире залп; заряд повышает число и площадь." } },
      { slot: "Utility",  name: { en: "Golden Domain Burst", ru: "Взрыв золотого домена" }, desc: { en: "Charge and release to transmute the area around you to gold and briefly stun nearby targets.", ru: "Зарядить и выпустить: превратить область вокруг в золото и кратко оглушить ближних." } },
      { slot: "Special",  name: { en: "Living Statue", ru: "Живая статуя" }, desc: { en: "Spend your gild stacks on a target in sight to permanently transmute it into a living golden statue.", ru: "Потратить стаки позолоты на цель в прицеле, навсегда обратив её в живую золотую статую." } },
      { slot: "Supportive 1", name: { en: "Point Transmutation", ru: "Точечная трансмутация" }, desc: { en: "Charge and release on blocks to gild an area; on an entity it applies gild stacks.", ru: "Зарядить и выпустить по блокам для позолоты области; по сущности - стаки позолоты." } },
      { slot: "Supportive 2", name: { en: "Golden Sword", ru: "Золотой меч" }, desc: { en: "Toggle a custom golden sword (8 attack damage) into your main hand.", ru: "Переключить золотой меч (8 урона) в основную руку." } }
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
    role: { en: "Record the last hostile sorcery and build resistance to it", ru: "Запоминание последнего вражеского колдовства и накопление сопротивления" },
    summary: {
      en: "After a hostile sorcery hits you, lock that effect as the current phenomenon. Surviving further hits and negative effects turns the wheel and raises resistance to the locked sorcery. Adaptation resets on death unless the server changes that rule.",
      ru: "После попадания вражеского колдовства зафиксируйте его как текущее явление. Последующие попадания и пережитые негативные эффекты поворачивают колесо и повышают сопротивление выбранному колдовству. По умолчанию Адаптация сбрасывается после смерти."
    },
    abilities: [
      { slot: "Primary",  name: { en: "Lock Phenomenon", ru: "Зафиксировать явление" }, desc: { en: "Lock the last hostile sorcery phenomenon that actually affected you as the adaptation target.", ru: "Зафиксировать последнее враждебное колдовство, реально подействовавшее на вас, как цель адаптации." } },
      { slot: "Secondary", name: { en: "Wheel Turn", ru: "Поворот колеса" }, desc: { en: "Rotate the wheel one step for the locked phenomenon (5s cooldown).", ru: "Повернуть колесо на шаг для зафиксированного явления (кд 5с)." } },
      { slot: "Utility",  name: { en: "Sword Manifest", ru: "Призыв меча" }, desc: { en: "Draw or sheath the Sword of Extermination. Adapted techniques are disabled on a sword hit.", ru: "Достать или убрать Sword of Extermination. Адаптированные техники отключаются при ударе мечом." } },
      { slot: "Supportive 1", name: { en: "Taunt / Status Turn", ru: "Провокация / Оборот статуса" }, desc: { en: "Taunt briefly; gain +1 turn per active negative status, plus +1 from the first hostile technique during the stance.", ru: "Краткая провокация; +1 оборот за каждый активный негативный статус и +1 от первой враждебной техники в стойке." } },
      { slot: "Supportive 2", name: { en: "Reset Adaptation", ru: "Сброс адаптации" }, desc: { en: "Clear the current target and wheel progress so you can pivot to a different technique.", ru: "Сбросить текущую цель и прогресс колеса, чтобы перейти на другую технику." } }
    ],
    asset: undefined
  }
];
