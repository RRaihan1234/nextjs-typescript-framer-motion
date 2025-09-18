"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Post {
    index?: number;
    userId:string;
    id:string;
    body:string;
    title:string;
    post?:{
        userId: string;
        id: string;
        title: string;
        body: string;
    };
  }

export default function PostCard({post, index = 0, id, userId, body, title} : Post) {
  
  return (
    <>
       {!id && <Link href={`/posts/${post?.id}`}>
          <div className="">
              <motion.div 
                  className="my-3 bg-white shadow-sm border border-slate-200 rounded-lg w-75 mr-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  >
                  <div className="p-4">
                    {!id && <h3 className="mb-3 text-slate-800 text-xl font-bold">Post - {index + 1}</h3>}
                    {id && <h3 className="mb-3 text-slate-800 text-xl font-bold">Post Details</h3>}
                    {userId && <p className="text-slate-600 leading-normal font-semibold mb-1">User Id : {userId}</p>}
                    {id && <p className="text-slate-600 leading-normal font-semibold mb-1">id : {id}</p>}
                    <p className="text-slate-600 leading-normal font-semibold mb-1">title : {title}</p>
                    <p className="text-slate-600 leading-normal font-semibold">body : {body}</p>
                  </div>
              </motion.div> 
          </div>
       </Link>}
       {id && <div className="">
                <motion.div 
                     className="my-3 bg-white shadow-sm border border-slate-200 rounded-lg w-75 mr-1"
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5 }}
                     >
                    <div className="p-4">
                      {!id && <h3 className="mb-3 text-slate-800 text-xl font-bold">Post - {index + 1}</h3>}
                      {id && <h3 className="mb-3 text-slate-800 text-xl font-bold">Post Details</h3>}
                      {userId && <p className="text-slate-600 leading-normal font-semibold mb-1">User Id : {userId}</p>}
                      {id && <p className="text-slate-600 leading-normal font-semibold mb-1">id : {id}</p>}
                      <p className="text-slate-600 leading-normal font-semibold mb-1">title : {title}</p>
                      <p className="text-slate-600 leading-normal font-semibold">body : {body}</p>
                    </div>
                </motion.div> 
          </div>}
    </>
  );
}