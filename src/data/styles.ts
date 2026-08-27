import type { StyleEntry } from "../types";

export const styleEntries: StyleEntry[] = [
  {
    id: "sword",
    title: { en: "Sword", ru: "Один клинок" },
    activation: { en: "A drawn sword in the main hand.", ru: "Обнажённый меч в основной руке." },
    role: { en: "High health damage and strong attacks along a narrow line.", ru: "Высокий урон по здоровью и сильные атаки по узкой линии." },
    strengths: { en: "The highest health damage, good reach and powerful finishing attacks.", ru: "Самый высокий урон по здоровью, хорошая дальность и мощные завершающие атаки." },
    weakness: { en: "Deals less Stability damage and struggles to control groups.", ru: "Наносит меньше урона по стойкости и хуже сдерживает группы противников." },
    matchup: { en: "Strong against Hand; weak against Dual Katana.", ru: "Силён против рукопашного стиля; слаб против двух катан." },
    actions: [
      { en: "Heavy: clinch cleave", ru: "Тяжёлая атака: захват с рассечением" },
      { en: "Dash attack: line-break cut", ru: "Атака в рывке: сквозной разрез" }
    ],
    metrics: { hpDamage: 1.24, stability: 0.86, guardPressure: 0.95, block: 1, parryBonus: 0, lightTargets: 1, heavyTargets: 3 }
  },
  {
    id: "hand",
    title: { en: "Hand", ru: "Рукопашный бой" },
    activation: { en: "Empty hands, hand weapons, or any non-style item.", ru: "Пустые руки, рукопашное оружие или предмет без отдельного боевого стиля." },
    role: { en: "Breaks Stability and wears down an opponent's guard.", ru: "Разрушает стойкость и продавливает защиту противника." },
    strengths: { en: "The highest Stability and guard damage, with strong close-range pressure.", ru: "Самый высокий урон по стойкости и защите; особенно силён вблизи." },
    weakness: { en: "Lower HP damage, short reach and almost no crowd coverage.", ru: "Ниже урон по здоровью, малая дальность и почти нет контроля толпы." },
    matchup: { en: "Strong against Sheathed Katana; weak against Sword.", ru: "Силён против катаны в ножнах; слаб против одного клинка." },
    actions: [
      { en: "Heavy: crushing kick", ru: "Тяжёлая атака: сокрушительный удар ногой" },
      { en: "Dash attack: impact drive", ru: "Атака в рывке: ударный таран" }
    ],
    metrics: { hpDamage: 0.84, stability: 1.32, guardPressure: 1.22, block: 1, parryBonus: 0, lightTargets: 1, heavyTargets: 1 }
  },
  {
    id: "dual_katana",
    title: { en: "Dual Katana", ru: "Две катаны" },
    activation: { en: "Drawn swords in both hands.", ru: "Обнажённые мечи в обеих руках." },
    role: { en: "Wide attacks that threaten several targets at once.", ru: "Широкие атаки сразу по нескольким целям." },
    strengths: { en: "Broad attack arcs: two light targets and up to six heavy targets.", ru: "Широкие дуги атак: две цели лёгкой атакой и до шести тяжёлой." },
    weakness: { en: "Less reach and guard pressure per target.", ru: "Меньше дальность и давление на защиту каждой отдельной цели." },
    matchup: { en: "Strong against Sword; weak against Sheathed Katana.", ru: "Силён против одного клинка; слаб против катаны в ножнах." },
    actions: [
      { en: "Heavy: slash sphere", ru: "Тяжёлая атака: сфера разрезов" },
      { en: "Dash attack: razor flight", ru: "Атака в рывке: полёт лезвий" }
    ],
    metrics: { hpDamage: 1, stability: 1, guardPressure: 1, block: 0.96, parryBonus: 0, lightTargets: 2, heavyTargets: 6 }
  },
  {
    id: "sheathed_katana",
    title: { en: "Sheathed Katana", ru: "Катана в ножнах" },
    activation: { en: "A sheathed sword in the main hand and an empty off-hand.", ru: "Меч в ножнах в основной руке и пустая вторая рука." },
    role: { en: "A defensive style built around counters.", ru: "Защитный стиль, построенный на контратаках." },
    strengths: { en: "Blocks are 35% stronger, and the parry window lasts 10 ticks longer.", ru: "Блокирование эффективнее на 35%, а окно парирования длится на 10 тиков дольше." },
    weakness: { en: "Deals less direct health damage and is mostly limited to one target.", ru: "Наносит меньше прямого урона по здоровью и в основном работает по одной цели." },
    matchup: { en: "Strong against Dual Katana; weak against Hand.", ru: "Силён против двух катан; слаб против рукопашного стиля." },
    actions: [
      { en: "Heavy: guard-breaking shove", ru: "Тяжёлая атака: выхват с пробитием защиты" },
      { en: "Dash attack: repulse draw", ru: "Атака в рывке: отбрасывающий выхват" }
    ],
    metrics: { hpDamage: 0.88, stability: 1, guardPressure: 1.05, block: 1.35, parryBonus: 10, lightTargets: 1, heavyTargets: 1 }
  },
  {
    id: "trident",
    title: { en: "Trident", ru: "Трезубец" },
    activation: { en: "A vanilla Trident or Golden Trident in the main hand.", ru: "Обычный или золотой трезубец в основной руке." },
    role: { en: "Long-reaching thrusts that control narrow approaches.", ru: "Дальние выпады, перекрывающие узкие направления." },
    strengths: { en: "Good health and Stability damage along long lines that can catch several targets.", ru: "Хороший урон по здоровью и стойкости на большой дальности, в том числе по нескольким целям." },
    weakness: { en: "Weaker in close-range scrambles.", ru: "Слабее в тесной ближней схватке." },
    matchup: { en: "Strong against Sword; weak against Hand.", ru: "Силён против одного клинка; слаб против рукопашного стиля." },
    actions: [
      { en: "Heavy: impale", ru: "Тяжёлая атака: пронзание" },
      { en: "Dash attack: piercing rush", ru: "Атака в рывке: пробивающий натиск" }
    ],
    metrics: { hpDamage: 1.12, stability: 1.18, guardPressure: 1.1, block: 0.96, parryBonus: 0, lightTargets: 2, heavyTargets: 3 }
  }
];
