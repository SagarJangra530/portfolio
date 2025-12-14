"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export default function TrustBadges() {
  const scrollRef = useAutoScroll<HTMLDivElement>({
    interval: 3000,
    pauseOnHover: true,
    enabled: typeof window !== "undefined" && window.innerWidth < 768,
  });

  const badges = [
    {
      icon: Shield,
      text: "100% Satisfaction Guaranteed",
      subtext: "Money-back if not satisfied",
    },
    {
      icon: Clock,
      text: "24-Hour Response Time",
      subtext: "Fast communication guaranteed",
    },
    {
      icon: Award,
      text: "5+ Years Experience",
      subtext: "Proven track record",
    },
    {
      icon: CheckCircle,
      text: "On-Time Delivery",
      subtext: "Never miss a deadline",
    },
  ];

  return (
    <div className="py-6 md:py-8 bg-gradient-to-r from-primary-50 via-white to-primary-50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 border-y border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="text-center flex-shrink-0 w-[85vw] md:w-auto snap-center px-2"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-2 md:mb-3">
                <badge.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white mb-1">
                {badge.text}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {badge.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

