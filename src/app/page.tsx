"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MacWindow from "@/components/MacWindow";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
    const [loaded, setLoaded] = useState(true);

    const fadeInVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <div
                className={`min-h-screen bg-black flex items-center justify-center transition-opacity duration-1000 ${
                    loaded ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <MacWindow>
                    <main className="pt-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Hero />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Section id="skills" title="Készségek">
                                <Skills />
                            </Section>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Section id="projects" title="Projektek">
                                <Projects />
                            </Section>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Section id="experience" title="Tapasztalat">
                                <Experience />
                            </Section>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Section id="contact" title="Kapcsolat">
                                <p className="text-neutral-300">
                                    <a
                                        href="mailto:szabolcs.adorjani@optimaster.eu"
                                        className="underline"
                                    >
                                        szabolcs.adorjani@optimaster.eu
                                    </a>
                                </p>
                                <p className="text-neutral-300">
                                    <a
                                        href="mailto:szabolcs.adorjani@glosterdigital.com"
                                        className="underline"
                                    >
                                        szabolcs.adorjani@glosterdigital.com
                                    </a>
                                </p>
                            </Section>
                        </motion.div>
                    </main>
                </MacWindow>
            </div>
        </>
    );
}
