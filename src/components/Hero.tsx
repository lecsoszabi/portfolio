import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4"
        >
            <motion.img
                src="/input.png"
                alt="Profile"
                className="w-40 h-40 rounded-2xl shadow-lg object-cover"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ boxShadow: '0 6px 32px 0 rgba(0,0,0,0.10)' }}
            />
            <motion.h1
                className="text-5xl font-bold mt-8 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
                Szabolcs Adorjáni
            </motion.h1>
        </div>
    );
}