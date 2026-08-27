import { items } from "../data/items";
import type { ItemEntry, Locale } from "../types";
import { ItemModelPreview } from "./ItemModelPreview";

const ELEMENT_COLORS: Record<string, string> = {
  mirror: "#7b68ee",
  ice: "#48aee0",
  fire: "#c84820",
  illusion: "#9060c8",
  wither: "#58a040",
  feather: "#c87820",
};

function ItemCard({ item, locale }: { item: ItemEntry; locale: Locale }) {
  const color = item.element ? ELEMENT_COLORS[item.element] ?? "#888" : "#888";
  const name = item.name[locale];

  return (
    <article className="item-card" id={`item-${item.id}`} style={{ "--element-color": color } as React.CSSProperties}>
      <div className="item-visual">
        <ItemModelPreview src={item.asset} alt="" fallback={name.slice(0, 2).toUpperCase()} />
      </div>
      <div className="item-body">
        <div className="item-header">
          <div>
            <div className="entry-name-row">
              <h3>{name}</h3>
              {item.status && <span className="wip-badge">{item.status[locale]}</span>}
            </div>
            <span className="item-type-badge">{item.type[locale]}</span>
          </div>
          {item.elementLabel && (
            <span className="item-element-badge" style={{ color }}>
              {item.elementLabel[locale]}
            </span>
          )}
        </div>
        <p className="item-summary">{item.summary[locale]}</p>
        {item.details.length > 0 && (
          <ul className="item-details">
            {item.details.map((d, i) => (
              <li key={i}>{d[locale]}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function ItemsPanel({ locale, query = "" }: { locale: Locale; query?: string }) {
  const q = query.toLowerCase();

  const filtered = items.filter((item) => {
    if (!q) return true;
    return (
      `${item.name.en} ${item.name.ru}`.toLowerCase().includes(q) ||
      item.summary[locale].toLowerCase().includes(q) ||
      (item.elementLabel?.[locale] ?? "").toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    return (
      <p className="empty-state">
        {locale === "ru" ? "Ничего не найдено" : "No blades found"}
      </p>
    );
  }

  return (
    <div className="items-grid">
      {filtered.map((item) => (
        <ItemCard key={item.id} item={item} locale={locale} />
      ))}
    </div>
  );
}
