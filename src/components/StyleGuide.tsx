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
          ? "Это не косметика: стиль меняет урон по здоровью и стойкости, давление на блок, дальность, ширину атаки, число целей и силу защиты. Отпустите ЛКМ раньше 5 тиков для лёгкой атаки или удерживайте её не менее 5 тиков для тяжёлой."
          : "This is not cosmetic: style changes health and Stability damage, guard pressure, reach, attack width, target count and defence. Release LMB before 5 ticks for a light attack, or hold it for at least 5 ticks for a heavy attack."}</p>
      </section>

      <div className="style-grid">
        {entries.map((entry) => (
          <article className="style-card" id={`style-${entry.id}`} key={entry.id}>
            <header>
              <div>
                <span className="style-activation">{entry.activation[locale]}</span>
                <h2>{entry.title[locale]}</h2>
              </div>
            </header>
            <div className="style-reading">
              <p><strong>{locale === "ru" ? "Сильные стороны" : "Strengths"}</strong>{entry.strengths[locale]}</p>
              <p><strong>{locale === "ru" ? "Ограничения" : "Weakness"}</strong>{entry.weakness[locale]}</p>
              <p><strong>{locale === "ru" ? "Противостояния" : "Matchups"}</strong>{entry.matchup[locale]}</p>
            </div>
            <div className="style-actions">
              {entry.actions.map((action) => <span key={action.en}>{action[locale]}</span>)}
            </div>
            <dl className="style-metrics">
              <div><dt>{locale === "ru" ? "Урон HP" : "HP damage"}</dt><dd>{formatScale(entry.metrics.hpDamage)}</dd></div>
              <div><dt>{locale === "ru" ? "Стойкость" : "Stability"}</dt><dd>{formatScale(entry.metrics.stability)}</dd></div>
              <div><dt>{locale === "ru" ? "Давление" : "Guard pressure"}</dt><dd>{formatScale(entry.metrics.guardPressure)}</dd></div>
              <div><dt>{locale === "ru" ? "Блок" : "Block"}</dt><dd>{formatScale(entry.metrics.block)}</dd></div>
              <div><dt>{locale === "ru" ? "Парирование" : "Parry"}</dt><dd>+{entry.metrics.parryBonus} {locale === "ru" ? "тиков" : "ticks"}</dd></div>
              <div><dt>{locale === "ru" ? "Цели лёгкой/тяжёлой" : "Light/Heavy targets"}</dt><dd>{entry.metrics.lightTargets}/{entry.metrics.heavyTargets}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      {entries.length === 0 && <p className="empty-state">{locale === "ru" ? "Стили не найдены" : "No styles found"}</p>}
    </div>
  );
}
