import { useState } from "react";
import { site, services, projects, projectFilters, serviceOptions } from "../data";
import { SectionHead } from "./Hero";

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

export function About() {
  return (
    <section className="section" id="about" aria-label="About Me">
      <SectionHead title="About Me" sub="Get to know me" />
      <div className="about-body">
        {site.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="cta-row">
          <a className="btn-outline" href={site.resumePdf} download="Faeze-Rahmati-Resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services" aria-label="What I do">
      <SectionHead title="What I do" sub="My Services" />
      <div className="services-grid">
        {services.slice(0, 3).map((s) => (
          <div className="service-card" key={s.title}>
            <div className="svc-icon" aria-hidden="true">
              <SvcIcon d={serviceIcons[s.icon] || serviceIcons.api} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
        {services.slice(3).map((s) => (
          <div className="service-card" key={s.title}>
            <div className="svc-icon" aria-hidden="true">
              <SvcIcon d={serviceIcons[s.icon] || serviceIcons.api} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
        <div className="service-card service-visual" aria-hidden="true">
          <span className="code-art">&lt;/&gt;</span>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section className="section" id="projects" aria-label="Projects">
      <SectionHead title="Projects" sub="Some of my work" />
      <div className="filter-row" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-pill${filter === f.key ? " active" : ""}`}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((p) => (
          <article className="project-card" key={p.slug}>
            <a className="project-thumb" href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} — live demo`}>
              <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
            </a>
            <div className="project-meta">
              <h3>
                <a href={p.demo} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </h3>
              <a className="go-btn" href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} — open live demo`}>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="project-tech">
              {p.tech} ·{" "}
              <a href={p.repo} target="_blank" rel="noreferrer">
                Source code
              </a>
            </p>
          </article>
        ))}
      </div>
      <div className="center-row">
        <a className="btn-outline" href="https://github.com/faezerahmatidev?tab=repositories" target="_blank" rel="noreferrer">
          View all
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry — ${service || "General"} (from ${name || "website visitor"})`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="section" id="contact" aria-label="Get In Touch">
        <SectionHead title="Get In Touch" sub="Lets work together" />
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" placeholder="email@example.com" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="cf-service">Service</label>
            <select id="cf-service" name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="cf-message">Message</label>
            <textarea id="cf-message" name="message" placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="btn-submit">
            Get In Touch
          </button>
          {sent && <p className="form-note">Opening your email app to send the message…</p>}
        </form>
      </section>

      <section className="work-together" aria-label="Work together">
        <h2>
          Let&rsquo;s
          <br />
          Work Together -
        </h2>
        <a className="email-pill" href={`mailto:${site.email}`}>
          <span aria-hidden="true">✉</span> {site.email}
        </a>
      </section>

      <footer className="footer-bar">
        <small>{site.footerRights}</small>
        <div className="socials">
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            ⌨
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            ✉
          </a>
          <a href={site.gravatar} target="_blank" rel="noreferrer" aria-label="Gravatar">
            ◉
          </a>
        </div>
      </footer>
    </>
  );
}
