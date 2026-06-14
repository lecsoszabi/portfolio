"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: { hu: "Könyv Kölcsönző", en: "Book Lending" },
        desc: {
            hu: "Könyvtári rendszer könyvek kölcsönzésére és adományozására.",
            en: "A library app for lending and donating books."
        },
        stack: ["React", "Vite", "Quarkus"],
        href: "https://github.com/lecsoszabi/QuarkusKonyvtarAdatbazis"
    },
    {
        title: { hu: "Nailshop", en: "Nailshop" },
        desc: {
            hu: "Webshop egy műkörmös üzletnek.",
            en: "A webshop for a nail studio."
        },
        stack: ["Angular", "Firebase"],
        href: "https://github.com/lecsoszabi/nailShopWebker"
    },
    {
        title: { hu: "Trivia quiz", en: "Trivia quiz" },
        desc: {
            hu: "Kvízjáték online ranglistával.",
            en: "A quiz game with an online leaderboard."
        },
        stack: ["Angular", "RestAPI"],
        href: "https://github.com/lecsoszabi/AngularQuizApp"
    }
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function Projects({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    return (
        <motion.div
            className={`border-t transition-colors duration-500 ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
        >
            {projects.map((p) => (
                <motion.a
                    key={p.title.en}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={item}
                    className={`group block border-b py-6 transition-colors duration-300
                        ${darkMode
                            ? "border-zinc-800 hover:bg-zinc-900/60"
                            : "border-zinc-200 hover:bg-zinc-50"
                        }`}
                >
                    <div className="flex items-start justify-between gap-4 px-2">
                        <div className="min-w-0">
                            <h3 className={`text-lg font-medium flex items-center gap-1.5 transition-colors duration-500 ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
                                {p.title[lang]}
                                <ArrowUpRight
                                    className={`size-4 transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                                />
                            </h3>
                            <p className={`mt-1 text-sm transition-colors duration-500 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                                {p.desc[lang]}
                            </p>
                        </div>
                        <div className="hidden sm:flex flex-wrap justify-end gap-x-3 gap-y-1 shrink-0 pt-1">
                            {p.stack.map((s) => (
                                <span key={s} className={`font-mono text-xs transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
}
