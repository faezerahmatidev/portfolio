import { useCallback, useEffect, useState } from "react";
import type { Lang, Theme } from "./types";
import { site as siteEn, navLinks as navEn, services as servicesEn, projects as projectsEn, projectFilters as filtersEn, serviceOptions as optionsEn } from "./content/en";
import { site as siteFa, navLinks as navFa, services as servicesFa, projects as projectsFa, projectFilters as filtersFa, serviceOptions as optionsFa } from "./content/fa";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About, ServicesSection, Projects, Contact } from "./components/Sections";

function getParam(key: "lang" | "theme"): string | null {
  try {
    return new URLSearchParams(window.location.search).get(key);
  } catch {
    return null;
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const p = getParam("lang");
    if (p === "fa" || p === "en") return p;
    try {
      const saved = localStorage.getItem("pf-lang");
      if (saved === "fa" || saved === "en") return saved;
    } catch {
      /* ignore */
    }
    return "en";
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const p = getParam("theme");
    if (p === "light" || p === "dark") return p;
    try {
      const saved = localStorage.getItem("pf-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* ignore */
    }
    return "light";
  });

  const isFa = lang === "fa";
  const t = isFa ? siteFa : siteEn;
  const nav = isFa ? navFa : navEn;
  const groups = isFa ? servicesFa : servicesEn;
  const items = isFa ? projectsFa : projectsEn;
  const filters = isFa ? filtersFa : filtersEn;
  const options = isFa ? optionsFa : optionsEn;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isFa ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    document.title = isFa
      ? "فائزه رحمتی | فرانت‌اند دولوپر Angular"
      : "Faeze Rahmati | Angular Frontend Developer";
    try {
      localStorage.setItem("pf-lang", lang);
      localStorage.setItem("pf-theme", theme);
    } catch {
      /* ignore */
    }
  }, [lang, theme, isFa]);

  const toggleLang = useCallback(() => setLang((l) => (l === "fa" ? "en" : "fa")), []);
  const toggleTheme = useCallback(() => setTheme((x) => (x === "light" ? "dark" : "light")), []);

  return (
    <div className="page">
      <Navbar lang={lang} theme={theme} t={t} nav={nav} onLang={toggleLang} onTheme={toggleTheme} />
      <main>
        <Hero t={t} />
        <div className="wrap">
          <About t={t} />
          <ServicesSection t={t} groups={groups} />
          <Projects t={t} items={items} filters={filters} />
          <Contact t={t} options={options} lang={lang} />
        </div>
      </main>
    </div>
  );
}
