// src/components/BlurText.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function BlurText({ text, delay = 0.05, className = "" }) {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * delay }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
