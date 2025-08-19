"use client";
import { useEffect, useRef, useState } from "react";

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

export default function Skills({ darkMode = false }: { darkMode?: boolean }) {
    const [started, setStarted] = useState(false);
    const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) setStarted(true); });
        }, { threshold: 0.5 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        skills.forEach((skill, i) => {
            setTimeout(() => {
                setAnimatedLevels(prev => prev.map((v, idx) => idx === i ? skill.level : v));
            }, i * 200);
        });
    }, [started]);

    return (
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
                <div
                    key={skill.name}
                    className={`p-4 rounded-2xl transition-shadow transition-colors duration-500
                        ${darkMode
                            ? "bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl"
                            : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                        }`}
                >
                    <div className="flex justify-between mb-1">
                        <span className={`font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{skill.name}</span>
                        <span className={`transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{animatedLevels[idx]}%</span>
                    </div>
                    <div className={`w-full h-4 rounded-full overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                        <div
                            style={{ width: `${animatedLevels[idx]}%` }}
                            className="h-4 bg-blue-600 rounded-full transition-all duration-700 shadow-sm"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}