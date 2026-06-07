# MINIMALIST PORTFOLIO — Dark & Precise Aesthetic

A high-end, responsive personal portfolio website with a sleek, minimalist dark design. The site focuses on clean structure, premium typography, subtle animations, and modern interactive elements.

> [!NOTE]
> This is a static portfolio showcasing modern front-end design systems and client-side interactions, with zero external dependencies.

---

## ✦ Design System & Aesthetics

- **Dark Interface**: Deep gray/black background (`#0B0B0C`) paired with dark card surfaces (`#1E1E1E` / `#141413`) for comfortable reading.
- **Warm Silver Accent**: Minimalist gray/silver accent color (`#BDBBB2`) used selectively for highlight components, links, and borders.
- **Premium Typography**: Combines Google Fonts [Montserrat](https://fonts.google.com/specimen/Montserrat) (spaced out, lightweight headings) and [Inter](https://fonts.google.com/specimen/Inter) (clean, highly readable body copy).
- **Desktop Glow Halo**: A subtle client-side radial glow effect that dynamically tracks the cursor across the screen.
- **Background Parallax**: Dynamic scrolling texture effect that shifts background position Y as you scroll down the page.

---

## ✦ Core Features

### 1. Viewport Animations
- **Intersection Observer Reveal**: Fade-in and slide-up animations applied automatically to sections and components (`.reveal`) when they enter the viewport.
- **Animated Skill Bars**: Skill progress indicators that animate to their target percentages only when they become visible to the user.

### 2. Layout & Navigation
- **Dynamic Blur Navbar**: Fixed navigation bar that adds a background blur effect, borders, and reduces padding upon scrolling.
- **Scroll Progress Indicator**: A sleek 1px progress bar at the very top of the page representing current reading completion.
- **Active Navigation Tracking**: Highlights the active menu items dynamically depending on which section is currently centered in the viewport.
- **Hamburger Menu**: A custom-coded mobile menu toggle animation for smaller viewport widths.

### 3. Polish & Optimization
- **Touch-Friendly Micro-Interactions**: Custom touch listeners (`touchstart` & `touchend`) that add visual feedback/glow effects for mobile touch controls.
- **Console Branding**: Custom-styled console welcome message printed in the browser developer tools.
- **No Dependencies**: Powered entirely by vanilla HTML5, CSS3, and modern ES6 JavaScript.

---

## 📁 File Structure

```
portfolio/
├── index.html          # HTML structure & portfolio data
├── styles.css          # Color scheme, typography, layouts, and animations
├── script.js           # Interactive features, cursor glow, and scroll logic
└── README.md           # Documentation
```

---

## 🚀 Projects Catalog

The portfolio showcases 4 major projects with full-featured preview cards:

1. **Nexus Arcade** (2026)
   - **Type**: Web Application
   - **Tech Stack**: JavaScript, Canvas API, CSS
   - **URL**: https://memorycard-omega.vercel.app/
   - **Description**: A retro-styled gaming platform featuring classic arcade games with modern web technologies.

2. **Quiz Master** (2026)
   - **Type**: Education
   - **Tech Stack**: React, Node.js, MongoDB
   - **URL**: https://math-one-cyan.vercel.app/
   - **Description**: Interactive quiz platform for C Programming and Mathematics with real-time scoring and analytics.

3. **Game Studio** (2025)
   - **Type**: Game Development
   - **Tech Stack**: Phaser, React, TypeScript
   - **URL**: https://gaming-forge.vercel.app/
   - **Description**: A professional game development hub featuring advanced assets, interactive demos, and studio-grade components.

4. **Beloved Connect** (2025)
   - **Type**: Social Platform
   - **Tech Stack**: Next.js, PostgreSQL, Prisma
   - **URL**: https://beloved-connect-mkkq.vercel.app/
   - **Description**: A sophisticated social connection platform built for meaningful interactions and community building.

---

## 📊 Skills Profile

Displays competencies with clean, animated level bars:
- **HTML / CSS**: 95%
- **JavaScript**: 90%
- **React**: 88%
- **UI / UX Design**: 92%
- **Node.js**: 80%
- **Responsive Design**: 94%

---

## 🛠️ Code Architecture

### CSS Custom Properties (`styles.css`)
Customization of layout styles and color palettes can be handled via CSS variables:

```css
:root {
    --color-bg: #0B0B0C;        /* Main dark background */
    --color-surface: #141413;   /* Secondary section surface */
    --color-card: #1E1E1E;      /* Component card background */
    --color-border: #2A2A2A;    /* Layout lines & borders */
    --color-accent: #BDBBB2;    /* Interactive accent color */
    --color-text-pri: #EDEDED;  /* Highlight text */
    --color-text-sec: #AFAFAF;  /* Secondary readable text */
    
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

### JavaScript Engine Components (`script.js`)

- `initNavbar()`: Detects scrolling to apply/remove the `.scrolled` state (adding background blur and reducing vertical padding).
- `initSmoothScroll()`: Hooks standard link anchors (`#`) to animate page scrolling, subtracting fixed navbar offsets.
- `initRevealAnimations()`: Triggers viewport animations via `IntersectionObserver` on `.reveal` elements.
- `initSkillBars()`: Runs target fill-width transitions for the skills grid metrics when they enter viewport visibility.
- `initScrollProgress()`: Renders the active layout width of the top `#scrollProgress` bar.
- `initMobileMenu()`: Manages mobile overlay display, disabling page scroll in opened state.
- `initTouchGlow()`: Implements quick micro-animation feedback to mobile interactions.
- `initActiveNav()`: Observes viewport locations to highlight correct navbar items on scroll.
- `initBackgroundParallax()`: Performs subtle body background position translations.
- `initCursorGlow()`: Spawns a gradient follower tracking non-touch screen pointers.

---

## 💻 Customization Guide

### Updating Content
- **Bio & Identity**: Modify the `.hero-content` text block in [index.html](file:///e:/portfolio/index.html).
- **Personal Details**: Adjust metrics inside `.about-details` (Years, Projects, Clients) in [index.html](file:///e:/portfolio/index.html).
- **Project Items**: Update the `.projects-grid` with new cards (`.project-card`) featuring local preview pictures and direct Vercel links.
- **Contact Channels**: Edit mailto references (`shashujasmine@example.com`) and GitHub links (`@shashujasmine`) in the contact section.

### Local Development Setup
To run the portfolio without any CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```
Open `http://localhost:8000` in your web browser.

---

## 🌐 Compatibility

- **Chrome / Edge / Firefox / Safari**: Fully compatible.
- **Required Browser APIs**: CSS Grid, Flexbox, Custom Properties, `IntersectionObserver`, and modern ES6 JS.
- **Internet Explorer**: Not supported.

---

## 📄 License
This portfolio template is open-source. Feel free to use and modify it for your own branding.
