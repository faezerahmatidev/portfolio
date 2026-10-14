import { useCallback, useEffect, useState } from "react";
import type { Theme } from "./types";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About, Services, Projects, Contact } from "./components/Sections";

function getInitialTheme(): Theme {
  try {
    const q = new URLSearchParams(window.location.search).get("theme");
    if (q === "light" || q === "dark") return q;
    const saved = localStorage.getItem("pf-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore */
  }
  return "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const toggleTheme = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.title = "Faeze Rahmati | Angular Frontend Developer";
    try {
      localStorage.setItem("pf-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <div className="page">
      <Navbar theme={theme} onTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="wrap">
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
