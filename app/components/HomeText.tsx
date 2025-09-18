'use client';
import {useState} from "react";
import { motion } from "motion/react"

export default function Home() {
  const [text] = useState<string>("Welcome To The Dashboard");

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      },
    },
  };

  return (
    <div>
           <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl font-bold text-center"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={containerVariants}>
                  {char}
                </motion.span>
              ))}
          </motion.div>
    </div>
  );
}
