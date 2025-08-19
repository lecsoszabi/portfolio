import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero({ darkMode = false }: { darkMode?: boolean }) {
    const phrases = [
        "Think Different",
        "Code with Honor",
        "Solve Problems",
        "Stay Focused",
        "Embrace Discipline",
        "Build with Purpose",
        "Lead by Example",
        "Master the Craft",
        "Push Your Limits",
        "Stay Humble",
        "Innovate Daily",
        "Work Hard",
        "Be Relentless",
        "Own Your Code",
        "Challenge Yourself",
        "Keep Learning",
        "Deliver Excellence",
        "Stay Consistent",
        "Prioritize Quality",
        "Respect the Process",
        "Be Accountable",
        "Think Big",
        "Act Boldly",
        "Stay Curious",
        "Balance Logic",
        "Seek Clarity",
        "Adapt Quickly",
        "Code Clean",
        "Be Resilient",
        "Finish Strong",
        "Lead with Integrity"
    ];

    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);
    const pauseRef = useRef(false);
    const prevIndexRef = useRef<number | null>(null);

    useEffect(() => {
        // On phrase change, ensure no two identical phrases appear consecutively
        if (index === prevIndexRef.current) {
            setIndex((prev) => (prev + 1) % phrases.length);
        }
        prevIndexRef.current = index;
    }, [index, phrases.length]);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (pauseRef.current) return;

            const currentPhrase = phrases[index];

            if (!isDeleting) {
                if (displayedText.length < currentPhrase.length) {
                    setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
                } else {
                    pauseRef.current = true;
                    setTimeout(() => {
                        setIsDeleting(true);
                        pauseRef.current = false;
                    }, 2300);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    let nextIndex;
                    do {
                        nextIndex = Math.floor(Math.random() * phrases.length);
                    } while (nextIndex === index);
                    setIndex(nextIndex);
                }
            }
        }, isDeleting ? 75 : 150);

        return () => clearInterval(typingInterval);
    }, [displayedText, isDeleting, index, phrases]);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div
            id="home"
            className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors duration-500 ${
                darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
            }`}
        >
            <motion.img
                src="/input.png"
                alt="Profile"
                className={`w-40 h-40 rounded-2xl object-cover shadow-lg transition-shadow duration-500 ${
                    darkMode ? "" : "border border-gray-200"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{
                    boxShadow: darkMode
                        ? '0 6px 32px 0 rgba(0,0,0,0.10)'
                        : '0 6px 32px 0 rgba(0,0,0,0.10)',
                }}
            />
            <motion.h1
                className={`text-5xl font-bold mt-8 tracking-tight transition-colors duration-500 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
                Szabolcs Adorjáni
            </motion.h1>
            <motion.div
                className={`text-xl mt-4 h-8 text-center font-mono transition-colors duration-500 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8, ease: 'easeOut' }}
            >
                {displayedText}
                <span style={{ opacity: blink ? 1 : 0 }}>|</span>
            </motion.div>
        </div>
    );
}