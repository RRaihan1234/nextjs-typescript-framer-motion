"use client"
import { motion, useScroll} from "motion/react"

const ProgressBarTopWithScroll = () => {
  const {scrollYProgress} =  useScroll();

  return (
    <div>
       <motion.div
            style={{
              scaleX:scrollYProgress
            }}
            className="bg-green-300 origin-left w-full h-3 fixed top-0 left-0">
        </motion.div>
    </div>
  )
}

export default ProgressBarTopWithScroll
