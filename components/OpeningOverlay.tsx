"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface OpeningOverlayProps {
    name: string;
    setName: (value: string) => void;
    onEnter: () => void;
}

export default function OpeningOverlay({
    name,
    setName,
    onEnter,
}: OpeningOverlayProps) {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[100]"
        >
            {/* Ambient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/10 blur-3xl" />

            {/* CENTERED CONTENT */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-1"
                >
                    Welcome to my <span className="text-blue-500">portfolio</span>
                </motion.h1>

                {/* DIVIDER */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "64px" }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="h-[2px] bg-blue-500 my-4"
                />

                {/* PROMPT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="text-neutral-400 text-base mb-1"
                >
                    How should I address you?
                </motion.p>

                {/* INPUT */}
                <motion.input
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    autoFocus
                    type="text"
                    placeholder="Your name or company"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onEnter()}
                    className="
            w-full
            max-w-md
            bg-transparent
            border-b
            border-neutral-700
            px-2
            py-2
            text-lg
            text-center
            focus:outline-none
            focus:border-blue-500
            transition-colors
          "
                />

                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onEnter}
                    className="
    mt-6
    flex
    items-center
    gap-2
    px-7
    py-2
    rounded-lg
    border
    border-blue-500
    text-blue-500
    text-xs
    font-medium
    tracking-widest
    uppercase
    hover:bg-blue-500
    hover:text-black
    transition-all
  "
                >
                    Enter
                    <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* SKIP */}
                <button
                    onClick={onEnter}
                    className="mt-3 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                    Continue as Guest
                </button>
            </div>
        </motion.div>
    );
}
