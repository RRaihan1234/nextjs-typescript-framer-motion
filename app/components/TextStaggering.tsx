'use client'
import { useState } from "react";
import { motion } from "motion/react"

const TextStaggering = () => {
  const [text] = useState<string>("Framer Motion");

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  };

  return (
    <div>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold"
          >
            Hi,&nbsp;{text.split("").map((char, index) => (
              <motion.span key={index} variants={containerVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
    </div>
  )
}

export default TextStaggering
