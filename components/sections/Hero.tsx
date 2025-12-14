"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import { ArrowRight, Briefcase, Clock, Shield, Star } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-20 pb-6 md:pb-20 bg-white dark:bg-gray-900"
      style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-400/10"></div>

      <div className="container mx-auto px-3 md:px-4 relative z-10" style={{ opacity: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-12">
            {/* Profile Picture Section */}
            <motion.div
              initial={{ opacity: 1, scale: 1, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex-shrink-0 order-2 lg:order-1 relative z-10"
              style={{ opacity: 1 }}
            >
              <motion.div 
                className="relative cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full blur-2xl opacity-40"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 md:ring-4 ring-white dark:ring-gray-800 shadow-2xl z-10"
                  whileHover={{ 
                    boxShadow: "0 20px 60px -15px rgba(14, 165, 233, 0.5)",
                  }}
                >
                  <Image
                    src="/fiver_pp.JPG"
                    alt="Sagar Jangra - BuildNest Founder & Full Stack MERN Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    priority
                    unoptimized
                    onError={(e) => {
                      console.error("Image failed to load:", e);
                    }}
                  />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg z-20"
                >
                  <motion.div 
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                {/* Floating particles effect */}
                {[
                  { x: 30, y: 20 },
                  { x: 70, y: 80 },
                  { x: 50, y: 50 }
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary-400 rounded-full"
                    initial={{ 
                      x: "50%", 
                      y: "50%",
                      opacity: 0
                    }}
                    animate={{
                      x: `${pos.x}%`,
                      y: `${pos.y}%`,
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2" style={{ opacity: 1 }}>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3 md:mb-6"
                style={{ opacity: 1 }}
              >
                <span className="inline-block px-2 py-1 md:px-4 md:py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs md:text-sm font-medium mb-1 md:mb-2 leading-tight">
                  BuildNest — Complete Web & App Solutions
                </span>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-4 leading-tight">
                  by Sagar Jangra | Senior Full Stack MERN Developer
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-gray-900 dark:text-white leading-tight"
              >
                Transform Your Ideas Into
                <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Powerful Web Applications
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 md:mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
              >
                Expert MERN Stack development services to build scalable, high-performance SaaS applications, 
                REST APIs, and admin dashboards that drive business growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center lg:justify-start items-center mb-4 md:mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="primary"
                    size="md"
                    className="group shadow-2xl text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 w-full sm:w-auto"
                  >
                    Get Your Free Quote Now
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  variant="outline"
                  size="md"
                  className="group w-full sm:w-auto text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                >
                  <Briefcase className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  View My Work
                </Button>
              </motion.div>

              {/* Urgency & Trust CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-8"
              >
                <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-green-600 dark:text-green-400" />
                  <span className="font-medium text-green-700 dark:text-green-300 text-xs md:text-sm">Available Now</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium text-primary-700 dark:text-primary-300 text-xs md:text-sm">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-600 dark:text-yellow-400 fill-yellow-600 dark:fill-yellow-400" />
                  <span className="font-medium text-yellow-700 dark:text-yellow-300 text-xs md:text-sm">4.9/5 Rating</span>
                </div>
              </motion.div>

              {/* Trust Indicators - Mobile: Horizontal Scroll, Desktop: Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex md:grid md:grid-cols-4 gap-2 md:gap-3 lg:gap-6 max-w-3xl lg:max-w-none relative z-10 overflow-x-auto md:overflow-x-visible pb-0 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
                style={{ 
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center p-2 md:p-3 lg:p-6 rounded-lg md:rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 relative z-10 cursor-pointer group flex-shrink-0 w-[22vw] md:w-auto snap-center"
                  style={{ 
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)"
                  }}
                >
                  <motion.div 
                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1 md:mb-2 relative z-10"
                    style={{
                      textRendering: "optimizeLegibility",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale"
                    }}
                  >
                    5+
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-[10px] md:text-xs lg:text-sm relative z-10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-150 leading-tight">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center p-2 md:p-3 lg:p-6 rounded-lg md:rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 relative z-10 cursor-pointer group flex-shrink-0 w-[22vw] md:w-auto snap-center"
                  style={{ 
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)"
                  }}
                >
                  <motion.div 
                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1 md:mb-2 relative z-10"
                    style={{
                      textRendering: "optimizeLegibility",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale"
                    }}
                  >
                    100+
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-[10px] md:text-xs lg:text-sm relative z-10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-150 leading-tight">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center p-2 md:p-3 lg:p-6 rounded-lg md:rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 relative z-10 cursor-pointer group flex-shrink-0 w-[22vw] md:w-auto snap-center"
                  style={{ 
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)"
                  }}
                >
                  <motion.div 
                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1 md:mb-2 relative z-10"
                    style={{
                      textRendering: "optimizeLegibility",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale"
                    }}
                  >
                    10k+
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-[10px] md:text-xs lg:text-sm relative z-10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-150 leading-tight">LinkedIn</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center p-2 md:p-3 lg:p-6 rounded-lg md:rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 relative z-10 cursor-pointer group flex-shrink-0 w-[22vw] md:w-auto snap-center"
                  style={{ 
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)"
                  }}
                >
                  <motion.div 
                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-1 md:mb-2 relative z-10"
                    style={{
                      textRendering: "optimizeLegibility",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale"
                    }}
                  >
                    98%
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-[10px] md:text-xs lg:text-sm relative z-10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-150 leading-tight">Satisfaction</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
