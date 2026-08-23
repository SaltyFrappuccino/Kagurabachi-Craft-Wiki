import type { FaqEntry } from "../types";

export const faq: FaqEntry[] = [
  {
    question: { en: "What version of Minecraft does this mod support?", ru: "Для какой версии Minecraft этот мод?" },
    answer: {
      en: "Kagurabachi Craft 5.4.0 is built for Minecraft 1.21.1 and requires NeoForge 21.1.217 or newer. Fabric and Forge are not supported.",
      ru: "Кагурабати Craft 5.4.0 создан для Minecraft 1.21.1 и требует NeoForge 21.1.217 или новее. Fabric и Forge не поддерживаются."
    }
  },
  {
    question: { en: "Which dependencies are required?", ru: "Какие зависимости нужны?" },
    answer: {
      en: "Player Animator 2.0.1+, Patchouli 1.21.1-92+ and Cascade 1.0.x are required. Veil 4.4.1-4.4.x is optional but recommended for the complete shader and distortion effects.",
      ru: "Обязательны Player Animator 2.0.1+, Patchouli 1.21.1-92+ и Cascade 1.0.x. Veil 4.4.1-4.4.x необязателен, но рекомендуется для полных шейдеров и эффектов искажения."
    }
  },
  {
    question: { en: "How do I get an enchanted blade?", ru: "Как получить зачарованный клинок?" },
    answer: {
      en: "Use the /give command to obtain blade items, or find them in world loot if generation is configured. Each blade is a unique item that grants its associated sorcery when held.",
      ru: "Используйте команду /give для получения клинков или найдите их в луте мира при настроенной генерации. Каждый клинок - уникальный предмет, дающий связанное колдовство при ношении."
    }
  },
  {
    question: { en: "How do I switch sorceries?", ru: "Как переключить колдовство?" },
    answer: {
      en: "Use /kbc set sorceryType <your_name> <id> to switch sorcery type server-side. Sorcery IDs are the lowercase names: Enten, CloudGouger, FlameBone, Kumeyuri, Magatsumi, Tobimune, etc.",
      ru: "Используйте /kbc set sorceryType <ваше_имя> <id> для серверного переключения. ID колдовства - строчные названия: Enten, CloudGouger, FlameBone, Kumeyuri, Magatsumi, Tobimune и др."
    }
  },
  {
    question: { en: "How do I unlock signature techniques?", ru: "Как открыть сигнатурные техники?" },
    answer: {
      en: "Use /kbc add signature <player> <technique_name>. Known techniques include: IaiWhitePurity, VillainsExecution, Hiruhiko, CigaretteCrossSlash. Ask your server admin or use the command yourself if you have operator permissions.",
      ru: "Используйте /kbc add signature <игрок> <название>. Известные техники: IaiWhitePurity, VillainsExecution, Hiruhiko, CigaretteCrossSlash. Попросите администратора или используйте команду самостоятельно при наличии прав."
    }
  },
  {
    question: { en: "Why can't I use my sorcery abilities?", ru: "Почему не работают мои способности колдовства?" },
    answer: {
      en: "Check: (1) Are you in combat mode? Press Y to enable. (2) Is R held or toggled to sorcery mode? (3) Do you have enough SE? (4) Are you in a cooldown period? Check the HUD for resource and cooldown indicators.",
      ru: "Проверьте: (1) Вы в боевом режиме? Нажмите Y. (2) R удержан или переключён в режим колдовства? (3) Достаточно ли SE? (4) На кулдауне? Смотрите HUD на индикаторы ресурсов и кулдауна."
    }
  },
  {
    question: { en: "What is SE (Spiritual Energy)?", ru: "Что такое SE (Духовная Энергия)?" },
    answer: {
      en: "SE is the resource that fuels all sorcery abilities. It regenerates over time. You can view your current SE on the HUD while in combat mode. Use /kbc set currentSE to manually set it (admin/debug).",
      ru: "SE - ресурс, питающий все способности колдовства. Восстанавливается со временем. Текущее SE видно на HUD в боевом режиме. Используйте /kbc set currentSE для ручной установки (admin/debug)."
    }
  },
  {
    question: { en: "Can I use this on a multiplayer server?", ru: "Работает ли это на многопользовательском сервере?" },
    answer: {
      en: "Yes. Kagurabachi Craft is designed for multiplayer from the ground up. All combat outcomes are server-authoritative, making it fair in PvP. Both players need the mod installed.",
      ru: "Да. Кагурабати Craft разработан для многопользовательской игры. Все боевые исходы авторитетны серверу, что делает PvP честным. Оба игрока должны иметь мод."
    }
  },
  {
    question: { en: "How does Enten's Aka ability work?", ru: "Как работает способность Aka у Enten?" },
    answer: {
      en: "Enten's Aka goldfish absorbs an attack the blade comes into contact with and stores it. You can then unleash that stored attack back at the enemy via the secondary slot (R + RMB). Only one attack is held at a time.",
      ru: "Золотая рыбка Aka у Enten поглощает атаку, которой коснулся клинок, и сохраняет её. Затем вы можете вернуть сохранённую атаку врагу через вторичный слот (R + RMB). Хранится одна атака за раз."
    }
  },
  {
    question: { en: "What does Tobimune's Suzaku awakening do?", ru: "Что делает пробуждение Suzaku у Tobimune?" },
    answer: {
      en: "Suzaku Awakening changes feather abilities into black flame versions. Fired feathers become charges that detonate on contact. A charged mass detonation triggers every active charge.",
      ru: "Пробуждение Suzaku трансформирует все способности перьев в варианты чёрного пламени. Выпущенные перья становятся зарядами чёрного пламени - детонируются при контакте или все одновременно заряженной массовой детонацией."
    }
  },
  {
    question: { en: "Does death reset my sorcery progress?", ru: "Сбрасывает ли смерть прогресс колдовства?" },
    answer: {
      en: "It depends on gamerule settings. kbcKeepEnchantedBladesContractAfterDeath controls blade contracts. kbcResetAdaptationOnDeath controls Adaptation resets. Server owners can configure these as needed.",
      ru: "Зависит от настроек gamerule. kbcKeepEnchantedBladesContractAfterDeath управляет контрактами клинков. kbcResetAdaptationOnDeath управляет сбросом Adaptation. Администраторы могут настроить это по необходимости."
    }
  }
];
