# 🎂 Amora Bloom

A modern, responsive website for celebrating special birthday moments with personalized party planning and gift registry services.

## 📋 Overview

**Amora Bloom** is a React-based web application built with [Vite](https://vitejs.dev) that provides comprehensive birthday celebration services. The platform specializes in creating magical birthday experiences through custom party planning, gift registry services, and curated product offerings.

### Key Features
- **Custom Party Planning** — Expert team assistance with themed decorations and entertainment
- **Gift Registry Service** — Easy wishlist creation for family and friends
- **Product Showcase** — Curated selection of party and gift items
- **Testimonials** — Real customer experiences and success stories
- **Call-to-Action** — Easy contact and booking interface
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.1.1** | UI library |
| **Vite 7.1.7** | Build tool & dev server |
| **ESLint 9.36.0** | Code linting & quality |
| **CSS 3** | Styling & responsiveness |

---

## 📁 Project Structure

```
Amora Bloom/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx     # Reusable button component
│   │   │   └── Card.jsx       # Reusable card component
│   │   ├── layout/
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   ├── Footer.jsx     # Footer section
│   │   │   └── layout.css     # Layout styles
│   │   └── sections/
│   │       ├── Hero.jsx       # Hero/banner section
│   │       ├── Features.jsx   # Features showcase
│   │       ├── BirthdayParty.jsx
│   │       ├── AllProducts.jsx
│   │       ├── NewInstore.jsx
│   │       ├── Testimonial.jsx
│   │       ├── CTA.jsx        # Call-to-action section
│   │       ├── section.css    # Hero & section styles
│   │       └── [section].css  # Individual section styles
│   ├── assets/
│   │   └── images/            # Image assets
│   ├── App.jsx                # Main app component
│   ├── App.css                # App-level styles
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
└── .gitignore                 # Git ignored files
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ 
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Amora Bloom"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173` (or the next available port)

---

## 📦 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev** | `npm run dev` | Start Vite development server with hot module reload |
| **Build** | `npm run build` | Build optimized production bundle |
| **Preview** | `npm run preview` | Preview production build locally |
| **Lint** | `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Component Architecture

### Layout Components
- **Header** — Navigation and branding
- **Footer** — Footer with links and info

### Section Components
1. **Hero** — Main banner with call-to-action and statistics
2. **Features** — Two-column layout highlighting services with images
3. **BirthdayParty** — Birthday party offerings
4. **AllProducts** — Product catalog/gallery
5. **NewInstore** — New arrivals showcase
6. **Testimonial** — Customer testimonials
7. **CTA** — Call-to-action section for conversions

### Common Components
- **Button** — Reusable button component
- **Card** — Reusable card/container component

---

## 🎯 Design & Styling

### Color Palette
- **Primary Accent**: Teal (`#0fa79a`)
- **Dark Background**: Deep Navy (`#0b1220`)
- **Light Text**: White (`#ffffff`)
- **Secondary Text**: Light Gray (`#666`)

### Responsive Breakpoints
| Breakpoint | Max Width | Purpose |
|-----------|-----------|---------|
| **Desktop** | 1440px | Large screens |
| **Tablet** | 1024px | Tablets and small laptops |
| **Mobile** | 560px | Mobile phones |

### Key Features
- **Flexible Typography** — Uses `clamp()` for fluid font scaling
- **Flexbox Layouts** — Modern, responsive flexbox-based layouts
- **CSS Variables** — CSS custom properties for consistent theming
- **Smooth Transitions** — Hover effects and interactive elements

---

## 🔧 Development Workflow

### Adding a New Section
1. Create a new `.jsx` file in `src/components/sections/`
2. Create corresponding `.css` file for styles
3. Import and add component to `src/App.jsx`
4. Ensure responsive design with media queries

### Component Template
```jsx
import React from "react";
import "./SectionName.css";

const SectionName = () => {
  return (
    <section className="section-name">
      {/* Your content here */}
    </section>
  );
};

export default SectionName;
```

### Code Quality
- Run `npm run lint` before committing
- Follow ESLint rules defined in `eslint.config.js`
- Keep components small and focused on single responsibility

---

## 📱 Responsive Design

All sections include media queries for optimal viewing across devices:
- **Desktop (1200px+)**: Full-featured layouts with side-by-side content
- **Tablet (768px–1024px)**: Adjusted spacing and font sizes
- **Mobile (<768px)**: Single-column layouts, hidden navigation elements

Example responsive pattern used:
```css
/* Desktop */
.component { flex-direction: row; }

/* Tablet */
@media (max-width: 1024px) {
  .component { flex-direction: column; gap: 40px; }
}

/* Mobile */
@media (max-width: 560px) {
  .component { padding: 20px; font-size: clamp(14px, 4vw, 18px); }
}
```

---

## 🖼️ Assets & Images

Place all images in `src/assets/images/`:
- Hero background images
- Section showcase images
- Product images
- Testimonial avatars

Update image paths in CSS/JSX as needed:
```jsx
<img src="/src/assets/images/image-name.jpg" alt="Description" />
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Images not loading** | Verify image path in `src/assets/images/` and check browser console |
| **Styles not applying** | Check CSS file is imported in component; clear browser cache |
| **Dev server not starting** | Delete `node_modules` and `package-lock.json`, then run `npm install` |
| **Lint errors** | Run `npm run lint` and fix reported issues |

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)

---

## 📄 License

This project is private and maintained by the Amora Bloom team.

---

## 📧 Contact & Support

For questions, feature requests, or bug reports, please reach out to the development team.

---

**Last Updated:** November 2025  
**Version:** 0.0.0
