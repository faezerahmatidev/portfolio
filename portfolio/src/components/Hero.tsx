import avatarUrl from "../assets/avatar.jpg";
import { site } from "../data";

export function Hero() {
  return (
    <section className="hero" id="top">
      <img className="avatar" src={avatarUrl} alt={site.name} loading="eager" />
      <h1>{site.name}</h1>
      <p className="role">{site.role}</p>
      <p className="bio">{site.heroBio}</p>
      <div className="cta-row">
        <a href="#contact" className="btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="sec-head">
      <h2>{title}</h2>
      <p>{sub}</p>
    </div>
  );
}
