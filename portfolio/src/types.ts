export type Lang = "fa" | "en";
export type Theme = "light" | "dark";

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  title: string;
  tech: string;
  category: "angular" | "html" | "bootstrap";
  demo: string;
  repo: string;
}

export interface Filter {
  key: string;
  label: string;
}
