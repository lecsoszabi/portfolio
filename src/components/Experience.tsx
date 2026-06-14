"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        role: { hu: "Full-stack fejlesztő · DevOps", en: "Full-stack Developer · DevOps" },
        company: "Optimaster s.r.o.",
        project: "CEDEC / PSMG — Sulzer GmbH · BMW AG",
        period: { hu: "2025.09 – jelenleg", en: "Sep 2025 – present" },
        desc: {
            hu: "BMW belsős eszköz, ami a rendelési adatok és a darabjegyzékek alapján kiszámolja a rendelésekhez szükséges alkatrészeket. DevOps-ként üzemeltetem és dokumentálom a rendszert, új funkciókat fejlesztek, és figyelem a hardver- és firmware-állapotokat.",
            en: "A BMW-internal tool that works out the parts needed for orders from the order data and bills of materials. As DevOps I run and document the system, build new features, and keep an eye on hardware and firmware status."
        },
        stack: ["Java", "Linux", "Jenkins", "Docker Swarm", "Ansible", "ELK", "Oracle", "Postgres", "Glassfish"]
    },
];

export default function Experience({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    return (
        <div className={`border-l ml-1 transition-colors duration-500 ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}>
            {experiences.map((exp, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                    className="relative pl-8 pb-2"
                >
                    <motion.span
                        className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-[#0066B1]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.15, type: "spring", stiffness: 400, damping: 16 }}
                    />
                    <p className={`font-mono text-xs mb-1 transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                        {exp.period[lang]}
                    </p>
                    <h3 className={`text-lg font-medium transition-colors duration-500 ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
                        {exp.role[lang]}
                    </h3>
                    <p className={`text-sm transition-colors duration-500 ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                        {exp.company}
                    </p>
                    <p className={`text-xs font-mono transition-colors duration-500 ${darkMode ? "text-[#5AB0F0]" : "text-[#0058A3]"}`}>
                        {exp.project}
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed max-w-2xl transition-colors duration-500 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                        {exp.desc[lang]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                        {exp.stack.map((s) => (
                            <span key={s} className={`font-mono text-xs transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                                {s}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
