"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

const WORKS = [
    { id: 1, title: "Cyberpunk City", src: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070" },
    { id: 2, title: "Neon Dreams", src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070" },
    { id: 3, title: "Abstract Flow", src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070" },
    { id: 4, title: "Game Environments", src: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070" },
    { id: 5, title: "VFX Explosion", src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2069" },
    { id: 6, title: "Audio Visualizer", src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070" },
];

export function WorksSection() {
    return (
        <section id="works" className={styles.section}>
            <motion.h2
                className={styles.worksTitle}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                My Works
            </motion.h2>

            <div className={styles.worksGrid}>
                {WORKS.map((work, index) => (
                    <motion.div
                        key={work.id}
                        className={styles.workItem}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={work.src} alt={work.title} />
                        <div className={styles.workOverlay}>
                            <span className={styles.workText}>{work.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
