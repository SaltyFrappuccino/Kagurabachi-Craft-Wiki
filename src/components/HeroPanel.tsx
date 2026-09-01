import { assets } from "../data/assets";
import { release } from "../data/release";
import type { Locale, SectionId } from "../types";
import { ItemModelPreview } from "./ItemModelPreview";
import { Icon } from "./Icon";

export function HeroPanel({ locale, onSelect }: { locale: Locale; onSelect: (section: SectionId) => void }) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span /> {locale === "ru" ? "Энциклопедия мода" : "Mod encyclopedia"}
        </div>
        <h1>
          {locale === "en"
            ? <>Kagurabachi Craft <em>Wiki</em></>
            : <>Kagurabachi Craft <em>вики</em></>
          }
        </h1>
        <p>
          {locale === "en"
            ? "Reference for combat systems, sorcery kits, enchanted blades, characters, progression, and server configuration."
            : "Справочник по боевой системе, колдовству, зачарованным клинкам, персонажам, развитию и настройке сервера."}
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => onSelect("quickstart")}>
            {locale === "en" ? "Getting started" : "Быстрый старт"} <Icon name="ArrowRight" size={16} />
          </button>
          <button type="button" className="secondary-link" onClick={() => onSelect("sorcery")}>
            {locale === "en" ? "Sorcery index" : "Указатель колдовств"}
          </button>
        </div>
        <dl className="hero-release">
          <div><dt>{locale === "ru" ? "Версия" : "Release"}</dt><dd>{release.version}</dd></div>
          <div><dt>Minecraft</dt><dd>{release.minecraft}</dd></div>
          <div><dt>{locale === "ru" ? "Загрузчик" : "Loader"}</dt><dd>{release.loader}</dd></div>
        </dl>
      </div>
      <div className="hero-showcase" aria-label={locale === "ru" ? "Зачарованные клинки" : "Enchanted blades"}>
        <div className="hero-showcase-label">
          <span>{locale === "ru" ? "Указатель клинков" : "Blade index"}</span>
          <small>妖刀</small>
        </div>
        <div className="hero-blades">
        {[
          { src: assets.enten, name: { en: "Enten", ru: "Энтен" } },
          { src: assets.cloudGouger, name: { en: "Cloud Gouger", ru: "Пронзающее Облако" } },
          { src: assets.tobimune, name: { en: "Tobimune", ru: "Тобимунэ" } },
        ].map((b) => (
          <div className="hero-blade-card" key={b.name.en} title={b.name[locale]}>
            <ItemModelPreview src={b.src} alt={b.name[locale]} className="hero-model-preview" />
            <span>{b.name[locale]}</span>
          </div>
        ))}
        </div>
        <button className="hero-showcase-link" type="button" onClick={() => onSelect("items")}>
          {locale === "ru" ? "Открыть клинки" : "View enchanted blades"} <Icon name="ArrowUpRight" size={16} />
        </button>
      </div>
    </section>
  );
}
