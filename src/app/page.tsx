"use client";
import { useState, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import MacWindow from "@/components/MacWindow";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Studies from "@/components/Studies";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState<"hu" | "en">("hu");
    const scrollRef = useRef<HTMLDivElement>(null);

    // Section titles and contact info mapping
    const sectionTitles = {
        skills: { hu: "Készségek", en: "Skills" },
        projects: { hu: "Projektek", en: "Projects" },
        experience: { hu: "Tapasztalat", en: "Experience" },
        contact: { hu: "Kapcsolat", en: "Contact" },
        studies: { hu: "Tanulmányok", en: "Studies" }
    };
    const emails = [
        "szabolcs.adorjani@partner.bmw.de",
        "szabolcs.adorjani@glosterdigital.com"
    ];

    return (
        <MotionConfig reducedMotion="user">
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "desktop-dark text-gray-100" : "desktop-light text-gray-900"}`}>
            <MenuBar darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />

            <div className="h-screen pt-12 pb-5 px-4">
                <MacWindow
                    darkMode={darkMode}
                    scrollRef={scrollRef}
                    dock={<Dock darkMode={darkMode} lang={lang} scrollRef={scrollRef} />}
                >
                    <main className="pt-6">
                        <Hero darkMode={darkMode} lang={lang} containerRef={scrollRef} />
                        <Section id="skills" title={sectionTitles.skills[lang]} darkMode={darkMode}>
                            <Skills darkMode={darkMode} lang={lang} />
                        </Section>
                        <Section id="projects" title={sectionTitles.projects[lang]} darkMode={darkMode}>
                            <Projects darkMode={darkMode} lang={lang} />
                        </Section>
                        <Section id="studies" title={sectionTitles.studies[lang]} darkMode={darkMode}>
                            <Studies darkMode={darkMode} lang={lang} />
                        </Section>
                        <Section id="experience" title={sectionTitles.experience[lang]} darkMode={darkMode}>
                            <Experience darkMode={darkMode} lang={lang} />
                        </Section>
                        <Section id="contact" title={sectionTitles.contact[lang]} darkMode={darkMode}>
                            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                {emails.map((email) => (
                                    <motion.a
                                        key={email}
                                        href={`mailto:${email}`}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 320, damping: 22 }}
                                        className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-colors duration-500
                                            ${darkMode
                                                ? "bg-gray-800 border-gray-700 shadow-xl hover:shadow-2xl"
                                                : "bg-white border-gray-200 shadow-lg hover:shadow-xl"
                                            }`}
                                    >
                                        <Mail className={`size-5 shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                                        <span className="font-mono text-xs break-all">{email}</span>
                                    </motion.a>
                                ))}
                            </div>
                            <div className="flex justify-center gap-5 mt-8">
                                <motion.a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.92 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={darkMode ? "text-gray-100" : "text-gray-900"}
                                >
                                    <FaLinkedin size={28} />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/lecsoszabi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.92 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={darkMode ? "text-gray-100" : "text-gray-900"}
                                >
                                    <FaGithub size={28} />
                                </motion.a>
                            </div>
                        </Section>
                        <footer className={`pb-24 pt-2 text-center font-mono text-[11px] transition-colors duration-500 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                            © 2026 Adorjáni Szabolcs · Next.js · Tailwind · Framer Motion
                        </footer>
                    </main>
                </MacWindow>
            </div>
        </div>
        </MotionConfig>
    );
}
