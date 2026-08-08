# Praveen's 3D Portfolio 🚀

An interactive 3D portfolio website built with modern web technologies. This repository contains the open source version of my portfolio with immersive 3D animations and interactive elements.

## Live Demo

Check out the live version to see the portfolio in action!

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Important Note on GSAP Plugins ⚠️

This project uses GSAP trial plugins (`gsap-trial`) for development. The trial version has limitations for production hosting. For deploying to production, you'll need to:

1. Purchase a GSAP Club license or use the free version
2. Update the GSAP imports accordingly
3. Refer to [GSAP Installation Guide](https://gsap.com/docs/v3/Installation/) for configuration details

## Tech Stack 🛠️

- **React** v18.3.1 - UI library
- **TypeScript** v5.5.3 - Type safety
- **Three.js** v0.168.0 - 3D graphics
- **GSAP** v3.12.7 - Animation library
- **WebGL** - GPU-accelerated graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Vite** v5.4.1 - Build tool & dev server
- **ESLint** v9.9.0 - Code linting
- **CSS** & **HTML** - Styling and markup

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── assets/        # Static assets
└── styles/        # CSS styles
public/
├── images/        # Images including preview
└── models/        # 3D models
```

## Features

- **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - GSAP-based animations for polished interactions
- **TypeScript** - Full type safety across the codebase
- **Responsive Design** - Mobile-friendly interface
- **Performance Optimized** - Built with Vite for fast builds and dev experience
- **Analytics** - Vercel Analytics integration

## Scripts

- `npm run dev` - Start development server with host access
- `npm run build` - Build TypeScript and create optimized production bundle
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## License

This project is open source and available under the [MIT License](LICENSE).
