import { commands, gamerules } from "./admin";
import { controls } from "./controls";
import { entityEntries } from "./entities";
import { faq } from "./faq";
import { items } from "./items";
import { clans, contracts, factions, origins, progressionLoops, progressionSystems } from "./progression";
import { signatureEntries } from "./signatures";
import { sorceries } from "./sorceries";
import { styleEntries } from "./styles";
import { wikiArticles } from "./wiki";
import type { Locale, SectionId } from "../types";

export interface SearchEntry {
  id: string;
  section: SectionId;
  kind: Record<Locale, string>;
  title: string;
  summary: string;
  searchText: string;
}

const kinds = {
  article: { en: "Guide", ru: "Руководство" },
  sorcery: { en: "Sorcery", ru: "Колдовство" },
  item: { en: "Enchanted blade", ru: "Зачарованный клинок" },
  style: { en: "Fighting style", ru: "Боевой стиль" },
  signature: { en: "Signature", ru: "Сигнатура" },
  progression: { en: "Progression", ru: "Прогрессия" },
  entity: { en: "Character", ru: "Персонаж" },
  control: { en: "Control", ru: "Управление" },
  command: { en: "Command", ru: "Команда" },
  gamerule: { en: "Server rule", ru: "Правило сервера" },
  faq: { en: "FAQ", ru: "FAQ" }
} as const;

function entry(id: string, section: SectionId, kind: Record<Locale, string>, title: string, summary: string, extra = ""): SearchEntry {
  return { id, section, kind, title, summary, searchText: `${title} ${summary} ${extra}`.toLocaleLowerCase() };
}

export function createSearchIndex(locale: Locale): SearchEntry[] {
  const progression = [...progressionSystems, ...progressionLoops, ...origins, ...factions, ...contracts, ...clans];

  return [
    ...wikiArticles.map((item) => entry(item.id, item.section, kinds.article, item.title[locale], item.summary[locale], item.tags.join(" "))),
    ...sorceries.map((item) => entry(`sorcery-${item.id}`, "sorcery", kinds.sorcery, item.name[locale], item.summary[locale], `${item.character[locale]} ${item.elementLabel[locale]} ${item.abilities.map((ability) => `${ability.name[locale]} ${ability.desc[locale]}`).join(" ")}`)),
    ...items.map((item) => entry(`item-${item.id}`, "items", kinds.item, item.name[locale], item.summary[locale], item.details.map((detail) => detail[locale]).join(" "))),
    ...styleEntries.map((item) => entry(`style-${item.id}`, "styles", kinds.style, item.title[locale], item.role[locale], `${item.activation[locale]} ${item.actions.map((action) => action[locale]).join(" ")}`)),
    ...signatureEntries.map((item) => entry(`signature-${item.id}`, "signatures", kinds.signature, item.title[locale], item.summary[locale], `${item.requirement[locale]} ${item.details.map((detail) => detail[locale]).join(" ")}`)),
    ...progression.map((item) => entry(`progression-${item.id}`, "progression", kinds.progression, item.title[locale], item.summary[locale], item.details.map((detail) => detail[locale]).join(" "))),
    ...entityEntries.map((item) => entry(`entity-${item.id}`, "entities", kinds.entity, item.title[locale], `${item.faction[locale]} · ${item.sorcery[locale]}`, `${item.relation[locale]} ${item.tags.join(" ")}`)),
    ...controls.map((item, index) => entry(`control-${index}`, "quickstart", kinds.control, item.action[locale], item.description[locale], item.key)),
    ...commands.map((item, index) => entry(`command-${index}`, "commands", kinds.command, item.command, item.description[locale], item.access[locale])),
    ...gamerules.map((item, index) => entry(`gamerule-${index}`, "gamerules", kinds.gamerule, item.key, item.description[locale], `${item.category} ${item.defaultValue}`)),
    ...faq.map((item, index) => entry(`faq-${index}`, "faq", kinds.faq, item.question[locale], item.answer[locale]))
  ];
}

export function searchEntries(index: SearchEntry[], query: string): SearchEntry[] {
  const normalized = query.trim().toLocaleLowerCase();
  if (!normalized) return [];
  const tokens = normalized.split(/\s+/).filter(Boolean);

  return index
    .filter((item) => tokens.every((token) => item.searchText.includes(token)))
    .sort((a, b) => {
      const aTitle = a.title.toLocaleLowerCase();
      const bTitle = b.title.toLocaleLowerCase();
      const score = (title: string) => title === normalized ? 0 : title.startsWith(normalized) ? 1 : title.includes(normalized) ? 2 : 3;
      return score(aTitle) - score(bTitle) || a.title.localeCompare(b.title);
    })
    .slice(0, 14);
}
