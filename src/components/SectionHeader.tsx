import type { LocalizedText, Locale } from "../types";

export function SectionHeader({ title, subtitle, locale }: { title: LocalizedText; subtitle: LocalizedText; locale: Locale }) {
  return (
    <div className="section-header">
      <h2>{title[locale]}</h2>
      <p>{subtitle[locale]}</p>
    </div>
  );
}
