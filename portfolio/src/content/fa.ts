import type { NavLink, Service, Project, Filter } from "../types";

export const site = {
  name: "فائزه رحمتی",
  logo: "Faeze",
  role: "فرانت‌اند دولوپر Angular",
  heroBio:
    "فرانت‌اند دولوپر Angular با تجربه حرفه‌ای در شرکت اندیشه کامپیوتر. رابط‌های واکنش‌گرا، تمیز و قابل نگهداری از طرح Figma تا کد نهایی می‌سازم.",
  email: "rahmati.faeze1997@gmail.com",
  github: "https://github.com/faezerahmatidev",
  linkedin: "https://linkedin.com/in/faeze-rahmati",
  gravatar: "https://gravatar.com/collectortotally73d11dc7aa",
  resumePdf: "./Faeze-Rahmati-Resume-FA.pdf",
  about: [
    "سلام! من فائزه رحمتی هستم، فرانت‌اند دولوپر با تمرکز بر Angular، TypeScript و CSS مدرن. حدود ۶ ماه است که در شرکت اندیشه کامپیوتر در تهران روی رابط‌های واقعی کار می‌کنم.",
    "با کامپوننت‌ها، سرویس‌ها، روتینگ، فرم‌ها و REST API کار می‌کنم و طرح‌های Figma را به کد واکنش‌گرا و قابل نگهداری تبدیل می‌کنم که روی هر صفحه‌ای درست کار کند.",
    "در حال حاضر مهارت‌های فرانت‌اند را تقویت می‌کنم و React یاد می‌گیرم. بیایید با هم کار کنیم — اول پروژه‌های منتخب را ببینید، بعد در تماس باشیم."
  ],
  contactBtn: "تماس با من",
  aboutTitle: "درباره من",
  aboutSub: "مرا بهتر بشناسید",
  downloadResume: "دانلود رزومه",
  servicesTitle: "چه کار می‌کنم",
  servicesSub: "خدمات من",
  projectsTitle: "پروژه‌ها",
  projectsSub: "نمونه‌کارهای من",
  sourceCode: "سورس‌کد",
  viewAll: "مشاهده همه",
  showLess: "بستن",
  contactTitle: "در تماس باشیم",
  contactSub: "بیایید با هم کار کنیم",
  fieldName: "نام",
  fieldNamePh: "نام شما",
  fieldEmail: "ایمیل",
  fieldEmailPh: "email@example.com",
  fieldService: "خدمت",
  fieldServicePh: "خدمتی را انتخاب کنید",
  fieldMessage: "پیام",
  fieldMessagePh: "درباره پروژه‌تان بنویسید...",
  submitBtn: "ارسال پیام",
  sentNote: "در حال باز کردن ایمیل شما برای ارسال پیام…",
  footerCta: ["بیایید", "با هم کار کنیم -"],
  footerRights: "© 2026 فائزه رحمتی. تمامی حقوق محفوظ است.",
  langButton: "English",
  contactNav: "تماس",
  themeToDark: "تغییر به تم تیره",
  themeToLight: "تغییر به تم روشن",
  menuOpen: "باز کردن منو",
  menuClose: "بستن منو",
  liveDemo: "دموی زنده"
};

export const navLinks: NavLink[] = [
  { href: "#top", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#services", label: "خدمات" },
  { href: "#contact", label: "رزومه" }
];

export const services: Service[] = [
  {
    icon: "angular",
    title: "توسعه Angular",
    desc: "اپ‌های تک‌صفحه‌ای کامپوننت‌محور با TypeScript: کامپوننت‌های قابل استفاده مجدد، روتینگ و فرم‌های واکنشی با اعتبارسنجی."
  },
  {
    icon: "responsive",
    title: "رابط‌های واکنش‌گرا",
    desc: "چیدمان موبایل‌اول با Tailwind CSS و Bootstrap که روی موبایل، تبلت و دسکتاپ درست دیده می‌شود."
  },
  {
    icon: "api",
    title: "اتصال REST API",
    desc: "سرویس‌های HttpClient، جریان داده RxJS و مدیریت تمیز state بین کامپوننت‌ها و سرویس‌ها."
  },
  {
    icon: "figma",
    title: "تبدیل Figma به کد",
    desc: "پیاده‌سازی دقیق طرح‌های Figma — فاصله‌ها، تایپوگرافی و رفتار واکنش‌گرا."
  },
  {
    icon: "maintenance",
    title: "نگهداری و بازبینی",
    desc: "رفع باگ، کد خوانا و بازبینی تیمی تا پروژه‌ها با رشد، سالم بمانند."
  }
];

export const projectFilters: Filter[] = [
  { key: "all", label: "همه" },
  { key: "angular", label: "Angular" },
  { key: "tailwind", label: "Tailwind" },
  { key: "html", label: "HTML و CSS" },
  { key: "bootstrap", label: "Bootstrap" }
];

export const projects: Project[] = [
  {
    slug: "golden-brew",
    title: "گلدن برو — فروشگاه قهوه",
    tech: "Tailwind CSS · HTML · JavaScript",
    category: "tailwind",
    demo: "https://faezerahmatidev.github.io/golden-brew/",
    repo: "https://github.com/faezerahmatidev/golden-brew"
  },
  {
    slug: "crm-dashboard",
    title: "داشبورد CRM",
    tech: "Angular · TypeScript · SCSS",
    category: "angular",
    demo: "https://faezerahmatidev.github.io/CRM-Dashboard/",
    repo: "https://github.com/faezerahmatidev/CRM-Dashboard"
  },
  {
    slug: "nobatifa",
    title: "نوبتیفا — اپ رزرو نوبت اتوسرویس",
    tech: "Angular · TypeScript · Tailwind CSS",
    category: "angular",
    demo: "https://faezerahmatidev.github.io/Nobatifa-Website/",
    repo: "https://github.com/faezerahmatidev/Nobatifa-Website"
  },
  {
    slug: "nobatifa-admin",
    title: "نوبتیفا — پنل مدیریت",
    tech: "Angular · TypeScript",
    category: "angular",
    demo: "https://faezerahmatidev.github.io/Nobatifa-Admin/",
    repo: "https://github.com/faezerahmatidev/Nobatifa-Admin"
  },
  {
    slug: "interactive-art",
    title: "لندینگ Interactive Art",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/interactive-art-landing-page/",
    repo: "https://github.com/faezerahmatidev/interactive-art-landing-page"
  },
  {
    slug: "fastfood",
    title: "لندینگ سفارش غذا",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/fastfood-landing-page/",
    repo: "https://github.com/faezerahmatidev/fastfood-landing-page"
  },
  {
    slug: "camping",
    title: "وب‌سایت Camping Discoveries",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/CampingDiscoveries/",
    repo: "https://github.com/faezerahmatidev/CampingDiscoveries"
  },
  {
    slug: "nft",
    title: "مارکت‌پلیس NftVision",
    tech: "HTML · CSS · Bootstrap 5",
    category: "bootstrap",
    demo: "https://faezerahmatidev.github.io/NftVision-Marketplace/",
    repo: "https://github.com/faezerahmatidev/NftVision-Marketplace"
  }
];

export const serviceOptions = [
  "توسعه Angular",
  "رابط واکنش‌گرا",
  "اتصال API",
  "سایر"
];
