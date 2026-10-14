import type { SkillGroup } from "../types";

export function SkillGroupView({ group }: { group: SkillGroup }) {
  return (
    <div className="skill-group">
      <span className="skill-group-title" dir="auto">
        {group.title}
      </span>
      <span className="skill-tags">
        {group.items.map((s) => (
          <span key={s.name} className="skill-tag" dir="ltr" title={s.note ?? s.name}>
            {s.name}
            {s.note ? <em className="skill-note"> · {s.note}</em> : null}
          </span>
        ))}
      </span>
    </div>
  );
}
