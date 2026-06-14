"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import MStripe from "./MStripe";

export default function Showcase({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Parallax for the glowing M-beams and the kinetic background word
    const beamsY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const beamsRotate = useTransform(scrollYProgress, [0, 1], [-20, -14]);
    const beamSpread = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const beamSpreadNeg = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const wordX = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
    const stageOpacity = useTransform(scrollYProgress, [0, 0.06, 0.94, 1], [0.4, 1, 1, 0.4]);

    // Caption fade windows
    const c1 = useTransform(scrollYProgress, [0.04, 0.14, 0.28, 0.36], [0, 1, 1, 0]);
    const c2 = useTransform(scrollYProgress, [0.38, 0.48, 0.62, 0.7], [0, 1, 1, 0]);
    const c3 = useTransform(scrollYProgress, [0.72, 0.82, 0.95, 1], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.04, 0.14], [28, 0]);
    const y2 = useTransform(scrollYProgress, [0.38, 0.48], [28, 0]);
    const y3 = useTransform(scrollYProgress, [0.72, 0.82], [28, 0]);

    const captions = {
        c1: {
            kicker: { hu: "Amit csinálok", en: "What I do" },
            title: { hu: "Backend és full-stack fejlesztés", en: "Backend and full-stack development" },
        },
        c2: {
            kicker: { hu: "Most", en: "Currently" },
            title: { hu: "BMW belsős eszközökön dolgozom", en: "Working on BMW-internal tools" },
        },
        c3: {
            kicker: { hu: "Ahogy dolgozom", en: "How I work" },
            title: { hu: "Egyszerű, megbízható megoldások", en: "Simple, reliable solutions" },
        },
    };

    const word = lang === "hu" ? "KÓD · DEVOPS · BMW · " : "CODE · DEVOPS · BMW · ";

    // Theme-aware palette so the stage blends with the page (white in light mode)
    const c = darkMode
        ? {
              bg: "#07080c",
              beam: { blue: "#1f8fff", navy: "#2b4cff", red: "#ff2d2d" },
              glow: { blue: "rgba(31,143,255,0.55)", navy: "rgba(43,76,255,0.5)", red: "rgba(255,45,45,0.5)" },
              shine: "rgba(255,255,255,0.85)",
              wordStroke: "rgba(255,255,255,0.16)",
              ambient:
                  "radial-gradient(70% 60% at 50% 45%, rgba(43,76,255,0.16) 0%, rgba(7,8,12,0) 62%), radial-gradient(45% 40% at 50% 50%, rgba(31,143,255,0.10) 0%, transparent 70%)",
              topFade: "linear-gradient(to bottom, rgba(7,8,12,0.9), transparent)",
              centerScrim: "radial-gradient(60% 50% at 50% 70%, rgba(7,8,12,0.85) 0%, transparent 70%)",
              bottomScrim: "linear-gradient(to top, rgba(7,8,12,0.96) 0%, rgba(7,8,12,0.5) 45%, transparent 100%)",
              title: "text-zinc-50",
              kicker: "text-[#7cc0ff]",
              titleShadow: "0 0 24px rgba(0,0,0,0.6)",
              hint: "text-zinc-500",
          }
        : {
              bg: "#ffffff",
              beam: { blue: "#0066B1", navy: "#1b3bd6", red: "#E2231A" },
              glow: { blue: "rgba(0,102,177,0.45)", navy: "rgba(27,59,214,0.4)", red: "rgba(226,35,26,0.42)" },
              shine: "rgba(255,255,255,0.92)",
              wordStroke: "rgba(15,23,42,0.18)",
              ambient: "radial-gradient(70% 60% at 50% 45%, rgba(0,102,177,0.07) 0%, rgba(255,255,255,0) 62%)",
              topFade: "linear-gradient(to bottom, rgba(255,255,255,0.95), transparent)",
              centerScrim: "radial-gradient(55% 45% at 50% 72%, rgba(255,255,255,0.45) 0%, transparent 72%)",
              bottomScrim: "linear-gradient(to top, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.4) 42%, transparent 100%)",
              title: "text-zinc-900",
              kicker: "text-[#0058A3]",
              titleShadow: "none",
              hint: "text-zinc-400",
          };

    const beam = (color: string, glow: string, delay: number, spreadY?: MotionValue<number>) => (
        <motion.div className="relative w-[160%] h-7 overflow-hidden rounded-full" style={spreadY ? { y: spreadY } : undefined}>
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, transparent, ${color} 18%, ${color} 82%, transparent)`,
                    filter: "blur(1px)",
                    boxShadow: `0 0 40px 6px ${glow}`,
                }}
            />
            <motion.div
                className="absolute inset-y-0 w-1/3"
                style={{ background: `linear-gradient(90deg, transparent, ${c.shine}, transparent)` }}
                animate={{ x: ["-120%", "360%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
            />
        </motion.div>
    );

    return (
        <section
            ref={sectionRef}
            id="showcase"
            className="relative transition-colors duration-500"
            style={{ backgroundColor: c.bg, height: "260vh" }}
        >
            <motion.div style={{ opacity: stageOpacity, position: "sticky", top: 0, height: "100vh" }} className="overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: c.ambient }} />
                {/* Top fade so the stage blends into the page above */}
                <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: c.topFade }} />

                {/* Kinetic background word (parallax marquee) */}
                <motion.div
                    style={{ x: wordX }}
                    className="absolute top-[18%] left-0 whitespace-nowrap select-none pointer-events-none font-semibold tracking-tighter"
                    aria-hidden
                >
                    <span className="text-[18vw] leading-none text-transparent" style={{ WebkitTextStroke: `2px ${c.wordStroke}` }}>
                        {word.repeat(4)}
                    </span>
                </motion.div>

                {/* Glowing BMW "M" light beams */}
                <motion.div
                    style={{ y: beamsY, rotate: beamsRotate }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-5 pointer-events-none"
                >
                    {beam(c.beam.blue, c.glow.blue, 0, beamSpreadNeg)}
                    {beam(c.beam.navy, c.glow.navy, 0.4)}
                    {beam(c.beam.red, c.glow.red, 0.8, beamSpread)}
                </motion.div>

                {/* Center + bottom scrims so captions read over the beams */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: c.centerScrim }} />
                <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none" style={{ background: c.bottomScrim }} />

                {/* Scroll-scrubbed captions */}
                <div className="absolute inset-x-0 bottom-0 h-48 px-6 pointer-events-none">
                    <div className="relative w-full max-w-4xl mx-auto h-full">
                        {[
                            { o: c1, y: y1, data: captions.c1 },
                            { o: c2, y: y2, data: captions.c2 },
                            { o: c3, y: y3, data: captions.c3 },
                        ].map((cap, i) => (
                            <motion.div
                                key={i}
                                style={{ opacity: cap.o, y: cap.y }}
                                className="absolute inset-x-0 top-0 flex flex-col items-center md:items-start text-center md:text-left"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <MStripe className="w-12" glow />
                                    <span className={`font-mono text-xs uppercase tracking-widest ${c.kicker}`}>
                                        {cap.data.kicker[lang]}
                                    </span>
                                </div>
                                <h3 className={`text-3xl md:text-5xl font-semibold tracking-tight max-w-xl ${c.title}`} style={{ textShadow: c.titleShadow }}>
                                    {cap.data.title[lang]}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hint */}
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest ${c.hint}`}>
                    {lang === "hu" ? "görgess" : "scroll"}
                </div>
            </motion.div>
        </section>
    );
}
