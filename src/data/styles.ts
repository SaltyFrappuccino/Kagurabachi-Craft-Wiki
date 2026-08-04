import type { StyleEntry } from "../types";

export const styleEntries: StyleEntry[] = [
  {
    id: "sword",
    title: { en: "Sword", ru: "Один клинок" },
    activation: { en: "A drawn sword in the main hand.", ru: "Обнажённый меч в основной руке." },
    role: { en: "Direct HP pressure and line punishment.", ru: "Прямой урон по здоровью и наказание целей на линии." },
    strengths: { en: "Highest HP conversion, strong reach and committed finishers.", ru: "Самый высокий урон по здоровью, хорошая дальность и мощные завершающие удары." },
    weakness: { en: "Lower Stability pressure and weaker wide control.", ru: "Слабее давит на стабильность и хуже контролирует толпу." },
    matchup: { en: "Favoured into Hand; vulnerable to Dual Katana.", ru: "Удобен против рукопашного стиля; уязвим против двух катан." },
    actions: [
      { en: "Heavy: clinch cleave", ru: "Тяжёлая: рассекающий клинч" },
      { en: "Dash attack: line-break cut", ru: "Атака в рывке: разрез линии" }
    ],
    metrics: { hpDamage: 1.24, stability: 0.86, guardPressure: 0.95, block: 1, parryBonus: 0, lightTargets: 1, heavyTargets: 3 }
  },
  {
    id: "hand",
    title: { en: "Hand", ru: "Рукопашный бой" },
    activation: { en: "Empty hands, hand weapons, or any non-style item.", ru: "Пустые руки, рукопашное оружие или предмет без отдельного боевого стиля." },
    role: { en: "Stability breaker and guard-pressure specialist.", ru: "Разрушитель стабильности и специалист по давлению на блок." },
    strengths: { en: "Highest Stability and guard pressure; strong close-range breach.", ru: "Самое высокое давление на стабильность и защиту; силён в ближнем проломе." },
    weakness: { en: "Lower HP damage, short reach and almost no crowd coverage.", ru: "Ниже урон по здоровью, малая дальность и почти нет контроля толпы." },
    matchup: { en: "Favoured into Sheathed Katana; vulnerable to Sword.", ru: "Удобен против катаны в ножнах; уязвим против одного клинка." },
    actions: [
      { en: "Heavy: crushing kick", ru: "Тяжёлая: сокрушительный удар ногой" },
      { en: "Dash attack: impact drive", ru: "Атака в рывке: ударный таран" }
    ],
    metrics: { hpDamage: 0.84, stability: 1.32, guardPressure: 1.22, block: 1, parryBonus: 0, lightTargets: 1, heavyTargets: 1 }
  },
  {
    id: "dual_katana",
    title: { en: "Dual Katana", ru: "Две катаны" },
    activation: { en: "Drawn swords in both hands.", ru: "Обнажённые мечи в обеих руках." },
    role: { en: "Wide control and multi-target pressure.", ru: "Широкий контроль пространства и давление по нескольким целям." },
    strengths: { en: "Broad attack arcs: two light targets and up to six heavy targets.", ru: "Широкие дуги атак: две цели лёгкой атакой и до шести тяжёлой." },
    weakness: { en: "Less reach and guard pressure per target.", ru: "Меньше дальность и давление на защиту каждой отдельной цели." },
    matchup: { en: "Favoured into Sword; vulnerable to Sheathed Katana.", ru: "Удобен против одного клинка; уязвим против катаны в ножнах." },
    actions: [
      { en: "Heavy: slash sphere", ru: "Тяжёлая: сфера разрезов" },
      { en: "Dash attack: razor flight", ru: "Атака в рывке: полёт лезвий" }
    ],
    metrics: { hpDamage: 1, stability: 1, guardPressure: 1, block: 0.96, parryBonus: 0, lightTargets: 2, heavyTargets: 6 }
  },
  {
    id: "sheathed_katana",
    title: { en: "Sheathed Katana", ru: "Катана в ножнах" },
    activation: { en: "A sheathed sword in the main hand and an empty off-hand.", ru: "Меч в ножнах в основной руке и пустая вторая рука." },
    role: { en: "Defensive counter style.", ru: "Защитный контр-стиль." },
    strengths: { en: "35% stronger block profile and +10 ticks to the parry window.", ru: "Профиль блока сильнее на 35%, окно парирования длиннее на 10 тиков." },
    weakness: { en: "Lower raw HP throughput and single-target commitment.", ru: "Ниже прямой урон по здоровью и ориентация на одну цель." },
    matchup: { en: "Favoured into Dual Katana; vulnerable to Hand.", ru: "Удобен против двух катан; уязвим против рукопашного стиля." },
    actions: [
      { en: "Heavy: guard-breaking shove", ru: "Тяжёлая: выхват с пробитием защиты" },
      { en: "Dash attack: repulse draw", ru: "Атака в рывке: отбрасывающий выхват" }
    ],
    metrics: { hpDamage: 0.88, stability: 1, guardPressure: 1.05, block: 1.35, parryBonus: 10, lightTargets: 1, heavyTargets: 1 }
  },
  {
    id: "trident",
    title: { en: "Trident", ru: "Трезубец" },
    activation: { en: "A vanilla Trident or Golden Trident in the main hand.", ru: "Обычный или золотой трезубец в основной руке." },
    role: { en: "Piercing reach and lane control.", ru: "Пробивающая дальность и контроль узких направлений." },
    strengths: { en: "Good HP and Stability pressure with long, multi-target lanes.", ru: "Хороший урон по здоровью и стабильности на длинных линиях по нескольким целям." },
    weakness: { en: "Weaker in close-range scrambles.", ru: "Слабее в тесной ближней схватке." },
    matchup: { en: "Favoured into Sword; vulnerable to Hand.", ru: "Удобен против одного клинка; уязвим против рукопашного стиля." },
    actions: [
      { en: "Heavy: impale", ru: "Тяжёлая: пронзание" },
      { en: "Dash attack: piercing rush", ru: "Атака в рывке: пробивающий натиск" }
    ],
    metrics: { hpDamage: 1.12, stability: 1.18, guardPressure: 1.1, block: 0.96, parryBonus: 0, lightTargets: 2, heavyTargets: 3 }
  }
];
