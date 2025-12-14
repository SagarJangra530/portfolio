"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../Card";
import Button from "../Button";
import { 
  Code, 
  Cloud, 
  Server, 
  LayoutDashboard, 
  Bug, 
  ArrowRight,
  Zap,
  Shield,
  Rocket
} from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

const services: Service[] = [
  {
    icon: Code,
    title: "MERN Stack Web Development",
    description: "Complete full-stack web applications built with MongoDB, Express, React, and Node.js",
    features: [
      "Responsive React frontend",
      "RESTful API development",
      "MongoDB database design",
      "Authentication & authorization",
    ],
    benefits: [
      "Fast development cycle",
      "Scalable architecture",
      "Modern user experience",
      "Cross-platform compatibility",
    ],
    useCases: [
      "Business web applications",
      "E-commerce platforms",
      "Social media platforms",
      "Content management systems",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS Application Development",
    description: "Scalable Software-as-a-Service applications with subscription management and multi-tenancy",
    features: [
      "Subscription billing system",
      "Multi-tenant architecture",
      "User management & roles",
      "Analytics dashboard",
    ],
    benefits: [
      "Recurring revenue model",
      "Automatic updates",
      "Centralized data management",
      "Easy scalability",
    ],
    useCases: [
      "Project management tools",
      "CRM platforms",
      "Analytics platforms",
      "Business automation tools",
    ],
  },
  {
    icon: Server,
    title: "REST API & Backend Development",
    description: "Robust backend APIs with proper documentation, security, and performance optimization",
    features: [
      "RESTful API design",
      "API documentation",
      "Security & authentication",
      "Database optimization",
    ],
    benefits: [
      "Fast API responses",
      "Secure data handling",
      "Easy integration",
      "Future-proof architecture",
    ],
    useCases: [
      "Mobile app backends",
      "Third-party integrations",
      "Microservices architecture",
      "Data management systems",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Beautiful, functional admin panels for managing your business data and operations",
    features: [
      "Interactive data visualization",
      "User management",
      "Analytics & reports",
      "Real-time updates",
    ],
    benefits: [
      "Better decision making",
      "Time-saving automation",
      "Centralized control",
      "Data insights",
    ],
    useCases: [
      "Business analytics",
      "Content management",
      "E-commerce administration",
      "Customer relationship management",
    ],
  },
  {
    icon: Bug,
    title: "Bug Fixes & Feature Enhancements",
    description: "Fix existing issues and add new features to your current applications",
    features: [
      "Code debugging",
      "Performance optimization",
      "Feature development",
      "Code refactoring",
    ],
    benefits: [
      "Improved stability",
      "Better user experience",
      "Modern functionality",
      "Code maintainability",
    ],
    useCases: [
      "Legacy code updates",
      "Performance improvements",
      "New feature additions",
      "Security patches",
    ],
  },
];

export default function Services() {
  const [autoScrollRef, setAutoScrollRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoScrollRef || typeof window === "undefined" || window.innerWidth >= 768) return;

    const container = autoScrollRef;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    if (scrollWidth <= clientWidth) return;

    let currentScroll = 0;
    const itemWidth = container.querySelector('[class*="flex-shrink-0"]')?.clientWidth || clientWidth;
    let isPaused = false;

    const scroll = () => {
      if (isPaused) return;
      currentScroll += itemWidth;
      if (currentScroll >= scrollWidth - clientWidth) {
        currentScroll = 0;
      }
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
  }, [autoScrollRef]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
            My Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional development services tailored to your business needs
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={setAutoScrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center px-2"
            >
              <Card className="h-full flex flex-col group min-h-[450px] md:min-h-0">
                <motion.div 
                  className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 w-fit mb-4 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity"
                  />
                  <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 relative z-10" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary-600" />
                      What You Get
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-primary-600" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={scrollToContact}
                    variant={index === 1 ? "primary" : "outline"}
                    className="w-full group font-semibold"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-50 mb-6 text-lg">
              Need something custom? Let&apos;s discuss your specific requirements and get a tailored solution.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToContact} 
                variant="outline" 
                size="lg"
                className="!bg-white !text-primary-600 hover:!bg-gray-100 shadow-lg font-semibold border-0"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

