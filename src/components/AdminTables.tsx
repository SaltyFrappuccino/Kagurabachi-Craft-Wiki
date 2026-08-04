import { commands, gamerules } from "../data/admin";
import type { Locale } from "../types";
import { CopyButton } from "./CopyButton";

export function CommandsTable({ locale, query = "" }: { locale: Locale; query?: string }) {
  const filtered = commands.filter((entry) => {
    const haystack = `${entry.command} ${entry.access[locale]} ${entry.description[locale]}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>{locale === "en" ? "Command" : "Команда"}</th>
            <th>{locale === "en" ? "Access" : "Доступ"}</th>
            <th>{locale === "en" ? "Description" : "Описание"}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((entry) => (
            <tr id={`command-${commands.indexOf(entry)}`} key={entry.command}>
              <td><code>{entry.command}</code></td>
              <td>{entry.access[locale]}</td>
              <td>{entry.description[locale]}</td>
              <td><CopyButton value={entry.command} locale={locale} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GamerulesTable({ locale, query = "" }: { locale: Locale; query?: string }) {
  const filtered = gamerules.filter((rule) => {
    const haystack = `${rule.key} ${rule.defaultValue} ${rule.category} ${rule.description[locale]}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>{locale === "en" ? "Gamerule" : "Правило"}</th>
            <th>{locale === "en" ? "Default" : "По умолчанию"}</th>
            <th>{locale === "en" ? "Category" : "Категория"}</th>
            <th>{locale === "en" ? "Description" : "Описание"}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((rule) => (
            <tr id={`gamerule-${gamerules.indexOf(rule)}`} key={rule.key}>
              <td><code>{rule.key}</code></td>
              <td>{rule.defaultValue}</td>
              <td>{rule.category}</td>
              <td>{rule.description[locale]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
