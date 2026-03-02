"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { User, Sun, Moon, Globe, LogIn } from "lucide-react";
import styles from "./navbar.module.css";
import { ContactModal } from "./contact-modal";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
                <Link href="/" className={styles.logo}>
                    BADDAV
                </Link>
                <div className={styles.navLinks}>
                    <a onClick={() => setIsContactOpen(true)} className={styles.navLink}>Contact</a>
                    <Link href="/games" className={styles.navLink}>Games</Link>
                    <Link href="/#works" className={styles.navLink}>Works</Link>
                    <Link href="/#about" className={styles.navLink}>About Me</Link>
                </div>
                <div className={styles.actions}>
                    <div className={styles.profileContainer}>
                        <User size={24} style={{ cursor: "pointer" }} />
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownItem}>
                                <span>Authentication</span>
                                <LogIn size={16} />
                            </div>
                            <div className={styles.dropdownItem}>
                                <span>Language (EN)</span>
                                <Globe size={16} />
                            </div>
                            <div
                                className={styles.dropdownItem}
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <span>{mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                                {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
        </>
    );
}
