"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import MacWindow from "@/components/MacWindow";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Studies from "@/components/Studies";
import ReactionGame from "@/components/ReactionGame";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState<"hu" | "en">("hu");

    // Section titles and contact info mapping
    const sectionTitles = {
        skills: { hu: "Készségek", en: "Skills" },
        projects: { hu: "Projektek", en: "Projects" },
        experience: { hu: "Tapasztalat", en: "Experience" },
        contact: { hu: "Kapcsolat", en: "Contact" },
        studies: { hu: "Tanulmányok", en: "Studies" }
    };
    const contactInfo = {
        email1: "szabolcs.adorjani@partner.bmw.de",
        email2: "szabolcs.adorjani@glosterdigital.com"
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} scrollbar-thin ${darkMode ? "scrollbar-track-gray-700 scrollbar-thumb-gray-500" : "scrollbar-track-gray-200 scrollbar-thumb-gray-400"}`}>
            <style>{`
                .scrollbar-thin::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .scrollbar-track-gray-200::-webkit-scrollbar-track {
                    background: #e5e7eb; /* Tailwind gray-200 */
                }
                .scrollbar-thumb-gray-400::-webkit-scrollbar-thumb {
                    background-color: #9ca3af; /* Tailwind gray-400 */
                    border-radius: 4px;
                }
                .scrollbar-track-gray-700::-webkit-scrollbar-track {
                    background: #374151; /* Tailwind gray-700 */
                }
                .scrollbar-thumb-gray-500::-webkit-scrollbar-thumb {
                    background-color: #6b7280; /* Tailwind gray-500 */
                    border-radius: 4px;
                }
                /* Firefox scrollbar */
                .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: ${darkMode ? "#6b7280 #374151" : "#9ca3af #e5e7eb"};
                }
            `}</style>
            <div className="fixed top-4 right-4 flex gap-3 z-50">
                <button
                    onClick={() => setLang(lang === "hu" ? "en" : "hu")}
                    className={`px-3 py-1 rounded-md transition-colors duration-500
                        ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"}
                        shadow hover:shadow-lg flex items-center justify-center`}
                    aria-label="Toggle language"
                >
                    {lang === "hu" ? "HU" : "EN"}
                </button>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`px-3 py-1 rounded-md transition-colors duration-500
                        ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"}
                        shadow hover:shadow-lg flex items-center justify-center`}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to night mode"}
                >
                    {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
                </button>
            </div>

            <MacWindow darkMode={darkMode}>
                <main className="pt-6">
                    <Hero darkMode={darkMode} lang={lang} />
                    <Section id="skills" title={sectionTitles.skills[lang]} darkMode={darkMode}>
                        <Skills darkMode={darkMode} lang={lang} />
                    </Section>
                    <Section id="projects" title={sectionTitles.projects[lang]} darkMode={darkMode}>
                        <Projects darkMode={darkMode} lang={lang} />
                    </Section>
                    <Section id="studies" title={sectionTitles.studies[lang]} darkMode = {darkMode}>
                        <Studies darkMode={darkMode} lang={lang} />
                    </Section>
                    <Section id="experience" title={sectionTitles.experience[lang]} darkMode={darkMode}>
                        <Experience darkMode={darkMode} lang={lang} />
                    </Section>
                    <Section id="reaction-game" title={lang === "hu" ? "Reakcióidő játék" : "Reaction Time Game"} darkMode={darkMode}>
                        <ReactionGame lang={lang} />
                    </Section>
                    <Section id="contact" title={sectionTitles.contact[lang]} darkMode={darkMode}>
                        <p>
                            <a href={`mailto:${contactInfo.email1}`} className="underline">{contactInfo.email1}</a>
                        </p>
                        <p>
                            <a href={`mailto:${contactInfo.email2}`} className="underline">{contactInfo.email2}</a>
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={`hover:scale-110 transition ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://github.com/lecsoszabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={`hover:scale-110 transition ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                            >
                                <FaGithub size={28} />
                            </a>
                        </div>
                    </Section>
                </main>
            </MacWindow>
        </div>
    );
}