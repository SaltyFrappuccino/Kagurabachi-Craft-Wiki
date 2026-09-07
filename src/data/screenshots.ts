import blockEffect from "../assets/screenshots/block-effect.png";
import combatBeam from "../assets/screenshots/combat-beam.jpg";
import contractKamunabi from "../assets/screenshots/contract-kamunabi-en.png";
import dash from "../assets/screenshots/dash.png";
import doubleJump from "../assets/screenshots/double-jump.png";
import hudBlackFlames from "../assets/screenshots/hud-black-flames.png";
import hudSorcerySlots from "../assets/screenshots/hud-sorcery-slots.png";
import kurotsuchiIslandBreaker from "../assets/screenshots/kurotsuchi-island-breaker.jpg";
import originSelection from "../assets/screenshots/origin-selection-en.png";
import patchouliGuide from "../assets/screenshots/patchouli-guide-en.png";
import signatureSelector from "../assets/screenshots/signature-selector-en.png";
import sorceryJikai from "../assets/screenshots/sorcery-jikai-en.png";
import sorcerySelector from "../assets/screenshots/sorcery-selector-en.png";
import techniqueLibrary from "../assets/screenshots/technique-library-en.png";
import stylePointFarmAura from "../assets/screenshots/style-point-farm-aura.png";
import styleDualKatana from "../assets/screenshots/style-dual-katana.png";
import styleHand from "../assets/screenshots/style-hand.png";
import styleSheathedKatana from "../assets/screenshots/style-sheathed-katana.png";
import styleSword from "../assets/screenshots/style-sword.png";
import targetLock from "../assets/screenshots/target-lock.png";
import tobimuneBlackFlames from "../assets/screenshots/tobimune-black-flames.jpg";
import tobimuneBlackFlamesAirborne from "../assets/screenshots/tobimune-black-flames-airborne.jpg";
import type { Locale, SectionId } from "../types";

export type ScreenshotEntry = {
  src: string;
  section: SectionId;
  title: Record<Locale, string>;
  caption: Record<Locale, string>;
  shape?: "wide" | "compact" | "portrait";
};

