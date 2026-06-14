"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const links = [
    { id: "skills", label: { hu: "Készségek", en: "Skills" } },
    { id: "projects", label: { hu: "Projektek", en: "Projects" } },
    { id: "studies", label: { hu: "Tanulmányok", en: "Studies" } },
    { id: "experience", label: { hu: "Tapasztalat", en: "Experience" } },
    { id: "contact", label: { hu: "Kapcsolat", en: "Contact" } },
];

export default function Nav({
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
    const [active, setActive] = useState("");

    useEffect(() => {
        const visible = new Set<string>();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) visible.add(e.target.id);
                    else visible.delete(e.target.id);
                });
                // Pick the first section (in document order) currently in view
                const current = links.find(({ id }) => visible.has(id));
                setActive(current ? current.id : "");
            },
            { threshold: 0, rootMargin: "-20% 0px -55% 0px" }
        );
        links.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl transition-colors duration-500
                ${darkMode
                    ? "bg-zinc-950/70 border-zinc-800/80"
                    : "bg-white/70 border-zinc-200/80"
                }`}
        >
            <nav className="mx-auto max-w-4xl px-6 h-14 flex items-center justify-between">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="font-medium tracking-tight text-sm cursor-pointer"
                    aria-label="Back to top"
                >
                    Adorjáni Szabolcs
                </button>

                <div className="flex items-center gap-1">
                    <ul className="hidden md:flex items-center gap-1 mr-2">
                        {links.map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollTo(id)}
                                    className={`relative px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors duration-300
                                        ${active === id
                                            ? darkMode ? "text-[#5AB0F0]" : "text-[#0058A3]"
                                            : darkMode ? "text-zinc-500 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-700"
                                        }`}
                                >
                                    {label[lang]}
                                    {active === id && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className={`absolute inset-0 -z-10 rounded-md ${darkMode ? "bg-zinc-800" : "bg-zinc-100"}`}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setLang(lang === "hu" ? "en" : "hu")}
                        className={`w-9 h-8 text-xs font-medium rounded-md cursor-pointer transition-colors duration-300 overflow-hidden
                            ${darkMode ? "text-zinc-300 hover:bg-zinc-800" : "text-zinc-600 hover:bg-zinc-100"}`}
                        aria-label="Toggle language"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={lang}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="flex items-center justify-center"
                            >
                                {lang === "hu" ? "HU" : "EN"}
                            </motion.span>
                        </AnimatePresence>
                    </button>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-300
                            ${darkMode ? "text-zinc-300 hover:bg-zinc-800" : "text-zinc-600 hover:bg-zinc-100"}`}
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={darkMode ? "sun" : "moon"}
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                                className="flex"
                            >
                                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
