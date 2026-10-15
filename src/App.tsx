import { useCallback, useEffect, useState } from "react";
import type { Lang, Theme } from "./types";
import { faContent, faSkills, faExperience } from "./content/fa";
import { enContent, enSkills, enExperience } from "./content/en";
import { ResumeSection } from "./components/ResumeSection";
import { ContactLinks, GITHUB } from "./components/ContactLinks";
import { ExperienceItem } from "./components/ExperienceItem";
import { ProjectItem } from "./components/ProjectItem";
import { SkillGroupView } from "./components/SkillGroup";
import { Controls } from "./components/Controls";

function getParam(key: "lang" | "theme"): string | null {
  try {
    return new URLSearchParams(window.location.search).get(key);
  } catch {
    return null;
  }
}

function getInitial<T extends string>(key: string, param: "lang" | "theme", fallback: T): T {
  const p = getParam(param);
  if (p === "fa" || p === "en" || p === "light" || p === "dark") return p as T;
  try {
    const v = localStorage.getItem(key);
    return (v as T) ?? fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => getInitial<Lang>("fr-lang", "lang", "fa"));
  const [theme, setTheme] = useState<Theme>(() => getInitial<Theme>("fr-theme", "theme", "light"));

  const t = lang === "fa" ? faContent : enContent;
  const skills = lang === "fa" ? faSkills : enSkills;
  const experience = lang === "fa" ? faExperience : enExperience;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    document.title =
      lang === "fa" ? "فائزه رحمتی | فرانت‌اند دولوپر Angular" : "Faeze Rahmati | Angular Frontend Developer";
    try {
      localStorage.setItem("fr-lang", lang);
      localStorage.setItem("fr-theme", theme);
    } catch {
      /* ignore */
    }
  }, [lang, theme]);

  const toggleLang = useCallback(() => setLang((l) => (l === "fa" ? "en" : "fa")), []);
  const toggleTheme = useCallback(() => setTheme((x) => (x === "light" ? "dark" : "light")), []);

  return (
    <div className="page">
      <div className="topbar">
        <Controls lang={lang} theme={theme} t={t} onLang={toggleLang} onTheme={toggleTheme} />
      </div>

      <header className="hero">
        <h1 dir="auto">{t.name}</h1>
        <p className="subtitle" dir="auto">
          {t.title}
        </p>
        <p className="meta">
          <span dir="auto">📍 {t.location}</span>
          <span dir="ltr">✉ {`rahmati.faeze1997@gmail.com`}</span>
        </p>
        <ContactLinks lang={lang} t={t} />
      </header>

      <main className="sheet" aria-label={t.name}>
        <div className="content">
          <ResumeSection label={t.sections.about}>
            <p className="about-text" dir="auto">
              {t.summary}
            </p>
          </ResumeSection>

          <ResumeSection label={t.sections.experience}>
            {experience.map((item) => (
              <ExperienceItem
                key={item.companyEn}
                lang={lang}
                item={item}
                t={t}
              />
            ))}
          </ResumeSection>

          <ResumeSection label={t.sections.projects}>
            {t.featuredProjects.map((p) => (
              <ProjectItem key={p.nameEn} lang={lang} item={p} t={t} />
            ))}
            <p dir="auto" style={{ margin: "10px 0 0", fontSize: "12.5px" }}>
              <a href={GITHUB} target="_blank" rel="noreferrer" dir="auto">
                ✨ {t.projectsCta} {lang === "fa" ? "←" : "→"}
              </a>
            </p>
          </ResumeSection>

          <ResumeSection label={t.sections.skills}>
            {skills.map((g) => (
              <SkillGroupView key={g.title} group={g} />
            ))}
          </ResumeSection>

          <ResumeSection label={t.sections.education}>
            <h3 className="edu-title" dir="auto">
              {t.education.degree} — {t.education.school}
            </h3>
            <div className="edu-meta" dir="auto">
              {t.education.date}
            </div>
          </ResumeSection>

          <ResumeSection label={t.sections.languages}>
            {t.languagesList.map((l) => (
              <div className="lang-row" key={l.name}>
                <span dir="auto">{l.name}</span>
                <span dir="auto" style={{ color: "var(--muted)" }}>
                  {l.level}
                </span>
              </div>
            ))}
          </ResumeSection>
        </div>
      </main>

      <div className="footer" dir="auto">
        {t.footer}
      </div>
    </div>
  );
}
