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
            <th scope="col">{locale === "en" ? "Command" : "Команда"}</th>
            <th scope="col">{locale === "en" ? "Access" : "Доступ"}</th>
            <th scope="col">{locale === "en" ? "Description" : "Описание"}</th>
            <th scope="col"><span className="visually-hidden">{locale === "en" ? "Actions" : "Действия"}</span></th>
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
            <th scope="col">{locale === "en" ? "Gamerule" : "Правило"}</th>
            <th scope="col">{locale === "en" ? "Default" : "По умолчанию"}</th>
            <th scope="col">{locale === "en" ? "Category" : "Категория"}</th>
            <th scope="col">{locale === "en" ? "Description" : "Описание"}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((rule) => (
            <tr id={`gamerule-${gamerules.indexOf(rule)}`} key={rule.key}>
              <td><code>{rule.key}</code></td>
              <td>{rule.defaultValue}</td>
              <td>{locale === "ru" ? (rule.category === "PLAYER" ? "Игрок" : "Мобы") : rule.category}</td>
              <td>{rule.description[locale]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
