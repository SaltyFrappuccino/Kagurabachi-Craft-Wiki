import type { LocalizedText, Locale } from "../types";

export function SectionHeader({ title, subtitle, locale }: { title: LocalizedText; subtitle: LocalizedText; locale: Locale }) {
  return (
    <header className="section-header">
      <span className="section-kicker">Kagurabachi Craft / Wiki</span>
      <h1>{title[locale]}</h1>
      <p>{subtitle[locale]}</p>
    </header>
  );
}
