# packrat.cc

Personal portfolio and web presence for PACK RAT - Developer • Producer • Gamer

## 🎨 About

Hi, I'm **PACK RAT**! I build modern web applications, create digital experiences, and craft tools for the gaming community. This site showcases my work and provides a place for people to connect with me.

## 🚀 Features

### What I Do
- **Custom Websites**: Modern, responsive sites built with React & Next.js
- **Web Applications**: Full-stack apps with databases, auth, and APIs
- **Maintenance & Support**: Ongoing updates, security, and optimization

### Side Projects
- **Rust Raid Calculator**: Calculate resources needed for raiding structures
- **Command Reference**: Comprehensive list of Rust console commands
- Gaming tools built for the community

## 📞 Connect

- **YouTube**: [@packratrust](https://www.youtube.com/@packratrust) - Rust gameplay
- **Discord**: @pack.rat

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Netlify

## 📦 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd packrat-cc
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚢 Deployment

### Netlify Deployment

This project is configured for Netlify deployment:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the Next.js configuration
4. Deploy! ✨

The `netlify.toml` file is already configured with the optimal settings.

### Build Commands
```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
packrat-cc/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with nav & footer
│   ├── page.tsx             # Landing page
│   └── tools/               # Tools pages
│       ├── page.tsx         # Tools overview
│       ├── raid-calculator/ # Raid calculator tool
│       └── commands/        # Command reference
├── components/              # React components
│   ├── navigation.tsx       # Header navigation
│   ├── footer.tsx          # Footer component
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── netlify.toml            # Netlify configuration
```

## 🎨 Customization

### Adding New Tools
1. Create a new directory under `app/tools/`
2. Add a `page.tsx` file with your tool component
3. Update the tools overview page to link to your new tool

### Styling
- Global styles: `app/globals.css`
- Component styles: Use TailwindCSS classes
- Theme: Customize in `tailwind.config.ts`

### Components
Add new shadcn/ui components:
```bash
npx shadcn@latest add <component-name>
```

## 📝 License

All rights reserved © packrat.cc

## 🤝 Contact

- **Website**: [packrat.cc](https://packrat.cc)
- **YouTube**: [@packratrust](https://www.youtube.com/@packratrust)
- **Discord**: @pack.rat
