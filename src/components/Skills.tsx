
"use client";
import { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Skill {
    name: string;
    level: number;
}

const skills: Skill[] = [
    { name: "TypeScript", level: 50 },
    { name: "Java", level: 80 },
    { name: "Python", level: 60 },
    { name: "C++", level: 40 },
    { name: "JavaScript", level: 78 },
    { name: "Kotlin", level: 50 },
];

export default function Skills() {
    const [started, setStarted] = useState(false);
    const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setStarted(true);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        skills.forEach((skill, i) => {
            const delay = Math.random() * 700;
            setTimeout(() => {
                setAnimatedLevels((prev) =>
                    prev.map((v, idx) => (idx === i ? skill.level : v))
                );
            }, delay);
        });
    }, [started]);

    return (
        <div
            ref={sectionRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5"
        >
            {skills.map((skill, index) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-black shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="w-24 h-24">
                        <CircularProgressbar
                            value={animatedLevels[index]}
                            text={`${animatedLevels[index]}%`}
                            styles={buildStyles({
                                pathColor: "#3b82f6",
                                trailColor: "#374151",
                                textColor: "#ffffff",
                                textSize: "18px",
                            })}
                        />
                    </div>
                    <p className="mt-3 text-white font-medium">{skill.name}</p>
                </div>
            ))}
        </div>
    );
}
