import { navigation } from "../data/navigation";
import { assets } from "../data/assets";
import type { Locale, SectionId } from "../types";
import { Icon } from "./Icon";

interface SidebarProps {
  locale: Locale;
  active: SectionId;
  open: boolean;
  onSelect: (section: SectionId) => void;
  onClose: () => void;
}

const mainItems = navigation.filter((i) => i.group !== "server");
const serverItems = navigation.filter((i) => i.group === "server");

export function Sidebar({ locale, active, open, onSelect, onClose }: SidebarProps) {
  return (
    <>
      <aside className={open ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-mark"><img src={assets.logo} alt="" /></div>
          <div>
            <strong>Kagurabachi Craft</strong>
          </div>
          <span className="brand-version">5.4</span>
        </div>

        <nav className="nav-list">
          <div className="nav-group-label">
            {locale === "ru" ? "Изучение мода" : "Explore the mod"}
          </div>
          {mainItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === active ? "nav-item active" : "nav-item"}
              onClick={() => { onSelect(item.id); onClose(); }}
            >
              <span className="nav-icon"><Icon name={item.icon} size={17} /></span>
              <span>{item.label[locale]}</span>
            </button>
          ))}

          {serverItems.length > 0 && (
            <>
              <div className="nav-group-label">
                {locale === "ru" ? "Сервер и справка" : "Server & reference"}
              </div>
              {serverItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === active ? "nav-item active" : "nav-item"}
                  onClick={() => { onSelect(item.id); onClose(); }}
                >
                  <span className="nav-icon"><Icon name={item.icon} size={17} /></span>
                  <span>{item.label[locale]}</span>
                </button>
              ))}
            </>
          )}
        </nav>

        <div className="sidebar-footer">
          <strong><span className="status-dot" /> {locale === "ru" ? "Стабильный релиз" : "Stable release"}</strong>
          <span>v5.5.0 / NeoForge 1.21.1</span>
        </div>
      </aside>
      {open && (
        <button className="sidebar-backdrop" type="button" onClick={onClose} aria-label="Close menu" />
      )}
    </>
  );
}
