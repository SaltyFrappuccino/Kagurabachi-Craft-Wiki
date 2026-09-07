import { assets } from "./assets";
import type { ItemEntry } from "../types";

// Enchanted Blades (妖刀) currently implemented in the mod.
export const items: ItemEntry[] = [
  {
    id: "enten-blade",
    name: { en: "Enten", ru: "Энтен" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "mirror",
    elementLabel: { en: "Spirit Energy", ru: "Духовная энергия" },
    summary: {
      en: "Chihiro's blade. Kuro attacks at range, Aka absorbs an attack on contact, and Nishiki wraps the wielder in Spirit Energy to sharpen movement and close combat.",
      ru: "Клинок Тихиро. Куро атакует на расстоянии, Ака поглощает атаку при контакте, а Нисики окутывает владельца духовной энергией, ускоряя движения и ближний бой."
    },
    details: [
      { en: "Primary sends a Kuro slash forward; Secondary dashes through enemies with a series of cuts.", ru: "Основной слот выпускает разрез Куро вперёд; дополнительный проводит рывком сквозь врагов с серией разрезов." },
      { en: "Aka absorbs one compatible attack on contact and keeps it for a later counter.", ru: "Ака поглощает одну подходящую атаку при контакте и сохраняет её для ответного применения." },
      { en: "Nishiki has separate offensive and defensive modes. Both drain SE and build fatigue while active.", ru: "У Нисики есть отдельные атакующий и защитный режимы. Оба постоянно расходуют SE и накапливают усталость." }
    ],
    asset: assets.enten,
    sorceryId: "enten"
  },

  {
    id: "cloud-gouger-blade",
    name: { en: "Cloud Gouger", ru: "Пронзающее Облако" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "ice",
    elementLabel: { en: "Weather", ru: "Погода" },
    summary: {
      en: "Sojo's blade uses lightning, ice, rain and fog. Lightning spends Thunder charges and deals more damage to wet targets.",
      ru: "Клинок Содзё использует молнию, лёд, дождь и туман. Молния расходует заряды грома и сильнее бьёт по мокрым целям."
    },
    details: [
      { en: "Thunder charges appear on the HUD and recover while you are not spending them.", ru: "Заряды грома видны на интерфейсе и восстанавливаются, пока вы их не расходуете." },
      { en: "Placed ice is temporary: changed terrain restores itself after the ability ends.", ru: "Созданный лёд временный: изменённые блоки восстанавливаются после завершения способности." }
    ],
    asset: assets.cloudGouger,
    sorceryId: "cloud-gouger"
  },

  {
    id: "kumeyuri-blade",
    name: { en: "Kumeyuri", ru: "Кумэюри" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "illusion",
    elementLabel: { en: "Hallucination", ru: "Галлюцинации" },
    summary: {
      en: "Hiruhiko's blade. Banquet distorts perception through hallucination; Play lets the geisha apparitions manipulate nearby objects. The mod expresses those effects through Intoxication, marks, and destructible scenery.",
      ru: "Клинок Хирухико. Пир искажает восприятие галлюцинациями, а Игра позволяет образам гейш управлять предметами вокруг. В моде эти свойства выражены через Опьянение, метки и разрушаемое окружение."
    },
    details: [
      { en: "Several Banquet abilities become more effective after Intoxication has already been applied.", ru: "Часть способностей Пира становится сильнее после того, как на цель уже наложено Опьянение." },
      { en: "The mod's Play attacks can seize one object immediately or gather several before release.", ru: "Игровые приёмы Игры могут сразу захватить один объект или собрать несколько перед броском." }
    ],
    asset: assets.kumeyuri,
    sorceryId: "kumeyuri"
  },

  {
    id: "magatsumi-blade",
    name: { en: "Magatsumi", ru: "Магацуми" },
    status: { en: "WIP", ru: "WIP" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "wither",
    elementLabel: { en: "Curse / Creatures", ru: "Проклятие / Существа" },
    summary: {
      en: "The current WIP kit has Dragonfly, Centipede and Spider. Drawing the blade also spreads Curse to nearby targets at an ongoing SE cost.",
      ru: "В текущем WIP-наборе доступны Стрекоза, Сороконожка и Паук. Обнажённый клинок также распространяет Проклятие на ближайшие цели, постоянно расходуя SE."
    },
    details: [
      { en: "Dragonfly attacks ahead, Centipede blasts outward and Spider traps targets in a web. Bee and Butterfly are not available as playable slots.", ru: "Стрекоза бьёт вперёд, Сороконожка — взрывом вокруг, а Паук удерживает цели в паутине. Пчела и Бабочка недоступны как игровые слоты." },
      { en: "The passive Curse deals periodic damage that ignores Stability.", ru: "Пассивное проклятие периодически наносит урон, игнорируя стойкость." }
    ],
    asset: assets.magatsumi,
    sorceryId: "magatsumi"
  },

  {
    id: "tobimune-blade",
    name: { en: "Tobimune", ru: "Тобимунэ" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "feather",
    elementLabel: { en: "Birds / Suzaku", ru: "Птицы / Судзаку" },
    summary: {
      en: "Samura's blade. Crow exchanges the wielder's position with summoned feathers, Owl detects Spirit Energy, and Suzaku heals or burns. The mod builds its movement kit around Crow and treats the life-consuming Black Flames as an Awakening.",
      ru: "Клинок Самуры. Ворон меняет владельца местами с призванными перьями, Сова обнаруживает духовную энергию, а Судзаку лечит или обжигает. Мод строит набор перемещений вокруг Ворона и оформляет пожирающее жизнь Чёрное пламя как Пробуждение."
    },
    details: [
      { en: "Hold Feather Step to aim at the feather marker, then release to teleport there and strike nearby targets.", ru: "Удерживайте Шаг пера для наведения на метку из перьев и отпустите, чтобы переместиться к ней и ударить цели рядом." },
      { en: "With Suzaku, Utility burns and pushes enemies away; Supportive 1 sends two cuts forward in an X. Black Flames strengthens Suzaku, but ordinary expiry or cancellation kills the wielder.", ru: "С Судзаку вспомогательный слот поджигает и отбрасывает врагов, а Поддержка 1 выпускает вперёд два разреза крест-накрест. Чёрное пламя усиливает Судзаку, но при обычных правилах его окончание или отмена убивает владельца." }
    ],
    asset: assets.tobimune,
    sorceryId: "tobimune"
  }
];
