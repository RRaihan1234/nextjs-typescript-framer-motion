'use client'
import useFetch from "@/app/components/customHooks/useFetch";
import PostCard from "@/app/components/PostCard";
import Link from "next/link";
import { motion } from "motion/react"

export default function Post() {
  
  
  return (
    <div>
        <div>
           <Link href="/error-fetching-posts">
              <div className='ml-3 text-white'>
                <motion.button 
                   className="bg-red-500 p-2 rounded-xl cursor-pointer"
                   whileTap={{
                    scale: 0.8,
                    transition: { duration : 0.5}
                  }}
                   >
                    Observe the Fetch Error
                 </motion.button>
              </div>
            </Link>
        </div>
    </div>
  );
}