export const screenshots: ScreenshotEntry[] = [
  {
    src: combatBeam,
    section: "overview",
    title: { en: "Combat in the city", ru: "Бой в городе" },
    caption: { en: "Sorcery attacks can cross the arena and tear through the environment.", ru: "Колдовские атаки проходят через всю арену и разрушают окружение." },
    shape: "wide"
  },
  {
    src: originSelection,
    section: "quickstart",
    title: { en: "Choose an origin", ru: "Выбор происхождения" },
    caption: { en: "The first screen sets your starting faction and reputation.", ru: "Первый экран задаёт стартовую фракцию и репутацию." }
  },
  {
    src: patchouliGuide,
    section: "quickstart",
    title: { en: "Field guide", ru: "Полевой справочник" },
    caption: { en: "The Patchouli book opens new chapters as you encounter systems and items.", ru: "Книга Patchouli открывает главы по мере знакомства с системами и предметами." }
  },
  {
    src: sorcerySelector,
    section: "quickstart",
    title: { en: "Sorcery selector", ru: "Выбор колдовства" },
    caption: { en: "Search the complete list and inspect a kit before selecting it.", ru: "В полном списке можно найти колдовство и посмотреть его набор перед выбором." }
  },
  {
    src: tobimuneBlackFlames,
    section: "combat",
    title: { en: "Black Flames", ru: "Чёрное пламя" },
    caption: { en: "Tobimune combat with the main HUD visible.", ru: "Бой с Тобимунэ и основными элементами интерфейса." },
    shape: "wide"
  },
  {
    src: kurotsuchiIslandBreaker,
    section: "combat",
    title: { en: "Island Breaker: Burning Heaven Mass", ru: "Разрушитель острова: Пылающая небесная масса" },
    caption: { en: "Kurotsuchi assembling the enormous burning block mass before it crashes down in a single strike.", ru: "Куротсучи собирает огромную горящую массу из блоков перед тем, как она обрушится одним ударом." },
    shape: "wide"
  },
  {
    src: hudBlackFlames,
    section: "combat",
    title: { en: "Blade resource", ru: "Ресурс клинка" },
    caption: { en: "Blade-specific resources stay near the centre of the screen.", ru: "Ресурсы клинка отображаются рядом с центром экрана." },
    shape: "compact"
  },
  {
    src: hudSorcerySlots,
    section: "combat",
    title: { en: "Ability bar", ru: "Панель способностей" },
    caption: { en: "Inputs, costs and cooldowns are visible during combat.", ru: "Во время боя видны клавиши, стоимость и перезарядка." },
    shape: "compact"
  },
  {
    src: tobimuneBlackFlamesAirborne,
    section: "movement",
    title: { en: "Air combat", ru: "Бой в воздухе" },
    caption: { en: "Movement abilities let you keep fighting above the city.", ru: "Способности перемещения позволяют продолжать бой в воздухе над городом." },
    shape: "wide"
  },
  {
    src: dash,
    section: "movement",
    title: { en: "Dash", ru: "Рывок" },
    caption: { en: "A fast ground dash with its movement trail.", ru: "Быстрый рывок по земле со следом движения." },
    shape: "portrait"
  },
  {
    src: doubleJump,
    section: "movement",
    title: { en: "Double jump", ru: "Двойной прыжок" },
    caption: { en: "The second jump leaves a visible air burst below the player.", ru: "Второй прыжок оставляет под игроком заметный воздушный след." },
    shape: "portrait"
  },
  {
    src: signatureSelector,
    section: "signatures",
    title: { en: "Signature selector", ru: "Выбор фирменного приёма" },
    caption: { en: "Hold Tab, choose a technique and release to confirm.", ru: "Удерживайте Tab, выберите технику и отпустите клавишу." }
  },
  {
    src: styleHand,
    section: "styles",
    title: { en: "Hand", ru: "Рукопашный стиль" },
    caption: { en: "A close-range hand attack.", ru: "Рукопашная атака на ближней дистанции." },
    shape: "portrait"
  },
  {
    src: styleDualKatana,
    section: "styles",
    title: { en: "Dual Katana", ru: "Две катаны" },
    caption: { en: "An attack performed with two katana.", ru: "Атака с двумя катанами." },
    shape: "portrait"
  },
  {
    src: styleSword,
    section: "styles",
    title: { en: "Sword", ru: "Один меч" },
    caption: { en: "An attack with a single drawn sword.", ru: "Атака одним обнажённым мечом." },
    shape: "portrait"
  },
  {
    src: styleSheathedKatana,
    section: "styles",
    title: { en: "Sheathed Katana", ru: "Катана в ножнах" },
    caption: { en: "An attack performed with the katana still in its sheath.", ru: "Атака катаной, которая остаётся в ножнах." },
    shape: "portrait"
  },
  {
    src: sorceryJikai,
    section: "sorcery",
    title: { en: "Jikai kit", ru: "Набор Дзикай" },
    caption: { en: "Every ability has its input, cost, cooldown and description.", ru: "Для каждой способности указаны клавиша, стоимость, перезарядка и описание." },
    shape: "wide"
  },
  {
    src: techniqueLibrary,
    section: "sorcery",
    title: { en: "Technique library", ru: "Библиотека техник" },
    caption: { en: "Search moves by sorcery, tag and effect.", ru: "Поиск приёмов по колдовству, тегу и эффекту." },
    shape: "wide"
  },
  {
    src: targetLock,
    section: "combat",
    title: { en: "Target lock", ru: "Захват цели" },
    caption: { en: "The lock-on marker around the selected target.", ru: "Маркер захвата вокруг выбранной цели." },
    shape: "portrait"
  },
  {
    src: stylePointFarmAura,
    section: "signatures",
    title: { en: "Style Point aura", ru: "Аура накопления очков стиля" },
    caption: { en: "The aura shown while building Style Points with N.", ru: "Аура, которая появляется при накоплении очков стиля клавишей N." },
    shape: "portrait"
  },
  {
    src: blockEffect,
    section: "combat",
    title: { en: "Guard effect", ru: "Эффект защиты" },
    caption: { en: "The visual effect shown while blocking an attack.", ru: "Визуальный эффект во время блокирования атаки." },
    shape: "portrait"
  },
  {
    src: contractKamunabi,
    section: "progression",
    title: { en: "Kamunabi contracts", ru: "Контракты Камунаби" },
    caption: { en: "Boards show requirements, objectives, progress and rewards.", ru: "Доска показывает требования, цель, прогресс и награду." },
    shape: "wide"
  }
];
