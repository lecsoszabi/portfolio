"use client";
import { motion } from "framer-motion";

export default function Section({
    id,
    title,
    children,
    darkMode = false,
}: { id: string; title: string; children: React.ReactNode; darkMode?: boolean }) {
    return (
        <section
            id={id}
            className={`mx-auto max-w-5xl px-4 py-24 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
            <motion.div
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <span className={`block font-mono text-xs mb-2 transition-colors duration-500 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                    ~/{id}
                </span>
                <h2 className={`text-2xl font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                    {title}
                </h2>
                <motion.div
                    className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-blue-600 origin-center"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
