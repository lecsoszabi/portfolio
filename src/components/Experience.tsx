"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        role: {
            hu: "Szoftverfejlesztő",
            en: "Software Developer"
        },
        company: "Minero IT Hungary Kft. / Gloster",
        period: {
            hu: "2025 – jelenleg",
            en: "2025 – present"
        },
        desc: {
            hu: "Backend fejlesztés egy automatizált raktár- és rendeléskezelő, valamint logisztikai projektben.",
            en: "Backend development for an automated warehouse and order management, and logistics project."
        }
    },
];

export default function Experience({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    return (
        <div className="relative ml-4">
            {experiences.map((exp, i) => (
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
                        className={`absolute w-3 h-3 rounded-full -left-[7px] mt-7 ${darkMode ? "bg-gray-100" : "bg-gray-900"}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 400, damping: 18 }}
                    />
                    <h3 className={`font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{typeof exp.role === "string" ? exp.role : exp.role[lang]}</h3>
                    <p className={`text-sm transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{exp.company} • {typeof exp.period === "string" ? exp.period : exp.period[lang]}</p>
                    <p className={`mt-2 text-sm transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{typeof exp.desc === "string" ? exp.desc : exp.desc[lang]}</p>
                </motion.div>
            ))}
        </div>
    );
}
