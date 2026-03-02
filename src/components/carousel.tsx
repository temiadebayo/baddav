"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./carousel.module.css";

const SLIDES = [
    { id: 1, src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070", title: "Visualizer", subtitle: "Immersive audio-reactive visual experiences" },
    { id: 2, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070", title: "Games", subtitle: "Interactive worlds built in Unreal Engine" },
    { id: 3, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064", title: "VFX", subtitle: "Stunning visual effects that bring ideas to life" },
    { id: 4, src: "https://images.unsplash.com/photo-1633511090164-b498ceb2eece?q=80&w=2070", title: "Animations", subtitle: "High-quality 3D animations rendered in Blender" }
];

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.carouselContainer}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={styles.slide}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={SLIDES[currentIndex].src}
                        alt={SLIDES[currentIndex].title}
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={styles.title}
                        >
                            {SLIDES[currentIndex].title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className={styles.subtitle}
                        >
                            {SLIDES[currentIndex].subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Previous slide">
                <ChevronLeft size={24} />
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="Next slide">
                <ChevronRight size={24} />
            </button>

            <div className={styles.indicators}>
                {SLIDES.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
