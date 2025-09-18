"use client"
import { motion } from "motion/react"

const AppearedWhenScroll = () => {
  return (
    <div>
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, /* ease: 'easeOut' */ }}
            viewport={{ once: true, amount: 0.5 }} // Only animate once when 50% visible
            className="text-center mt-10"
          >
                 Hello, I appear when you scroll! <br></br>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fua ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
           </motion.h2>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, /* ease: 'easeOut' */ }}
            viewport={{ once: true, amount: 0.5 }} // Only animate once when 50% visible
            className="text-center mt-10"
          >
                 Hello, I appear when you scroll! <br></br>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur fuga ratione, optio corporis, hic sapiente illo maxime, tempora eum alias
           </motion.h2>
    </div>
  )
}

export default AppearedWhenScroll
