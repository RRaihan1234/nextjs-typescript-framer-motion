'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useFetch from "@/app/components/customHooks/useFetch";
import Modal from "@/app/components/Modal";
import type {User} from "@/models/models";



export default function User() {
  let [data, setData] = useState<User[]>([]);
  let [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  useEffect(() => {
     let fetchUsers = async () => {
        let users = await useFetch("https://jsonplaceholder.typicode.com/users");
        console.log(users);
        setData(users);
     }
     
     fetchUsers()
  },[])
  
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-gray-600 font-medium">Name</th>
                        <th className="px-4 py-2 text-left text-gray-600 font-medium">Email</th>
                        <th className="px-4 py-2 text-left text-gray-600 font-medium">Company</th>
                    </tr>
                </thead>
                {
                    data.map((user, index) => {
                        return (
                            <tbody className="divide-y divide-gray-200" key={index}>
                                <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedUser(user)}>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.company.name}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
         </div>

         <AnimatePresence>
                {selectedUser && <Modal setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>}
      </AnimatePresence>
    </div>
  );
}
