"use client"
import { motion } from "motion/react"
import '@/app/style.css';

const OtherImportantAnimations = () => {
  return (
    <div>
        <motion.div className='box2 bg-gray-500' 
              animate={{ 
                x : [0, 500, 500, 0, 0 ], // like keyframes
                y : [0, 0, 50, 50, 0],  // like keyframes
                rotate : [0, 360, 0, -360, 0]  // like keyframes
                }} 
              transition={{duration:5}}
            />

          <motion.div className='circle1 bg-gray-500' animate={{ x : 100, scale : 0.1}} transition={{duration:3}} />

          <motion.div
             drag
             whileDrag={{
              scale:0.5
             }}
             dragConstraints={{
              left:0,
              top:0,
              right:1000,
              bottom:100
             }}
             //dragDirectionLock
             className="box2 bg-green-500 cursor-grab">
              
          </motion.div>
    </div>
  )
}

export default OtherImportantAnimations
