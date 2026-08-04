import { screenshots } from "../data/screenshots";
import type { Locale, SectionId } from "../types";

export function ScreenshotShowcase({ section, locale }: { section: SectionId; locale: Locale }) {
  const entries = screenshots.filter((entry) => entry.section === section);
  if (entries.length === 0) return null;

  return (
    <section className={`screenshot-showcase screenshot-showcase-${section}`} aria-label={locale === "ru" ? "Скриншоты" : "Screenshots"}>
      {entries.map((entry, index) => (
        <figure className={`screenshot-card screenshot-${entry.shape ?? "standard"}`} key={entry.src}>
          <div className="screenshot-frame">
            <img
              src={entry.src}
              alt={entry.title[locale]}
              loading={section === "overview" && index === 0 ? "eager" : "lazy"}
            />
          </div>
          <figcaption>
            <strong>{entry.title[locale]}</strong>
            <span>{entry.caption[locale]}</span>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
