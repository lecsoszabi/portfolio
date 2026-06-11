"use client";
import { motion } from "framer-motion";

export const studies = [
    {
        school: {
            hu: "Szegedi Tudományegyetem",
            en: "University of Szeged"
        },
        field: {
            hu: "Programtervező informatikus BSc",
            en: "Computer Science BSc"
        },
        period: {
            hu: "2023 – jelenleg",
            en: "2023 – now"
        },
        desc: {
            hu: "Alapozó tanulmányok algoritmusokból, adatbázisokból és modern webfejlesztésből és szoftverfejlesztésből.",
            en: "Foundational studies in algorithms, databases, and modern web development and programming."
        }
    }
];

export default function Studies({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    return (
        <div className="relative ml-4">
            {studies.map((study, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.12, type: "spring", stiffness: 260, damping: 26 }}
                    whileHover={{ y: -3 }}
                    className={`mb-8 ml-6 p-4 rounded-2xl transition-shadow transition-colors duration-500
                        ${darkMode
                        ? "bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl"
                        : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                    }`}
                >
                    <motion.div
                        className={`absolute w-3 h-3 rounded-full -left-[7px] mt-10 ${darkMode ? "bg-gray-100" : "bg-gray-900"}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 400, damping: 18 }}
                    />
                    <h3 className={`font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                        {study.school[lang]}
                    </h3>
                    <h4 className={`font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                        {study.field[lang]}
                    </h4>
                    <p className={`text-sm transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {study.period[lang]}
                    </p>
                    <p className={`mt-2 text-sm transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {study.desc[lang]}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
