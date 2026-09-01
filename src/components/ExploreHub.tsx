import type { Locale, SectionId } from "../types";

const paths: Array<{
  section: SectionId;
  index: string;
  title: Record<Locale, string>;
  text: Record<Locale, string>;
  scope: Record<Locale, string>;
}> = [
  {
    section: "quickstart", index: "01",
    title: { en: "Getting started", ru: "Быстрый старт" },
    text: { en: "First steps, controls, Spirit Energy and interface scale.", ru: "Первые шаги, управление, духовная энергия и масштаб интерфейса." },
    scope: { en: "Setup & controls", ru: "Запуск и клавиши" }
  },
  {
    section: "combat", index: "02",
    title: { en: "Combat systems", ru: "Боевые системы" },
    text: { en: "Light and heavy attacks, defence, Stability, clashes, reactions and lock-on.", ru: "Лёгкие и тяжёлые атаки, защита, стойкость, столкновения, реакции и захват цели." },
    scope: { en: "Core mechanics", ru: "Основные механики" }
  },
  {
    section: "sorcery", index: "03",
    title: { en: "Sorcery index", ru: "Указатель колдовств" },
    text: { en: "Browse abilities, slots, awakenings and WIP status.", ru: "Способности, слоты, пробуждения и метки WIP." },
    scope: { en: "29 ability kits", ru: "29 наборов" }
  },
  {
    section: "items", index: "04",
    title: { en: "Enchanted blades", ru: "Зачарованные клинки" },
    text: { en: "Weapon identities, elements, wielders, and implemented blade details.", ru: "Особенности оружия, элементы, владельцы и реализованные свойства клинков." },
    scope: { en: "Weapons", ru: "Оружие" }
  },
  {
    section: "entities", index: "05",
    title: { en: "Characters", ru: "Персонажи" },
    text: { en: "NPC factions, sorceries, health, and recommended encounter levels.", ru: "Фракции NPC, колдовства, здоровье и рекомендуемые уровни встреч." },
    scope: { en: "NPC field guide", ru: "Справочник NPC" }
  },
  {
    section: "progression", index: "06",
    title: { en: "Progression", ru: "Развитие" },
    text: { en: "Origins, factions, clans, contracts, mastery, and character growth.", ru: "Происхождения, фракции, кланы, контракты, мастерство и развитие персонажа." },
    scope: { en: "Character path", ru: "Путь персонажа" }
  },
  {
    section: "styles", index: "07",
    title: { en: "Fighting styles", ru: "Боевые стили" },
    text: { en: "Equipment requirements, strengths, weaknesses and combat values.", ru: "Требования к экипировке, сильные и слабые стороны и боевые показатели." },
    scope: { en: "5 fighting styles", ru: "5 боевых стилей" }
  },
  {
    section: "commands", index: "08",
    title: { en: "Server reference", ru: "Справочник сервера" },
    text: { en: "Commands and gamerules for players, administrators, and testing.", ru: "Команды и правила игры для игроков, администраторов и тестирования." },
    scope: { en: "Commands & rules", ru: "Команды и правила" }
  }
];

export function ExploreHub({ locale, onSelect }: { locale: Locale; onSelect: (section: SectionId) => void }) {
  return (
    <section className="explore-hub" aria-labelledby="explore-title">
      <div className="explore-heading">
        <span>{locale === "ru" ? "Категории" : "Categories"}</span>
        <h2 id="explore-title">{locale === "ru" ? "Найдите нужный раздел" : "Choose a section"}</h2>
        <p>{locale === "ru" ? "Основные справочные материалы собраны по системам мода." : "Core reference material organized around the mod’s actual systems."}</p>
      </div>
      <div className="explore-grid">
        {paths.map((path) => (
          <button key={path.section} type="button" className="explore-card" onClick={() => onSelect(path.section)}>
            <span className="explore-number">{path.index}</span>
            <span className="explore-copy">
              <strong>{path.title[locale]}</strong>
              <p>{path.text[locale]}</p>
            </span>
            <span className="explore-meta">{path.scope[locale]} <span aria-hidden="true">→</span></span>
          </button>
        ))}
      </div>
    </section>
  );
}
