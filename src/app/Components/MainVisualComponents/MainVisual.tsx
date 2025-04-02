'use client';

import { motion } from 'framer-motion';
// import CardContent from '@mui/material/CardContent';

export default function MainVisual() {
    return (
        <>
            <div className="relative w-full h-102 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                {/* contents */}
                <motion.div
                    className="relative z-10 text-center p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-bold mb-6">Soccer Learning</h1>
                    <p className="text-lg mb-7">Soccer is goot sports</p>
                    <motion.a
                        href="#"
                        className=" px-6 py-3 border border-[#4F772D] bg-white text-[#4F772D] text-xl rounded-3xl shadow-xl hover:bg-[#4F772D] hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Lets start
                    </motion.a>
                </motion.div>
            </div>
        </>

    );
}