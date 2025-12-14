"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "../Card";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud,
  Zap
} from "lucide-react";

interface TechGroup {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  technologies: {
    name: string;
    description: string;
  }[];
}

const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    description: "Modern, responsive user interfaces",
    technologies: [
      {
        name: "React",
        description: "Building interactive and dynamic user interfaces",
      },
      {
        name: "Next.js",
        description: "Server-side rendering and optimized performance",
      },
      {
        name: "TypeScript",
        description: "Type-safe code for fewer bugs",
      },
      {
        name: "Tailwind CSS",
        description: "Fast, customizable styling",
      },
      {
        name: "Redux / Context API",
        description: "State management for complex applications",
      },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    description: "Robust server-side solutions",
    technologies: [
      {
        name: "Node.js",
        description: "Fast, scalable server-side JavaScript",
      },
      {
        name: "Express.js",
        description: "Flexible web application framework",
      },
      {
        name: "REST APIs",
        description: "Standard API design for easy integration",
      },
      {
        name: "GraphQL",
        description: "Efficient data fetching and querying",
      },
      {
        name: "Socket.io",
        description: "Real-time communication features",
      },
    ],
  },
  {
    category: "Database",
    icon: Database,
    description: "Efficient data storage and management",
    technologies: [
      {
        name: "MongoDB",
        description: "Flexible NoSQL database for modern apps",
      },
      {
        name: "PostgreSQL",
        description: "Reliable relational database",
      },
      {
        name: "Redis",
        description: "Fast caching and session storage",
      },
      {
        name: "Mongoose / Prisma",
        description: "Database management and modeling",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Cloud,
    description: "Deployment and development tools",
    technologies: [
      {
        name: "AWS / Vercel",
        description: "Cloud hosting and deployment",
      },
      {
        name: "Docker",
        description: "Containerized applications",
      },
      {
        name: "Git / GitHub",
        description: "Version control and collaboration",
      },
      {
        name: "CI/CD",
        description: "Automated testing and deployment",
      },
      {
        name: "JWT Authentication",
        description: "Secure user authentication",
      },
    ],
  },
];

export default function TechStack() {
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

  return (
    <section id="tech-stack" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
            Technology Stack
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Modern technologies I use to build scalable, high-performance applications
          </p>
        </motion.div>

            {/* Mobile: Horizontal Scroll, Desktop: Grid */}
            <div 
              ref={scrollRef}
              className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
              style={{ 
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              }}
            >
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIndex * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center px-2"
            >
              <Card className="h-full min-h-[450px] md:min-h-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <group.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {group.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (groupIndex * 0.1) + (techIndex * 0.05), duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      whileHover={{ x: 3, scale: 1.01 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 cursor-pointer group"
                      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: techIndex * 0.3 }}
                      >
                        <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0 group-hover:text-primary-500 dark:group-hover:text-primary-300" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {tech.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Need a different technology?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I&apos;m always learning and can adapt to your preferred tech stack. Let&apos;s discuss!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

