import { navigation } from "../data/navigation";
import { release } from "../data/release";
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
      <aside className={open ? "sidebar open" : "sidebar"} id="wiki-sidebar">
        <div className="brand">
          <div>
            <strong>Kagurabachi Craft</strong>
          </div>
          <span className="brand-version">v{release.version}</span>
          <button className="sidebar-close" type="button" onClick={onClose} aria-label={locale === "ru" ? "Закрыть меню" : "Close menu"}>
            <Icon name="X" size={16} />
          </button>
        </div>

        <nav className="nav-list" aria-label={locale === "ru" ? "Разделы вики" : "Wiki sections"}>
          <div className="nav-group-label">
            {locale === "ru" ? "Изучение мода" : "Explore the mod"}
          </div>
          {mainItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={item.id === active ? "page" : undefined}
              className={item.id === active ? "nav-item active" : "nav-item"}
              onClick={() => { onClose(); onSelect(item.id); }}
            >
              <span className="nav-icon"><Icon name={item.icon} size={17} /></span>
              <span>{item.label[locale]}</span>
            </a>
          ))}

          {serverItems.length > 0 && (
            <>
              <div className="nav-group-label">
                {locale === "ru" ? "Сервер и справка" : "Server & reference"}
              </div>
              {serverItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={item.id === active ? "page" : undefined}
                  className={item.id === active ? "nav-item active" : "nav-item"}
                  onClick={() => { onClose(); onSelect(item.id); }}
                >
                  <span className="nav-icon"><Icon name={item.icon} size={17} /></span>
                  <span>{item.label[locale]}</span>
                </a>
              ))}
            </>
          )}
        </nav>

        <div className="sidebar-footer">
          <strong><span className="status-dot" /> {locale === "ru" ? "Стабильный релиз" : "Stable release"}</strong>
          <span>v{release.version} / {release.loader} {release.minecraft}</span>
        </div>
      </aside>
      {open && (
        <button className="sidebar-backdrop" type="button" onClick={onClose} aria-label={locale === "ru" ? "Закрыть меню" : "Close menu"} />
      )}
    </>
  );
}
