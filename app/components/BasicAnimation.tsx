"use client"
import { motion } from "motion/react"
import '@/app/style.css';

const BasicAnimation = () => {
  return (
    <div>
        <motion.div 
            className='box1 bg-green-500 mt-10 mb-10'
            initial={{
              x:50
            }}
            animate={{ 
              x : 300,
              y : 100,
              rotate : 180
            }}
            transition={{
              duration:3,
              delay:1,
              repeat:Infinity,
              ease:'anticipate'
            }}
          >
              div
          </motion.div>
    </div>
  )
}

export default BasicAnimation
