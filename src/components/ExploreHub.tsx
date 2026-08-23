import { Icon } from "./Icon";
import type { Locale, SectionId } from "../types";

const paths: Array<{
  section: SectionId;
  icon: string;
  number: string;
  title: Record<Locale, string>;
  text: Record<Locale, string>;
  meta: Record<Locale, string>;
}> = [
  {
    section: "quickstart", icon: "Rocket", number: "01",
    title: { en: "Start playing", ru: "Начать играть" },
    text: { en: "Installation context, first controls and the shortest route into a real fight.", ru: "Первые действия, основные клавиши и кратчайший путь к нормальному бою." },
    meta: { en: "5 minute read", ru: "5 минут" }
  },
  {
    section: "combat", icon: "Swords", number: "02",
      title: { en: "Combat", ru: "Бой" },
    text: { en: "Light and heavy attacks, defence, Stability, clashes, reactions and lock-on.", ru: "Лёгкие и тяжёлые атаки, защита, стабильность, столкновения и захват цели." },
    meta: { en: "Core systems", ru: "Основные системы" }
  },
  {
    section: "sorcery", icon: "Sparkles", number: "03",
    title: { en: "Choose a sorcery", ru: "Выбрать колдовство" },
    text: { en: "Browse abilities, slots, awakenings and development status.", ru: "Способности, слоты, пробуждения и статус разработки." },
    meta: { en: "28 kits", ru: "28 наборов" }
  },
  {
    section: "progression", icon: "Route", number: "04",
    title: { en: "Plan progression", ru: "Спланировать развитие" },
    text: { en: "Origins, factions, clans, contracts, mastery and long-term character goals.", ru: "Происхождения, фракции, кланы, контракты, мастерство и цели персонажа." },
    meta: { en: "Character path", ru: "Путь персонажа" }
  }
];

export function ExploreHub({ locale, onSelect }: { locale: Locale; onSelect: (section: SectionId) => void }) {
  return (
    <section className="explore-hub" aria-labelledby="explore-title">
      <div className="explore-heading">
        <span>{locale === "ru" ? "Выберите маршрут" : "Choose your route"}</span>
        <h2 id="explore-title">{locale === "ru" ? "Не читайте всё подряд" : "Don’t read everything in order"}</h2>
        <p>{locale === "ru" ? "Откройте раздел под вашу текущую задачу - от первого запуска до глубокого разбора механик." : "Jump straight to the information you need, from the first launch to deep mechanical reference."}</p>
      </div>
      <div className="explore-grid">
        {paths.map((path) => (
          <button key={path.section} type="button" className="explore-card" onClick={() => onSelect(path.section)}>
            <span className="explore-number">{path.number}</span>
            <span className="explore-icon"><Icon name={path.icon} size={22} /></span>
            <strong>{path.title[locale]}</strong>
            <p>{path.text[locale]}</p>
            <span className="explore-meta">{path.meta[locale]} <Icon name="ArrowRight" size={15} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}
