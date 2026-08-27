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

function resultCountLabel(count: number, locale: Locale) {
  if (locale === "en") return `${count} ${count === 1 ? "result" : "results"}`;
  const lastTwo = count % 100;
  const last = count % 10;
  const word = lastTwo >= 11 && lastTwo <= 14
    ? "результатов"
    : last === 1
      ? "результат"
      : last >= 2 && last <= 4
        ? "результата"
        : "результатов";
  return `${count} ${word}`;
}

export function SearchPalette({ locale, query, results, onSelect, onClose }: SearchPaletteProps) {
  function handleResultKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "Escape") {
      onClose();
      window.setTimeout(() => document.querySelector<HTMLInputElement>("[data-global-search]")?.focus(), 0);
      return;
    }

    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-search-result]"));
    const nextIndex = event.key === "ArrowDown"
      ? Math.min(index + 1, buttons.length - 1)
      : event.key === "ArrowUp"
        ? Math.max(index - 1, 0)
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? buttons.length - 1
            : index;

    if (nextIndex !== index) {
      event.preventDefault();
      buttons[nextIndex]?.focus();
    }
  }

  return (
    <div className="search-palette">
      <button className="search-palette-backdrop" type="button" onClick={onClose} aria-label={locale === "ru" ? "Закрыть поиск" : "Close search"} />
      <div className="search-results-panel" role="region" aria-label={locale === "ru" ? "Результаты поиска" : "Search results"} aria-live="polite">
        <div className="search-results-heading">
          <span>{locale === "ru" ? "Глобальный поиск" : "Global search"}</span>
          <strong>{results.length ? resultCountLabel(results.length, locale) : locale === "ru" ? "Ничего не найдено" : "No matches"}</strong>
        </div>
        {results.length > 0 ? (
          <div className="search-results-list" id="wiki-search-results" role="listbox">
            {results.map((result, index) => (
              <button
                key={`${result.section}-${result.id}`}
                type="button"
                role="option"
                aria-selected="false"
                data-search-result
                onKeyDown={(event) => handleResultKeyDown(event, index)}
                onClick={() => onSelect(result)}
              >
                <span className="search-result-icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
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
            <strong>{locale === "ru" ? `По запросу «${query}» ничего не найдено` : `Nothing found for “${query}”`}</strong>
            <span>{locale === "ru" ? "Попробуйте название техники, персонажа, клавишу или команду." : "Try a technique, character, keybind or command name."}</span>
          </div>
        )}
        <div className="search-results-footer"><kbd>Esc</kbd> {locale === "ru" ? "закрыть" : "close"}</div>
      </div>
    </div>
  );
}
