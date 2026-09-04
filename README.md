# Zaitoon Educational & Welfare Society — Website 🫒

Website for the **Zaitoon Educational and Welfare Society**, a registered non-profit (est. 2010) bringing free education, girls' schooling and vocational training to **Siddharth Nagar**, one of the poorest districts of Uttar Pradesh, India.

A hand-built, framework-free static site with a custom design system, built to present the Society's work and drive donations.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Overview

The site tells the Society's story — the challenge the district faces, what the charity does, its projects on the ground, and how to help — and gives donors clear, direct ways to give. It's fully responsive, accessible, and built without any framework or build step, so it's fast to load and trivial to host.

## 🔨 What I Built

- **Seven-page website** covering the full charity story, projects, and donation journey (see below).
- **Custom design system** — a cohesive olive-and-gold visual language driven by CSS custom properties (design tokens), so colours, spacing and type stay consistent across every page.
- **Bespoke brand mark** — a hand-drawn **olive-sprig motif built in inline SVG**, reused as the logo accent and as decorative "leaf" icons on feature cards.
- **Auto-rotating hero slideshow** — a self-contained carousel with autoplay, dot indicators, and previous/next controls, written in vanilla JS.
- **Scroll-reveal animations** — content fades in on scroll using the `IntersectionObserver` API, with a no-JS fallback so nothing is ever hidden.
- **Responsive navigation** — sticky, blurred header with a mobile hamburger menu and a dropdown sub-nav.
- **Donation journey** — a "Get Involved" page with direct bank-transfer details (for gifts from within India and abroad) and clear calls to action throughout the site.
- **Contact form** — accessible form with client-side handling (ready to wire to a backend or form service).

## 📄 Pages

| Page | Purpose |
| ---- | ------- |
| `index.html` | Home — hero, mission, the challenge, what we do, featured projects, impact stats |
| `about.html` | Who we are, the district, founder's message, how the Society is run |
| `projects.html` | All projects — girls' school, schooling, vocational training, books, welfare |
| `girls-school.html` | Dedicated page for the Girls' School & College project |
| `blue-ink-school.html` | Blue Ink School International + boys' boarding facility |
| `get-involved.html` | Ways to give, including direct bank-transfer details |
| `contact.html` | Contact form and details |

## 🎨 Design System

Defined once as CSS variables and reused everywhere:

| Token | Value | Role |
| ----- | ----- | ---- |
| `--ink` | `#20301F` | Deep olive-ink — dark sections, headings |
| `--olive` | `#4A5D32` | Primary brand green |
| `--leaf` | `#6E8B3D` | Lighter accent / hovers |
| `--gold` | `#D9A441` | Wheat-gold — CTAs and emphasis |
| `--paper` | `#FAF7F0` | Warm paper background |

- **Typography:** *Fraunces* (display serif) paired with *Source Sans 3* (body), loaded from Google Fonts
- **Fluid sizing:** headings and spacing scale smoothly with the viewport using CSS `clamp()`
- **Consistent components:** buttons, cards, section bands and grids all share tokenised styles

## ⚙️ Technical Highlights

- **Zero dependencies / no build step** — pure HTML, CSS and vanilla JavaScript
- **`IntersectionObserver`** for performant scroll animations (no scroll-event thrashing)
- **Progressive enhancement** — the site works fully without JS; JS only adds polish
- **Auto-updating footer year** via a small script
- **Semantic, hand-written markup** kept clean and readable

## ♿ Accessibility

- "Skip to content" link for keyboard users
- ARIA attributes throughout (`aria-expanded`, `aria-current`, `aria-label`, `aria-hidden`)
- Semantic landmarks (`header`, `main`, `nav`, `footer`) and descriptive `alt` text
- Keyboard-operable navigation and carousel controls

## 🛠️ Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Markup | HTML5 (semantic) |
| Styling | CSS3 with custom properties, Flexbox/Grid, `clamp()` fluid type |
| Behaviour | Vanilla JavaScript (IntersectionObserver, carousel, nav) |
| Fonts | Google Fonts — Fraunces + Source Sans 3 |
| Build | None — static site |

## ▶️ Run Locally

```bash
git clone https://github.com/<your-username>/zaitoon-society.git
cd zaitoon-society
npx serve .        # or just open index.html
```

## 📂 Project Structure

```
zaitoon-society/
├── index.html
├── about.html
├── projects.html
├── girls-school.html
├── blue-ink-school.html
├── get-involved.html
├── contact.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── images/
```

## 🏛️ About the Organisation

Zaitoon Educational and Welfare Society — Society Reg. No. G-46588 · FCRA Reg. No. 137360019 · established 2010, Siddharth Nagar, Uttar Pradesh, India.

## 👤 Author

Website designed and built by **Musab** — [LinkedIn](https://www.linkedin.com/in/musab-akhtar/) 
