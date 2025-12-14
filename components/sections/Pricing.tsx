"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "../Card";
import Button from "../Button";
import { Check, Sparkles, Zap, TrendingUp } from "lucide-react";

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Basic",
    price: "Starting at $500",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 5 pages",
      "Basic functionality",
      "Responsive design",
      "1 revision round",
      "2 weeks delivery",
      "1 month support",
    ],
  },
  {
    name: "Standard",
    price: "Starting at $1,500",
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages",
      "Advanced features",
      "Database integration",
      "Payment integration",
      "3 revision rounds",
      "4-6 weeks delivery",
      "3 months support",
      "API documentation",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom Quote",
    description: "Complete solution for enterprise needs",
    features: [
      "Unlimited pages",
      "Custom features",
      "Multi-user system",
      "Advanced security",
      "Unlimited revisions",
      "Custom timeline",
      "6 months support",
      "Complete documentation",
      "Training & handover",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current || typeof window === "undefined" || window.innerWidth >= 768) return;
    const container = scrollRef.current;
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

    const interval = setInterval(scroll, 4000);
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };
    
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-4">
              🎉 Limited Time: Free Consultation Included
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
            Transparent Pricing
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            Choose the perfect package for your needs. All include free consultation & support.
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projects are fully customized. Get a detailed quote in 24 hours.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto mb-12 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none md:items-stretch"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[85vw] md:w-auto snap-center px-2 md:flex md:flex-col"
            >
              {pkg.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="px-4 py-1 rounded-full bg-primary-600 text-white text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    Most Popular
                  </span>
                </motion.div>
              )}
              <Card
                className={`h-full flex flex-col transition-all ${
                  pkg.popular
                    ? "border-2 border-primary-600 shadow-2xl scale-105 ring-4 ring-primary-200 dark:ring-primary-800/50"
                    : "hover:border-primary-300 dark:hover:border-primary-700"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="h-12 flex items-end">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                      className="w-full"
                    >
                      <Button
                        onClick={scrollToContact}
                        variant={pkg.popular ? "primary" : "outline"}
                        className="w-full font-semibold"
                        size="md"
                      >
                        {pkg.popular ? (
                          <>
                            <Zap className="mr-2 w-4 h-4" />
                            Get Started Now
                          </>
                        ) : (
                          "Get Custom Quote"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                  <div className="h-6 mt-2 flex items-center justify-center">
                    {pkg.popular ? (
                      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                        ⚡ Most clients choose this package
                      </p>
                    ) : (
                      <span className="text-xs text-transparent">Placeholder</span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-2 border-primary-200 dark:border-primary-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Something Different?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Every project is unique. I provide custom quotes tailored to your specific requirements, 
                timeline, and budget. Let&apos;s discuss your project and I&apos;ll provide a detailed proposal.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600" />
                  <span>Flexible payment terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

