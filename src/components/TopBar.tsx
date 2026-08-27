import type { Locale, ThemeMode } from "../types";
import { ui } from "../data/i18n";
import { release } from "../data/release";
import { Icon } from "./Icon";

interface TopBarProps {
  locale: Locale;
  theme: ThemeMode;
  query: string;
  menuOpen: boolean;
  onLocaleChange: (locale: Locale) => void;
  onThemeChange: (theme: ThemeMode) => void;
  onQueryChange: (query: string) => void;
  onMenuClick: () => void;
}

export function TopBar({
  locale,
  theme,
  query,
  menuOpen,
  onLocaleChange,
  onThemeChange,
  onQueryChange,
  onMenuClick
}: TopBarProps) {
  return (
    <header className="topbar">
      <button
        className="icon-button menu-button"
        type="button"
        aria-label={ui.openMenu[locale]}
        aria-controls="wiki-sidebar"
        aria-expanded={menuOpen}
        onClick={onMenuClick}
      >
        <Icon name="Menu" />
      </button>
      <label className="search-box">
        <span className="visually-hidden">{locale === "ru" ? "Поиск по вики" : "Search the wiki"}</span>
        <Icon name="Search" size={17} />
        <input
          data-global-search
          role="combobox"
          aria-autocomplete="list"
          aria-controls="wiki-search-results"
          aria-expanded={Boolean(query.trim())}
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={locale === "ru" ? "Поиск по вики…" : "Search the wiki…"}
        />
        {query ? (
          <button className="search-clear" type="button" onClick={() => onQueryChange("")} aria-label={locale === "ru" ? "Очистить поиск" : "Clear search"}>
            <Icon name="X" size={15} />
          </button>
        ) : <kbd>/</kbd>}
      </label>
      <div className="release-pill"><span /> v{release.version}</div>
      <div className="toolbar-group" aria-label={ui.language[locale]}>
        <button className={locale === "en" ? "segmented active" : "segmented"} type="button" onClick={() => onLocaleChange("en")}>
          EN
        </button>
        <button className={locale === "ru" ? "segmented active" : "segmented"} type="button" onClick={() => onLocaleChange("ru")}>
          RU
        </button>
      </div>
      <button
        className="theme-toggle"
        type="button"
        aria-label={theme === "dark" ? ui.light[locale] : ui.dark[locale]}
        onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
      >
        <Icon name={theme === "dark" ? "Moon" : "Sun"} size={17} />
        <span className="theme-label">{theme === "dark" ? ui.dark[locale] : ui.light[locale]}</span>
      </button>
    </header>
  );
}
