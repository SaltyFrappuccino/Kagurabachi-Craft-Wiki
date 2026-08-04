import { assets } from "../data/assets";
import type { Locale, SectionId } from "../types";
import { ItemModelPreview } from "./ItemModelPreview";
import { Icon } from "./Icon";

export function HeroPanel({ locale, onSelect }: { locale: Locale; onSelect: (section: SectionId) => void }) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span /> {locale === "en" ? "Kagurabachi Craft 5.0.0" : "Kagurabachi Craft 5.0.0"}
        </div>
        <h1>
          {locale === "en"
            ? <>Combat, sorcery<br /><em>and progression.</em></>
            : <>Бой, колдовство<br /><em>и развитие.</em></>
          }
        </h1>
        <p>
          {locale === "en"
            ? "Controls, combat rules, sorceries, items and progression in one place."
            : "Управление, правила боя, колдовства, предметы и развитие в одном месте."}
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => onSelect("quickstart")}>
            {locale === "en" ? "Start playing" : "Начать играть"} <Icon name="ArrowRight" size={16} />
          </button>
          <button type="button" className="secondary-link" onClick={() => onSelect("sorcery")}>
            {locale === "en" ? "Browse 28 sorceries" : "Все 28 колдовств"}
          </button>
        </div>
        <dl className="hero-stats">
          <div><dt>28</dt><dd>{locale === "ru" ? "колдовств" : "sorceries"}</dd></div>
          <div><dt>5</dt><dd>{locale === "ru" ? "боевых стилей" : "combat styles"}</dd></div>
          <div><dt>4</dt><dd>{locale === "ru" ? "сигнатуры" : "signatures"}</dd></div>
        </dl>
      </div>
      <div className="hero-showcase" aria-label={locale === "ru" ? "Зачарованные клинки" : "Enchanted blades"}>
        <div className="hero-showcase-label">
          <span>{locale === "ru" ? "Зачарованные клинки" : "Enchanted blades"}</span>
          <small>魔剣</small>
        </div>
        <div className="hero-blades">
        {[
          { src: assets.enten, name: { en: "Enten", ru: "Энтен" } },
          { src: assets.cloudGouger, name: { en: "Kuregumo", ru: "Курегумо" } },
          { src: assets.tobimune, name: { en: "Tobimune", ru: "Тобимунэ" } },
        ].map((b) => (
          <div className="hero-blade-card" key={b.name.en} title={b.name[locale]}>
            <ItemModelPreview src={b.src} alt={b.name[locale]} className="hero-model-preview" />
            <span>{b.name[locale]}</span>
          </div>
        ))}
        </div>
        <button className="hero-showcase-link" type="button" onClick={() => onSelect("items")}>
          {locale === "ru" ? "Изучить клинки" : "Explore the blades"} <Icon name="ArrowUpRight" size={16} />
        </button>
      </div>
    </section>
  );
}
