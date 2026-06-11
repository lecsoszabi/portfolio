"use client";
import { RefObject } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function MacWindow({
    children,
    darkMode = false,
    scrollRef,
    dock,
}: {
    children: React.ReactNode;
    darkMode?: boolean;
    scrollRef?: RefObject<HTMLDivElement | null>;
    dock?: React.ReactNode;
}) {
    const { scrollYProgress } = useScroll({ container: scrollRef });
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full h-full max-w-5xl mx-auto rounded-2xl flex flex-col overflow-hidden transition-colors duration-500
                ${darkMode
                    ? "shadow-2xl border border-gray-700 bg-gray-900"
                    : "shadow-2xl border border-gray-200 bg-white"
                }
            `}
        >
            <div
                className={`relative flex items-center gap-2 px-4 py-2 rounded-t-2xl border-b transition-colors duration-500
                    ${darkMode
                        ? "border-gray-700 bg-gray-800"
                        : "border-gray-200 bg-gray-50"
                    }
                `}
            >
                {["bg-red-500", "bg-yellow-400", "bg-green-500"].map((color, i) => (
                    <motion.span
                        key={color}
                        className={`w-3 h-3 rounded-full ${color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.25 }}
                        transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 400, damping: 18 }}
                    />
                ))}
                <span
                    className={`absolute left-1/2 -translate-x-1/2 font-mono text-xs transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                    szabolcs — ~/portfolio
                </span>
            </div>
            {/* Scroll progress bar */}
            <motion.div
                className="h-0.5 bg-blue-600 origin-left"
                style={{ scaleX: progress }}
            />
            <div
                ref={scrollRef}
                className={`relative flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-rounded transition-colors duration-500 ${darkMode ? "scrollbar-track-bg-gray-800 scrollbar-thumb-bg-gray-600" : "scrollbar-track-bg-gray-100 scrollbar-thumb-bg-gray-400"}`}
            >
                {children}
            </div>
            {dock}
        </motion.div>
    );
}
