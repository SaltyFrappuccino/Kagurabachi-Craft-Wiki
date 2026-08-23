import type { EntityEntry } from "../types";
import azamiKamunabiArt from "../assets/renders/azami_kamunabi.png";
import hirotoSogaArt from "../assets/renders/hiroto_soga.png";
import hiruhikoArt from "../assets/renders/hiruhiko_kumeyuri.png";
import hiyukiArt from "../assets/renders/hiyukitexnew1.png";
import samuraArt from "../assets/renders/samura_imposter.png";
import shibaArt from "../assets/renders/shiba.png";
import sojoArt from "../assets/renders/sojo.png";

export const entityEntries: EntityEntry[] = [
  {
    id: "sojo",
    title: { en: "Genichi Sojo", ru: "Гэнъити Содзё" },
    relation: { en: "Boss · Hishaku affiliate", ru: "Босс · союзник Хисяку" },
    faction: { en: "Hishaku", ru: "Хисяку" },
    sorcery: { en: "Kuregumo", ru: "Курегумо" },
    recommendedLevel: 12,
    health: 75,
    tags: ["sojo", "hishaku", "hishaku affiliate", "kuregumo", "курегумо", "weather"],
    asset: sojoArt
  },
  {
    id: "hiruhiko_kumeyuri",
    title: { en: "Hiruhiko - Kumeyuri", ru: "Хирухико - Кумеюри" },
    relation: { en: "Boss · Hishaku combatant", ru: "Босс · боец Хисяку" },
    faction: { en: "Hishaku", ru: "Хисяку" },
    sorcery: { en: "Kumeyuri", ru: "Кумэюри" },
    recommendedLevel: 13,
    health: 100,
    tags: ["hiruhiko_kumeyuri", "hiruhiko", "хирухико", "кумеюри", "hishaku", "kumeyuri", "illusion"],
    asset: hiruhikoArt
  },
  {
    id: "hiyuki",
    title: { en: "Hiyuki Kagari", ru: "Хиюки Кагари" },
    relation: { en: "Boss · Kamunabi combatant", ru: "Босс · боец Камунаби" },
    faction: { en: "Kamunabi", ru: "Камунаби" },
    sorcery: { en: "Flame Bone", ru: "Пламенная Кость" },
    recommendedLevel: 14,
    health: 125,
    tags: ["hiyuki", "kamunabi", "flame bone", "огненная кость"],
    asset: hiyukiArt
  },
  {
    id: "samura_imposter",
    title: { en: "Samura Traitor", ru: "Предатель Самура" },
    relation: { en: "Boss · Hishaku affiliate", ru: "Босс · союзник Хисяку" },
    faction: { en: "Hishaku", ru: "Хисяку" },
    sorcery: { en: "Tobimune", ru: "Тобимунэ" },
    recommendedLevel: 16,
    health: 125,
    tags: ["samura_imposter", "samura", "hishaku", "traitor", "предатель", "tobimune", "iai", "suzaku", "судзаку"],
    asset: samuraArt
  },
  {
    id: "azami_kamunabi",
    title: { en: "Azami", ru: "Адзами" },
    relation: { en: "Boss · Kamunabi combatant", ru: "Босс · боец Камунаби" },
    faction: { en: "Kamunabi", ru: "Камунаби" },
    sorcery: { en: "Coin Sorcery", ru: "Сорсери монет" },
    recommendedLevel: 16,
    health: 120,
    tags: ["azami_kamunabi", "azami", "adzami", "адзами", "kamunabi", "coin", "монеты"],
    asset: azamiKamunabiArt
  },
  {
    id: "shiba",
    title: { en: "Togo Shiba", ru: "Того Сиба" },
    relation: { en: "Boss · Team Chihiro", ru: "Босс · Команда Тихиро" },
    faction: { en: "Team Chihiro", ru: "Команда Тихиро" },
    sorcery: { en: "Teleportation", ru: "Телепортация" },
    recommendedLevel: 16,
    health: 125,
    tags: ["shiba", "boss", "босс", "team chihiro", "teleportation", "hand"],
    asset: shibaArt
  },
  {
    id: "hiroto_soga",
    title: { en: "Hiroto Soga", ru: "Хирото Сога" },
    relation: { en: "Boss · Kamunabi combatant", ru: "Босс · боец Камунаби" },
    faction: { en: "Kamunabi", ru: "Камунаби" },
    sorcery: { en: "Kurotsuchi", ru: "Куротсучи" },
    recommendedLevel: 18,
    health: 120,
    tags: ["hiroto", "soga", "kamunabi", "kurotsuchi", "gravity", "pressure", "terrain mass", "directional carry", "burning heaven mass"],
    asset: hirotoSogaArt
  }
];
