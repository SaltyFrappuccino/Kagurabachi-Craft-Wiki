import type { SignatureEntry } from "../types";

export const signatureEntries: SignatureEntry[] = [
  {
    id: "iai",
    title: { en: "Iai", ru: "Иай" },
    requirement: { en: "Single sword (drawn or sheathed), not Dual Katana", ru: "Один меч (обнажённый или в ножнах), не две катаны" },
    styleCost: 300,
    cooldownSeconds: 3,
    summary: { en: "Dash 11 blocks forward and cut every target on the line.", ru: "Рывок на 11 блоков вперёд с разрезом всех целей на линии." },
    details: [
      { en: "The sword is briefly sheathed during the wind-up.", ru: "Во время подготовки меч на короткое время убирается в ножны." },
      { en: "Base damage: 14.4 · path range: 11 blocks.", ru: "Базовый урон: 14,4 · длина пути: 11 блоков." }
    ]
  },
  {
    id: "execution",
    title: { en: "Execution", ru: "Экзекуция" },
    requirement: { en: "Hand style", ru: "Рукопашный стиль" },
    styleCost: 700,
    cooldownSeconds: 10,
    summary: { en: "Rush forward without a weapon and hit the first target for heavy Stability damage.", ru: "Рывок без оружия с ударом по первой цели и высоким уроном по Стабильности." },
    details: [
      { en: "Removes supported control effects before the rush starts.", ru: "Перед началом рывка снимает поддерживаемые эффекты контроля." },
      { en: "Direct damage: 13 · splash damage: 5 in a 4-block radius.", ru: "Прямой урон: 13 · урон по области: 5 в радиусе 4 блоков." }
    ]
  },
  {
    id: "hiruhiko",
    title: { en: "Freedom Style", ru: "Стиль Свободы" },
    requirement: { en: "Single sword, not Dual Katana", ru: "Один меч, не две катаны" },
    styleCost: 450,
    cooldownSeconds: 6,
    summary: { en: "Move behind the selected target and strike from its back side.", ru: "Перемещение за выбранную цель с последующим ударом со спины." },
    details: [
      { en: "Normal damage: 11 · successful rear finish: 14.", ru: "Обычный урон: 11 · успешный удар сзади: 14." },
      { en: "A successful rear finish ignores Stability. This is separate from the global backstab bonus.", ru: "Успешный выход за спину игнорирует стабильность. Это отдельный эффект, не глобальный бонус удара в спину." }
    ]
  },
  {
    id: "cigarette_cross_slash",
    title: { en: "Cigarette Cross Slash", ru: "Сигаретный разрез" },
    requirement: { en: "Sword, Dual Katana or Sheathed Katana", ru: "Один меч, две катаны или катана в ножнах" },
    styleCost: 400,
    cooldownSeconds: 7,
    summary: { en: "Throw a cigarette marker, then press Tab again to teleport to it and slash.", ru: "Бросьте сигарету-метку и нажмите Tab ещё раз, чтобы телепортироваться к ней с разрезом." },
    details: [
      { en: "Tap Tab again to consume the anchor and teleport to it.", ru: "Повторно нажмите Tab, чтобы поглотить якорь и телепортироваться к нему." },
      { en: "A direct target hit triggers the warp and slash immediately.", ru: "Прямое попадание по цели сразу запускает телепорт и разрез." }
    ]
  }
];
