'use client';
import { motion } from "framer-motion";

interface Users{
    users:[];
}

export default function DashboardCard2({users} : Users) {

  return (
    <div className="flex justify-center">
           <motion.div 
               className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 mr-3"
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.5 }}
               >
              <div className="p-4">
                <h3 className="mb-3 text-slate-800 text-xl font-bold">Total Users</h3>
                <p className="text-slate-600 leading-normal font-semibold">{users?.length}</p>
              </div>
           </motion.div>  
    </div>
  );
}
