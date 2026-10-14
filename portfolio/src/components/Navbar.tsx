import { useState } from "react";
import type { Theme } from "../types";
import { site, navLinks } from "../data";

export function Navbar({ theme, onTheme }: { theme: Theme; onTheme: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="brand">
          {site.logo}
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Main navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-side">
          <a href="#contact" className="btn-outline">
            Contact
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
