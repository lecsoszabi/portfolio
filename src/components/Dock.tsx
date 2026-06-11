"use client";
import { useEffect, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { Home, Code2, FolderGit2, GraduationCap, Briefcase, Mail } from "lucide-react";

const items = [
    { id: "home", icon: Home, label: { hu: "Kezdőlap", en: "Home" } },
    { id: "skills", icon: Code2, label: { hu: "Készségek", en: "Skills" } },
    { id: "projects", icon: FolderGit2, label: { hu: "Projektek", en: "Projects" } },
    { id: "studies", icon: GraduationCap, label: { hu: "Tanulmányok", en: "Studies" } },
    { id: "experience", icon: Briefcase, label: { hu: "Tapasztalat", en: "Experience" } },
    { id: "contact", icon: Mail, label: { hu: "Kapcsolat", en: "Contact" } },
];

export default function Dock({
    darkMode = false,
    lang = "hu",
    scrollRef,
}: {
    darkMode?: boolean;
    lang?: "hu" | "en";
    scrollRef?: RefObject<HTMLDivElement | null>;
}) {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { root: scrollRef?.current ?? null, threshold: 0.4 }
        );
        items.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [scrollRef]);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 220, damping: 24 }}
            aria-label={lang === "hu" ? "Szekció navigáció" : "Section navigation"}
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-end gap-1 px-3 py-2 rounded-2xl border backdrop-blur-md shadow-xl transition-colors duration-500
                ${darkMode
                    ? "bg-gray-800/70 border-gray-600/50"
                    : "bg-white/70 border-gray-200/80"
                }`}
        >
            {items.map(({ id, icon: Icon, label }) => (
                <motion.button
                    key={id}
                    onClick={() => scrollTo(id)}
                    whileHover={{ scale: 1.35, y: -8 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 18 }}
                    aria-label={label[lang]}
                    className="group relative flex flex-col items-center p-2 cursor-pointer"
                >
                    {/* Tooltip */}
                    <span
                        className={`pointer-events-none absolute -top-8 px-2 py-0.5 rounded-md text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow
                            ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-900 text-white"}`}
                    >
                        {label[lang]}
                    </span>
                    <Icon
                        className={`size-5 transition-colors duration-300
                            ${active === id
                                ? "text-blue-600"
                                : darkMode ? "text-gray-300 group-hover:text-gray-100" : "text-gray-600 group-hover:text-gray-900"
                            }`}
                        strokeWidth={2}
                    />
                    {/* Running-app dot */}
                    <span
                        className={`absolute -bottom-0.5 w-1 h-1 rounded-full bg-blue-600 transition-opacity duration-300 ${active === id ? "opacity-100" : "opacity-0"}`}
                    />
                </motion.button>
            ))}
        </motion.nav>
    );
}
