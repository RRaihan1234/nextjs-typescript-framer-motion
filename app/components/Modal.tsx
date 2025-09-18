'use client';
import { motion, AnimatePresence } from "framer-motion";
import type {User} from "@/models/models";

interface UserProps {
    setSelectedUser:  React.Dispatch<React.SetStateAction<User | null>>;
    selectedUser: User;
  }

export default function Modal({selectedUser, setSelectedUser} : UserProps) {
  
  return (
    <div>
         <AnimatePresence>
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-green-50 bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    >
                    <h2 className="text-xl font-bold mb-4">User Details</h2>
                    <p className='mb-1'><span className="font-semibold">ID:</span> {selectedUser.id}</p>
                    <p className='mb-1'><span className="font-semibold">User Name:</span> {selectedUser.username}</p>
                    <p className='mb-1'><span className="font-semibold">Name:</span> {selectedUser.name}</p>
                    <p className='mb-1'><span className="font-semibold">Email:</span> {selectedUser.email}</p>
                    <p className='mb-1'><span className="font-semibold">Company:</span> {selectedUser.company.name}</p>
                    <p className='mb-1'><span className="font-semibold">Address:</span> {selectedUser.address.street + ', ' + selectedUser.address.city}</p>
                    <p className='mb-1'><span className="font-semibold">Website:</span> {selectedUser.website}</p>
                    <p className='mb-1'><span className="font-semibold">Contact:</span> {selectedUser.phone}</p>

                    <button
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                        onClick={() => setSelectedUser(null)}
                    >
                        Close
                    </button>
                    </motion.div>
                </motion.div>
      </AnimatePresence>
    </div>
  );
}
