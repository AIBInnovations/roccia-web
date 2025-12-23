# Roccia Web

A luxury marble and furniture showcase website built with React, featuring elegant animations and a sophisticated user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

## Features

- **Layered Hero Sections**: Custom hero components with parallax scroll effects and floating animations
- **Responsive Design**: Optimized for all devices from mobile to 4K displays
- **Smooth Animations**: GSAP and Framer Motion powered animations
- **Contact Form**: Integrated contact form with validation and submission handling
- **Error Boundary**: Production-ready error handling to prevent app crashes
- **SEO Friendly**: Semantic HTML and accessible components
- **Modern UI**: Luxury design with custom fonts and elegant color scheme

## Tech Stack

- **React** 18.3.1 - UI library
- **Vite** 6.0.5 - Build tool and dev server
- **React Router DOM** 6.28.0 - Client-side routing
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **Framer Motion** 12.23.25 - Animation library
- **GSAP** 3.13.0 - Professional-grade animation
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd roccia-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual values (see [Environment Variables](#environment-variables))

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Environment Variables

Copy `.env.example` to `.env` and configure the following variables:

```env
# Contact Form API Endpoint
VITE_CONTACT_API_URL=https://api.example.com/contact

# API Base URL
VITE_API_BASE_URL=https://api.roccia.com

# Analytics (optional)
VITE_GA_TRACKING_ID=

# Error Tracking (optional)
VITE_SENTRY_DSN=

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_REPORTING=false
```

**Important Notes:**
- All environment variables in Vite must be prefixed with `VITE_`
- Never commit `.env` files to version control
- Environment variables are exposed to client-side code
- Store sensitive secrets on the backend only

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server at `http://localhost:5173` with hot module replacement.

### Build

```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview

```bash
npm run preview
```
Preview the production build locally before deployment.

### Lint

```bash
npm run lint
```
Run ESLint to check code quality and catch potential errors.

## Project Structure

```
roccia-web/
├── public/                 # Static assets
│   └── assets/
│       └── images/        # Image files
├── src/
│   ├── components/        # React components
│   │   ├── ContactForm/   # Contact form component
│   │   ├── ContentHero/   # Hero section with parallax
│   │   ├── ErrorBoundary/ # Error handling wrapper
│   │   ├── Header/        # Navigation header
│   │   ├── Footer/        # Site footer
│   │   └── ...           # Other components
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ContactUs.jsx
│   │   └── Portfolio.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles and CSS variables
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Components

### ContentHero
A layered hero section with:
- Background architectural illustration
- Large heading text
- Floating statue with parallax scroll effect
- Responsive across all screen sizes
- Accessibility support for reduced motion

**Usage:**
```jsx
import ContentHero from './components/ContentHero'

<ContentHero
  heading="CONTACT US"
  backgroundImage="/assets/images/backgroundContactHero.png"
  statueImage="/assets/images/statueContactHero.png"
/>
```

### ContactForm
Full-featured contact form with:
- Form validation
- Submission state management
- Success/error messaging
- Responsive layout

### ErrorBoundary
Production error handling that:
- Catches component errors
- Displays fallback UI
- Logs errors in development
- Provides recovery options

## Deployment

### Production Build

1. Create production build:
   ```bash
   npm run build
   ```

2. Test the build locally:
   ```bash
   npm run preview
   ```

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify, or use the CLI:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Environment Variables in Production

Don't forget to set environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Code splitting with React.lazy (ready to implement)
- Image optimization (use WebP format when possible)
- CSS animations use GPU acceleration
- Request animation frame for scroll effects
- Reduced motion support for accessibility

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- `prefers-reduced-motion` media query support
- Focus indicators on interactive elements

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Private project - All rights reserved

## Contact

For questions or support, please use the contact form on the website.

---

**Built with care for Roccia** - Where luxury meets craftsmanship
