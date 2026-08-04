export type Locale = "en" | "ru";

export type ThemeMode = "dark" | "light";

export type LocalizedText = Record<Locale, string>;

export type SectionId =
  | "overview"
  | "quickstart"
  | "combat"
  | "styles"
  | "signatures"
  | "items"
  | "sorcery"
  | "progression"
  | "entities"
  | "movement"
  | "commands"
  | "gamerules"
  | "faq";

export interface NavItem {
  id: SectionId;
  icon: string;
  label: LocalizedText;
  group?: "main" | "server";
}

export interface WikiArticle {
  id: string;
  section: SectionId;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText[];
  tags: string[];
}

export type SorcerySlot =
  | "Primary"
  | "Secondary"
  | "Utility"
  | "Supportive 1"
  | "Supportive 2"
  | "Special"
  | "Passive"
  | "Awakening";

export interface SorceryAbility {
  name: LocalizedText;
  /** The slot this ability occupies (Primary, Secondary, …). Not a raw input combo. */
  slot: SorcerySlot;
  desc: LocalizedText;
}

export type SorceryElement =
  | "mirror"
  | "ice"
  | "fire"
  | "illusion"
  | "wither"
  | "feather"
  | "adapt"
  | "spike"
  | "coin"
  | "doll"
  | "creature"
  | "spear"
  | "water"
  | "void"
  | "magnet"
  | "chain"
  | "light"
  | "lightning"
  | "blade"
  | "nature"
  | "teleport"
  | "smoke"
  | "storage"
  | "wave"
  | "warrior"
  | "yellowchain";

export interface SorceryEntry {
  id: string;
  name: LocalizedText;
  status?: LocalizedText;
  character: LocalizedText;
  element: SorceryElement;
  elementLabel: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  abilities: SorceryAbility[];
  awakening?: LocalizedText;
  /** Full ability set while Awakened - present only when the kit actually changes. */
  awakenedAbilities?: SorceryAbility[];
  asset?: string;
  tier: "enchanted-blade" | "sorcery";
}

export interface ItemEntry {
  id: string;
  name: LocalizedText;
  status?: LocalizedText;
  type: LocalizedText;
  element?: SorceryElement;
  elementLabel?: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
  asset?: string;
  sorceryId?: string;
}

export interface EntityEntry {
  id: string;
  title: LocalizedText;
  status?: LocalizedText;
  relation: LocalizedText;
  faction: LocalizedText;
  sorcery: LocalizedText;
  recommendedLevel: number;
  health: number;
  tags: string[];
  asset?: string;
}

export interface StyleEntry {
  id: string;
  title: LocalizedText;
  activation: LocalizedText;
  role: LocalizedText;
  strengths: LocalizedText;
  weakness: LocalizedText;
  matchup: LocalizedText;
  actions: LocalizedText[];
  metrics: {
    hpDamage: number;
    stability: number;
    guardPressure: number;
    block: number;
    parryBonus: number;
    lightTargets: number;
    heavyTargets: number;
  };
}

export interface SignatureEntry {
  id: string;
  title: LocalizedText;
  requirement: LocalizedText;
  styleCost: number;
  cooldownSeconds: number;
  summary: LocalizedText;
  details: LocalizedText[];
}

export interface ProgressionEntry {
  id: string;
  title: LocalizedText;
  status?: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
}

export interface CommandEntry {
  command: string;
  access: LocalizedText;
  description: LocalizedText;
}

export interface RuleEntry {
  key: string;
  defaultValue: string;
  category: string;
  description: LocalizedText;
}

export interface FaqEntry {
  question: LocalizedText;
  answer: LocalizedText;
}

// Legacy types kept for unused component files
export interface SourceBackedEntry {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  source: string;
  tags: string[];
}

export interface ModuleEntry {
  id: string;
  name: string;
  source: string;
  status: LocalizedText;
}

export interface PatchouliEntry {
  id: string;
  category: string;
  title: LocalizedText;
  source: string;
}
