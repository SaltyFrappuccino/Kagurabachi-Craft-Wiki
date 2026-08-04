import { assets } from "./assets";
import type { ItemEntry } from "../types";

// Only the canon Enchanted Blades (魔剣) forged by Kunishige Rokuhira.
export const items: ItemEntry[] = [
  {
    id: "enten-blade",
    name: { en: "Enten", ru: "Энтен" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "mirror",
    elementLabel: { en: "Spirit Energy", ru: "Духовная энергия" },
    summary: {
      en: "Chihiro's blade. Its three abilities have separate jobs: Kuro attacks at range, Aka stores an attack that touches the blade, and Nishiki improves movement and close-range pressure.",
      ru: "Клинок Тихиро. У трёх его способностей разные задачи: Куро атакует на расстоянии, Ака сохраняет коснувшуюся клинка атаку, а Нисики ускоряет владельца и усиливает ближний бой."
    },
    details: [
      { en: "Kuro fires spirit-energy slashes; charged and alternate versions change their size and coverage.", ru: "Куро выпускает разрезы духовной энергии; зарядка и дополнительные варианты меняют размер и охват." },
      { en: "Aka absorbs one compatible attack on contact and keeps it for a later counter.", ru: "Ака поглощает одну подходящую атаку при контакте и сохраняет её для ответного применения." },
      { en: "Nishiki is the movement mode. Additional Nishiki options require Mastery II.", ru: "Нисики отвечает за движение. Дополнительные режимы Нисики требуют II ранга мастерства." }
    ],
    asset: assets.enten,
    sorceryId: "enten"
  },

  {
    id: "cloud-gouger-blade",
    name: { en: "Kuregumo", ru: "Курегумо" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "ice",
    elementLabel: { en: "Weather", ru: "Погода" },
    summary: {
      en: "Kuregumo uses Thunder charges for lightning, ice and water techniques. It can fight at several ranges and control space with weather effects, but none of its slots is a dedicated block or counter.",
      ru: "Курегумо расходует заряды Грома на техники молнии, льда и воды. Он работает на нескольких дистанциях и контролирует пространство погодными эффектами, но отдельного блока или контратаки в наборе нет."
    },
    details: [
      { en: "Thunder charges accumulate during combat and are shown by the blade's HUD.", ru: "Заряды Грома накапливаются в бою и отображаются на HUD клинка." },
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
      en: "Hiruhiko's blade. Banquet accumulates Intoxication and interferes with the target's perception. Play pulls apart nearby objects or structures and throws the pieces.",
      ru: "Клинок Хирухико. Пир накапливает Опьянение и мешает восприятию цели. Игра разбирает находящиеся рядом предметы или части построек и бросает их."
    },
    details: [
      { en: "Several Banquet abilities become more effective after Intoxication has already been applied.", ru: "Часть способностей Пира становится сильнее после того, как на цель уже наложено Опьянение." },
      { en: "Play can grab one object immediately or gather several before release.", ru: "Игра может сразу вырвать один объект либо собрать несколько перед броском." }
    ],
    asset: assets.kumeyuri,
    sorceryId: "kumeyuri"
  },

  {
    id: "magatsumi-blade",
    name: { en: "Magatsumi", ru: "Магатсуми" },
    status: { en: "WIP", ru: "В разработке" },
    type: { en: "Enchanted Blade", ru: "Зачарованный клинок" },
    element: "wither",
    elementLabel: { en: "Curse / Creatures", ru: "Проклятие / Существа" },
    summary: {
      en: "Magatsumi has five insect techniques: Spider, Dragonfly, Centipede, Butterfly and Bee. While unsheathed, it also applies a Curse around the wielder. The kit is marked WIP because several mechanics and visuals are still changing.",
      ru: "У Магатсуми пять техник: Паук, Стрекоза, Сороконожка, Бабочка и Пчела. Пока клинок обнажён, он также накладывает Проклятие вокруг владельца. Набор помечен WIP: часть механик и визуальных эффектов ещё меняется."
    },
    details: [
      { en: "Spider controls movement; Dragonfly handles repositioning; the remaining insects provide direct attacks.", ru: "Паук ограничивает движение, Стрекоза отвечает за перемещение, остальные насекомые дают прямые атаки." },
      { en: "The passive Curse deals periodic damage that ignores Stability.", ru: "Пассивное Проклятие наносит периодический урон, игнорирующий Стабильность." }
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
      en: "Samura's blade. Its regular kit uses feathers for teleport points, flight and position swaps. Suzaku restores health and clears common debuffs; full Awakening adds Black Flames to several attacks.",
      ru: "Клинок Самуры. Обычный набор использует перья как точки телепортации, даёт полёт и обмен позициями. Судзаку восстанавливает здоровье и снимает обычные негативные эффекты; полное Пробуждение добавляет Чёрное пламя к нескольким атакам."
    },
    details: [
      { en: "Feather Step places a point and teleports the wielder to it on release.", ru: "Шаг пера ставит точку и при отпускании телепортирует к ней владельца." },
      { en: "During Black Flames, the movement abilities gain burning attack variants.", ru: "Во время Чёрного пламени способности перемещения получают поджигающие варианты атак." }
    ],
    asset: assets.tobimune,
    sorceryId: "tobimune"
  }
];
