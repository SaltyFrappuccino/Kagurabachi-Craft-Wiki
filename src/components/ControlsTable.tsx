import { controls } from "../data/controls";
import type { Locale } from "../types";

export function ControlsTable({ locale, query = "" }: { locale: Locale; query?: string }) {
  const filtered = controls.filter((control) => {
    const haystack = `${control.action[locale]} ${control.key} ${control.description[locale]}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  return (
    <>
      <aside className="gui-scale-note">
        <strong>{locale === "ru" ? "Рекомендуемый масштаб интерфейса: 3x" : "Recommended GUI Scale: 3x"}</strong>
        <span>{locale === "ru" ? "При этом масштабе игровые экраны и HUD помещаются без лишнего сжатия." : "The mod screens and HUD fit cleanly at this scale."}</span>
      </aside>
      <div className="controls-grid">
      {filtered.map((control) => (
        <div className="control-card" id={`control-${controls.indexOf(control)}`} key={control.action.en}>
          <div className="control-top">
            <span className="control-action">{control.action[locale]}</span>
            <kbd>{control.key}</kbd>
          </div>
          <p className="control-desc">{control.description[locale]}</p>
        </div>
      ))}
      {filtered.length === 0 && (
        <p className="empty-state">
          {locale === "ru" ? "Ничего не найдено" : "No controls found"}
        </p>
      )}
      </div>
    </>
  );
}
