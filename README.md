# NexaFlow — SaaS Landing Page

A responsive marketing landing page for **NexaFlow**, a workflow and project management platform. Built with React and Vite as a front-end development internship project.

## Live Demo

**🔗 Website:** [https://nexaflow-landing-page-sigma.vercel.app](https://nexaflow-landing-page-sigma.vercel.app)

**📁 Source code:** [https://github.com/Bermishasu2006/nexaflow-landing-page](https://github.com/Bermishasu2006/nexaflow-landing-page)

## About the Project

> **NexaFlow is a fictional product.** It is not a real company or service. The brand, customer names, statistics and pricing on the page were created for this assignment to demonstrate a realistic commercial SaaS landing page.

The page introduces NexaFlow to potential customers and guides them toward requesting a demo.

> **Frontend-only form:** There is no backend or database. The demo request form validates input in the browser and shows a success message, but **no data is sent to a server or stored anywhere**. The success message itself states this to the user.

## Website Sections

| # | Section | What it contains |
| --- | --- | --- |
| 1 | **Navigation** | NexaFlow logo, links to Home, Features, How It Works, Pricing and Contact, a Get Started button and a mobile hamburger menu |
| 2 | **Hero** | "Work Smarter. Achieve More." headline, short description, Get Started and Explore Features buttons, and a dashboard mockup |
| 3 | **Features** | Six feature cards: Smart Task Management, Project Progress Tracking, Team Collaboration, Productivity Analytics, Workflow Automation and Secure by Default |
| 4 | **About / How It Works** | What NexaFlow does, key benefits, headline stats and a three-step guide |
| 5 | **Pricing** | Starter (Free) and Professional ($12/month) plans, with Professional highlighted as recommended |
| 6 | **Contact / Demo Request** | Form with full name, email, company (optional), plan of interest (optional) and message |

A footer repeats the section links and includes a Back to top link.

## Features

- **Sticky navigation** with smooth scrolling, active-section highlighting and an accessible mobile hamburger menu (closes on link click, Escape, or resize to desktop)
- **Hero section** with a dashboard mockup built in HTML/CSS (no image files)
- **Six feature cards** with Lucide icons and hover effects
- **About + three-step "How It Works"** layout
- **Two pricing plans** (Starter: Free, Professional: $12/month) with a highlighted recommended plan; pricing buttons scroll to the form and pre-select the chosen plan
- **Demo request form** with required-field and email-format validation, inline error messages, a loading state and a success message (no page reload) that states it is a frontend demonstration and no data is transmitted
- **Scroll-reveal animations** that respect the user's `prefers-reduced-motion` setting
- **Accessibility:** semantic landmarks, labelled form fields, `aria-invalid` / `aria-describedby` on errors, a skip link and visible focus states
- **Responsive layout** for desktop, tablet and mobile (tested down to 320px wide)

## Technologies

| Tool | Purpose |
| --- | --- |
| React 18 | Component-based UI |
| Vite 6 | Dev server and production bundler |
| JavaScript (ES modules) | Interactivity and form logic |
| CSS3 | Custom properties, Grid, Flexbox, media queries, animations |
| Lucide React | Icon set |

## Project Structure

```
nexaflow-landing-page/
├── index.html                  # HTML shell, meta tags, Google Fonts
├── public/
│   └── favicon.svg             # Brand icon
├── screenshots/                # Desktop and mobile screenshots
├── src/
│   ├── main.jsx                # Entry point — mounts <App />
│   ├── App.jsx                 # Page layout and shared "selected plan" state
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar and mobile menu
│   │   ├── Hero.jsx            # Hero section
│   │   ├── DashboardMockup.jsx # HTML/CSS dashboard illustration
│   │   ├── Features.jsx        # Features section
│   │   ├── FeatureCard.jsx     # Reusable feature card
│   │   ├── HowItWorks.jsx      # About section and three steps
│   │   ├── Pricing.jsx         # Pricing plans
│   │   ├── Contact.jsx         # Demo request form, validation and success state
│   │   ├── FormField.jsx       # Reusable label + input + error message wrapper
│   │   ├── SectionHeader.jsx   # Reusable section heading
│   │   ├── Logo.jsx            # Brand logo
│   │   └── Footer.jsx          # Footer links and Back to top
│   ├── data/content.js         # All text content: nav links, features, steps, plans
│   ├── hooks/useScrollReveal.js  # Fade-in-on-scroll behaviour
│   └── styles/                 # global.css (tokens, buttons) + one CSS file per section
├── vite.config.js              # Vite configuration (React plugin)
├── netlify.toml                # Netlify build settings (alternative host)
├── package.json                # Scripts and dependencies
└── package-lock.json           # Exact dependency versions
```

## Getting Started

**Requirements:** Node.js 18, 20 or 22+ and npm.

```bash
# 1. Get the code and open the project folder
git clone https://github.com/Bermishasu2006/nexaflow-landing-page.git
cd nexaflow-landing-page

# 2. Install dependencies
npm install

# 3. Start the development server (http://localhost:5173)
npm run dev

# 4. Create a production build in the dist/ folder
npm run build

# 5. Preview the production build locally (http://localhost:4173)
npm run preview
```

## Deployment

The site is deployed on **Vercel** as a static site, built from the `main` branch of the GitHub repository.

- **Production URL:** https://nexaflow-landing-page-sigma.vercel.app
- **Framework preset:** Vite
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `dist`

No environment variables or server configuration are required. The project can also be deployed on **Netlify**; `netlify.toml` already sets the build command and the `dist` publish folder.

## Testing

The site was checked with an automated browser test script (Puppeteer driving headless Google Chrome) during development. The script is a development tool and is not included in this repository.

**Result: 52 of 52 checks passed** against the local development server, the local production build (`npm run preview`) and the live Vercel deployment (12 November 2026).

The checks covered:

- All six sections present, with the required headline, feature cards, three steps, both pricing plans and labelled form fields
- No empty or broken links
- Every navigation and footer link scrolls to its section, and the active link is highlighted
- Hero, navbar and pricing buttons go to the right sections; pricing buttons pre-select the plan in the form
- Form validation: empty fields, invalid email format, focus moved to the first error
- Successful submission: loading state, success message with the frontend-only notice, no page reload, focus moved to the message, form reset with "Send another request"
- Mobile menu opens, closes on link click and closes on Escape at 820px, 375px and 320px widths
- No horizontal overflow at 1440px, 820px, 375px and 320px widths
- No console errors or failed network requests

**Not covered by automated tests:** screen-reader testing, browsers other than Chrome (such as Firefox and Safari), and physical mobile devices (mobile layouts were tested with Chrome's device emulation).

## Design Decisions and Challenges

- A white/light base with a deep navy primary color and a single purple accent keeps the brand professional and avoids heavy gradients.
- The hero dashboard is built from HTML and CSS rather than an image, so it stays sharp at every size and adapts to mobile by hiding the sidebar and stacking panels.
- All copy lives in `src/data/content.js`, so components focus on layout and content can be edited in one place.
- Smooth scrolling uses native anchor links with CSS `scroll-behavior` and `scroll-margin-top`, so sections are not hidden behind the fixed navbar and links still work without JavaScript.
- Scroll reveals use a CSS keyframe animation instead of a transition, so they do not conflict with the cards' hover lift effects.
- The form validates on blur and on submit, moves focus to the first invalid field, and moves focus to the success message, so keyboard and screen-reader users get clear feedback.
- Layouts were checked at 1440px, 820px, 375px and 320px to make sure there is no horizontal overflow.

## Screenshots

**Desktop — full page**

![NexaFlow desktop full page](screenshots/desktop-full.png)

| Mobile — full page | Mobile — navigation menu open |
| --- | --- |
| ![NexaFlow mobile full page](screenshots/mobile-full.png) | ![NexaFlow mobile navigation menu open](screenshots/mobile-menu.png) |
