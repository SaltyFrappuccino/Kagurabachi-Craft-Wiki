import {
  ArrowRight,
  ArrowUpRight,
  BadgeJapaneseYen,
  BookOpen,
  BookMarked,
  CircleHelp,
  Component,
  Crosshair,
  Footprints,
  Gauge,
  Home,
  Image,
  Layers3,
  Menu,
  Moon,
  Network,
  Rocket,
  Route,
  Search,
  SearchX,
  ServerCog,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Swords,
  Terminal,
  Users,
  X,
  Zap
} from "lucide-react";

const icons = {
  ArrowRight,
  ArrowUpRight,
  BadgeJapaneseYen,
  BookOpen,
  BookMarked,
  CircleHelp,
  Component,
  Crosshair,
  Footprints,
  Gauge,
  Home,
  Image,
  Layers3,
  Menu,
  Moon,
  Network,
  Rocket,
  Route,
  Search,
  SearchX,
  ServerCog,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Swords,
  Terminal,
  Users,
  X,
  Zap
};

export type IconName = keyof typeof icons;

export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Component = icons[name as IconName] ?? BookOpen;
  return <Component size={size} strokeWidth={1.9} aria-hidden="true" />;
}
