import { useState } from "react";
import type { Lang, Theme } from "../types";
import type { site as siteEn } from "../content/en";

type Site = typeof siteEn;

export function Navbar({
  lang,
  theme,
  t,
  nav,
  onLang,
  onTheme
}: {
  lang: Lang;
  theme: Theme;
  t: Site;
  nav: { href: string; label: string }[];
  onLang: () => void;
  onTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isFa = lang === "fa";
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="brand">
          {t.logo}
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} aria-label={isFa ? "ناوبری اصلی" : "Main navigation"}>
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-side">
          <a href="#contact" className="btn-outline">
            {t.contactNav}
          </a>
          <button type="button" className="btn-outline lang-btn" onClick={onLang} aria-label={isFa ? "Switch to English" : "تغییر به فارسی"}>
            {t.langButton}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "light" ? t.themeToDark : t.themeToLight}
          >
            <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? t.menuClose : t.menuOpen}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
