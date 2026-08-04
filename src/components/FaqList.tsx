import { faq } from "../data/faq";
import type { Locale } from "../types";

export function FaqList({ locale, query = "" }: { locale: Locale; query?: string }) {
  const filtered = faq.filter((entry) => {
    const haystack = `${entry.question[locale]} ${entry.answer[locale]}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  return (
    <div className="faq-list">
      {filtered.map((entry) => (
        <details id={`faq-${faq.indexOf(entry)}`} key={entry.question.en}>
          <summary>{entry.question[locale]}</summary>
          <p>{entry.answer[locale]}</p>
        </details>
      ))}
    </div>
  );
}
