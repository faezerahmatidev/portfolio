import type { Lang, ResumeContent } from "../types";
import type { FeaturedProject } from "../types";

export function ProjectItem({
  lang,
  item,
  t
}: {
  lang: Lang;
  item: FeaturedProject;
  t: ResumeContent;
}) {
  const name = lang === "fa" ? item.nameFa : item.nameEn;
  const desc = lang === "fa" ? item.descFa : item.descEn;

  return (
    <article className="exp-item">
      <div className="exp-head">
        <h3 className="exp-title">
          <span dir="auto">{name}</span>
        </h3>
        <span className="exp-date">
          <span dir="auto">{t.projectKind}</span>
        </span>
      </div>
      <div className="tag-row" aria-label="technologies">
        {item.tags.map((tag) => (
          <span key={tag} className="mini-tag" dir="ltr">
            {tag}
          </span>
        ))}
      </div>
      <p className="about-text" dir="auto" style={{ marginTop: "6px" }}>
        {desc}
      </p>
      <p dir="auto" style={{ margin: "8px 0 0", fontSize: "12.5px" }}>
        {item.links.map((l, i) => (
          <span key={l.url}>
            {i > 0 && " · "}
            <a href={l.url} target="_blank" rel="noreferrer">
              {l.icon} {lang === "fa" ? l.labelFa : l.labelEn}
            </a>
          </span>
        ))}
      </p>
    </article>
  );
}
