import type { ResumeContent, SkillGroup, Experience } from "../types";

export const enContent: ResumeContent = {
  name: "Faeze Rahmati",
  title: "Angular Frontend Developer",
  summary:
    "Angular-focused Frontend Developer with about six months of professional experience at Andisheh Computer (May 2026 – Present). Hands-on work with Angular components and pages, services, routing, forms and validation, REST API integration, and implementing interfaces from Figma designs. Knowledge of HTML, CSS, JavaScript and TypeScript, with styling experience in Tailwind CSS and Bootstrap. Interested in building responsive, clean and maintainable interfaces. Currently learning React.",
  location: "Tehran",
  availability: "Angular Frontend Developer",
  sections: {
    about: "About",
    experience: "Experience",
    skills: "Skills & Tools",
    education: "Education",
    languages: "Languages",
    projects: "Projects",
    contact: "Contact"
  },
  contactLabels: {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    gravatar: "Gravatar"
  },
  controls: {
    language: "فارسی",
    themeLight: "Light",
    themeDark: "Dark",
    print: "Print / PDF"
  },
  education: {
    degree: "B.Sc. in Computer Science",
    school: "University of Isfahan",
    date: "Graduation year: [TO BE CONFIRMED]"
  },
  languagesList: [
    { name: "Persian", level: "Native" },
    { name: "English", level: "[TO BE CONFIRMED]" }
  ],
  featuredProjects: [
    {
      nameFa: "CRM Dashboard — داشبورد مدیریتی Angular",
      nameEn: "CRM Dashboard — Angular Admin Dashboard",
      descFa:
        "داشبورد CRM با Angular standalone، SCSS و Angular Router، پیاده‌سازی قدم‌به‌قدم از روی Figma؛ احراز هویت، نمای فروش، جدول سفارش‌ها و فاکتورها، و بخش پیام‌ها.",
      descEn:
        "CRM dashboard built with Angular standalone, SCSS and Angular Router, implemented step by step from Figma; auth flows, sales overview, orders and invoices tables, messages section.",
      tags: ["Angular", "TypeScript", "SCSS", "Angular Router"],
      repo: "https://github.com/faezerahmatidev/CRM-Dashboard"
    },
    {
      nameFa: "نوبتیفا — وب‌اپلیکیشن رزرو آنلاین نوبت اتوسرویس",
      nameEn: "Nobatifa — Online Vehicle-Service Booking Web App",
      descFa:
        "وب‌اپلیکیشن فارسی و راست‌چین رزرو آنلاین نوبت اتوسرویس با Angular و Tailwind CSS؛ رزرو نوبت، مشاهده فاکتور و یادآوری نوبت بعدی.",
      descEn:
        "Persian RTL web app for booking vehicle-service appointments online, built with Angular and Tailwind CSS; booking, invoice view and next-appointment reminders.",
      tags: ["Angular", "TypeScript", "Tailwind CSS"],
      demo: "https://faezerahmatidev.github.io/Nobatifa-Website/",
      repo: "https://github.com/faezerahmatidev/Nobatifa-Website"
    }
  ],
  projectKind: "Personal project",
  demoLink: "Live demo",
  codeLink: "Source code",
  projectsCta: "See all activity on GitHub",
  footer: "Last updated: October 2026 — this resume contains only confirmed information."
};

export const enSkills: SkillGroup[] = [
  {
    title: "Core Web",
    items: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "TypeScript" }]
  },
  {
    title: "Frontend Framework",
    items: [{ name: "Angular" }, { name: "React", note: "Learning" }]
  },
  {
    title: "Styling",
    items: [{ name: "Tailwind CSS" }, { name: "Bootstrap" }]
  },
  {
    title: "Dev Tools",
    items: [{ name: "Git" }, { name: "GitHub" }, { name: "GitLab" }]
  }
];

export const enExperience: Experience[] = [
  {
    companyFa: "اندیشه کامپیوتر",
    companyEn: "Andisheh Computer",
    roleFa: "فرانت‌اند دولوپر Angular",
    roleEn: "Angular Frontend Developer",
    dateFa: "اردیبهشت ۱۴۰۵ — تاکنون",
    dateEn: "May 2026 — Present",
    tags: ["Angular", "TypeScript", "REST API", "RxJS", "Tailwind CSS"],
    bulletsFa: [],
    bulletsEn: [
      "Develop and maintain Angular pages and components with TypeScript.",
      "Implement interfaces from Figma designs with responsive output.",
      "Integrate REST APIs with HttpClient and manage data in services and components.",
      "Build forms with validation and routing in real project pages.",
      "Use RxJS and signals in real project scenarios.",
      "Fix bugs, maintain code and collaborate in a team including code review."
    ]
  }
];
