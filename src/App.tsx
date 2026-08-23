import { useEffect, useMemo, useState } from "react";
import { CommandsTable, GamerulesTable } from "./components/AdminTables";
import { ControlsTable } from "./components/ControlsTable";
import { EntityBestiary } from "./components/EntityBestiary";
import { ExploreHub } from "./components/ExploreHub";
import { FaqList } from "./components/FaqList";
import { HeroPanel } from "./components/HeroPanel";
import { ItemsPanel } from "./components/ItemsPanel";
import { NewPlayerJourney } from "./components/NewPlayerJourney";
import { ProgressionPanel } from "./components/ProgressionPanel";
import { SearchPalette } from "./components/SearchPalette";
import { SectionHeader } from "./components/SectionHeader";
import { ScreenshotShowcase } from "./components/ScreenshotShowcase";
import { Sidebar } from "./components/Sidebar";
import { SorceryGrid } from "./components/SorceryGrid";
import { SignatureGuide } from "./components/SignatureGuide";
import { StyleGuide } from "./components/StyleGuide";
import { TopBar } from "./components/TopBar";
import { WikiArticles } from "./components/WikiArticles";
import { createSearchIndex, searchEntries } from "./data/search";
import type { SearchEntry } from "./data/search";
import { wikiArticles } from "./data/wiki";
import { usePersistentState } from "./hooks/usePersistentState";
import type { Locale, SectionId, ThemeMode } from "./types";

const sectionIds: SectionId[] = [
  "overview", "quickstart", "combat", "styles", "signatures", "items", "sorcery",
  "progression", "entities", "movement", "commands", "gamerules", "faq"
];

const sectionMeta: Record<SectionId, { title: Record<Locale, string>; subtitle: Record<Locale, string> }> = {
  overview: {
    title: { en: "Overview", ru: "Обзор" },
    subtitle: { en: "What the mod is and how to choose your path.", ru: "Что это за мод и как выбрать свой путь." }
  },
  quickstart: {
    title: { en: "Getting Started", ru: "Быстрый старт" },
    subtitle: { en: "First steps, controls, Spiritual Energy and sorcery mode.", ru: "Первые шаги, управление, Духовная Энергия и режим колдовства." }
  },
  combat: {
    title: { en: "Combat", ru: "Бой" },
    subtitle: { en: "Attacks, defence, Stability, backstabs, lock-on and combat resources.", ru: "Атаки, защита, стабильность, удары в спину, захват цели и боевые ресурсы." }
  },
  styles: {
    title: { en: "Fighting Styles", ru: "Боевые стили" },
    subtitle: { en: "How equipment changes damage, pressure, defence, reach and target coverage.", ru: "Как экипировка меняет урон, давление, защиту, дальность и число целей." }
  },
  signatures: {
    title: { en: "Signature Techniques", ru: "Сигнатурные техники" },
    subtitle: { en: "Tab controls, Style-point economy, requirements and every implemented technique.", ru: "Управление через Tab, очки стиля, требования и все реализованные техники." }
  },
  items: {
    title: { en: "Enchanted Blades", ru: "Зачарованные клинки" },
    subtitle: { en: "The canon Enchanted Blades (魔剣) forged by Kunishige Rokuhira.", ru: "Канонические зачарованные клинки (魔剣), выкованные Кунисигэ Рокухира." }
  },
  sorcery: {
    title: { en: "Sorcery", ru: "Колдовство" },
    subtitle: { en: "Enchanted Blade kits and standalone sorceries.", ru: "Зачарованные клинки и отдельные колдовства." }
  },
  progression: {
    title: { en: "Character Progression", ru: "Развитие персонажа" },
    subtitle: { en: "Levels, reputation, mastery ranks and allegiance.", ru: "Уровни, репутация, мастерство и принадлежность." }
  },
  entities: {
    title: { en: "Characters & Enemies", ru: "Персонажи и противники" },
      subtitle: { en: "Factions, sorceries and encounter levels.", ru: "Фракции, колдовства и уровни встреч." }
  },
  movement: {
    title: { en: "Movement", ru: "Движение" },
    subtitle: { en: "Dodge, jump, wall run, water walking and traversal.", ru: "Уклонение, прыжок, бег по стенам, хождение по воде и перемещение." }
  },
  commands: {
    title: { en: "Commands", ru: "Команды" },
    subtitle: { en: "Player and admin commands for progression, debug and settings.", ru: "Команды для прогресса, отладки и настроек - для игроков и администраторов." }
  },
  gamerules: {
    title: { en: "Server Configuration", ru: "Настройка сервера" },
    subtitle: { en: "All gamerules for tuning combat, damage, awakenings and mob difficulty.", ru: "Все правила игры для настройки боя, урона, пробуждений и сложности мобов." }
  },
  faq: {
    title: { en: "FAQ", ru: "FAQ" },
    subtitle: { en: "Common questions from players.", ru: "Частые вопросы от игроков." }
  }
};

