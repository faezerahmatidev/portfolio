import type { ReactNode } from "react";

export function ResumeSection({
  label,
  children,
  id
}: {
  label: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section className="resume-section" id={id} aria-label={label}>
      <h2 className="section-label">{label}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
