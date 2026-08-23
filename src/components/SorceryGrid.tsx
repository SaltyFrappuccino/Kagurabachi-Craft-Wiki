import { useState } from "react";
import { sorceries } from "../data/sorceries";
import type { Locale, SorceryEntry } from "../types";
import { ItemModelPreview } from "./ItemModelPreview";

const ELEMENT_COLORS: Record<string, string> = {
  mirror: "#7b68ee",
  ice: "#48aee0",
  fire: "#c84820",
  illusion: "#9060c8",
  wither: "#58a040",
  feather: "#c87820",
  adapt: "#48a880",
  spike: "#a08050",
  coin: "#c8a030",
  doll: "#b05080",
  creature: "#807050",
  spear: "#d0a040",
  water: "#3088c8",
  void: "#6048a8",
  magnet: "#6888b0",
  chain: "#c07820",
  light: "#d8c840",
  lightning: "#c8a010",
  blade: "#909090",
  nature: "#48a840",
  teleport: "#30a898",
  smoke: "#708090",
  storage: "#9a8042",
  wave: "#4070a0",
  warrior: "#b83020",
  yellowchain: "#d4a010",
};

// Slot → default input binding, shown in the legend.
const SLOT_KEYS: { slot: string; key: string; ru: string }[] = [
  { slot: "Primary",      key: "R + LMB",   ru: "R + ЛКМ" },
  { slot: "Secondary",    key: "R + RMB",   ru: "R + ПКМ" },
  { slot: "Utility",      key: "R + Shift", ru: "R + Shift" },
  { slot: "Supportive 1", key: "Z",         ru: "Z" },
  { slot: "Supportive 2", key: "X",         ru: "X" },
  { slot: "Special",      key: "G",         ru: "G" },
  { slot: "Awakening",    key: "V (100%)",  ru: "V (100%)" },
];

const SLOT_RU: Record<string, string> = {
  "Primary": "Primary",
  "Secondary": "Secondary",
  "Utility": "Utility",
  "Supportive 1": "Supportive 1",
  "Supportive 2": "Supportive 2",
  "Special": "Special",
  "Passive": "Passive",
  "Awakening": "Awakening",
};

function SlotLegend({ locale }: { locale: Locale }) {
  return (
    <div className="slot-legend">
      <span className="slot-legend-title">
        {locale === "ru" ? "Управление слотами колдовства" : "Sorcery slot controls"}
      </span>
      <div className="slot-legend-row">
        {SLOT_KEYS.map((s) => (
          <div className="slot-legend-item" key={s.slot}>
            <span className="slot-legend-name">{s.slot}</span>
            <kbd>{locale === "ru" ? s.ru : s.key}</kbd>
          </div>
        ))}
      </div>
    </div>
  );
}

