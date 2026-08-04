import coinSorceryArt from "../assets/10_yen_coin.png";
import cloudGougerArt from "../assets/cloud_gouger_unsheathed.png";
import entenArt from "../assets/enten_unsheathed.png";
import flameBoneArt from "../assets/FlameBone.png";
import diAlgodzeArt from "../assets/golden_trident.png";
import kumeyuriArt from "../assets/kumeyuri_unsheathed.png";
import magatsumiArt from "../assets/magatsumi_dragonfly_sheathed.png";
import tobimuneArt from "../assets/tobimune_unsheathed.png";

const base = `${import.meta.env.BASE_URL}mod-assets/`;

export const assets = {
  logo: `${base}kagurabachicraftlogo.png`,
  enten: entenArt,
  cloudGouger: cloudGougerArt,
  flameBone: flameBoneArt,
  kumeyuri: kumeyuriArt,
  magatsumi: magatsumiArt,
  tobimune: tobimuneArt,
  coinSorcery: coinSorceryArt,
  diAlgodze: diAlgodzeArt,
  sojo: `${base}sojo.png`,
  samura: `${base}samura.png`,
  shiba: `${base}shiba.png`,
  thunder: `${base}particle_thunder.png`,
  blackFlame: `${base}particle_black_flame.png`
};

export const assetPlaceholders = [
  {
    id: "screenshots",
    title: { en: "Gameplay screenshots", ru: "Скриншоты геймплея" },
    path: "docs/src/assets/screenshots/"
  },
  {
    id: "icons",
    title: { en: "Ability and HUD icons", ru: "Иконки способностей и HUD" },
    path: "docs/src/assets/icons/"
  },
  {
    id: "renders",
    title: { en: "Blade and NPC renders", ru: "Рендеры клинков и NPC" },
    path: "docs/src/assets/renders/"
  },
  {
    id: "videos",
    title: { en: "Tutorial clips", ru: "Туториальные клипы" },
    path: "docs/src/assets/videos/"
  }
];
