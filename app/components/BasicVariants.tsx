"use client"
import { motion } from "motion/react"

const BasicVariants = () => {
  
  const boxVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 30 },
  };

  return (
    <div>
        <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration:1
            }}
            className="mt-1 w-20 h-20 bg-blue-500"
           />

          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration:1
            }}
            className="mt-1 mb-1 w-20 h-20 bg-amber-500"
           />
    </div>
  )
}

export default BasicVariants
