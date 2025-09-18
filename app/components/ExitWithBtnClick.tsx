"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"
import '@/app/style.css';

const ExitWithBtnClick = () => {
  const [show, setShow] = useState<boolean>(true);

  let handleClick = () => {
    setShow((prev) => !prev)
  };

  return (
    <div>
         <AnimatePresence>
              {show && <motion.h1 
                    className="text-3xl font-bold text-center mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{duration:1}}
                    exit={{ opacity: 0 }} // exit animation
              >
                True
              </motion.h1>}
          </AnimatePresence>

          <motion.button 
            className="btn1 px-4 py-2 ml-30 text-white rounded-3xl cursor-pointer"
            whileHover={{
              backgroundColor:'#008000'
            }}
            whileTap={{
              scale:0.8
            }}
            onClick={handleClick}
          >
             Click Me 
          </motion.button>
    </div>
  )
}

export default ExitWithBtnClick
