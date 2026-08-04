import { useState } from "react";
import type { Locale } from "../types";
import { ui } from "../data/i18n";

export function CopyButton({ value, locale }: { value: string; locale: Locale }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button className="copy-button" type="button" onClick={copy}>
      {copied ? ui.copied[locale] : ui.copy[locale]}
    </button>
  );
}
