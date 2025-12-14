"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../Card";
import { ExternalLink, Github, Tag } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "SaaS" | "Ecommerce" | "Dashboard" | "API" | "Marketplace";
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  result: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "nestakey",
    title: "NestaKey - Home Services Marketplace",
    category: "Marketplace",
    description: "Full-stack marketplace platform connecting customers with certified home service professionals",
    problem: "Homeowners struggled to find reliable, licensed technicians for plumbing, electrical, carpentry, and RO services",
    solution: "Built a complete marketplace platform with service booking, technician management, product catalog, admin dashboard, and real-time tracking. Integrated payment processing and multi-location support",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Payment Gateway", "Real-time Updates"],
    result: "Successfully launched with 50,000+ happy customers across India, handling thousands of bookings monthly with 99% customer satisfaction",
    liveUrl: "https://nestakey.com/",
  },
  {
    id: "algo-visualizer",
    title: "Algorithms Visualizer Platform",
    category: "SaaS",
    description: "Interactive educational platform for visualizing and understanding complex algorithms",
    problem: "Developers and students needed a better way to understand how algorithms work through visual representation",
    solution: "Created an interactive visualization platform with step-by-step algorithm execution, customizable inputs, multiple algorithm support, and real-time animation controls",
    tech: ["React", "TypeScript", "D3.js", "Canvas API", "Node.js", "Algorithms"],
    result: "Helped thousands of developers and students understand algorithms better with intuitive visualizations and interactive learning",
    liveUrl: "https://www.algorithms-visualizer.com/",
  },
  {
    id: "1",
    title: "SaaS Project Management Platform",
    category: "SaaS",
    description: "Complete project management solution with team collaboration",
    problem: "Teams struggled with scattered task management and poor collaboration",
    solution: "Built a unified platform with real-time updates, task boards, and team chat",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    result: "Increased team productivity by 40% and reduced project completion time by 25%",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    category: "Ecommerce",
    description: "Full-featured online store with admin dashboard",
    problem: "Business needed a scalable e-commerce solution with inventory management",
    solution: "Developed a complete platform with payment integration, order tracking, and analytics",
    tech: ["React", "Express", "MongoDB", "PayPal API", "JWT"],
    result: "Increased online sales by 60% and improved customer satisfaction scores",
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    category: "Dashboard",
    description: "Real-time business analytics and reporting dashboard",
    problem: "Company needed better insights into business performance and user behavior",
    solution: "Created interactive dashboard with data visualization and automated reports",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "D3.js"],
    result: "Improved decision-making speed by 50% with real-time insights",
  },
  {
    id: "4",
    title: "REST API for Mobile App",
    category: "API",
    description: "Scalable backend API serving mobile application",
    problem: "Mobile app needed a robust, secure API with high performance",
    solution: "Developed RESTful API with authentication, rate limiting, and caching",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    result: "API handles 10K+ requests per minute with 99.9% uptime",
  },
  {
    id: "5",
    title: "CRM Dashboard",
    category: "Dashboard",
    description: "Customer relationship management system",
    problem: "Sales team needed better customer tracking and lead management",
    solution: "Built comprehensive CRM with pipeline management and automation",
    tech: ["React", "Node.js", "MongoDB", "Material-UI"],
    result: "Increased conversion rate by 35% and improved sales team efficiency",
  },
  {
    id: "6",
    title: "Subscription SaaS Platform",
    category: "SaaS",
    description: "Multi-tenant SaaS with subscription management",
    problem: "Startup needed a SaaS platform with flexible pricing tiers",
    solution: "Created multi-tenant architecture with subscription billing and user management",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    result: "Successfully launched with 500+ paying customers in first 3 months",
  },
];

const categories = ["All", "SaaS", "Ecommerce", "Dashboard", "API", "Marketplace"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real projects, real results - see how I&apos;ve helped businesses grow
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all relative overflow-hidden ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects - Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-[85vw] md:w-auto snap-center px-2"
                style={{ willChange: "transform", backfaceVisibility: "hidden" }}
              >
                <Card className="h-full flex flex-col group min-h-[550px] md:min-h-0">
                  <div className="flex items-start justify-between mb-4">
                    <motion.span 
                      className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium flex items-center gap-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                      style={{ willChange: "transform" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Tag className="w-3 h-3" />
                      </motion.div>
                      {project.category}
                    </motion.span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          aria-label="View live site"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.2, rotate: -15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4 flex-grow">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        Problem:
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        Solution:
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                    <h4 className="font-semibold text-primary-900 dark:text-primary-100 text-sm mb-1">
                      Result:
                    </h4>
                    <p className="text-sm text-primary-800 dark:text-primary-200">
                      {project.result}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

