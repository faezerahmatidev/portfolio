import nobatifaImg from "./assets/projects/nobatifa.jpg";
import nobatifaAdminImg from "./assets/projects/nobatifa-admin.jpg";
import interactiveArtImg from "./assets/projects/interactive-art.jpg";
import fastfoodImg from "./assets/projects/fastfood.jpg";
import campingImg from "./assets/projects/camping.jpg";
import nftImg from "./assets/projects/nft.jpg";

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
  img: string;
  demo: string;
  repo: string;
}

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
  contactIntro: "Prefer email or a form — either way, I usually reply within a day.",
  footerRights: "© 2026 Faeze Rahmati. All rights reserved."
};

export const navLinks = [
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

export const projectFilters = [
  { key: "all", label: "All" },
  { key: "angular", label: "Angular" },
  { key: "html", label: "HTML & CSS" },
  { key: "bootstrap", label: "Bootstrap" }
] as const;

export const projects: Project[] = [
  {
    slug: "nobatifa",
    title: "Nobatifa — Vehicle-Service Booking App",
    tech: "Angular · TypeScript · Tailwind CSS",
    category: "angular",
    img: nobatifaImg,
    demo: "https://faezerahmatidev.github.io/Nobatifa-Website/",
    repo: "https://github.com/faezerahmatidev/Nobatifa-Website"
  },
  {
    slug: "nobatifa-admin",
    title: "Nobatifa — Admin Panel",
    tech: "Angular · TypeScript",
    category: "angular",
    img: nobatifaAdminImg,
    demo: "https://faezerahmatidev.github.io/Nobatifa-Admin/",
    repo: "https://github.com/faezerahmatidev/Nobatifa-Admin"
  },
  {
    slug: "interactive-art",
    title: "Interactive Art Landing Page",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    img: interactiveArtImg,
    demo: "https://faezerahmatidev.github.io/interactive-art-landing-page/",
    repo: "https://github.com/faezerahmatidev/interactive-art-landing-page"
  },
  {
    slug: "fastfood",
    title: "Fastfood Landing Page",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    img: fastfoodImg,
    demo: "https://faezerahmatidev.github.io/fastfood-landing-page/",
    repo: "https://github.com/faezerahmatidev/fastfood-landing-page"
  },
  {
    slug: "camping",
    title: "Camping Discoveries Website",
    tech: "HTML · CSS · JavaScript",
    category: "html",
    img: campingImg,
    demo: "https://faezerahmatidev.github.io/CampingDiscoveries/",
    repo: "https://github.com/faezerahmatidev/CampingDiscoveries"
  },
  {
    slug: "nft",
    title: "NftVision Marketplace (RTL)",
    tech: "HTML · CSS · Bootstrap 5",
    category: "bootstrap",
    img: nftImg,
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
