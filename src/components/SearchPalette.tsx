import { Icon } from "./Icon";
import type { Locale } from "../types";
import type { SearchEntry } from "../data/search";

interface SearchPaletteProps {
  locale: Locale;
  query: string;
  results: SearchEntry[];
  onSelect: (result: SearchEntry) => void;
  onClose: () => void;
}

export function SearchPalette({ locale, query, results, onSelect, onClose }: SearchPaletteProps) {
  return (
    <div className="search-palette" role="dialog" aria-label={locale === "ru" ? "Результаты поиска" : "Search results"}>
      <button className="search-palette-backdrop" type="button" onClick={onClose} aria-label={locale === "ru" ? "Закрыть поиск" : "Close search"} />
      <div className="search-results-panel">
        <div className="search-results-heading">
          <span>{locale === "ru" ? "Глобальный поиск" : "Global search"}</span>
          <strong>{results.length ? `${results.length} ${locale === "ru" ? "результатов" : "results"}` : locale === "ru" ? "Ничего не найдено" : "No matches"}</strong>
        </div>
        {results.length > 0 ? (
          <div className="search-results-list">
            {results.map((result) => (
              <button key={`${result.section}-${result.id}`} type="button" onClick={() => onSelect(result)}>
                <span className="search-result-icon"><Icon name="ArrowUpRight" size={17} /></span>
                <span className="search-result-copy">
                  <span className="search-result-kind">{result.kind[locale]}</span>
                  <strong>{result.title}</strong>
                  <small>{result.summary}</small>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="search-no-results">
            <Icon name="SearchX" size={28} />
            <strong>{locale === "ru" ? `По запросу «${query}» ничего нет` : `Nothing found for “${query}”`}</strong>
            <span>{locale === "ru" ? "Попробуйте название техники, персонажа, клавишу или команду." : "Try a technique, character, keybind or command name."}</span>
          </div>
        )}
        <div className="search-results-footer"><kbd>Esc</kbd> {locale === "ru" ? "закрыть" : "close"}</div>
      </div>
    </div>
  );
}
