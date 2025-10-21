# Keziah Verghese - Trauma Focused Therapist and Coach

A professional therapy website for psychologist Keziah Verghese, specializing in nervous system regulation, attachment healing, and nature-based therapy.

🌐 **Live Website**: [Coming Soon]

## About

Keziah Verghese is a trauma-focused therapist and coach who believes healing begins in safety and connection. Her approach combines nervous system regulation, attachment healing, and the therapeutic power of nature to help clients move from post-traumatic stress to post-traumatic growth.

## Built With

A professional therapy website for psychologist Keziah Verghese, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, elegant design with sage green and tan color palette
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Custom typography with Instrument Serif and Inter fonts
- 🎠 Functional services carousel with Embla Carousel
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── ProblemStatement.tsx # Problem statement section
│   ├── FeaturesSection.tsx # Features list section
│   ├── AboutSection.tsx    # About section
│   └── ServicesCarousel.tsx # Services carousel with navigation
└── public/                 # Static assets
```

## Design System

### Colors
- **Sage Green**: `#8B9D8A` - Primary buttons and feature section
- **Tan/Brown**: `#C9B8A8` - Carousel background
- **Cream**: `#F8F6F3` - Section backgrounds
- **Dark Brown**: `#3E3E3E` - Text color

### Typography
- **Headings**: Instrument Serif (Google Fonts)
- **Body**: Inter (Google Fonts)

### Image Placeholders
- Hero & About images: 400×500px
- Features image: 350×450px
- All with rounded corners (rounded-3xl)

## Components

### Header
- Fixed navigation bar
- Responsive hamburger menu on mobile
- CTA button in navigation

### HeroSection
- Two-column layout (text left, image right)
- Large serif heading with italic emphasis
- CTA button

### ProblemStatement
- Centered text layout
- Serif heading with body text

### FeaturesSection
- Two-column layout (image left, content right)
- Sage green background on right side
- Bullet list with arrow icons

### AboutSection
- Two-column layout (text left, image right)
- Multiple paragraphs
- CTA button

### ServicesCarousel
- Functional carousel with Embla
- 3 service cards (Nervous System Regulation, Attachment Healing, Nature-Based Therapy)
- Navigation arrows (desktop)
- Swipe/drag support (mobile)
- Shows 1 card on mobile, 3 on desktop

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel library
- [Google Fonts](https://fonts.google.com/) - Web fonts

## About Keziah Verghese

Keziah Verghese is a trauma-focused therapist and coach who specializes in:
- **Nervous System Regulation**: Helping clients move from hypervigilance or shutdown into calm and safety
- **Attachment Healing**: Working on healing attachment wounds and building secure relationships
- **Nature-Based Therapy**: Integrating the healing presence of nature into therapeutic work

Her approach is rooted in the belief that healing begins in safety and connection—when you feel truly seen, held, and not judged.
