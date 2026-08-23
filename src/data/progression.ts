import type { ProgressionEntry } from "../types";

const wip = { en: "WIP", ru: "В разработке" } as const;

export const progressionSystems: ProgressionEntry[] = [
  {
    id: "origin_effect",
    title: { en: "Origin", ru: "Происхождение" },
    summary: { en: "Sets your initial faction and reputation.", ru: "Задаёт начальную фракцию и репутацию." },
    details: [
      { en: "Sets initial faction, clan and reputation values.", ru: "Задаёт начальную фракцию, клан и значения репутации." },
      { en: "Sorceries, fighting styles and faction changes remain available.", ru: "Колдовства, боевые стили и смена фракции остаются доступны." }
    ]
  },
  {
    id: "sorcery_level",
    title: { en: "Sorcery Level", ru: "Уровень колдовства" },
    summary: { en: "Your main power level, from 1 to 20.", ru: "Основной уровень силы персонажа, от 1 до 20." },
    details: [
      { en: "Each level adds 10% damage: 1.0× at level 1, 1.9× at 10 and 2.9× at 20.", ru: "Каждый уровень добавляет 10% урона: 1,0× на 1-м, 1,9× на 10-м и 2,9× на 20-м." },
      { en: "Maximum HP scales from 20 to 100; maximum SE from 2,500 to 50,000.", ru: "Максимум HP растёт с 20 до 100, максимум SE - с 2 500 до 50 000." },
      { en: "Speed I unlocks at level 10, Speed II at 15 and Speed III at 20.", ru: "Скорость I открывается на 10-м уровне, Скорость II на 15-м, Скорость III на 20-м." },
      { en: "Dodge charges increase at levels 5, 10, 15 and 20, from one charge to a maximum of five.", ru: "Заряды уклонения увеличиваются на уровнях 5, 10, 15 и 20: с одного заряда до максимума в пять." },
      { en: "XP needed for the next level: 80 + 20 × (current level − 1).", ru: "Опыт до следующего уровня: 80 + 20 × (текущий уровень − 1)." }
    ]
  },
  {
    id: "public_fame",
    title: { en: "Public Fame", ru: "Известность" },
    summary: { en: "Your public and lawful reputation.", ru: "Ваша публичная и законная репутация." },
    details: [
      { en: "Joining Kamunabi requires 8 Fame; Team Chihiro requires 6. Mercenaries require 3 Fame and 3 Infamy.", ru: "Для вступления в Камунаби требуется 8 известности, в Команду Тихиро - 6. Для Наёмников нужны 3 известности и 3 дурной славы." },
      { en: "Hishaku NPC kills grant 8 Fame; Mercenary NPC kills grant 4.", ru: "Убийство NPC Хисяку даёт 8 известности, NPC Наёмников - 4." }
    ]
  },
  {
    id: "underworld_infamy",
    title: { en: "Underworld Infamy", ru: "Дурная слава" },
    summary: { en: "Your standing in criminal and underworld circles.", ru: "Ваша репутация в преступном и подпольном мире." },
    details: [
      { en: "Joining Hishaku requires 8 Infamy. Mercenaries require 3 Infamy and 3 Fame.", ru: "Для вступления в Хисяку требуется 8 дурной славы. Для Наёмников нужны 3 дурной славы и 3 известности." },
      { en: "Kamunabi NPC kills grant 8 Infamy; Team Chihiro NPC kills grant 10.", ru: "Убийство NPC Камунаби даёт 8 дурной славы, NPC Команды Тихиро - 10." }
    ]
  },
  {
    id: "clan_renown",
    title: { en: "Clan Renown", ru: "Признание клана" },
    summary: { en: "Progress inside your selected lineage.", ru: "Прогресс внутри выбранной родовой линии." },
    details: [
      { en: "Advances the two clan quest stages at 8 and 20 Renown.", ru: "Продвигает две ступени клановых заданий на 8 и 20 признания." },
      { en: "Unlocks the lineage perk at 15 Renown.", ru: "Открывает особенность родовой линии на 15 признания." }
    ]
  },
  {
    id: "faction_rank",
    title: { en: "Faction Contract Rank", ru: "Контрактный ранг фракции" },
    summary: { en: "Separate from reputation; raised by completed faction contracts.", ru: "Отделён от репутации и растёт за завершённые контракты фракции." },
    details: [
      { en: "Faction tiers update at contract ranks 0, 2 and 5.", ru: "Ступени фракции меняются на контрактных рангах 0, 2 и 5." },
      { en: "A contract board assigns the first unlocked contract when none is active.", ru: "Доска контрактов назначает первое доступное задание, если активного контракта нет." }
    ]
  },
  {
    id: "sorcery_mastery",
    title: { en: "Sorcery Mastery", ru: "Мастерство колдовства" },
    summary: { en: "Five ranks tracked separately for every sorcery id.", ru: "Пять рангов, которые отдельно отслеживаются для каждого колдовства." },
    details: [
      { en: "Using and growing the active sorcery grants its mastery XP.", ru: "Применение и развитие активного колдовства даёт опыт его мастерства." },
      { en: "Ranks grant milestone rewards, Fame, Renown and Sorcery XP; mastery is not a hidden universal damage multiplier.", ru: "Ранги дают этапные награды, известность, признание и опыт колдовства; мастерство не является скрытым универсальным множителем урона." }
    ]
  },
  {
    id: "style_mastery",
    title: { en: "Style Mastery", ru: "Мастерство стиля" },
    summary: { en: "Five persistent ranks tracked separately for each fighting style.", ru: "Пять постоянных рангов, отдельно отслеживаемых для каждого боевого стиля." },
    details: [
      { en: "Combat NPC kills and lineage perks grant mastery XP to the active style.", ru: "Убийства боевых NPC и клановые особенности дают опыт мастерства активному стилю." },
      { en: "Ranks grant rewards and progression currency; the style profile itself defines combat strengths and weaknesses.", ru: "Ранги дают награды и валюту прогрессии; боевые сильные и слабые стороны задаёт сам профиль стиля." }
    ]
  },
  {
    id: "style_points",
    title: { en: "Style Points", ru: "Очки стиля" },
    summary: { en: "A temporary combat resource, not Style Mastery.", ru: "Временный боевой ресурс, не мастерство стиля." },
    details: [
      { en: "Earned from damage, varied combos, aerial hits, parries, finishers, sorcery hits and backstabs.", ru: "Начисляются за урон, разнообразные комбо, воздушные удары, парирования, добивания, попадания колдовством и удары в спину." },
      { en: "Spent on Tab signature techniques and decays by 0.5 per tick after combat activity.", ru: "Расходуются на сигнатурные техники через Tab и убывают на 0,5 за тик после боевой активности." }
    ]
  }
];

