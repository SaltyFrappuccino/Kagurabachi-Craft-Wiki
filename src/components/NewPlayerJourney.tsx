import type { Locale } from "../types";

const steps = [
  {
    number: "01",
    title: { en: "Choose an origin", ru: "Выберите происхождение" },
    text: { en: "This picks your starting faction and reputation. You can still use any combat style or sorcery you obtain.", ru: "Происхождение задаёт стартовую фракцию и репутацию. Боевой стиль и доступное колдовство оно не ограничивает." },
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
    title: { en: "Add sorcery and signatures", ru: "Добавьте колдовство и сигнатуры" },
    text: { en: "Sorcery uses Spiritual Energy. Signatures use Style points and are selected or activated with Tab.", ru: "Колдовство тратит Духовную энергию. Сигнатуры используют очки стиля и выбираются либо активируются через Tab." },
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
        ? "Если вы запускаете мод впервые, проходите эти разделы по порядку."
          : "If this is your first time with the mod, read these sections in order."}</p>
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