function SorceryCard({ sorcery, locale, expanded, onToggle }: {
  sorcery: SorceryEntry;
  locale: Locale;
  expanded: boolean;
  onToggle: () => void;
}) {
  const color = ELEMENT_COLORS[sorcery.element] ?? "#888";
  const [showAwakened, setShowAwakened] = useState(false);
  const hasAwakenedSet = !!sorcery.awakenedAbilities;
  const shownAbilities = showAwakened && sorcery.awakenedAbilities
    ? sorcery.awakenedAbilities
    : sorcery.abilities;
  const name = sorcery.name[locale];

  return (
    <article
      id={`sorcery-${sorcery.id}`}
      className={`sorcery-card2 ${expanded ? "expanded" : ""}`}
      style={{ "--element-color": color } as React.CSSProperties}
    >
      <div className="sc2-top" onClick={onToggle}>
        <div className="sc2-visual">
          {sorcery.asset
            ? <ItemModelPreview src={sorcery.asset} alt={name} fallback={name.slice(0, 2).toUpperCase()} className="sorcery-model-preview" />
            : <span className="sc2-placeholder">{name.slice(0, 2).toUpperCase()}</span>
          }
        </div>
        <div className="sc2-intro">
          <div className="sc2-name-row">
            <div className="entry-name-row">
              <h3>{name}</h3>
              {sorcery.status && <span className="wip-badge">{sorcery.status[locale]}</span>}
            </div>
            <div className="sc2-badges">
              <span className="sc2-tier" data-tier={sorcery.tier}>
                {sorcery.tier === "enchanted-blade"
                  ? (locale === "ru" ? "Зачарованный клинок" : "Enchanted Blade")
                  : (locale === "ru" ? "Колдовство" : "Sorcery")
                }
              </span>
              <span className="sc2-element" style={{ color }}>
                {sorcery.elementLabel[locale]}
              </span>
              {sorcery.awakening && (
                <span className="sc2-awakening" title="Awakening">
                  ✦ {sorcery.awakening[locale]}
                </span>
              )}
            </div>
          </div>
          {sorcery.character[locale] !== "-" && (
            <p className="sc2-character">{sorcery.character[locale]}</p>
          )}
          <p className="sc2-role">{sorcery.role[locale]}</p>
          <p className="sc2-summary">{sorcery.summary[locale]}</p>
        </div>
        <button className="sc2-toggle" aria-label="Toggle abilities">
          <span>{expanded ? "▲" : "▼"}</span>
        </button>
      </div>

      {expanded && (
        <div className="sc2-abilities">
          <div className="sc2-abilities-head">
            <h4 className="sc2-abilities-title">
              {locale === "ru" ? "Способности" : "Abilities"}
            </h4>
            {hasAwakenedSet && (
              <div className="awaken-switch" role="group">
                <button
                  className={!showAwakened ? "active" : ""}
                  onClick={() => setShowAwakened(false)}
                >
                  {locale === "ru" ? "Базовые" : "Base"}
                </button>
                <button
                  className={showAwakened ? "active awakened" : "awakened"}
                  onClick={() => setShowAwakened(true)}
                >
                  ✦ {sorcery.awakening ? sorcery.awakening[locale] : (locale === "ru" ? "Пробуждение" : "Awakened")}
                </button>
              </div>
            )}
          </div>
          <div className="sc2-abilities-grid">
            {shownAbilities.map((ab, i) => (
              <div className={`sc2-ability ${showAwakened ? "is-awakened" : ""}`} key={i}>
                <div className="sc2-ability-header">
                  <strong>{ab.name[locale]}</strong>
                  <kbd className="sc2-slot" data-slot={ab.slot}>
                    {locale === "ru" ? SLOT_RU[ab.slot] : ab.slot}
                  </kbd>
                </div>
                <p>{ab.desc[locale]}</p>
              </div>
            ))}
          </div>
          {sorcery.awakening && (
            <p className="sc2-awakening-note">
              {locale === "ru"
                ? <>Пробуждение <strong>{sorcery.awakening.ru}</strong>: накопите шкалу до 100% и нажмите <kbd>V</kbd>, чтобы активировать его особый эффект.{hasAwakenedSet ? " Переключатель выше показывает изменённые приёмы." : ""}</>
                : <>Awakening <strong>{sorcery.awakening.en}</strong>: charge the meter to 100% and press <kbd>V</kbd> to activate its authored effect.{hasAwakenedSet ? " Use the switch above to compare the changed abilities." : ""}</>
              }
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export function SorceryGrid({ locale, query = "" }: { locale: Locale; query?: string }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [tierFilter, setTierFilter] = useState<"all" | "enchanted-blade" | "sorcery">("all");

  const q = query.toLowerCase();
  const filtered = sorceries.filter((s) => {
    const haystack = `${s.name.en} ${s.name.ru} ${s.role[locale]} ${s.summary[locale]} ${s.character[locale]} ${s.elementLabel[locale]} ${s.abilities.map((a) => a.name[locale]).join(" ")}`.toLowerCase();
    const matchesQuery = !q || haystack.includes(q);
    const matchesTier = tierFilter === "all" || s.tier === tierFilter;
    return matchesQuery && matchesTier;
  });

  const blades = filtered.filter((s) => s.tier === "enchanted-blade");
  const others = filtered.filter((s) => s.tier === "sorcery");

  function toggle(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="sorcery-layout">
      <SlotLegend locale={locale} />

      <div className="sorcery-filters">
        {(["all", "enchanted-blade", "sorcery"] as const).map((t) => (
          <button
            key={t}
            className={`filter-pill ${tierFilter === t ? "active" : ""}`}
            onClick={() => setTierFilter(t)}
          >
            {t === "all"
              ? (locale === "ru" ? "Все" : "All")
              : t === "enchanted-blade"
                ? (locale === "ru" ? "Клинки" : "Blades")
                : (locale === "ru" ? "Колдовство" : "Sorcery")
            }
          </button>
        ))}
      </div>

      {blades.length > 0 && (
        <section className="sorcery-group">
          {tierFilter === "all" && (
            <h3 className="sorcery-group-label">
              {locale === "ru" ? "Зачарованные клинки" : "Enchanted Blades"}
            </h3>
          )}
          <div className="sorcery-cards-list">
            {blades.map((s) => (
              <SorceryCard key={s.id} sorcery={s} locale={locale} expanded={expandedId === s.id} onToggle={() => toggle(s.id)} />
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="sorcery-group">
          {tierFilter === "all" && (
            <h3 className="sorcery-group-label">
              {locale === "ru" ? "Отдельные колдовства" : "Standalone Sorceries"}
            </h3>
          )}
          <div className="sorcery-cards-list">
            {others.map((s) => (
              <SorceryCard key={s.id} sorcery={s} locale={locale} expanded={expandedId === s.id} onToggle={() => toggle(s.id)} />
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <p className="empty-state">
          {locale === "ru" ? "Ничего не найдено" : "No sorceries found"}
        </p>
      )}
    </div>
  );
}
