"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MacWindow from "@/components/MacWindow";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

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
            <button
                onClick={() => setDarkMode(!darkMode)}
                className={`fixed top-4 right-4 px-3 py-1 rounded-md transition-colors duration-500
                    ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"}
                    shadow hover:shadow-lg flex items-center justify-center`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to night mode"}
            >
                {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>

            <MacWindow darkMode={darkMode}>
                <main className="pt-6">
                    <Hero darkMode={darkMode} />
                    <Section id="skills" title="Készségek" darkMode={darkMode}>
                        <Skills darkMode={darkMode} />
                    </Section>
                    <Section id="projects" title="Projektek" darkMode={darkMode}>
                        <Projects darkMode={darkMode} />
                    </Section>
                    <Section id="experience" title="Tapasztalat" darkMode={darkMode}>
                        <Experience darkMode={darkMode} />
                    </Section>
                    <Section id="contact" title="Kapcsolat" darkMode={darkMode}>
                        <p>
                            <a href="mailto:szabolcs.adorjani@partner.bmw.de" className="underline">szabolcs.adorjani@partner.bmw.de</a>
                        </p>
                        <p>
                            <a href="mailto:szabolcs.adorjani@glosterdigital.com" className="underline">szabolcs.adorjani@glosterdigital.com</a>
                        </p>
                        <p>
                            <a href="tel:+36123456789" className="underline">+36 1 234 56789</a>
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://instagram.com/lecsoszabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={`hover:scale-110 transition ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                            >
                                <FaInstagram size={28} />
                            </a>
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
                            <a
                                href="https://twitter.com/lecsoszabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className={`hover:scale-110 transition ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                            >
                                <FaXTwitter size={28} />
                            </a>
                        </div>
                    </Section>
                </main>
            </MacWindow>
        </div>
    );
}