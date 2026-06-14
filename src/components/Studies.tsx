"use client";
import { motion } from "framer-motion";

export const studies = [
    {
        school: { hu: "Szegedi Tudományegyetem", en: "University of Szeged" },
        field: { hu: "Programtervező informatikus BSc", en: "Computer Science BSc" },
        period: { hu: "2023 – jelenleg", en: "2023 – now" },
        desc: {
            hu: "Algoritmusok, adatbázisok és szoftverfejlesztés alapjai.",
            en: "The basics of algorithms, databases and software development."
        }
    }
];

export default function Studies({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    return (
        <div className={`border-l ml-1 transition-colors duration-500 ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}>
            {studies.map((study, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                    className="relative pl-8 pb-2"
                >
                    <motion.span
                        className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${darkMode ? "bg-zinc-100" : "bg-zinc-900"}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.15, type: "spring", stiffness: 400, damping: 16 }}
                    />
                    <p className={`font-mono text-xs mb-1 transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                        {study.period[lang]}
                    </p>
                    <h3 className={`text-lg font-medium transition-colors duration-500 ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
                        {study.school[lang]}
                    </h3>
                    <p className={`text-sm transition-colors duration-500 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                        {study.field[lang]}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                        {study.desc[lang]}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
