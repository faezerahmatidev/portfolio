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
    date: "سال فراغت: ۱۴۰۱"
  },
  languagesList: [
    { name: "فارسی", level: "زبان مادری" },
    { name: "انگلیسی", level: "متوسط" }
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
  projectKind: "پروژه شخصی",
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
