import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 dark:bg-gray-200 hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-gray-900",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20",
  };

  // Override variant styles if custom bg/text colors are provided in className
  const hasCustomColors = className.includes('bg-') || className.includes('text-');
  const variantClass = hasCustomColors ? '' : variants[variant];

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02, 
        y: -1
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)"
      }}
      className={`${baseStyles} ${hasCustomColors ? '' : variantClass} ${sizes[size]} ${className} relative overflow-hidden group`}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <span 
        className="relative z-10 flex items-center"
        style={{
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          transform: "translateZ(0)"
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

