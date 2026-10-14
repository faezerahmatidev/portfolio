import type { Lang, Theme, ResumeContent } from "../types";

export function Controls({
  lang,
  theme,
  t,
  onLang,
  onTheme
}: {
  lang: Lang;
  theme: Theme;
  t: ResumeContent;
  onLang: () => void;
  onTheme: () => void;
}) {
  const isFa = lang === "fa";
  return (
    <div className="controls" role="toolbar" aria-label={isFa ? "تنظیمات نمایش" : "Display settings"}>
      <button
        type="button"
        className="control-btn"
        onClick={onLang}
        aria-label={isFa ? "Switch to English" : "تغییر به فارسی"}
      >
        <span aria-hidden="true">🌐</span> {t.controls.language}
      </button>
      <button
        type="button"
        className="control-btn"
        onClick={onTheme}
        aria-label={isFa ? (theme === "light" ? "تغییر به تم تیره" : "تغییر به تم روشن") : theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        aria-pressed={theme === "dark"}
      >
        <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>{" "}
        {theme === "light" ? t.controls.themeDark : t.controls.themeLight}
      </button>
      <button type="button" className="control-btn" onClick={() => window.print()}>
        <span aria-hidden="true">🖨</span> {t.controls.print}
      </button>
    </div>
  );
}
