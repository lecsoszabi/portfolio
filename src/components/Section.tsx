"use client";
import { motion } from "framer-motion";
import MStripe from "./MStripe";

export default function Section({
    id,
    title,
    index,
    children,
    darkMode = false,
}: {
    id: string;
    title: string;
    index: number;
    children: React.ReactNode;
    darkMode?: boolean;
}) {
    return (
        <section id={id} className="mx-auto max-w-4xl px-6 py-20 md:py-28 scroll-mt-20">
            <motion.div
                className="mb-12 flex items-baseline gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <span className={`font-mono text-sm tabular-nums transition-colors duration-500 ${darkMode ? "text-[#5AB0F0]" : "text-[#0058A3]"}`}>
                    {String(index).padStart(2, "0")}
                </span>
                <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-500 ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
                    {title}
                </h2>
                <MStripe className="w-10 self-center ml-2 shrink-0" />
                <span className={`flex-1 h-px self-center transition-colors duration-500 ${darkMode ? "bg-zinc-800" : "bg-zinc-200"}`} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
