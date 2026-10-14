import avatarUrl from "../assets/avatar.jpg";
import type { site as siteEn } from "../content/en";

type Site = typeof siteEn;

export function Hero({ t }: { t: Site }) {
  return (
    <section className="hero" id="top">
      <img className="avatar" src={avatarUrl} alt={t.name} loading="eager" />
      <h1 dir="auto">{t.name}</h1>
      <p className="role" dir="auto">
        {t.role}
      </p>
      <p className="bio" dir="auto">
        {t.heroBio}
      </p>
      <div className="cta-row">
        <a href="#contact" className="btn-outline">
          {t.contactBtn}
        </a>
      </div>
    </section>
  );
}

export function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="sec-head">
      <h2 dir="auto">{title}</h2>
      <p dir="auto">{sub}</p>
    </div>
  );
}
