import type { Lang, ResumeContent } from "../types";

const EMAIL = "rahmati.faeze1997@gmail.com";
const GITHUB = "https://github.com/faezerahmatidev";
const LINKEDIN = "https://linkedin.com/in/faeze-rahmati";
const GRAVATAR = "https://gravatar.com/collectortotally73d11dc7aa";

export function ContactLinks({ lang, t }: { lang: Lang; t: ResumeContent }) {
  void lang;
  return (
    <div className="contact-badges" role="list" aria-label="contact links">
      <a
        className="badge badge-email"
        role="listitem"
        href={`mailto:${EMAIL}`}
        title={EMAIL}
        aria-label={`${t.contactLabels.email}: ${EMAIL}`}
      >
        <span aria-hidden="true">✉</span>
        <span dir="auto">{t.contactLabels.email}</span>
      </a>
      <a
        className="badge badge-github"
        role="listitem"
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        title={GITHUB}
        aria-label={`GitHub: faezerahmatidev`}
      >
        <span aria-hidden="true">⌨</span>
        <span dir="ltr">GitHub</span>
      </a>
      <a
        className="badge badge-linkedin"
        role="listitem"
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        title={LINKEDIN}
        aria-label={`LinkedIn: ${t.contactLabels.linkedin}`}
      >
        <span aria-hidden="true">in</span>
        <span dir="ltr">LinkedIn</span>
      </a>
      <a
        className="badge badge-gravatar"
        role="listitem"
        href={GRAVATAR}
        target="_blank"
        rel="noreferrer"
        title={GRAVATAR}
        aria-label={`Gravatar: ${t.contactLabels.gravatar}`}
      >
        <span aria-hidden="true">◉</span>
        <span dir="ltr">Gravatar</span>
      </a>
    </div>
  );
}

export { EMAIL, GITHUB, LINKEDIN, GRAVATAR };
