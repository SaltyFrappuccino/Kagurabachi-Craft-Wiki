import { clans, contracts, factions, origins, progressionLoops, progressionSystems } from "../data/progression";
import type { Locale, ProgressionEntry } from "../types";

function EntryGroup({ title, entries, locale, query }: { title: string; entries: ProgressionEntry[]; locale: Locale; query: string }) {
  const normalized = query.trim().toLowerCase();
  const filtered = entries.filter((entry) =>
    `${entry.title[locale]} ${entry.summary[locale]} ${entry.details.map((detail) => detail[locale]).join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  if (filtered.length === 0) return null;

  return (
    <section className="progression-group">
      <h2>{title}</h2>
      <div className="progression-grid">
        {filtered.map((entry) => (
          <article className="progression-card" id={`progression-${entry.id}`} key={entry.id}>
            <div className="entry-name-row">
              <h3>{entry.title[locale]}</h3>
              {entry.status && <span className="wip-badge">{entry.status[locale]}</span>}
            </div>
            <p>{entry.summary[locale]}</p>
            <ul>
              {entry.details.map((detail) => <li key={detail.en}>{detail[locale]}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProgressionPanel({ locale, query }: { locale: Locale; query: string }) {
  return (
    <div className="progression-panel">
      <div className="progression-flow">
        <strong>{locale === "ru" ? "Путь персонажа" : "Character path"}</strong>
        <span>{locale === "ru"
          ? "Выбрать старт → сражаться и получать опыт → вступить во фракцию → выполнять контракты → развивать мастерство и клан"
          : "Choose a start → fight and earn XP → join a faction → complete contracts → develop mastery and clan"}</span>
      </div>
      <EntryGroup title={locale === "ru" ? "Что означает каждый показатель" : "What every value means"} entries={progressionSystems} locale={locale} query={query} />
      <EntryGroup title={locale === "ru" ? "Как развивается персонаж" : "How your character progresses"} entries={progressionLoops} locale={locale} query={query} />
      <EntryGroup title={locale === "ru" ? "Происхождения" : "Origins"} entries={origins} locale={locale} query={query} />
      <EntryGroup title={locale === "ru" ? "Фракции" : "Factions"} entries={factions} locale={locale} query={query} />
      <EntryGroup title={locale === "ru" ? "Контракты" : "Contracts"} entries={contracts} locale={locale} query={query} />
      <EntryGroup title={locale === "ru" ? "Кланы" : "Clans"} entries={clans} locale={locale} query={query} />
    </div>
  );
}
