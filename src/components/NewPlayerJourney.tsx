import type { Locale } from "../types";

const steps = [
  {
    number: "01",
    title: { en: "Choose an origin", ru: "Выберите происхождение" },
    text: { en: "Your origin sets the starting faction and reputation, but does not lock you out of any fighting style or sorcery.", ru: "Происхождение задаёт стартовую фракцию и репутацию, но не закрывает доступ к боевым стилям или колдовству." },
    link: "#progression"
  },
  {
    number: "02",
    title: { en: "Choose a combat style", ru: "Выберите боевой стиль" },
    text: { en: "The held weapon selects the style automatically: Hand, Sword, Dual Katana, Sheathed Katana or Trident.", ru: "Стиль выбирается автоматически по оружию в руках: рукопашный, меч, две катаны, катана в ножнах или трезубец." },
    link: "#styles"
  },
  {
    number: "03",
    title: { en: "Add sorcery and signature techniques", ru: "Освойте колдовство и фирменные приёмы" },
    text: { en: "Sorcery spends Spirit Energy. Signature techniques draw from Style Points and are selected or activated with Tab.", ru: "Колдовство расходует духовную энергию. Фирменные приёмы тратят очки стиля; их выбирают и применяют клавишей Tab." },
    link: "#signatures"
  },
  {
    number: "04",
    title: { en: "Grow through fights and contracts", ru: "Развивайтесь через бои и контракты" },
    text: { en: "Fights give Sorcery XP and mastery progress. Contracts also raise faction rank and reputation.", ru: "За бои начисляются опыт колдовства и мастерство. Контракты дополнительно повышают ранг фракции и репутацию." },
    link: "#progression"
  }
];

export function NewPlayerJourney({ locale }: { locale: Locale }) {
  return (
    <section className="journey-panel">
      <div className="journey-heading">
        <span>{locale === "ru" ? "С чего начать" : "Start here"}</span>
        <h2>{locale === "ru" ? "Путь нового персонажа" : "Your first character path"}</h2>
        <p>{locale === "ru"
          ? "Если вы запускаете мод впервые, откройте эти разделы по порядку."
          : "New to the mod? Read these sections in order."}</p>
      </div>
      <div className="journey-steps">
        {steps.map((step) => (
          <a className="journey-step" href={step.link} key={step.number}>
            <span className="journey-number">{step.number}</span>
            <strong>{step.title[locale]}</strong>
            <p>{step.text[locale]}</p>
            <span className="journey-link">{locale === "ru" ? "Открыть раздел →" : "Open section →"}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