export const progressionLoops: ProgressionEntry[] = [
  {
    id: "combat_npc_rewards",
    title: { en: "Defeat a combat NPC", ru: "Победите боевого NPC" },
    summary: { en: "The baseline repeatable combat reward.", ru: "Базовая повторяемая награда за бой." },
    details: [
      { en: "+18 Sorcery XP, +4 mastery XP for the active sorcery and +3 mastery XP for the active style.", ru: "+18 опыта колдовства, +4 опыта мастерства активного колдовства и +3 опыта мастерства активного стиля." },
      { en: "The defeated NPC's faction also changes Fame or Infamy.", ru: "Фракция побеждённого NPC дополнительно меняет известность или дурную славу." }
    ]
  },
  {
    id: "mastery_thresholds",
    title: { en: "Raise mastery ranks", ru: "Повышайте ранги мастерства" },
    summary: { en: "Every sorcery and style has five independent reward milestones.", ru: "У каждого колдовства и стиля есть пять независимых этапов наград." },
    details: [
      { en: "XP for the next rank is 25, 40, 55, 70 and 85.", ru: "Опыт до следующего ранга: 25, 40, 55, 70 и 85." },
      { en: "Mastery ranks award progression points, Sorcery XP and Yen.", ru: "Ранги мастерства дают очки прогрессии, опыт сорсери и йены." }
    ]
  },
  {
    id: "contract_loop",
    title: { en: "Complete contracts", ru: "Выполняйте контракты" },
    summary: { en: "The structured route for faction rank and predictable rewards.", ru: "Структурированный путь к рангу фракции и предсказуемым наградам." },
    details: [
      { en: "Accept a board contract and defeat its faction targets. Progress updates automatically; rewards include XP, reputation, Yen and a contract point.", ru: "Возьмите контракт на доске и победите указанные фракционные цели. Прогресс обновляется автоматически; награда включает опыт, репутацию, йены и очко контракта." }
    ]
  }
];