function getInitialSection(): SectionId {
  const hash = window.location.hash.replace("#", "");
  return sectionIds.includes(hash as SectionId) ? (hash as SectionId) : "overview";
}

function getPreferredLocale(): Locale {
  return navigator.languages.some((language) => language.toLowerCase().startsWith("ru")) ? "ru" : "en";
}

function getPreferredTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function App() {
  const [locale, setLocale] = usePersistentState<Locale>("kbc-docs-locale", getPreferredLocale);
  const [theme, setTheme] = usePersistentState<ThemeMode>("kbc-docs-theme", getPreferredTheme);
  const [activeSection, setActiveSection] = useState<SectionId>(getInitialSection);
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.style.colorScheme = theme;
  }, [locale, theme]);

  useEffect(() => {
    function syncHash() {
      setActiveSection(getInitialSection());
    }
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if (event.key === "/" && !typing) {
        event.preventDefault();
        document.querySelector<HTMLInputElement>("[data-global-search]")?.focus();
      }
      if (event.key === "Escape" && query) setQuery("");
    }
    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [query]);

  const sectionArticles = useMemo(() => wikiArticles.filter((article) => article.section === activeSection), [activeSection]);
  const searchIndex = useMemo(() => createSearchIndex(locale), [locale]);
  const searchResults = useMemo(() => searchEntries(searchIndex, query), [query, searchIndex]);

  function selectSection(section: SectionId) {
    setActiveSection(section);
    setQuery("");
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function selectSearchResult(result: SearchEntry) {
    setActiveSection(result.section);
    setQuery("");
    window.location.hash = result.section;
    window.scrollTo({ top: 0, behavior: "auto" });
    window.setTimeout(() => {
      const target = document.getElementById(result.id);
      if (target instanceof HTMLDetailsElement) target.open = true;
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 60);
  }

  const wikiSections: SectionId[] = ["overview", "quickstart", "combat", "movement"];

  return (
    <div className="app" data-theme={theme}>
      <Sidebar locale={locale} active={activeSection} open={sidebarOpen} onSelect={selectSection} onClose={() => setSidebarOpen(false)} />
      <div className="page-shell">
        <TopBar
          locale={locale}
          theme={theme}
          query={query}
          onLocaleChange={setLocale}
          onThemeChange={setTheme}
          onQueryChange={setQuery}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main>
          {activeSection === "overview" ? (
            <>
              <HeroPanel locale={locale} onSelect={selectSection} />
              <ExploreHub locale={locale} onSelect={selectSection} />
            </>
          ) : (
            <SectionHeader title={sectionMeta[activeSection].title} subtitle={sectionMeta[activeSection].subtitle} locale={locale} />
          )}

          <ScreenshotShowcase section={activeSection} locale={locale} />

          {activeSection === "overview" && (
            <section className="overview-reference">
              <div className="overview-reference-heading">
                <span>{locale === "ru" ? "Что меняет мод" : "What the mod changes"}</span>
                <h2>{locale === "ru" ? "Сначала пойми систему" : "Understand the system first"}</h2>
              </div>
              <WikiArticles articles={sectionArticles} locale={locale} />
            </section>
          )}

          {wikiSections.includes(activeSection) && activeSection !== "overview" && (
            <WikiArticles articles={sectionArticles} locale={locale} />
          )}

          {activeSection === "overview" && <NewPlayerJourney locale={locale} />}

          {activeSection === "quickstart" && (
            <ControlsTable locale={locale} />
          )}

          {activeSection === "items" && (
            <ItemsPanel locale={locale} />
          )}

          {activeSection === "sorcery" && (
            <SorceryGrid locale={locale} />
          )}

          {activeSection === "styles" && (
            <StyleGuide locale={locale} query="" />
          )}

          {activeSection === "signatures" && (
            <SignatureGuide locale={locale} query="" />
          )}

          {activeSection === "progression" && (
            <ProgressionPanel locale={locale} query="" />
          )}

          {activeSection === "entities" && (
            <EntityBestiary locale={locale} query="" />
          )}

          {activeSection === "commands" && (
            <CommandsTable locale={locale} />
          )}

          {activeSection === "gamerules" && (
            <GamerulesTable locale={locale} />
          )}

          {activeSection === "faq" && (
            <FaqList locale={locale} />
          )}

          <footer className="site-footer">
            Kagurabachi Craft &nbsp;·&nbsp; v5.4.0 Stable &nbsp;·&nbsp; NeoForge 1.21.1 &nbsp;·&nbsp;
            {locale === "en"
              ? " Based on the Kagurabachi manga by Takeru Hokazono"
              : " По манге Кагурабати Такеру Хоказоно"
            }
          </footer>
        </main>
      </div>
      {query.trim() && <SearchPalette locale={locale} query={query} results={searchResults} onSelect={selectSearchResult} onClose={() => setQuery("")} />}
    </div>
  );
}
