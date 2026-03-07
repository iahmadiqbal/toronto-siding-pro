# 🏠 Toronto Siding - Professional Siding Services Website

A modern, responsive website for Toronto Siding - a premier siding installation and repair company serving the Greater Toronto Area.

## 🌟 Features

### Design & UI
- **Modern Design**: Clean, professional interface with Poppins font family
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Animations**: Smooth fade-in, hover effects, and floating elements
- **Glassmorphism**: Modern glass-effect cards with backdrop blur
- **Progress Bars**: Animated statistics with colorful gradients
- **Dark Navy Theme**: Professional color scheme with amber accents

### Key Sections
1. **Hero Section**: Eye-catching banner with CTA buttons
2. **Services Overview**: 6 service cards with images, features, and descriptions
3. **Why Choose Us**: 6 reasons with animated icons and stat badges
4. **Recent Projects**: Portfolio showcase with project details
5. **Statistics**: Animated progress bars showing company achievements
6. **CTA Banner**: Conversion-focused section with floating animations
7. **Footer**: Comprehensive links and contact information

### Services Offered
- Vinyl Siding Installation
- Cedar Siding Installation
- Fiber Cement Siding
- Siding Repair Services
- Residential Siding Solutions
- Commercial Siding Solutions

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite 5.4.19** - Fast build tool and dev server

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Poppins Font** - Google Fonts integration
- **Custom Gradients** - Navy and amber color schemes
- **Responsive Design** - Mobile-first approach

### UI Components
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful, customizable components
- **React Icons** - Icon library (Font Awesome)
- **Lucide React** - Additional icon set

### Routing
- **React Router DOM 6.30.1** - Client-side routing

### Form Handling
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation

### Additional Libraries
- **Embla Carousel** - Touch-friendly carousels
- **Sonner** - Toast notifications
- **TanStack Query** - Data fetching and caching

## 📁 Project Structure

```
toronto-siding-pro/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media
│   │   ├── hero-bg.jpg
│   │   ├── logo.png
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── project-3.jpg
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── ContactForm.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── TestimonialsSlider.tsx
│   │   └── WhyChooseUs.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Index.tsx
│   │   ├── ServiceAreas.tsx
│   │   ├── ServicePages.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── test/             # Test files
│   ├── App.tsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iahmadiqbal/toronto-siding-pro.git
cd toronto-siding-pro
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser and visit:
```
http://localhost:8080
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
# or
bun run build
```

### Preview Production Build
```bash
npm run preview
# or
bun run preview
```

### Run Tests
```bash
npm run test
# or
bun test
```

### Lint Code
```bash
npm run lint
```

## 🎨 Customization

### Colors
Edit `src/index.css` to customize the color scheme:
- Primary: Navy blue (#1a3a52)
- Secondary: Amber (#f59e0b)
- Background: Light gray (#fafafa)

### Fonts
The project uses Poppins font family. To change:
1. Update Google Fonts link in `index.html`
2. Modify `tailwind.config.ts` fontFamily settings

### Content
- Update service information in `src/components/ServicesOverview.tsx`
- Modify company details in `src/components/Footer.tsx`
- Change hero content in `src/components/Hero.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: 1280px - 1920px
- **Extra Large**: > 1920px

## 🔧 Configuration

### Container Settings
The website uses responsive container padding:
- Mobile: 1rem (16px)
- Small: 2rem (32px)
- Large: 4rem (64px)
- XL (1280px): 5rem (80px)
- 2XL (1920px): 6rem (96px)

## 📊 Performance

- **Fast Loading**: Vite-powered development and build
- **Optimized Images**: Compressed assets
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Contact

**Toronto Siding**
- Phone: (647) 123-4567
- Email: info@torontosiding.ca
- Address: 123 Yonge St, Toronto, ON M5C 1T4

## 🙏 Acknowledgments

- Built with React and Vite
- UI components from Shadcn/ui
- Icons from React Icons and Lucide
- Fonts from Google Fonts
- Images from Unsplash

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintained by**: Toronto Siding Development Team
