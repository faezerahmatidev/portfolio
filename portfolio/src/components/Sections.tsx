import { useState } from "react";
import type { Lang } from "../types";
import type { site as siteEn, services as servicesEn, projects as projectsEn, projectFilters as filtersEn, serviceOptions as optionsEn } from "../content/en";
import { projectImages } from "../images";
import { SectionHead } from "./Hero";

type Site = typeof siteEn;

function SvcIcon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const serviceIcons: Record<string, string> = {
  angular: "M12 2 3 7v10l9 5 9-5V7l-9-5zM12 22V12M3 7l9 5 9-5",
  responsive: "M8 2h8l1 4h3v16H4V6h3l1-4zM9 12h6",
  api: "M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7zM12 16v5",
  figma: "M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7l3-7z",
  maintenance: "M12 2l8 3v6c0 5-3.5 9.3-8 11-4.5-1.7-8-6-8-11V5l8-3zM9 12l2 2 4-4"
};

export function About({ t }: { t: Site }) {
  return (
    <section className="section" id="about" aria-label={t.aboutTitle}>
      <SectionHead title={t.aboutTitle} sub={t.aboutSub} />
      <div className="about-body">
        {t.about.map((p, i) => (
          <p key={i} dir="auto">
            {p}
          </p>
        ))}
        <div className="cta-row">
          <a className="btn-outline" href={t.resumePdf} download>
            {t.downloadResume}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ t, groups }: { t: Site; groups: typeof servicesEn }) {
  return (
    <section className="section" id="services" aria-label={t.servicesTitle}>
      <SectionHead title={t.servicesTitle} sub={t.servicesSub} />
      <div className="services-grid">
        {groups.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="svc-icon" aria-hidden="true">
              <SvcIcon d={serviceIcons[s.icon] || serviceIcons.api} />
            </div>
            <h3 dir="auto">{s.title}</h3>
            <p dir="auto">{s.desc}</p>
          </div>
        ))}
        <div className="service-card service-visual" aria-hidden="true">
          <span className="code-art">&lt;/&gt;</span>
        </div>
      </div>
    </section>
  );
}

export function Projects({
  t,
  items,
  filters
}: {
  t: Site;
  items: typeof projectsEn;
  filters: typeof filtersEn;
}) {
  const [filter, setFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);
  const PAGE_SIZE = 6;
  const visible = filter === "all" ? items : items.filter((p) => p.category === filter);
  const shown = expanded ? visible : visible.slice(0, PAGE_SIZE);
  return (
    <section className="section" id="projects" aria-label={t.projectsTitle}>
      <SectionHead title={t.projectsTitle} sub={t.projectsSub} />
      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-pill${filter === f.key ? " active" : ""}`}
            onClick={() => {
              setFilter(f.key);
              setExpanded(false);
            }}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {shown.map((p) => (
          <article className="project-card" key={p.slug}>
            <a className="project-thumb" href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} — ${t.liveDemo}`}>
              <img src={projectImages[p.slug]} alt={`${p.title} preview`} loading="lazy" />
            </a>
            <div className="project-meta">
              <h3 dir="auto">
                <a href={p.demo} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </h3>
              <a className="go-btn" href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} — ${t.liveDemo}`}>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="project-tech" dir="auto">
              <span dir="ltr">{p.tech}</span> ·{" "}
              <a href={p.repo} target="_blank" rel="noreferrer">
                {t.sourceCode}
              </a>
            </p>
          </article>
        ))}
      </div>
      {visible.length > PAGE_SIZE && (
        <div className="center-row">
          <button
            type="button"
            className="btn-outline"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? t.showLess : t.viewAll}
          </button>
        </div>
      )}
    </section>
  );
}

export function Contact({
  t,
  options,
  lang
}: {
  t: Site;
  options: typeof optionsEn;
  lang: Lang;
}) {
  const [sent, setSent] = useState(false);
  void lang;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry — ${service || "General"} (from ${name || "website visitor"})`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="section" id="contact" aria-label={t.contactTitle}>
        <SectionHead title={t.contactTitle} sub={t.contactSub} />
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="cf-name" dir="auto">
              {t.fieldName}
            </label>
            <input id="cf-name" name="name" type="text" placeholder={t.fieldNamePh} autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="cf-email" dir="auto">
              {t.fieldEmail}
            </label>
            <input id="cf-email" name="email" type="email" placeholder={t.fieldEmailPh} autoComplete="email" required dir="ltr" />
          </div>
          <div className="field">
            <label htmlFor="cf-service" dir="auto">
              {t.fieldService}
            </label>
            <select id="cf-service" name="service" defaultValue="">
              <option value="" disabled>
                {t.fieldServicePh}
              </option>
              {options.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="cf-message" dir="auto">
              {t.fieldMessage}
            </label>
            <textarea id="cf-message" name="message" placeholder={t.fieldMessagePh} required />
          </div>
          <button type="submit" className="btn-submit">
            {t.submitBtn}
          </button>
          {sent && (
            <p className="form-note" dir="auto">
              {t.sentNote}
            </p>
          )}
        </form>
      </section>

      <section className="work-together" aria-label="Work together">
        <h2 dir="auto">
          {t.footerCta[0]}
          <br />
          {t.footerCta[1]}
        </h2>
        <a className="email-pill" href={`mailto:${t.email}`}>
          <span aria-hidden="true">✉</span> <span dir="ltr">{t.email}</span>
        </a>
      </section>

      <footer className="footer-bar">
        <small dir="auto">{t.footerRights}</small>
        <div className="socials">
          <a href={t.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a href={t.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            ⌨
          </a>
          <a href={`mailto:${t.email}`} aria-label="Email">
            ✉
          </a>
          <a href={t.gravatar} target="_blank" rel="noreferrer" aria-label="Gravatar">
            ◉
          </a>
        </div>
      </footer>
    </>
  );
}
