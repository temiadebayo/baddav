"use client";

import { X, Mail, Phone, MapPin } from "lucide-react";
import styles from "./contact-modal.module.css";

interface ContactModalProps {
    onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={20} />
                </button>
                <h2 className={styles.title}>Get in Touch</h2>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Mail size={24} color="var(--primary)" />
                        <span>hello@baddav.com</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={24} color="var(--primary)" />
                        <span>+36 30 123 4567</span>
                    </div>
                    <div className={styles.contactItem}>
                        <MapPin size={24} color="var(--primary)" />
                        <span>Budapest, Hungary</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
