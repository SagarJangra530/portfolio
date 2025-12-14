"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "../Card";
import { CheckCircle, Clock, MessageCircle, Award } from "lucide-react";

export default function TrustSection() {
  const trustScrollRef = useRef<HTMLDivElement>(null);
  const statsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupAutoScroll = (container: HTMLDivElement | null) => {
      if (!container || typeof window === "undefined" || window.innerWidth >= 768) return;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      if (scrollWidth <= clientWidth) return;

      let currentScroll = 0;
      const itemWidth = container.querySelector('[class*="flex-shrink-0"]')?.clientWidth || clientWidth;
      let isPaused = false;

      const scroll = () => {
        if (isPaused) return;
        currentScroll += itemWidth;
        if (currentScroll >= scrollWidth - clientWidth) currentScroll = 0;
        container.scrollTo({ left: currentScroll, behavior: "smooth" });
      };

      const interval = setInterval(scroll, 3500);
      const handleMouseEnter = () => { isPaused = true; };
      const handleMouseLeave = () => { isPaused = false; };
      
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        clearInterval(interval);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cleanup1 = setupAutoScroll(trustScrollRef.current);
    const cleanup2 = setupAutoScroll(statsScrollRef.current);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  const trustPoints = [
    {
      icon: CheckCircle,
      title: "100% Delivery Rate",
      description: "Every project delivered on time with full commitment to quality.",
    },
    {
      icon: MessageCircle,
      title: "24/7 Communication",
      description: "Always available to discuss your project and provide updates.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick response times and efficient development process.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Clean code, best practices, and thorough testing included.",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "10k+", label: "LinkedIn Followers" },
    { number: "50+", label: "Happy Clients" },
  ];

  return (
    <section id="trust" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
            Why Clients Trust Me
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reliability, communication, and exceptional results - that&apos;s what sets me apart
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={trustScrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center px-2"
            >
              <Card>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4">
                    <point.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {point.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats - Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={statsScrollRef}
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="text-center flex-shrink-0 w-[40vw] md:w-auto snap-center px-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

