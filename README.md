# Personal Portfolio Website - Senior Full Stack MERN Developer

A high-converting, professional portfolio website designed to attract Fiverr clients and generate leads. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Professional, premium, and trustworthy UI/UX
- **Performance Optimized**: Lighthouse score above 90
- **SEO Friendly**: Complete meta tags and Open Graph support
- **Dark/Light Mode**: Theme switcher for better user experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion for engaging interactions
- **Fast Loading**: Optimized images and fonts
- **Profile Picture**: Professional image display in Hero section

## 📋 Sections

1. **Hero Section** - Clear value proposition with profile picture and primary CTAs
2. **Trust & Credibility** - Experience summary and trust indicators
3. **Services** - Detailed service offerings with business benefits
4. **Portfolio** - Case studies with filtering capabilities
5. **Tech Stack** - Technology expertise grouped by category
6. **Work Process** - Transparent 5-step workflow
7. **Testimonials** - Client testimonials with carousel
8. **Pricing** - Flexible pricing guidance
9. **Contact** - Lead capture form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Setup

1. **Clone or navigate to the project directory**

```bash
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Add Your Profile Picture**

   - Add your professional profile picture to the `public` folder
   - Name it `profile-picture.jpg` (or update the path in `components/sections/Hero.tsx`)
   - Recommended size: 512x512px or larger (square format)
   - Format: JPG, PNG, or WebP

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🔧 Configuration

### Update Personal Information

1. **SEO & Metadata**: Edit `app/layout.tsx` to update:
   - Site title and description
   - Open Graph tags
   - Author information

2. **Profile Picture**: 
   - Add your image to `public/profile-picture.jpg`
   - Or update the image path in `components/sections/Hero.tsx`

3. **Contact Information**: Update `components/sections/Contact.tsx`:
   - Replace email with your actual email
   - Set up form submission endpoint (see API setup below)

4. **Social Links**: Update `components/Footer.tsx` with your social media links:
   - GitHub
   - LinkedIn
   - Instagram
   - Email

5. **Portfolio Projects**: Edit `components/sections/Portfolio.tsx`:
   - Update project data in the `projects` array
   - Add your actual project details, images, and links

6. **Testimonials**: Edit `components/sections/Testimonials.tsx`:
   - Update testimonial data with real client feedback
   - Add client names, roles, and companies

7. **Stats & Experience**: Update various sections:
   - Hero section stats (years, projects, satisfaction)
   - Trust section statistics
   - Tech stack experience

### Contact Form Setup

The contact form currently simulates submission. To enable actual form submissions:

1. **Option 1: Use a service like Formspree or EmailJS**
   - Update the form submission logic in `components/sections/Contact.tsx`
   - Follow the service's integration guide

2. **Option 2: Create an API route**
   - Create `app/api/contact/route.ts`
   - Implement email sending logic (e.g., using Resend, SendGrid, or Nodemailer)
   - Update the form to call this endpoint

Example API route structure:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Add your email sending logic here
  // Example: Send email using your preferred service
  
  return NextResponse.json({ success: true });
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Redeploy after adding variables

4. **Your site is live!**
   - Vercel will provide a URL
   - Custom domain can be added in project settings

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder or use Netlify's Next.js plugin
```

#### Self-Hosted
```bash
npm run build
npm start
# Configure your server to run on port 3000
```

## 📝 Customization Guide

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Update these values to match your brand
    500: "#0ea5e9",
    600: "#0284c7",
    // ...
  },
}
```

### Fonts

Update fonts in `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
// Change Inter to your preferred font
```

### Animations

Adjust animation timings in component files or update Framer Motion variants in individual components.

## 🎨 Design Customization

- **Hero Background**: Modify gradient in `components/sections/Hero.tsx`
- **Card Styles**: Update `components/Card.tsx` for consistent card appearance
- **Button Styles**: Customize in `components/Button.tsx`
- **Spacing**: Adjust padding/margins using Tailwind utilities

## 📱 Performance Optimization

- Images are optimized using Next.js Image component
- Fonts are optimized with next/font
- Code splitting is automatic with Next.js
- Lighthouse scores should be 90+ out of the box

## 🔍 SEO Optimization

- Meta tags are configured in `app/layout.tsx`
- Update Open Graph images in the metadata
- Add structured data if needed (JSON-LD)
- Ensure all images have alt text

## 🐛 Troubleshooting

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

### Theme Issues

- Ensure `next-themes` is properly installed
- Check `components/ThemeProvider.tsx` is wrapping the app
- Verify `tailwind.config.ts` has `darkMode: "class"`

### Form Submission Issues

- Check browser console for errors
- Verify API endpoint is configured correctly
- Test form validation is working

### Black/Blank Page Issues

- Check browser console for JavaScript errors
- Verify all images are in the `public` folder
- Ensure profile picture path is correct
- Try disabling dark mode by default

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your portfolio.

## 🤝 Support

For questions or issues:
- Check the documentation above
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎯 Next Steps

1. ✅ Add your profile picture to `public/profile-picture.jpg`
2. ✅ Update all personal information and content
3. ✅ Add your real portfolio projects
4. ✅ Set up contact form backend
5. ✅ Update social media links
6. ✅ Add custom domain
7. ✅ Test on multiple devices
8. ✅ Optimize images and content
9. ✅ Submit to search engines
10. ✅ Share on Fiverr profile!

---

Built with ❤️ using Next.js and Tailwind CSS