export const origins: ProgressionEntry[] = [
  {
    id: "civilian_sorcerer",
    title: { en: "Civilian Sorcerer", ru: "Гражданский колдун" },
    summary: { en: "An unaffiliated start with freedom to choose an allegiance later.", ru: "Независимый старт со свободой выбрать сторону позднее." },
    details: [
      { en: "Starts without a faction or clan.", ru: "Начинает без фракции и клана." },
      { en: "Fame: 0 · Infamy: 0 · Renown: 0", ru: "Известность: 0 · Дурная слава: 0 · Признание: 0" },
      { en: "Best if you want to earn your allegiance in play.", ru: "Подходит, если вы хотите заслужить принадлежность уже в игре." }
    ]
  },
  {
    id: "kamunabi_initiate",
    title: { en: "Kamunabi Initiate", ru: "Послушник Камунаби" },
    summary: { en: "Official route with immediate Kamunabi access.", ru: "Официальный путь с немедленным доступом к Камунаби." },
    details: [
      { en: "Starts in Kamunabi with 10 Fame.", ru: "Начинает в Камунаби с 10 известности." },
      { en: "No clan is assigned at creation.", ru: "Клан при создании не назначается." }
    ]
  },
  {
    id: "hishaku_initiate",
    title: { en: "Hishaku Initiate", ru: "Послушник Хисяку" },
    summary: { en: "Underworld route with immediate Hishaku access.", ru: "Подпольный путь с немедленным доступом к Хисяку." },
    details: [
      { en: "Starts in Hishaku with 10 Infamy.", ru: "Начинает в Хисяку с 10 дурной славы." },
      { en: "No clan is assigned at creation.", ru: "Клан при создании не назначается." }
    ]
  }
];

export const factions: ProgressionEntry[] = [
  {
    id: "kamunabi",
    title: { en: "Kamunabi", ru: "Камунаби" },
    summary: { en: "State-backed operations against Hishaku, mercenaries and other threats.", ru: "Государственные операции против Хисяку, наёмников и других угроз." },
    details: [
      { en: "Entry: 8 Fame · tiers at contract ranks 0, 2 and 5.", ru: "Вступление: 8 известности · ступени на рангах контрактов 0, 2 и 5." },
      { en: "Three combat contracts: 1, 3 and 6 Hishaku or Mercenary targets.", ru: "Три боевых контракта: 1, 3 и 6 целей Хисяку или Наёмников." }
    ]
  },
  {
    id: "hishaku",
    title: { en: "Hishaku", ru: "Хисяку" },
    summary: { en: "An underworld network built around targeted attacks on its enemies.", ru: "Подпольная сеть, построенная на точечных атаках против своих врагов." },
    details: [
      { en: "Entry: 8 Infamy · tiers at contract ranks 0, 2 and 5.", ru: "Вступление: 8 дурной славы · ступени на рангах контрактов 0, 2 и 5." },
      { en: "Three combat contracts: 1, 3 and 6 Kamunabi or Team Chihiro targets.", ru: "Три боевых контракта: 1, 3 и 6 целей Камунаби или Команды Тихиро." }
    ]
  },
  {
    id: "team_chihiro",
    title: { en: "Team Chihiro", ru: "Команда Тихиро" },
    summary: { en: "Chihiro's allied route focused on protecting civilians and stopping Hishaku.", ru: "Союзный путь Тихиро, сосредоточенный на защите мирных жителей и борьбе с Хисяку." },
    details: [
      { en: "Entry: 6 Fame · tiers and tier rewards are registered.", ru: "Вступление: 6 известности · ступени и награды уже зарегистрированы." },
      { en: "Three combat contracts are active, including dedicated Hishaku hunts.", ru: "Доступны три боевых контракта, включая отдельные задания на Хисяку." }
    ]
  },
  {
    id: "mercenaries",
    title: { en: "Mercenaries", ru: "Наёмники" },
    summary: { en: "Independent blades-for-hire progressing through increasingly dangerous bounties.", ru: "Независимые наёмные клинки, растущие на всё более опасных заказах." },
    details: [
      { en: "Entry: 3 Fame and 3 Infamy · tiers at ranks 0, 2 and 5.", ru: "Вступление: 3 известности и 3 дурной славы · ступени на рангах 0, 2 и 5." },
      { en: "Three combat contracts against 1, 3 and 6 hostile targets.", ru: "Три боевых контракта против 1, 3 и 6 враждебных целей." }
    ]
  }
];

