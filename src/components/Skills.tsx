"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
    name: string;
    level: number;
}

const skills: Skill[] = [
    { name: "TypeScript", level: 90 },
    { name: "Java", level: 80 },
    { name: "Python", level: 70 },
    { name: "C++", level: 60 },
    { name: "JavaScript", level: 85 },
    { name: "Kotlin", level: 50 },
];

function AnimatedPercent({ target, started, darkMode }: { target: number; started: boolean; darkMode: boolean }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!started) return;
        const duration = 900;
        const start = performance.now();
        let frame: number;
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [started, target]);

    return (
        <span className={`tabular-nums transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            {value}%
        </span>
    );
}

export default function Skills({ darkMode = false }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.4 });

    return (
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.08, type: "spring", stiffness: 260, damping: 24 }}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-2xl transition-shadow transition-colors duration-500
                        ${darkMode
                            ? "bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl"
                            : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                        }`}
                >
                    <div className="flex justify-between mb-1">
                        <span className={`font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{skill.name}</span>
                        <AnimatedPercent target={skill.level} started={inView} darkMode={darkMode} />
                    </div>
                    <div className={`w-full h-4 rounded-full overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                        <motion.div
                            className="h-4 bg-blue-600 rounded-full shadow-sm"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: idx * 0.08 + 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
