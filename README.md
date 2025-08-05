# Next.js + DaisyUI Template

A lightweight, production-ready Next.js template that builds static files to the `/out` folder with DaisyUI and TailwindCSS loaded via CDN. Perfect for quick prototyping and static site generation without the hassle of complex build configurations.

## ✨ Features

- **🚀 Next.js 15** - Latest Next.js with App Router
- **🎨 DaisyUI + TailwindCSS** - Beautiful UI components via CDN (no build setup required)
- **📦 Static Export** - Builds to `/out` folder for easy deployment
- **🌙 Dark/Light Mode** - Built-in theme switcher with persistence
- **⚡ Zero Config** - Ready to use out of the box
- **🔤 Custom Fonts** - Geist Sans and Geist Mono included
- **📱 Responsive** - Mobile-first design approach

## 🎯 Demo

Check out the live demo: [Add your demo URL here]

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-daisyui-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```
   Static files will be generated in the `/out` folder.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with Tailwind imports
│   │   ├── layout.tsx           # Root layout with CDN links
│   │   └── page.tsx             # Home page
│   └── components/
│       ├── Navigation.tsx       # Header navigation
│       ├── Footer.tsx          # Footer component
│       └── ThemeSwitch.tsx     # Dark/light mode toggle
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration for static export
└── package.json               # Dependencies and scripts
```

## 🎨 DaisyUI & TailwindCSS Setup

This template uses **CDN delivery** for both DaisyUI and TailwindCSS, eliminating the need for complex build configurations:

- **DaisyUI CSS**: Loaded via `<link>` tag in `layout.tsx:31`
- **TailwindCSS Browser**: Loaded via `<Script>` tag in `layout.tsx:34`

### Benefits of CDN Approach:
- ✅ No build configuration required
- ✅ Faster setup time
- ✅ Always up-to-date versions
- ✅ Reduced bundle size
- ✅ Perfect for prototyping

### Available DaisyUI Themes:
The template includes a theme switcher with light/dark modes. You can easily extend it to support all DaisyUI themes by modifying `ThemeSwitch.tsx:15`.

## 🛠️ Configuration

### Static Export Configuration
The template is configured for static export in `next.config.ts:3-9`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,        // Add trailing slashes to URLs
  images: {
    unoptimized: true         // Disable image optimization for static export
  }
};
```

### Theme Persistence
Dark/light mode preference is automatically saved to localStorage and restored on page load via `ThemeSwitch.tsx:8-12`.

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build and export static files to `/out`
- `npm run start` - Start production server (for testing)
- `npm run lint` - Run ESLint

## 🚀 Deployment

Since this template generates static files, you can deploy to any static hosting service:

### Vercel
```bash
npm run build
# Deploy the /out folder
```

### Netlify
```bash
npm run build
# Deploy the /out folder
```

### GitHub Pages
```bash
npm run build
# Commit and push the /out folder or configure GitHub Actions
```

### Any Static Host
Just upload the contents of the `/out` folder after running `npm run build`.

## 🎨 Customization

### Update Branding
- **Logo**: Replace `[Your logo]` in `Navigation.tsx:7`
- **Footer**: Update `[Your name]` in `Footer.tsx:5`
- **Title**: Modify metadata in `layout.tsx:18-21`

### Add New Pages
Create new files in `src/app/` following Next.js App Router conventions:
```
src/app/about/page.tsx     → /about
src/app/contact/page.tsx   → /contact
```

### Styling
- Use any DaisyUI component classes
- Add custom styles to `globals.css`
- Modify theme colors via `data-theme` attribute

## 🔧 Tech Stack

- **Framework**: Next.js 15.4.5
- **UI Library**: DaisyUI 5 (via CDN)
- **CSS Framework**: TailwindCSS 4 (via CDN)
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Built-in SVG icons

## 📦 Dependencies

### Production
- `next`: 15.4.5
- `react`: 19.1.0
- `react-dom`: 19.1.0

### Development
- `typescript`: ^5
- `@types/node`: ^20
- `@types/react`: ^19
- `@types/react-dom`: ^19
- `eslint`: ^9
- `eslint-config-next`: 15.4.5

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [DaisyUI](https://daisyui.com/) for beautiful, semantic UI components
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS framework
- [Vercel](https://vercel.com/) for inspiring deployment simplicity

---

**Happy coding! 🚀**

*Don't forget to ⭐ star this repository if you find it useful!*