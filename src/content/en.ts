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
    date: "Graduation year: 2022"
  },
  languagesList: [
    { name: "Persian", level: "Native" },
    { name: "English", level: "Intermediate" }
  ],
  featuredProjects: [
    {
      nameFa: "داشبورد آب‌وهوا — Weather Dashboard",
      nameEn: "Weather Dashboard — Angular Multi-Page App",
      descFa:
        "داشبورد چندصفحه‌ای آب‌وهوا با Angular 20 و Leaflet؛ حالت تیره، نقشه و تقویم (داده نمونه).",
      descEn:
        "Multi-page weather dashboard in Angular 20 with Leaflet; dark mode, map and calendar (sample data).",
      tags: ["Angular", "TypeScript", "Leaflet"],
      links: [
        {
          labelFa: "دموی زنده",
          labelEn: "Live demo",
          url: "https://faezerahmatidev.github.io/Weather-Dashboard/",
          icon: "↗"
        },
        {
          labelFa: "سورس‌کد",
          labelEn: "Source code",
          url: "https://github.com/faezerahmatidev/Weather-Dashboard",
          icon: "⌨"
        }
      ]
    },
    {
      nameFa: "گلدن برو — فروشگاه اینترنتی قهوه",
      nameEn: "Golden Brew — Coffee E-Commerce",
      descFa:
        "فروشگاه فارسی قهوه با حالت روشن و تیره؛ سبد خرید، قیمت و تخفیف، بلاگ.",
      descEn:
        "Persian RTL coffee shop with light and dark modes; cart, pricing with discounts, blog.",
      tags: ["Tailwind CSS", "HTML", "JavaScript"],
      links: [
        {
          labelFa: "دموی زنده",
          labelEn: "Live demo",
          url: "https://faezerahmatidev.github.io/golden-brew/",
          icon: "↗"
        },
        {
          labelFa: "سورس‌کد",
          labelEn: "Source code",
          url: "https://github.com/faezerahmatidev/golden-brew",
          icon: "⌨"
        }
      ]
    },
    {
      nameFa: "CRM Dashboard — داشبورد مدیریتی Angular",
      nameEn: "CRM Dashboard — Angular Admin Dashboard",
      descFa:
        "داشبورد CRM با Angular و SCSS از روی Figma؛ احراز هویت، فروش، سفارش‌ها و پیام‌ها.",
      descEn:
        "CRM dashboard in Angular with SCSS, built from Figma; auth, sales, orders and messages.",
      tags: ["Angular", "TypeScript", "SCSS", "Angular Router"],
      links: [
        {
          labelFa: "دموی زنده",
          labelEn: "Live demo",
          url: "https://faezerahmatidev.github.io/CRM-Dashboard/",
          icon: "↗"
        },
        {
          labelFa: "سورس‌کد",
          labelEn: "Source code",
          url: "https://github.com/faezerahmatidev/CRM-Dashboard",
          icon: "⌨"
        }
      ]
    },
    {
      nameFa: "نوبتیفا — وب‌اپ رزرو نوبت + پنل مدیریت",
      nameEn: "Nobatifa — Booking Web App + Admin Panel",
      descFa:
        "رزرو آنلاین نوبت اتوسرویس (فارسی و راست‌چین) با پنل مدیریت مکمل؛ Angular و TypeScript.",
      descEn:
        "Persian RTL booking web app with companion admin panel in Angular; booking, invoices, reminders.",
      tags: ["Angular", "TypeScript", "Tailwind CSS"],
      links: [
        {
          labelFa: "دموی وب‌سایت",
          labelEn: "Website demo",
          url: "https://faezerahmatidev.github.io/Nobatifa-Website/",
          icon: "↗"
        },
        {
          labelFa: "دموی پنل ادمین",
          labelEn: "Admin demo",
          url: "https://faezerahmatidev.github.io/Nobatifa-Admin/",
          icon: "↗"
        },
        {
          labelFa: "سورس وب‌سایت",
          labelEn: "Website source",
          url: "https://github.com/faezerahmatidev/Nobatifa-Website",
          icon: "⌨"
        },
        {
          labelFa: "سورس پنل ادمین",
          labelEn: "Admin source",
          url: "https://github.com/faezerahmatidev/Nobatifa-Admin",
          icon: "⌨"
        }
      ]
    }
  ],
  projectKind: "Personal project",
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
