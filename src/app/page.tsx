"use client";

import React, { useState } from "react";
import MacWindow from "@/components/MacWindow";
import BootScreen from "@/components/BootScreen";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {!loaded && <BootScreen onFinish={() => setLoaded(true)} />}
            <div
                className={`min-h-screen bg-black flex items-center justify-center transition-opacity duration-1000 ${
                    loaded ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <MacWindow>
                    <main className="pt-6">
                        <Hero />
                        <Section id="skills" title="Készségek">
                            <Skills />
                        </Section>
                        <Section id="projects" title="Projektek">
                            <Projects />
                        </Section>
                        <Section id="experience" title="Tapasztalat">
                            <Experience />
                        </Section>
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
                    </main>
                </MacWindow>
            </div>
        </>
    );
}