export const contracts: ProgressionEntry[] = [
  {
    id: "kamunabi_datenseki_recovery",
    title: { en: "Kamunabi: Border Patrol", ru: "Камунаби: приграничный патруль" },
    summary: { en: "Defeat 1 Hishaku or Mercenary combatant.", ru: "Победить 1 бойца Хисяку или Наёмников." },
    details: [{ en: "Rank 0 · Reward: 28 Sorcery XP, 4 Fame, 1 contract point and 8 Yen coins.", ru: "Ранг 0 · Награда: 28 опыта сорсери, 4 известности, 1 очко контракта и 8 монет по 10 йен." }]
  },
  {
    id: "kamunabi_rogue_suppression",
    title: { en: "Kamunabi: Rogue Suppression", ru: "Камунаби: подавление отступников" },
    summary: { en: "Defeat 3 Hishaku or Mercenary combatants.", ru: "Победить 3 бойцов Хисяку или Наёмников." },
    details: [{ en: "Rank 2 · Reward: 42 Sorcery XP, 9 Fame, 1 contract point and 16 Yen coins.", ru: "Ранг 2 · Награда: 42 опыта сорсери, 9 известности, 1 очко контракта и 16 монет по 10 йен." }]
  },
  {
    id: "kamunabi_field_research",
    title: { en: "Kamunabi: Field Sweep", ru: "Камунаби: полевая зачистка" },
    summary: { en: "Defeat 6 Hishaku or Mercenary combatants.", ru: "Победить 6 бойцов Хисяку или Наёмников." },
    details: [{ en: "Rank 5 · Reward: 60 Sorcery XP, 12 Fame, 1 contract point and 28 Yen coins.", ru: "Ранг 5 · Награда: 60 опыта сорсери, 12 известности, 1 очко контракта и 28 монет по 10 йен." }]
  },
  {
    id: "hishaku_datenseki_smuggling",
    title: { en: "Hishaku: First Blood", ru: "Хисяку: первая кровь" },
    summary: { en: "Defeat 1 Kamunabi or Team Chihiro combatant.", ru: "Победить 1 бойца Камунаби или Команды Тихиро." },
    details: [{ en: "Rank 0 · Reward: 30 Sorcery XP, 4 Infamy, 1 contract point and 8 Yen coins.", ru: "Ранг 0 · Награда: 30 опыта сорсери, 4 дурной славы, 1 очко контракта и 8 монет по 10 йен." }]
  },
  {
    id: "hishaku_kamunabi_purge",
    title: { en: "Hishaku: Kamunabi Purge", ru: "Хисяку: зачистка Камунаби" },
    summary: { en: "Defeat 3 Kamunabi or Team Chihiro combatants.", ru: "Победить 3 бойцов Камунаби или Команды Тихиро." },
    details: [{ en: "Rank 2 · Reward: 45 Sorcery XP, 10 Infamy, 1 contract point and 16 Yen coins.", ru: "Ранг 2 · Награда: 45 опыта сорсери, 10 дурной славы, 1 очко контракта и 16 монет по 10 йен." }]
  },
  {
    id: "hishaku_sorcery_harvest",
    title: { en: "Hishaku: Major Assault", ru: "Хисяку: крупная атака" },
    summary: { en: "Defeat 6 Kamunabi or Team Chihiro combatants.", ru: "Победить 6 бойцов Камунаби или Команды Тихиро." },
    details: [{ en: "Rank 5 · Reward: 65 Sorcery XP, 13 Infamy, 1 contract point and 28 Yen coins.", ru: "Ранг 5 · Награда: 65 опыта сорсери, 13 дурной славы, 1 очко контракта и 28 монет по 10 йен." }]
  },
  {
    id: "team_chihiro_civilian_defense",
    title: { en: "Team Chihiro: Civilian Defense", ru: "Команда Тихиро: защита мирных жителей" },
    summary: { en: "Defeat 1 hostile combatant.", ru: "Победить 1 враждебного бойца." },
    details: [{ en: "Rank 0 · Reward: 30 Sorcery XP, 5 Fame, 1 contract point and 8 Yen coins.", ru: "Ранг 0 · Награда: 30 опыта сорсери, 5 известности, 1 очко контракта и 8 монет по 10 йен." }]
  },
  {
    id: "team_chihiro_blade_leads",
    title: { en: "Team Chihiro: Hishaku Hunt", ru: "Команда Тихиро: охота на Хисяку" },
    summary: { en: "Defeat 3 Hishaku combatants.", ru: "Победить 3 бойцов Хисяку." },
    details: [{ en: "Rank 2 · Reward: 45 Sorcery XP, 8 Fame, 1 contract point and 16 Yen coins.", ru: "Ранг 2 · Награда: 45 опыта сорсери, 8 известности, 1 очко контракта и 16 монет по 10 йен." }]
  },
  {
    id: "team_chihiro_hishaku_interdiction",
    title: { en: "Team Chihiro: Hishaku Interdiction", ru: "Команда Тихиро: перехват Хисяку" },
    summary: { en: "Defeat 6 Hishaku combatants.", ru: "Победить 6 бойцов Хисяку." },
    details: [{ en: "Rank 5 · Reward: 65 Sorcery XP, 12 Fame, 1 contract point and 28 Yen coins.", ru: "Ранг 5 · Награда: 65 опыта сорсери, 12 известности, 1 очко контракта и 28 монет по 10 йен." }]
  },
  {
    id: "mercenary_datenseki_salvage",
    title: { en: "Mercenaries: Small Bounty", ru: "Наёмники: малый заказ" },
    summary: { en: "Defeat 1 hostile combatant.", ru: "Победить 1 враждебного бойца." },
    details: [{ en: "Rank 0 · Reward: 24 Sorcery XP, 2 Fame, 3 Infamy, 1 contract point and 8 Yen coins.", ru: "Ранг 0 · Награда: 24 опыта сорсери, 2 известности, 3 дурной славы, 1 очко контракта и 8 монет по 10 йен." }]
  },
  {
    id: "mercenary_bounty_sweep",
    title: { en: "Mercenaries: Bounty Sweep", ru: "Наёмники: зачистка заказов" },
    summary: { en: "Defeat 3 hostile combatants.", ru: "Победить 3 враждебных бойцов." },
    details: [{ en: "Rank 2 · Reward: 38 Sorcery XP, 4 Fame, 4 Infamy, 1 contract point and 16 Yen coins.", ru: "Ранг 2 · Награда: 38 опыта сорсери, 4 известности, 4 дурной славы, 1 очко контракта и 16 монет по 10 йен." }]
  },
  {
    id: "mercenary_refined_commission",
    title: { en: "Mercenaries: High-value Bounty", ru: "Наёмники: крупный заказ" },
    summary: { en: "Defeat 6 hostile combatants.", ru: "Победить 6 враждебных бойцов." },
    details: [{ en: "Rank 5 · Reward: 58 Sorcery XP, 6 Fame, 6 Infamy, 1 contract point and 28 Yen coins.", ru: "Ранг 5 · Награда: 58 опыта сорсери, 6 известности, 6 дурной славы, 1 очко контракта и 28 монет по 10 йен." }]
  }
];

