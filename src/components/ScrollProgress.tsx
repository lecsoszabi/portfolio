"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            style={{
                scaleX,
                backgroundImage: "linear-gradient(90deg, #0066B1 0%, #0066B1 40%, #16235A 70%, #E2231A 100%)",
            }}
            className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
        />
    );
}
