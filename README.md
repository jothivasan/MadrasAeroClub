# Madras Aero Club

> **Build. Fly. Innovate.**

Madras Aero Club is a modern aerospace and drone technology website built to introduce visitors to hands-on aviation learning, UAV services, aerial experiences, and career pathways. The experience combines editorial-style layouts, responsive design, and motion-led interactions to make technical education feel approachable and memorable.

**Project date:** March 23, 2026

## Highlights

- Immersive landing page focused on aerospace learning and innovation
- Educational programs for aero modelling and UAV pilot operations
- Commercial drone services for agriculture, mapping, surveying, and media
- Aerial experiences including workshops, drone flights, aircraft builds, and live events
- Career guidance for drone pilots, aerospace engineers, UAV technicians, survey specialists, and robotics engineers
- Contact and enquiry flow with responsive form states
- Responsive navigation and shared page layout across all routes
- Scroll-based reveals, split-text animations, hover states, and smooth transitions

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Introduction, mission, programs, and calls to action |
| `/about` | Organization story, vision, mission, and values |
| `/programs` | Aero modelling and UAV pilot training programs |
| `/services` | Commercial drone and aerial technology services |
| `/events` | Workshops, flights, aircraft builds, and live events |
| `/careers` | Aerospace and drone industry career pathways |
| `/contact` | Enquiry form and direct contact information |

## Technology

- React 18
- JavaScript (ES modules)
- Vite
- React Router
- Framer Motion and GSAP
- Tailwind CSS with custom design tokens
- Lucide React icons

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/jothivasan/MadrasAreoClub.git
cd MadrasAreoClub
npm install
```

### Available scripts

```bash
# Start the development server
npm run dev

# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview

# Run ESLint checks
npm run lint
```

## Project Structure

```text
src/
├── assets/       # Logos and visual assets
├── components/   # Shared layout and UI components
├── pages/        # Route-level page components
├── App.jsx       # Application routes
├── index.css     # Global styles and design tokens
└── main.jsx      # Application entry point
```

## Design Direction

The interface uses a refined aerospace editorial style: generous white space, architectural grid lines, warm accent colors, bold display typography, and restrained motion. The design is intended to communicate precision, curiosity, and forward momentum without feeling like a conventional corporate brochure.

## Notes

- The contact form currently demonstrates the interaction flow locally and does not send data to a backend service.
- The application is configured as a single-page Vite app with route rewrites for deployment platforms such as Vercel.
- Replace placeholder contact details in `src/pages/Contact.jsx` before production use.

## License

This project is a private project for Madras Aero Club. Contact the project owner before reusing or redistributing the source code or visual assets.

---

Built with curiosity for the future of flight.
