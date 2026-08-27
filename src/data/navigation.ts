import type { NavItem } from "../types";

export const navigation: NavItem[] = [
  { id: "overview",  icon: "Home",       label: { en: "Overview",         ru: "Главная"       }, group: "main" },
  { id: "quickstart",icon: "Rocket",     label: { en: "Getting Started",  ru: "Быстрый старт" }, group: "main" },
  { id: "combat",    icon: "Swords",     label: { en: "Combat",           ru: "Бой"           }, group: "main" },
  { id: "styles",    icon: "Gauge",      label: { en: "Fighting Styles",  ru: "Боевые стили"  }, group: "main" },
  { id: "signatures",icon: "Crosshair",  label: { en: "Signature Techniques", ru: "Фирменные приёмы" }, group: "main" },
  { id: "sorcery",   icon: "Sparkles",  label: { en: "Sorcery",          ru: "Колдовство"    }, group: "main" },
  { id: "progression",icon: "Route",     label: { en: "Progression",      ru: "Развитие"      }, group: "main" },
  { id: "items",     icon: "BookMarked", label: { en: "Enchanted Blades", ru: "Зачарованные клинки" }, group: "main" },
  { id: "entities",  icon: "Users",      label: { en: "Characters",       ru: "Персонажи"     }, group: "main" },
  { id: "movement",  icon: "Footprints", label: { en: "Movement",         ru: "Движение"      }, group: "main" },
  { id: "commands",  icon: "Terminal",   label: { en: "Commands",         ru: "Команды"       }, group: "server" },
  { id: "gamerules", icon: "ServerCog",  label: { en: "Server Config",    ru: "Настройки сервера" }, group: "server" },
  { id: "faq",       icon: "CircleHelp", label: { en: "FAQ",              ru: "Вопросы и ответы" }, group: "main" },
];
