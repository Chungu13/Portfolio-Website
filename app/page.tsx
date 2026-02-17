"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ArrowRight, Linkedin } from "lucide-react";

// --- Components ---
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import OpeningOverlay from "@/components/OpeningOverlay";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { i } from "framer-motion/client";

// --- Main Content ---
export default function Home() {
  const [name, setName] = useState("");
  const [hasEntered, setHasEntered] = useState(false);

  // Persist name across page reloads
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  const projects = [
    {
      title: "Appointment Management System",
      description:
        "Web-based appointment management system that helps SMEs in the beauty and wellness industry manage bookings digitally, reducing manual scheduling and administrative workload.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Chungu13/AuraTime",
      image: "/auratime.png",
    },
    {
      title: "ZABS Certification & Verification System",
      description:
        "Backend system that enables manufacturers to apply for product certification online and allows consumers to verify certifications via QR codes.",
      tags: ["Python", "Django", "GraphQL", "PostgreSQL", "Docker"],
      github: "https://github.com/Chungu13/Chungu-Yamfumu-ZABS-Project",
      image: "/zabs.png",
    },
    {
      title: "Product Catalogue System",
      description:
        "Full-stack product catalogue system for a thrift store, allowing users to browse products while the backend manages inventory and product data. Built as the first phase of a future online store.",
      tags: ["React", "Python", "Django", "GraphQL", "PostgreSQL", "Docker"],
      github: "https://github.com/yourusername/product-catalogue-system",
      image: "/catalogue.png",
    },
  ];

  return (
    <div className="relative selection:bg-blue-500 selection:text-white bg-black">
      <Starfield />
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!hasEntered && (
          <OpeningOverlay
            key="overlay"
            name={name}
            setName={(newName) => {
              setName(newName);
              localStorage.setItem("name", newName);
            }}
            onEnter={() => setHasEntered(true)}
          />
        )}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10"
        >
          <Navbar />

          <main>
            {/* HERO */}
            <section
              id="home"
              className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-20"
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] -z-10" />

              <div className="flex flex-col items-center text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.5,
                  }}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] mix-blend-difference"
                >
                  WELCOME
                  <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {name ? name.toUpperCase() : "GUEST"}
                  </span>
                </motion.h1>

                <p className="max-w-2xl text-xl text-neutral-400 leading-relaxed font-light mt-6">
                  <span className="text-white font-medium">
                    Software Engineer with a passion for Backend Development
                  </span>
                </p>

                <div className="flex flex-wrap justify-center gap-8 mt-10">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full flex items-center gap-3 group"
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 glass border border-neutral-800 text-white font-bold text-sm tracking-widest uppercase rounded-full"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </section>

            {/* ABOUT */}
            <section
              id="about"
              className="py-40 px-6 relative bg-neutral-950/50"
            >
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <SectionHeading title="About Me" subtitle="Philosophy" />
                  <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
                    <p>
                      I’m a graduate software engineer with a strong interest in
                      backend development. I enjoy building systems that support
                      real-world workflows, working with APIs, databases, and
                      server-side logic to solve practical problems.
                    </p>
                    <p>
                      I’ve worked on backend systems using Django and GraphQL,
                      including a certification and verification platform
                      developed during my internship. Alongside this, I build
                      full-stack and backend-first personal projects to deepen
                      my understanding of system design, data modeling, and
                      application architecture.
                    </p>
                    <p>
                      I’m particularly interested in backend engineering and
                      enjoy learning how to design scalable, maintainable
                      systems that can grow alongside real business needs.
                      Outside of development, I also share beginner-friendly
                      tech content on TikTok to help inspire others who are
                      interested in getting into software engineering.
                    </p>
                  </div>
                </div>

                <div className="relative aspect-square md:aspect-auto md:h-[600px] glass rounded-3xl border border-neutral-800 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative w-full h-full flex items-center justify-center p-8">
                    <img
                      src="/image.jpeg"
                      alt="Profile photo"
                      className="w-full h-full object-contain rounded-3xl border border-neutral-800"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section
              id="projects"
              className="py-40 px-6 relative overflow-hidden"
            >
              <div className="max-w-7xl mx-auto">
                <SectionHeading title="Projects" subtitle="Portfolio" />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                  ))}
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="py-40 px-6 bg-neutral-950/50">
              <div className="max-w-7xl mx-auto">
                <SectionHeading title="Technical Skills" subtitle="Capabilities" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    "Django",
                    "GraphQL",
                    "Python",
                    "React",
                    "SQL",
                    "REST APIs",
                    "System Design",
                    "AWS",
                  ].map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </section>

            {/* AVAILABILITY */}
            <section id="availability" className="py-40 px-6 relative bg-neutral-950/50">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <SectionHeading title="Availability & Work Style" subtitle="Open to Opportunities" />
                  <ul className="list-disc pl-5 space-y-2 text-lg text-neutral-400 font-light leading-relaxed">
                    <li>Available for full-time or part-time remote roles</li>
                    <li>Reliable internet connection</li>
                    <li>Flexible across time zones</li>
                    <li>Independent and proactive worker</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="py-40 px-6 relative">
              <div className="max-w-7xl mx-auto">
                <div className="glass rounded-[40px] p-12 md:p-24 border border-neutral-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10 max-w-3xl">
                    <SectionHeading title="I Am Only An Inbox Away." subtitle="Get In Touch" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* EMAIL */}
                      <a
                        href="mailto:chungumuloshi03@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start gap-6 p-8 rounded-3xl glass border border-neutral-800 hover:bg-blue-600/5 transition-all group"
                      >
                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-neutral-800 group-hover:bg-blue-600/20 transition-all">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div className="w-full overflow-hidden">
                          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-1">Email</p>
                          <p className="text-lg font-medium break-all">chungumuloshi03@gmail.com</p>
                        </div>
                      </a>

                      {/* GITHUB */}
                      <a
                        href="https://github.com/Chungu13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start gap-6 p-8 rounded-3xl glass border border-neutral-800 hover:bg-purple-600/5 transition-all group"
                      >
                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-neutral-800 group-hover:bg-purple-600/20 transition-all">
                          <Github className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-1">GitHub</p>
                          <p className="text-lg font-medium">github.com/Chungu13</p>
                        </div>
                      </a>

                      {/* LINKEDIN */}
                      <a
                        href="https://www.linkedin.com/in/chungumuloshi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start gap-6 p-8 rounded-3xl glass border border-neutral-800 hover:bg-blue-400/5 transition-all group"
                      >
                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-neutral-800 group-hover:bg-blue-400/20 transition-all">
                          <Linkedin className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-1">LinkedIn</p>
                          <p className="text-lg font-medium">Chungu Muloshi</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <footer className="mt-20 pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 text-sm font-mono">
                  <p>&copy; 2026 CHUNGU MULOSHI PORTFOLIO. ALL SYSTEMS OPERATIONAL.</p>
                </footer>
              </div>
            </section>
          </main>
        </motion.div>
      )}
    </div>
  );
}
