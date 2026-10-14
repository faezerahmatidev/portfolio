# Faeze Rahmati — Portfolio Website (FA / EN)

Personal portfolio website for **Faeze Rahmati, Angular Frontend Developer**, built to match the supplied Figma community design ("Designer_Developer Portfolio") — light + dark themes, responsive with a mobile layout.

**Bilingual:** English (LTR, Poppins) and Persian (RTL, Vazirmatn) with a navbar language switcher; choice is saved in `localStorage`. The Persian "Download Resume" button downloads the Persian PDF.

> ⚠️ Local use only. Nothing here is deployed; pushing to GitHub happens only on explicit request.

## Run locally

```powershell
cd portfolio
npm install
npm run dev      # http://localhost:5174 (add ?theme=dark for dark)
```

```powershell
npm run build    # TypeScript check + production build in dist/
npm run preview  # serve the production build
```

Or double-click `start-portfolio.bat` in the project root.

## Sections (same order as the Figma reference)

Navbar (Home, About, Projects, Services, Resume + Contact button + theme toggle) → Hero (photo, name, role, bio, Contact Me) → About Me (+ Download Resume, linked to `public/Faeze-Rahmati-Resume.pdf`) → What I do / My Services (5 service cards + 1 visual tile) → Projects (working category filter: All, Angular, HTML & CSS, Bootstrap; 6 verified projects with real thumbnails, live demo + source links) → Get In Touch (form submits via the visitor's email app — no backend) → "Let's Work Together" footer with email pill → footer bar with social links.

## Content rules (must keep)

- Only real, verified projects. Each card links a live demo that was opened and checked + the public repo.
- Tech labels come from the actual project source (inspected HTML / repo metadata), never guessed.
- No fake stats, testimonials, skill bars or placeholder text.

## Files worth knowing

- `src/data.ts` → `src/content/fa.ts` + `src/content/en.ts` — every string, service, project and link in one place per language
- `src/images.ts` — shared project thumbnails
- `src/assets/projects/*.jpg` — real screenshots of each live demo (retake if a demo changes)
- `src/assets/avatar.jpg` — profile photo (local copy, approved via Gravatar)
- `src/assets/fonts/` — Poppins 400–800 + logo script (self-hosted, OFL)
- `public/Faeze-Rahmati-Resume.pdf` — the downloadable resume (copy of `../pdf/resume-en-light.pdf`)
