import { signatureEntries } from "../data/signatures";
import type { Locale } from "../types";

export function SignatureGuide({ locale, query }: { locale: Locale; query: string }) {
  const normalized = query.trim().toLowerCase();
  const entries = signatureEntries.filter((entry) =>
    `${entry.title[locale]} ${entry.requirement[locale]} ${entry.summary[locale]} ${entry.details.map((detail) => detail[locale]).join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  return (
    <div className="guide-stack">
      <section className="signature-control-panel">
        <div>
          <kbd>Tab</kbd>
          <strong>{locale === "ru" ? "Нажать" : "Tap"}</strong>
          <span>{locale === "ru" ? "Применить выбранный приём" : "Use the selected technique"}</span>
        </div>
        <div>
          <kbd>Tab</kbd>
          <strong>{locale === "ru" ? "Удерживать от 200 мс" : "Hold for 200 ms"}</strong>
          <span>{locale === "ru" ? "Открыть список доступных приёмов" : "Choose from unlocked techniques"}</span>
        </div>
        <p>{locale === "ru"
          ? "Фирменные приёмы работают только в боевом режиме. Они расходуют очки стиля, а не духовную энергию. Очки набираются в активном бою и постепенно исчезают после окончания серии атак."
          : "Signature techniques work only in combat mode. They spend Style Points, not Spirit Energy. Active combat builds Style Points, which gradually decay after your attack sequence ends."}</p>
      </section>

      <div className="signature-grid">
        {entries.map((entry) => (
          <article className="signature-card" id={`signature-${entry.id}`} key={entry.id}>
            <header>
              <div>
                <span>{entry.requirement[locale]}</span>
                <h2>{entry.title[locale]}</h2>
              </div>
              <div className="signature-cost">
                <strong>{entry.styleCost}</strong>
                <span>{locale === "ru" ? "очков стиля" : "Style Points"}</span>
              </div>
            </header>
            <p className="signature-summary">{entry.summary[locale]}</p>
            <ul>{entry.details.map((detail) => <li key={detail.en}>{detail[locale]}</li>)}</ul>
            <footer>{locale === "ru" ? "Перезарядка" : "Cooldown"}: <strong>{entry.cooldownSeconds} {locale === "ru" ? "с" : "s"}</strong></footer>
          </article>
        ))}
      </div>
      {entries.length === 0 && <p className="empty-state">{locale === "ru" ? "Техники не найдены" : "No techniques found"}</p>}
    </div>
  );
}
