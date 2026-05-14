# Sparsh Joshi — Portfolio Website

A modern, animated portfolio built with **Next.js 14**, **Tailwind CSS**, and custom CSS animations.

## 🎨 Design
- **Dark navy** background with dot-grid texture
- **Vibrant accents**: Cyan `#00E5FF`, Coral `#FF4D5A`, Lime `#A8FF3E`, Amber `#FFB547`
- **Fonts**: Syne (display) + DM Sans (body)
- **Glassmorphism** cards with glowing borders
- **Scroll-reveal animations** on every section
- **Typewriter** hero with rotating roles
- **Floating orbital** decorative elements

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
npm start
```

## 📁 Structure
```
sparsh-portfolio/
├── app/
│   ├── layout.js        # Root layout + fonts
│   ├── page.js          # Main page (assembles all sections)
│   └── globals.css      # All animations & custom styles
├── components/
│   ├── Navbar.js        # Sticky nav with Download Resume button
│   ├── Hero.js          # Typewriter hero + floating blobs
│   ├── Skills.js        # Grouped skill badges
│   ├── Projects.js      # Project cards with hover glow
│   ├── Experience.js    # About + leadership timeline
│   ├── Contact.js       # Contact links + resume download
│   └── useScrollReveal.js  # Intersection Observer hook
└── public/
    └── resume.pdf       # ← ADD YOUR RESUME PDF HERE
```

## 📄 Adding Your Resume

1. Place your resume PDF at `public/resume.pdf`
2. The "Download Resume" button will automatically work

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```
Or push to GitHub and import at [vercel.com](https://vercel.com)

## ✏️ Customization
- Colors → `app/globals.css` `:root` variables
- Content → edit each component file directly
- Fonts → `app/layout.js` (uses Google Fonts via `next/font`)
