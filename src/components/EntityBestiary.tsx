import { entityEntries } from "../data/entities";
import type { Locale } from "../types";
import { MinecraftSkinPreview } from "./MinecraftSkinPreview";

export function EntityBestiary({ locale, query }: { locale: Locale; query: string }) {
  const normalized = query.trim().toLowerCase();
  const entries = normalized
    ? entityEntries.filter((e) =>
        `${e.title[locale]} ${e.relation[locale]} ${e.faction[locale]} ${e.sorcery[locale]} ${e.tags.join(" ")}`.toLowerCase().includes(normalized)
      )
    : entityEntries;

  return (
    <div className="entity-guide">
      <section className="system-callout entity-level-note">
        <strong>{locale === "ru" ? "Как читать уровень колдовства NPC" : "How to read NPC Sorcery Level"}</strong>
        <p>{locale === "ru"
          ? "Если уровень игрока ниже рекомендации, урон по NPC дополнительно снижается на 10% за каждый недостающий уровень (минимум до 10% от уже уменьшенного урона). Этот же рейтинг задаёт максимальную стабильность NPC."
          : "If the player is below the recommendation, damage to the NPC is reduced by another 10% per missing level (down to 10% of the already reduced damage). The same rating determines the NPC's maximum Stability."}</p>
      </section>
      <div className="entity-grid">
        {entries.map((entry) => (
        <article className="entity-card" id={`entity-${entry.id}`} key={entry.id}>
          <div className="entity-media">
            {entry.asset
              ? <MinecraftSkinPreview src={entry.asset} label={entry.title[locale]} />
              : <span>{entry.title[locale].slice(0, 2).toUpperCase()}</span>
            }
          </div>
          <div className="entity-body">
            <div className="entry-name-row">
              <h3>{entry.title[locale]}</h3>
              {entry.status && <span className="wip-badge">{entry.status[locale]}</span>}
            </div>
            <strong className="entity-kind">{entry.relation[locale]}</strong>
            <dl className="entity-facts">
              <div><dt>{locale === "ru" ? "Фракция" : "Faction"}</dt><dd>{entry.faction[locale]}</dd></div>
              <div><dt>{locale === "ru" ? "Колдовство" : "Sorcery"}</dt><dd>{entry.sorcery[locale]}</dd></div>
              <div><dt>{locale === "ru" ? "Уровень колдовства (рек.)" : "Sorcery Level (recommended)"}</dt><dd>{entry.recommendedLevel}</dd></div>
              <div><dt>HP</dt><dd>{entry.health}</dd></div>
            </dl>
          </div>
          </article>
        ))}
        {entries.length === 0 && (
          <p className="empty-state">
            {locale === "ru" ? "Ничего не найдено" : "No characters found"}
          </p>
        )}
      </div>
    </div>
  );
}
