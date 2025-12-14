import { ReactNode, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Optimized spring with faster response
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Reduced rotation for better performance
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      animate={{ opacity: 1 }}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      onMouseMove={hover ? handleMouseMove : undefined}
      onMouseEnter={hover ? () => setIsHovered(true) : undefined}
      onMouseLeave={hover ? handleMouseLeave : undefined}
      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      style={hover && isHovered ? { 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased"
      } : { 
        willChange: "auto"
      }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-6 relative overflow-hidden group ${className}`}
    >
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100"
          style={{ 
            transform: "translateZ(0)",
            willChange: "opacity",
            transition: "opacity 0.15s ease-out"
          }}
        />
      )}
      <div 
        className="relative z-10"
        style={{
          transform: "translateZ(0)",
          willChange: "auto",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

