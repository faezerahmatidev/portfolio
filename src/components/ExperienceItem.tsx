import type { Lang, ResumeContent } from "../types";
import type { Experience } from "../types";

export function ExperienceItem({
  lang,
  item
}: {
  lang: Lang;
  item: Experience;
  t: ResumeContent;
}) {
  const company = lang === "fa" ? item.companyFa : item.companyEn;
  const role = lang === "fa" ? item.roleFa : item.roleEn;
  const date = lang === "fa" ? item.dateFa : item.dateEn;
  const bullets = lang === "fa" ? item.bulletsFa : item.bulletsEn;

  return (
    <article className="exp-item">
      <div className="exp-head">
        <h3 className="exp-title">
          <span dir="auto">{company}</span>
          <span className="exp-sep" aria-hidden="true">
            {" "}
            —{" "}
          </span>
          <span dir="auto">{role}</span>
        </h3>
        <span className="exp-date">
          <span aria-hidden="true">🗓</span> <span dir="auto">{date}</span>
        </span>
      </div>
      <div className="tag-row" aria-label="technologies">
        {item.tags.map((tag) => (
          <span key={tag} className="mini-tag" dir="ltr">
            {tag}
          </span>
        ))}
      </div>
      <ul className="exp-list">
        {bullets.map((b) => (
          <li key={b} dir="auto">
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
