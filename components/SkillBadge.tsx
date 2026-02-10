"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface SkillBadgeProps {
    skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="glass px-6 py-4 rounded-xl flex items-center gap-4 group cursor-default"
        >
            <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:border-blue-500/50 transition-colors">
                <Cpu className="w-5 h-5 text-neutral-500 group-hover:text-blue-500 transition-colors" />
            </div>
            <div>
                <p className="font-semibold text-sm">{skill}</p>

            </div>
        </motion.div>
    );
}
