"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-8 border border-neutral-800 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col">
        {/* IMAGE */}
        <div className="mb-6 rounded-lg overflow-hidden bg-neutral-900 aspect-video relative">
          <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono py-1 px-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-neutral-800 text-sm text-neutral-300 hover:text-white hover:border-blue-500/50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
