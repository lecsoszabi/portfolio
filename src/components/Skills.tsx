"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
    name: string;
    level: number;
}

const skills: Skill[] = [
    { name: "Java · Spring Boot", level: 90 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "Angular · React", level: 80 },
    { name: "Python", level: 72 },
    { name: "C#", level: 68 },
    { name: "C++", level: 60 },
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
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [started, target]);

    return (
        <span className={`font-mono text-sm tabular-nums transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
            {value}
        </span>
    );
}

export default function Skills({ darkMode = false }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <div ref={sectionRef} className="flex flex-col gap-6">
            {skills.map((skill, idx) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.07, duration: 0.5, ease: "easeOut" }}
                >
                    <div className="flex justify-between items-baseline mb-2">
                        <span className={`font-medium transition-colors duration-500 ${darkMode ? "text-zinc-200" : "text-zinc-800"}`}>
                            {skill.name}
                        </span>
                        <AnimatedPercent target={skill.level} started={inView} darkMode={darkMode} />
                    </div>
                    <div className={`w-full h-0.5 transition-colors duration-500 ${darkMode ? "bg-zinc-800" : "bg-zinc-200"}`}>
                        <motion.div
                            className="h-0.5 bg-[#0066B1]"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: idx * 0.07 + 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
