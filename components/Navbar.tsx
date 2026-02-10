"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass border-b" : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold tracking-tighter"
                >
                    CHUNGU MULOSHI PORTFOLIO<span className="text-blue-500">.</span>
                </motion.div>

                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-blue-500 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="Chungu_Muloshi_CV_Updated_Dummy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 glass rounded-full text-xs font-semibold tracking-widest uppercase border border-neutral-800"
                    >
                        Resume
                    </motion.button>
                </a>

            </div>
        </motion.nav>
    );
}
