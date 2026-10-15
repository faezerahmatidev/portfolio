import type { ResumeContent, SkillGroup, Experience } from "../types";

export const faContent: ResumeContent = {
  name: "فائزه رحمتی",
  title: "فرانت‌اند دولوپر Angular",
  summary:
    "توسعه‌دهنده فرانت‌اند با تمرکز بر Angular و حدود شش ماه تجربه کاری در شرکت اندیشه کامپیوتر؛ همکاری از اردیبهشت ۱۴۰۵ تاکنون ادامه دارد. تجربه عملی در توسعه کامپوننت‌ها و صفحه‌ها، کار با سرویس‌ها، روتینگ، فرم‌ها و اعتبارسنجی، اتصال به REST API و پیاده‌سازی رابط از روی Figma. آشنا با HTML، CSS، JavaScript و TypeScript و استایل‌دهی با Tailwind CSS و Bootstrap. علاقه‌مند به ساخت رابط‌های واکنش‌گرا، تمیز و قابل نگهداری. React در حال یادگیری است.",
  location: "تهران",
  availability: "Angular Frontend Developer",
  sections: {
    about: "درباره من",
    experience: "تجربه کاری",
    skills: "مهارت‌ها و ابزارها",
    education: "تحصیلات",
    languages: "زبان‌ها",
    projects: "پروژه‌ها",
    contact: "راه‌های تماس"
  },
  contactLabels: {
    email: "ایمیل",
    github: "گیت‌هاب",
    linkedin: "لینکدین",
    gravatar: "گراواتار"
  },
  controls: {
    language: "English",
    themeLight: "تم روشن",
    themeDark: "تم تیره",
    print: "چاپ / PDF"
  },
  education: {
    degree: "کارشناسی علوم کامپیوتر",
    school: "دانشگاه اصفهان",
    date: "سال فراغت: [نیازمند تکمیل]"
  },
  languagesList: [
    { name: "فارسی", level: "زبان مادری" },
    { name: "انگلیسی", level: "[نیازمند تکمیل]" }
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
  projectKind: "پروژه شخصی",
  demoLink: "دموی زنده",
  codeLink: "سورس‌کد",
  projectsCta: "مشاهده همه فعالیت‌ها در گیت‌هاب",
  footer: "آخرین به‌روزرسانی: مهر ۱۴۰۵ — این رزومه فقط شامل اطلاعات تأییدشده است."
};

export const faSkills: SkillGroup[] = [
  {
    title: "وب پایه",
    items: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "TypeScript" }]
  },
  {
    title: "فریم‌ورک فرانت‌اند",
    items: [{ name: "Angular" }, { name: "React", note: "در حال یادگیری" }]
  },
  {
    title: "استایل‌دهی",
    items: [{ name: "Tailwind CSS" }, { name: "Bootstrap" }]
  },
  {
    title: "ابزارهای توسعه",
    items: [{ name: "Git" }, { name: "GitHub" }, { name: "GitLab" }]
  }
];

export const faExperience: Experience[] = [
  {
    companyFa: "اندیشه کامپیوتر",
    companyEn: "Andisheh Computer",
    roleFa: "فرانت‌اند دولوپر Angular",
    roleEn: "Angular Frontend Developer",
    dateFa: "اردیبهشت ۱۴۰۵ — تاکنون",
    dateEn: "May 2026 — Present",
    tags: ["Angular", "TypeScript", "REST API", "RxJS", "Tailwind CSS"],
    bulletsFa: [
      "توسعه و نگهداری صفحه‌ها و کامپوننت‌های Angular با TypeScript.",
      "پیاده‌سازی رابط کاربری از روی طرح‌های Figma با خروجی واکنش‌گرا.",
      "اتصال به REST API با HttpClient و مدیریت داده در سرویس‌ها و کامپوننت‌ها.",
      "پیاده‌سازی فرم‌ها و اعتبارسنجی و مسیریابی (Routing) در صفحات واقعی پروژه.",
      "استفاده از RxJS و signals در سناریوهای واقعی پروژه.",
      "رفع باگ، نگهداری کد و همکاری تیمی شامل بازبینی کد."
    ],
    bulletsEn: []
  }
];
