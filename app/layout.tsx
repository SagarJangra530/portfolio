import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuildNest — Complete Web & App Solutions | Expert MERN Developer",
  description: "BuildNest — Complete Web & App Solutions. Expert MERN Stack Developer specializing in SaaS applications, REST APIs, Admin Dashboards, and scalable web solutions. Get a free quote today.",
  keywords: ["MERN Stack Developer", "Full Stack Developer", "SaaS Development", "Web Development", "React Developer", "Node.js Developer", "Freelance Developer"],
  authors: [{ name: "Sagar Jangra" }],
  openGraph: {
    title: "BuildNest — Complete Web & App Solutions | Expert MERN Developer",
    description: "BuildNest — Complete Web & App Solutions. Expert MERN Stack Developer ready to build your next project. Get a free quote today.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildNest — Complete Web & App Solutions",
    description: "Expert MERN Stack Development Services by BuildNest",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

