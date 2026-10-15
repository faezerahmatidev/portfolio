export type Lang = "fa" | "en";
export type Theme = "light" | "dark";

export interface SkillGroup {
  title: string;
  items: { name: string; note?: string }[];
}

export interface ProjectLink {
  labelFa: string;
  labelEn: string;
  url: string;
  icon: string;
}

export interface FeaturedProject {
  nameFa: string;
  nameEn: string;
  descFa: string;
  descEn: string;
  tags: string[];
  links: ProjectLink[];
}

export interface Experience {
  companyFa: string;
  companyEn: string;
  roleFa: string;
  roleEn: string;
  dateFa: string;
  dateEn: string;
  bulletsFa: string[];
  bulletsEn: string[];
  tags: string[];
}

export interface ResumeContent {
  name: string;
  title: string;
  summary: string;
  location: string;
  availability: string;
  sections: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    languages: string;
    projects: string;
    contact: string;
  };
  contactLabels: {
    email: string;
    github: string;
    linkedin: string;
    gravatar: string;
  };
  controls: {
    language: string;
    themeLight: string;
    themeDark: string;
    print: string;
  };
  education: {
    degree: string;
    school: string;
    date: string;
  };
  languagesList: { name: string; level: string }[];
  featuredProjects: FeaturedProject[];
  projectKind: string;
  projectsCta: string;
  footer: string;
}
