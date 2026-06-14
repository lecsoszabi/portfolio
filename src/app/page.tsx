"use client";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Studies from "@/components/Studies";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState<"hu" | "en">("hu");

    const t = {
        skills: { hu: "Készségek", en: "Skills" },
        projects: { hu: "Projektek", en: "Projects" },
        experience: { hu: "Tapasztalat", en: "Experience" },
        contact: { hu: "Kapcsolat", en: "Contact" },
        studies: { hu: "Tanulmányok", en: "Studies" },
        contactLead: {
            hu: "Nyitott vagyok új lehetőségekre. Írj nyugodtan.",
            en: "Open to new opportunities. Feel free to write."
        }
    };

    const emails = [
        "ado.szabi@gmail.com", "szabolcs.adorjani@partner.bmw.de", "szabolcs.adorjani@glosterdigital.com"
    ];

    return (
        <MotionConfig reducedMotion="user">
            <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"}`}>
                <ScrollProgress />
                <Nav darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />

                <main>
                    <Hero darkMode={darkMode} lang={lang} />

                    <Showcase darkMode={darkMode} lang={lang} />

                    <Section id="skills" title={t.skills[lang]} index={1} darkMode={darkMode}>
                        <Skills darkMode={darkMode} lang={lang} />
                    </Section>

                    <Section id="projects" title={t.projects[lang]} index={2} darkMode={darkMode}>
                        <Projects darkMode={darkMode} lang={lang} />
                    </Section>

                    <Section id="studies" title={t.studies[lang]} index={3} darkMode={darkMode}>
                        <Studies darkMode={darkMode} lang={lang} />
                    </Section>

                    <Section id="experience" title={t.experience[lang]} index={4} darkMode={darkMode}>
                        <Experience darkMode={darkMode} lang={lang} />
                    </Section>

                    <Section id="contact" title={t.contact[lang]} index={5} darkMode={darkMode}>
                        <p className={`max-w-md text-base leading-relaxed transition-colors duration-500 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                            {t.contactLead[lang]}
                        </p>

                        <div className={`mt-8 border-t transition-colors duration-500 ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}>
                            {emails.map((email) => (
                                <a
                                    key={email}
                                    href={`mailto:${email}`}
                                    className={`group flex items-center justify-between border-b py-4 transition-colors duration-300
                                        ${darkMode ? "border-zinc-800 hover:bg-zinc-900/60" : "border-zinc-200 hover:bg-zinc-50"}`}
                                >
                                    <span className="font-mono text-sm break-all px-1">{email}</span>
                                    <ArrowUpRight className="size-4 shrink-0 mr-1 opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-5 mt-8">
                            <motion.a
                                href="https://linkedin.com/lecsoszabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.92 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className={`transition-colors duration-500 ${darkMode ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-500 hover:text-zinc-900"}`}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="https://github.com/lecsoszabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.92 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className={`transition-colors duration-500 ${darkMode ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-500 hover:text-zinc-900"}`}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                        </div>
                    </Section>

                    <footer className={`mx-auto max-w-4xl px-6 py-10 border-t font-mono text-xs transition-colors duration-500 ${darkMode ? "border-zinc-800 text-zinc-600" : "border-zinc-200 text-zinc-400"}`}>
                        © 2026 Adorjáni Szabolcs · Next.js · Tailwind · Framer Motion
                    </footer>
                </main>
            </div>
        </MotionConfig>
    );
}
