"use client";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BootScreen({ onFinishAction }: { onFinishAction: () => void }) {
    const [progress, setProgress] = useState<number>(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            const t = setTimeout(() => setProgress(progress + 5), 30); // Gyors animáció
            return () => clearTimeout(t);
        } else {
            setTimeout(onFinishAction, 700);
        }
    }, [progress, onFinishAction]);

    useEffect(() => {
        if (progress > 25 && step === 0) setStep(1);
        if (progress > 55 && step === 1) setStep(2);
        if (progress > 85 && step === 2) setStep(3);
    }, [progress, step]);

    const lines = [
        "Booting Mac Portfolio...",
        "system@szabolcsadorjani:~$ console init",
        "Loading assets...",
    ];

    return (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 text-green-400 font-mono text-xl transition-opacity">
            <div>
                {lines.slice(0, step + 1).map((line, idx) => (
                    <div key={idx} className="animate-fadeIn">{line}</div>
                ))}
            </div>
            <div className="mt-10 w-24 h-24">
                <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                        pathColor: "#4ade80",
                        trailColor: "#1e293b",
                        textColor: "#22d3ee",
                        textSize: "18px"
                    })}
                />
            </div>
        </div>
    );
}
