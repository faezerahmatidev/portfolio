import type { NavLink, Service, Project, Filter } from "../types";
import { projectImages } from "../images";

export const site = {
  name: "Faeze Rahmati",
  logo: "Faeze",
  role: "Angular Frontend Developer",
  heroBio:
    "Angular Frontend Developer with professional experience at Andishe Computer. I build responsive, clean and maintainable web interfaces from Figma designs to production code.",
  email: "rahmati.faeze1997@gmail.com",
  github: "https://github.com/faezerahmatidev",
  linkedin: "https://linkedin.com/in/faeze-rahmati",
  gravatar: "https://gravatar.com/collectortotally73d11dc7aa",
  resumePdf: "./Faeze-Rahmati-Resume.pdf",
  about: [
    "Hi there! I'm Faeze Rahmati, a frontend developer focused on Angular, TypeScript and modern CSS. For the past 6 months I've been building real interfaces at Andishe Computer in Tehran.",
    "I work with components, services, routing, forms and REST APIs, and I turn Figma designs into responsive, maintainable code that works on every screen.",
    "I'm currently strengthening my frontend skills and learning React. Let's work together — scroll down to see selected projects, then get in touch."
  ],
  contactBtn: "Contact Me",
  aboutTitle: "About Me",
  aboutSub: "Get to know me",
  downloadResume: "Download Resume",
  servicesTitle: "What I do",
  servicesSub: "My Services",
  projectsTitle: "Projects",
  projectsSub: "Some of my work",
  sourceCode: "Source code",
  viewAll: "View all",
  showLess: "Show less",
  contactTitle: "Get In Touch",
  contactSub: "Lets work together",
  fieldName: "Name",
  fieldNamePh: "Your name",
  fieldEmail: "Email",
  fieldEmailPh: "email@example.com",
  fieldService: "Service",
  fieldServicePh: "Select a service",
  fieldMessage: "Message",
  fieldMessagePh: "Tell me about your project...",
  submitBtn: "Get In Touch",
  sentNote: "Opening your email app to send the message…",
  footerCta: ["Let’s", "Work Together -"],
  footerRights: "© 2026 Faeze Rahmati. All rights reserved.",
  langButton: "فارسی",
  contactNav: "Contact",
  themeToDark: "Switch to dark theme",
  themeToLight: "Switch to light theme",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  liveDemo: "live demo"
};

export const navLinks: NavLink[] = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Resume" }
];

export const services: Service[] = [
  {
    icon: "angular",
    title: "Angular Development",
    desc: "Component-based single-page apps with TypeScript: reusable components, routing, and reactive forms with validation."
  },
  {
    icon: "responsive",
    title: "Responsive Interfaces",
    desc: "Mobile-first layouts with Tailwind CSS and Bootstrap that look right on phones, tablets and desktops."
  },
  {
    icon: "api",
    title: "REST API Integration",
    desc: "HttpClient services, RxJS data flows and clean state handling between components and services."
  },
  {
    icon: "figma",
    title: "Figma to Code",
    desc: "Pixel-faithful implementation of Figma designs — spacing, typography and responsive behavior included."
  },
  {
    icon: "maintenance",
    title: "Maintenance & Review",
    desc: "Bug fixing, readable code and team code review so projects stay healthy as they grow."
  }
];

export const projectFilters: Filter[] = [
  { key: "all", label: "All" },
  { key: "angular", label: "Angular" },
  { key: "html", label: "HTML & CSS" },
  { key: "bootstrap", label: "Bootstrap" }
];

export const projects: Project[] = [
  {
    slug: "golden-brew",
    title: "Golden Brew — Coffee E-Commerce",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/golden-brew/",
    repo: "https://github.com/faezerahmatidev/golden-brew"
  },
  {
    slug: "crm-dashboard",
    title: "CRM Dashboard",
    tech: "Angular · TypeScript · SCSS",
    category: "angular",
    demo: "https://faezerahmatidev.github.io/CRM-Dashboard/",
    repo: "https://github.com/faezerahmatidev/CRM-Dashboard"
  },
  {
    slug: "nobatifa",
    title: "Nobatifa — Vehicle-Service Booking App",
    tech: "Angular · TypeScript · Tailwind CSS",
    category: "angular",
    demo: "https://faezerahmatidev.github.io/Nobatifa-Website/",
    repo: "https://github.com/faezerahmatidev/Nobatifa-Website"
  },
  {
    slug: "nobatifa-admin",
    title: "Nobatifa — Admin Panel",
    tech: "Angular · TypeScript",
    category: "angular",
    demo: "https://faezerahmatidev.github.io/Nobatifa-Admin/",
    repo: "https://github.com/faezerahmatidev/Nobatifa-Admin"
  },
  {
    slug: "interactive-art",
    title: "Interactive Art Landing Page",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/interactive-art-landing-page/",
    repo: "https://github.com/faezerahmatidev/interactive-art-landing-page"
  },
  {
    slug: "fastfood",
    title: "Fastfood Landing Page",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/fastfood-landing-page/",
    repo: "https://github.com/faezerahmatidev/fastfood-landing-page"
  },
  {
    slug: "camping",
    title: "Camping Discoveries Website",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    demo: "https://faezerahmatidev.github.io/CampingDiscoveries/",
    repo: "https://github.com/faezerahmatidev/CampingDiscoveries"
  },
  {
    slug: "nft",
    title: "NftVision Marketplace (RTL)",
    tech: "HTML · CSS · Bootstrap 5",
    category: "bootstrap",
    demo: "https://faezerahmatidev.github.io/NftVision-Marketplace/",
    repo: "https://github.com/faezerahmatidev/NftVision-Marketplace"
  }
];

export const serviceOptions = [
  "Angular Development",
  "Responsive UI",
  "API Integration",
  "Other"
];

export { projectImages };
