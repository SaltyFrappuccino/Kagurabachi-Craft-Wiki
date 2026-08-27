export const controls = [
  {
    action: { en: "Combat Mode", ru: "Боевой режим" },
    key: "Y",
    description: {
      en: "Enables the mod's combat controls and HUD. Your equipped weapon determines the active fighting style.",
      ru: "Включает боевое управление и интерфейс мода. Активный стиль определяется оружием в руках."
    }
  },
  {
    action: { en: "Light / Heavy attack", ru: "Лёгкая / тяжёлая атака" },
    key: "Tap / hold LMB",
    description: {
      en: "Tap for a light attack. Hold for at least 5 ticks to use the heavy attack of your current style. An input just before the cooldown ends may be queued.",
      ru: "Короткое нажатие выполняет лёгкую атаку. Удерживайте кнопку не менее 5 тиков для тяжёлой атаки текущего стиля. Нажатие перед концом перезарядки может встать в очередь."
    }
  },
  {
    action: { en: "Block / Parry", ru: "Блок / парирование" },
    key: "Shift",
    description: {
      en: "Press as an attack arrives to parry it; keep holding to block. Strong attacks can strain or break your guard.",
      ru: "Нажмите перед попаданием, чтобы парировать атаку, или продолжайте удерживать для блока. Сильные удары могут продавить защиту."
    }
  },
  {
    action: { en: "Dodge", ru: "Уклонение" },
    key: "Ctrl",
    description: {
      en: "Dodges in the direction you are moving. Dodge charges recover over time; the move does not make you invulnerable for its entire duration.",
      ru: "Выполняет уклонение в сторону движения. Заряды уклонения восстанавливаются со временем; весь рывок не даёт полной неуязвимости."
    }
  },
  {
    action: { en: "Signature technique", ru: "Фирменный приём" },
    key: "Tap / hold Tab",
    description: {
      en: "Tap to use the selected technique. Hold for at least 200 ms to open the selector. Signature techniques spend Style Points rather than SE.",
      ru: "Нажмите Tab, чтобы применить выбранный приём. Удерживайте Tab не менее 200 мс, чтобы открыть выбор. Фирменные приёмы расходуют очки стиля, а не SE."
    }
  },
  {
    action: { en: "Sorcery mode", ru: "Режим колдовства" },
    key: "R",
    description: {
      en: "Gives the mouse buttons and Shift access to sorcery slots. In settings, R can work either while held or as a toggle.",
      ru: "Переключает кнопки мыши и Shift на способности колдовства. В настройках R можно сделать удерживаемой клавишей или переключателем."
    }
  },
  {
    action: { en: "Primary slot", ru: "Основной слот" },
    key: "R + LMB",
    description: {
      en: "Uses the primary ability while sorcery mode is active.",
      ru: "Применяет основную способность в режиме колдовства."
    }
  },
  {
    action: { en: "Secondary slot", ru: "Дополнительный слот" },
    key: "R + RMB",
    description: {
      en: "Uses the secondary ability while sorcery mode is active.",
      ru: "Применяет дополнительную способность в режиме колдовства."
    }
  },
  {
    action: { en: "Utility slot", ru: "Вспомогательный слот" },
    key: "R + Shift",
    description: {
      en: "Uses the utility ability while sorcery mode is active.",
      ru: "Применяет вспомогательную способность в режиме колдовства."
    }
  },
  {
    action: { en: "Support 1 slot", ru: "Поддержка 1" },
    key: "Z",
    description: {
      en: "Uses the first support ability.",
      ru: "Применяет первую способность поддержки."
    }
  },
  {
    action: { en: "Support 2 slot", ru: "Поддержка 2" },
    key: "X",
    description: {
      en: "Uses the second support ability.",
      ru: "Применяет вторую способность поддержки."
    }
  },
  {
    action: { en: "Special slot", ru: "Особый слот" },
    key: "G",
    description: {
      en: "Uses the special ability, which is often a mode or toggle.",
      ru: "Применяет особую способность — часто это отдельный режим или переключатель."
    }
  },
  {
    action: { en: "Awakening", ru: "Пробуждение" },
    key: "V",
    description: {
      en: "Activates Awakening when its meter reaches 100%. The exact effect depends on the sorcery.",
      ru: "Активирует пробуждение при заполнении шкалы до 100%. Точный эффект зависит от колдовства."
    }
  },
  {
    action: { en: "Draw / sheathe katana", ru: "Достать / убрать катану" },
    key: "H",
    description: {
      en: "Draws or sheathes a katana. Some katana styles and attacks depend on this state.",
      ru: "Достаёт или убирает катану. От этого зависят некоторые стили и атаки с катаной."
    }
  },
  {
    action: { en: "Lock-on", ru: "Захват цели" },
    key: "Middle mouse",
    description: {
      en: "Locks the camera and target-aware attacks onto an enemy. Press again to release the target.",
      ru: "Фиксирует камеру и направляемые атаки на противнике. Нажмите ещё раз, чтобы снять захват."
    }
  },
  {
    action: { en: "Open player stats", ru: "Открыть статистику" },
    key: "P",
    description: {
      en: "Opens the character menu with sorcery, signatures, the library and progression information.",
      ru: "Открывает меню персонажа с колдовством, фирменными приёмами, библиотекой и сведениями о развитии."
    }
  },
  {
    action: { en: "Cycle lock-on target", ru: "Сменить захваченную цель" },
    key: "Q / E",
    description: {
      en: "While lock-on is active, selects the next target to the left or right.",
      ru: "При активном захвате выбирает следующую цель слева или справа."
    }
  },
  {
    action: { en: "Open settings", ru: "Открыть настройки" },
    key: "M",
    description: {
      en: "Opens the mod settings screen, including combat and sorcery control options.",
      ru: "Открывает настройки мода, включая параметры боевого управления и режима колдовства."
    }
  },
  {
    action: { en: "Extra jump", ru: "Дополнительный прыжок" },
    key: "Space",
    description: {
      en: "Uses an available mid-air jump. The normal Minecraft jump remains unchanged while you are on the ground.",
      ru: "В воздухе расходует доступный дополнительный прыжок. Обычный прыжок с земли работает как прежде."
    }
  },
  {
    action: { en: "Shoulder camera", ru: "Камера от плеча" },
    key: "F6",
    description: {
      en: "Switches the mod's over-the-shoulder camera on or off.",
      ru: "Включает или выключает камеру от плеча."
    }
  },
  {
    action: { en: "Build Style Points", ru: "Накопление очков стиля" },
    key: "N",
    description: {
      en: "Stand still to gain Style Points. Moving, attacking or taking damage interrupts the action; incoming damage is doubled while it is active.",
      ru: "Стойте на месте, чтобы получать очки стиля. Движение, атака или полученный урон прерывают действие; входящий урон во время накопления удваивается."
    }
  },
  {
    action: { en: "Dance", ru: "Танец" },
    key: "B",
    description: {
      en: "Plays the dance animation. The animation ends automatically or when interrupted.",
      ru: "Запускает танцевальную анимацию. Она заканчивается сама или при прерывании."
    }
  }
];
