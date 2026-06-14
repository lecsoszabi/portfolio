"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";
import MStripe from "./MStripe";

export default function Hero({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    // Motivációs mottók — magyarul megfogalmazva, az angol a fordításuk.
    const phrasesHu = [
        "Fejlődj egy kicsit minden nap",
        "Írj kódot, amire büszke vagy",
        "Keresd az egyszerű megoldást",
        "A részletek teszik a különbséget",
        "Tanulj a hibáidból",
        "Maradj kíváncsi",
        "Ne add fel a nehezénél",
        "Minden hiba egy lecke",
        "Csináld szívvel",
        "A kitartás kifizetődik",
        "Lépj túl a határaidon",
        "Építs valami hasznosat",
    ];

    const phrasesEn = [
        "Get a little better every day",
        "Write code you're proud of",
        "Look for the simple solution",
        "The details make the difference",
        "Learn from your mistakes",
        "Stay curious",
        "Don't give up when it gets hard",
        "Every bug is a lesson",
        "Do it with heart",
        "Persistence pays off",
        "Push past your limits",
        "Build something useful",
    ];

    const phrases = lang === "hu" ? phrasesHu : phrasesEn;

    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);
    const pauseRef = useRef(false);
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
        }, isDeleting ? 50 : 110);
        return () => clearInterval(typingInterval);
    }, [displayedText, isDeleting, index, phrases]);

    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink((p) => !p), 530);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative flex flex-col items-center justify-center px-6"
            style={{ minHeight: "100vh" }}
        >
            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="flex flex-col items-center text-center"
            >
                <motion.img
                    src="/input.png"
                    alt="Adorjáni Szabolcs"
                    className="w-28 h-28 rounded-full object-cover mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />

                <motion.p
                    className={`font-mono text-sm mb-4 transition-colors duration-500 ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {lang === "hu" ? "Szoftverfejlesztő" : "Software Developer"}
                </motion.p>

                <motion.h1
                    className={`text-5xl md:text-7xl font-semibold tracking-tighter transition-colors duration-500 ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                >
                    {lang === "hu" ? "Adorjáni Szabolcs" : "Szabolcs Adorjáni"}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                    <MStripe className="w-20 mt-6" glow />
                </motion.div>

                <motion.div
                    className={`mt-5 h-7 font-mono text-lg transition-colors duration-500 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    {displayedText}
                    <span className="text-[#0066B1]" style={{ opacity: blink ? 1 : 0 }}>_</span>
                </motion.div>
            </motion.div>

            <motion.button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                aria-label={lang === "hu" ? "Görgess tovább" : "Scroll down"}
                className={`absolute bottom-10 transition-colors duration-500 ${darkMode ? "text-zinc-600 hover:text-zinc-300" : "text-zinc-300 hover:text-zinc-600"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
            >
                <motion.span
                    className="block"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={22} />
                </motion.span>
            </motion.button>
        </section>
    );
}
