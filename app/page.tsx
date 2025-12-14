"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/TrustBadges";
import TrustSection from "@/components/sections/TrustSection";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import WorkProcess from "@/components/sections/WorkProcess";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Ensure background is visible
    document.documentElement.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900" style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <TrustBadges />
      <TrustSection />
      <Services />
      <Portfolio />
      <TechStack />
      <WorkProcess />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

