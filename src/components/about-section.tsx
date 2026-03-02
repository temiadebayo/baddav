"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

const ABOUT_IMAGES = [
    "/assets/images/baddav_01.jpg",
    "/assets/images/baddav_02.png",
    "/assets/images/baddav_03.jpg"
];

export function AboutSection() {
    return (
        <section id="about" className={styles.section}>
            <motion.div
                className={styles.aboutBox}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.p
                    className={styles.aboutText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Hey! I&apos;m <span className={styles.highlight}>David</span>, a Hungarian guy who makes <span className={styles.highlight}>visualizers, vfx, games, and animations</span>.
                </motion.p>
                <motion.p
                    className={styles.aboutText}
                    style={{ marginTop: "1.5rem" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I started making these things 2 years ago. I&apos;m working in <span className={styles.highlight}>Unreal Engine</span> &amp; <span className={styles.highlight}>Blender</span>, and trying to make your idea real.
                </motion.p>

                <motion.div
                    className={styles.aboutImages}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {ABOUT_IMAGES.map((src, index) => (
                        <motion.div
                            key={index}
                            className={styles.aboutImageWrapper}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src} alt={`About Baddav ${index + 1}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
