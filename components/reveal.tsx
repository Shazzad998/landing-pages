"use client";
import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    x?: number;
    y?: number;
    duration?: number;
}

export default function Reveal({ children, delay = 0, className, x = 0, y = 0, duration = 0.5 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: duration, delay: delay }}
      className={className}
    >
        {children}
    </motion.div>
  );
}