export const clans: ProgressionEntry[] = [
  {
    id: "soga",
    title: { en: "Soga", ru: "Сога" },
    summary: { en: "Rare one-katana lineage with a guaranteed Kurotsuchi inheritance.", ru: "Редкая линия одной катаны с гарантированным наследованием Куротсучи." },
    details: [{ en: "5% birth chance · +15% HP and Stability damage with Sword or Sheathed Katana · Kurotsuchi is granted at Sorcery Level 18.", ru: "Шанс рождения 5% · +15% урона по HP и стабильности в стиле меча или катаны в ножнах · Куротсучи выдаётся на 18-м уровне сорсери." }]
  },
  {
    id: "sazanami",
    title: { en: "Sazanami", ru: "Садзанами" },
    summary: { en: "The most common clan lineage, strongly tied to Isou and Storehouse (WIP).", ru: "Самая распространённая клановая линия, тесно связанная с Исо и Кладовкой (в разработке)." },
    details: [{ en: "15% birth chance · initial sorcery: Isou 75%, another random sorcery 20%, Storehouse (WIP) 5%.", ru: "Шанс рождения 15% · стартовая сорсери: Исо 75%, другая случайная сорсери 20%, Кладовка (в разработке) 5%." }]
  },
  {
    id: "kyonagi",
    title: { en: "Kyonagi", ru: "Кьёнаги" },
    summary: { en: "Rare hand-combat lineage with an affinity for Flame Bone.", ru: "Редкая рукопашная линия со склонностью к Пламенной Кости." },
    details: [{ en: "5% birth chance · +15% HP and Stability damage in Hand style · 35% initial Flame Bone chance · guaranteed Flame Bone at level 18.", ru: "Шанс рождения 5% · +15% урона по HP и стабильности в рукопашном стиле · шанс 35% получить Пламенную Кость в начале · гарантия на 18-м уровне." }]
  },
  {
    id: "mikaboshi",
    title: { en: "Mikaboshi", ru: "Микабоси" },
    summary: { en: "Placeholder lineage associated with Sumika and Datenseki.", ru: "Заглушка родовой линии, связанной с Сумикой и датенсэки." },
    details: [{ en: "No birth roll, perk, quest or player bonus is implemented yet. The Mikaboshi combat faction remains separate from the four player contract factions.", ru: "Пока нет стартового шанса, перка, задания или бонуса игроку. Боевая фракция Микабоси остаётся отдельной от четырёх контрактных фракций игроков." }]
  }
];
