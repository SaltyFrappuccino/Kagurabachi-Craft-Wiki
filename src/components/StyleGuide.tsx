import { styleEntries } from "../data/styles";
import type { Locale } from "../types";

function formatScale(value: number) {
  return `×${value.toFixed(2)}`;
}

export function StyleGuide({ locale, query }: { locale: Locale; query: string }) {
  const normalized = query.trim().toLowerCase();
  const entries = styleEntries.filter((entry) =>
    `${entry.title[locale]} ${entry.activation[locale]} ${entry.role[locale]} ${entry.strengths[locale]} ${entry.weakness[locale]}`
      .toLowerCase()
      .includes(normalized)
  );

  return (
    <div className="guide-stack">
      <section className="system-callout">
        <strong>{locale === "ru" ? "Стиль выбирается экипировкой" : "Equipment selects your style"}</strong>
        <p>{locale === "ru"
          ? "Это не косметика: стиль меняет урон по здоровью и стабильности, давление на блок, дальность, ширину дуги, число целей и защитный профиль. LMB до 5 тиков запускает лёгкую атаку, удержание LMB от 5 тиков повышает ввод до тяжёлой атаки."
          : "This is not cosmetic: style changes HP and Stability damage, guard pressure, reach, attack arc, target count and defence. Holding LMB for fewer than 5 ticks produces a light attack; holding for 5 or more promotes the same input into a heavy attack."}</p>
      </section>

      <div className="style-grid">
        {entries.map((entry) => (
          <article className="style-card" id={`style-${entry.id}`} key={entry.id}>
            <header>
              <div>
                <span className="style-activation">{entry.activation[locale]}</span>
                <h2>{entry.title[locale]}</h2>
              </div>
              <span className="style-role">{entry.role[locale]}</span>
            </header>
            <div className="style-reading">
              <p><strong>{locale === "ru" ? "Сильные стороны" : "Strengths"}</strong>{entry.strengths[locale]}</p>
              <p><strong>{locale === "ru" ? "Ограничения" : "Tradeoff"}</strong>{entry.weakness[locale]}</p>
              <p><strong>{locale === "ru" ? "Матчап" : "Matchup"}</strong>{entry.matchup[locale]}</p>
            </div>
            <div className="style-actions">
              {entry.actions.map((action) => <span key={action.en}>{action[locale]}</span>)}
            </div>
            <dl className="style-metrics">
              <div><dt>{locale === "ru" ? "Урон HP" : "HP damage"}</dt><dd>{formatScale(entry.metrics.hpDamage)}</dd></div>
              <div><dt>{locale === "ru" ? "Стабильность" : "Stability"}</dt><dd>{formatScale(entry.metrics.stability)}</dd></div>
              <div><dt>{locale === "ru" ? "Давление" : "Guard pressure"}</dt><dd>{formatScale(entry.metrics.guardPressure)}</dd></div>
              <div><dt>{locale === "ru" ? "Блок" : "Block"}</dt><dd>{formatScale(entry.metrics.block)}</dd></div>
              <div><dt>{locale === "ru" ? "Парирование" : "Parry"}</dt><dd>+{entry.metrics.parryBonus} {locale === "ru" ? "т." : "t"}</dd></div>
              <div><dt>{locale === "ru" ? "Цели L/H" : "Targets L/H"}</dt><dd>{entry.metrics.lightTargets}/{entry.metrics.heavyTargets}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      {entries.length === 0 && <p className="empty-state">{locale === "ru" ? "Стили не найдены" : "No styles found"}</p>}
    </div>
  );
}
