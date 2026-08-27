import type { SignatureEntry } from "../types";

export const signatureEntries: SignatureEntry[] = [
  {
    id: "iai",
    title: { en: "Iai", ru: "Иай" },
    requirement: { en: "Single sword (drawn or sheathed), not Dual Katana", ru: "Один меч (обнажённый или в ножнах), не две катаны" },
    styleCost: 300,
    cooldownSeconds: 3,
    summary: { en: "Dash 11 blocks forward, cutting every target along the path.", ru: "Рывок на 11 блоков вперёд с разрезом всех целей на линии." },
    details: [
      { en: "The sword is briefly sheathed during the wind-up.", ru: "Во время подготовки меч на короткое время убирается в ножны." },
      { en: "Base damage: 14.4 · path range: 11 blocks.", ru: "Базовый урон: 14,4 · длина пути: 11 блоков." }
    ]
  },
  {
    id: "execution",
    title: { en: "Execution", ru: "Казнь" },
    requirement: { en: "Hand style", ru: "Рукопашный стиль" },
    styleCost: 700,
    cooldownSeconds: 10,
    summary: { en: "Rush forward without a weapon and hit the first target for heavy Stability damage.", ru: "Рывок без оружия с ударом по первой цели и высоким уроном по стойкости." },
    details: [
      { en: "Removes supported control effects before the rush starts.", ru: "Перед началом рывка снимает поддерживаемые эффекты контроля." },
      { en: "Direct damage: 13 · splash damage: 5 in a 4-block radius.", ru: "Прямой урон: 13 · урон по области: 5 в радиусе 4 блоков." }
    ]
  },
  {
    id: "hiruhiko",
    title: { en: "Freedom Style", ru: "Свободный стиль" },
    requirement: { en: "Single sword, not Dual Katana", ru: "Один меч, не две катаны" },
    styleCost: 450,
    cooldownSeconds: 6,
    summary: { en: "Move behind the selected target and strike from behind.", ru: "Перемещение за спину выбранной цели с последующим ударом." },
    details: [
      { en: "Normal damage: 11 · successful rear finish: 14.", ru: "Обычный урон: 11 · успешный удар сзади: 14." },
      { en: "A successful rear strike ignores Stability. This is separate from the global backstab bonus.", ru: "Успешный удар сзади игнорирует стойкость. Это отдельный эффект, не общий бонус за удар в спину." }
    ]
  },
  {
    id: "cigarette_cross_slash",
    title: { en: "Cigarette Cross Slash", ru: "Крестовый сигаретный разрез" },
    requirement: { en: "Sword, Dual Katana or Sheathed Katana", ru: "Один меч, две катаны или катана в ножнах" },
    styleCost: 400,
    cooldownSeconds: 7,
    summary: { en: "Throw a cigarette marker, then press Tab again to teleport to it and slash.", ru: "Бросьте сигарету-метку и нажмите Tab ещё раз, чтобы телепортироваться к ней и выполнить разрез." },
    details: [
      { en: "Tap Tab again to consume the marker and teleport to it.", ru: "Повторно нажмите Tab, чтобы убрать метку и телепортироваться к ней." },
      { en: "A direct target hit triggers the warp and slash immediately.", ru: "Прямое попадание по цели сразу телепортирует владельца и выполняет разрез." }
    ]
  }
];
