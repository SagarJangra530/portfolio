"use client";

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  FileText, 
  Code, 
  CheckCircle, 
  Headphones,
  ArrowRight
} from "lucide-react";

interface Step {
  number: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Requirement Discussion",
    description: "Understanding your vision and needs",
    details: [
      "Free consultation call",
      "Project goals and objectives",
      "Timeline and budget discussion",
      "Technical requirements review",
    ],
  },
  {
    number: 2,
    icon: FileText,
    title: "Planning & Estimation",
    description: "Creating a detailed project roadmap",
    details: [
      "Project breakdown and milestones",
      "Technical architecture design",
      "Timeline and cost estimation",
      "Project proposal delivery",
    ],
  },
  {
    number: 3,
    icon: Code,
    title: "Development & Updates",
    description: "Building your solution with regular communication",
    details: [
      "Agile development approach",
      "Weekly progress updates",
      "Code reviews and quality checks",
      "Early access for feedback",
    ],
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Testing & Delivery",
    description: "Thorough testing before launch",
    details: [
      "Comprehensive testing",
      "Bug fixes and refinements",
      "Performance optimization",
      "Final deployment",
    ],
  },
  {
    number: 5,
    icon: Headphones,
    title: "Post-Delivery Support",
    description: "Ongoing support and maintenance",
    details: [
      "Bug fixes warranty period",
      "Documentation and handover",
      "Training and guidance",
      "Optional maintenance plans",
    ],
  },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
            My Work Process
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A simple, transparent process designed to deliver results efficiently
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                className="flex flex-col md:flex-row gap-6 items-start group"
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      animate={{ 
                        boxShadow: [
                          "0 10px 25px -5px rgba(14, 165, 233, 0.3)",
                          "0 15px 35px -5px rgba(14, 165, 233, 0.5)",
                          "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {step.number}
                    </motion.div>
                    {index < steps.length - 1 && (
                      <motion.div 
                        className="absolute left-1/2 top-full w-0.5 h-12 md:h-16 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 hidden md:block"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      />
                    )}
                  </motion.div>
                  <motion.div 
                    className="p-4 rounded-lg bg-primary-100 dark:bg-primary-900/30"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white shadow-2xl"
        >
          <motion.h3 
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Start Your Project?
          </motion.h3>
          <p className="mb-8 text-primary-50 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and get started with step one - your <strong>free consultation</strong>!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Get Your Free Consultation Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="mt-4 text-primary-100 text-sm">
            ⚡ Response within 24 hours • 100% Free • No Commitment
          </p>
        </motion.div>
      </div>
    </section>
  );
}

