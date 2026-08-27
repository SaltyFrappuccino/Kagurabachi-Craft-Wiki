import type { FaqEntry } from "../types";
import { release } from "./release";

export const faq: FaqEntry[] = [
  {
    question: { en: "What version of Minecraft does this mod support?", ru: "Для какой версии Minecraft этот мод?" },
    answer: {
      en: `Kagurabachi Craft ${release.version} is built for Minecraft ${release.minecraft} and requires NeoForge 21.1.217 or newer. Fabric and Forge are not supported.`,
      ru: `Kagurabachi Craft ${release.version} создан для Minecraft ${release.minecraft} и требует NeoForge 21.1.217 или новее. Fabric и Forge не поддерживаются.`
    }
  },
  {
    question: { en: "Which dependencies are required?", ru: "Какие зависимости нужны?" },
    answer: {
      en: "Player Animator 2.0.1+ and Patchouli 1.21.1-92+ are the only external dependencies. Cascade 1.0.x and Veil 4.4.1-4.4.x are bundled with the mod; Veil support is client-side and optional at runtime.",
      ru: "Единственные внешние зависимости — Player Animator 2.0.1+ и Patchouli 1.21.1-92+. Cascade 1.0.x и Veil 4.4.1-4.4.x встроены в мод; поддержка Veil работает только на клиенте и необязательна для работы мода."
    }
  },
  {
    question: { en: "How do I get an enchanted blade?", ru: "Как получить зачарованный клинок?" },
    answer: {
      en: "For testing, obtain a blade with /give. Normal acquisition depends on the progression and loot systems enabled by the server. Holding an Enchanted Blade gives access to its sorcery.",
      ru: "Для тестирования выдайте клинок через /give. Обычный способ получения зависит от включённых на сервере систем развития и добычи. Зачарованный клинок открывает своё колдовство, пока находится в руке."
    }
  },
  {
    question: { en: "How do I switch sorceries?", ru: "Как переключить колдовство?" },
    answer: {
      en: "Use /kbc set sorceryType <id> [targets]. IDs are case-sensitive internal names such as Enten, CloudGouger, FlameBone, Kumeyuri, Magatsumi and Tobimune. The command requires the appropriate server permissions.",
      ru: "Используйте /kbc set sorceryType <id> [targets]. Идентификаторы чувствительны к регистру; нужны внутренние названия, например Enten, CloudGouger, FlameBone, Kumeyuri, Magatsumi и Tobimune. Для выполнения требуются соответствующие права на сервере."
    }
  },
  {
    question: { en: "How do I unlock signature techniques?", ru: "Как открыть фирменные приёмы?" },
    answer: {
      en: "Use /kbc add signature <id> [targets]. Available IDs are iai, execution, hiruhiko and cigarette_cross_slash. Ask a server administrator unless you have permission to run the command yourself.",
      ru: "Используйте /kbc add signature <id> [targets]. Доступные ID: iai, execution, hiruhiko и cigarette_cross_slash. Если у вас нет нужных прав, обратитесь к администратору сервера."
    }
  },
  {
    question: { en: "Why can't I use my sorcery abilities?", ru: "Почему не работают мои способности колдовства?" },
    answer: {
      en: "Check: (1) Are you in combat mode? Press Y to enable. (2) Is R held or toggled to sorcery mode? (3) Do you have enough SE? (4) Are you in a cooldown period? Check the HUD for resource and cooldown indicators.",
      ru: "Проверьте четыре вещи: включён ли боевой режим клавишей Y; активен ли режим колдовства на R; хватает ли духовной энергии; закончилась ли перезарядка. Текущее состояние видно в боевом интерфейсе."
    }
  },
  {
    question: { en: "What is SE (Spirit Energy)?", ru: "Что такое SE (духовная энергия)?" },
    answer: {
      en: "SE powers sorcery abilities and regenerates over time. Your current amount appears on the HUD in combat mode. Administrators can set it manually with /kbc set currentSE <value> [targets].",
      ru: "SE расходуется на способности колдовства и со временем восстанавливается. Текущий запас показан в боевом интерфейсе. Администратор может изменить его командой /kbc set currentSE <value> [targets]."
    }
  },
  {
    question: { en: "Can I use this on a multiplayer server?", ru: "Работает ли это на многопользовательском сервере?" },
    answer: {
      en: "Yes. Combat is calculated on the server. The server and every connecting player need the same mod version and all required dependencies.",
      ru: "Да. Бой рассчитывается на сервере. Серверу и каждому подключающемуся игроку нужны одинаковая версия мода и все обязательные зависимости."
    }
  },
  {
    question: { en: "How does Enten's Aka ability work?", ru: "Как работает Ака у Энтена?" },
    answer: {
      en: "Enten's Aka goldfish absorbs an attack the blade comes into contact with and stores it. You can then release that stored attack back at the enemy via the secondary slot (R + RMB). Only one attack is held at a time.",
      ru: "Золотая рыбка Ака у Энтена поглощает атаку, которой коснулся клинок, и сохраняет её. Затем сохранённую атаку можно вернуть врагу через дополнительный слот (R + ПКМ). Одновременно хранится только одна атака."
    }
  },
  {
    question: { en: "What does Tobimune's Suzaku awakening do?", ru: "Что делает пробуждение Судзаку у Тобимунэ?" },
    answer: {
      en: "Suzaku Awakening changes feather abilities into black flame versions. Fired feathers become charges that detonate on contact. A charged mass detonation triggers every active charge.",
      ru: "Пробуждение Судзаку превращает способности перьев в варианты чёрного пламени. Выпущенные перья становятся огненными зарядами: они взрываются при контакте или все сразу после полной зарядки массовой детонации."
    }
  },
  {
    question: { en: "Does death reset my sorcery progress?", ru: "Сбрасывает ли смерть прогресс колдовства?" },
    answer: {
      en: "It depends on gamerule settings. kbcKeepEnchantedBladesContractAfterDeath controls blade contracts. kbcResetAdaptationOnDeath controls Adaptation resets. Server owners can configure these as needed.",
      ru: "Зависит от настроек правил игры. kbcKeepEnchantedBladesContractAfterDeath управляет контрактами клинков. kbcResetAdaptationOnDeath управляет сбросом адаптации. Администраторы могут настроить это по необходимости."
    }
  }
];
