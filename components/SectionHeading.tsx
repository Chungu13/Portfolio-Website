"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">
                    {subtitle || "Section"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {title}
                </h2>
            </motion.div>
        </div>
    );
}
