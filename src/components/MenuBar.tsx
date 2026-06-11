"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaMoon, FaSun } from "react-icons/fa";

export default function MenuBar({
    darkMode,
    setDarkMode,
    lang,
    setLang,
}: {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
    lang: "hu" | "en";
    setLang: (v: "hu" | "en") => void;
}) {
    // Clock is mounted-gated so the SSR markup never contains a timestamp
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const t = setInterval(() => setNow(new Date()), 30_000);
        return () => clearInterval(t);
    }, []);

    const locale = lang === "hu" ? "hu-HU" : "en-US";
    const clock = now
        ? `${now.toLocaleDateString(locale, { weekday: "short", month: "short", day: "numeric" })}  ${now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" })}`
        : "";

    return (
        <motion.div
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 h-8 z-50 flex items-center px-4 text-xs backdrop-blur-md border-b transition-colors duration-500
                ${darkMode
                    ? "bg-gray-900/70 border-gray-700/60 text-gray-200"
                    : "bg-white/60 border-gray-200/80 text-gray-800"
                }`}
        >
            <div className="flex items-center gap-2 min-w-0">
                <FaApple size={14} aria-hidden />
                <span className="font-semibold truncate">Adorjáni Szabolcs</span>
                <span className={`hidden sm:inline transition-colors duration-500 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    — portfolio
                </span>
            </div>
            <div className="ml-auto flex items-center gap-3">
                <motion.button
                    onClick={() => setLang(lang === "hu" ? "en" : "hu")}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className={`px-2 py-0.5 rounded font-semibold cursor-pointer transition-colors duration-300
                        ${darkMode ? "hover:bg-gray-700/70" : "hover:bg-gray-200/80"}`}
                    aria-label="Toggle language"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={lang}
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="inline-block"
                        >
                            {lang === "hu" ? "HU" : "EN"}
                        </motion.span>
                    </AnimatePresence>
                </motion.button>
                <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-1 rounded cursor-pointer transition-colors duration-300
                        ${darkMode ? "hover:bg-gray-700/70" : "hover:bg-gray-200/80"}`}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={darkMode ? "sun" : "moon"}
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="flex"
                        >
                            {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
                        </motion.span>
                    </AnimatePresence>
                </motion.button>
                <span className="font-mono tabular-nums whitespace-pre hidden xs:inline sm:inline" suppressHydrationWarning>
                    {clock}
                </span>
            </div>
        </motion.div>
    );
}
