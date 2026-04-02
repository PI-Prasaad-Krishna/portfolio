import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
    {
        title: "Scoutrix",
        desc: "Full-stack AI-powered sports discovery platform. Features local video processing for extracting biomechanical metrics and an automated recruitment engine.",
        tech: ["React", "Node.js", "MongoDB", "AI"],
        link: "https://scoutrix.vercel.app/",
        githubLink: "https://github.com/PI-Prasaad-Krishna/Scoutrix",
        className: "md:col-span-2 lg:col-span-2", 
    },
    {
        title: "AyuSetu",
        desc: "Full-stack medical coding app with a responsive React UI and a Rust backend for mapping traditional Indian medical codes to the ICD-11 standard.",
        tech: ["React", "Rust", "MongoDB"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/CodeVedas_SIH",
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "F1 Visualizer Hub",
        desc: "Interactive 3D race replayer and analytics dashboard for Formula 1 telemetry data.",
        tech: ["Python", "FastF1", "VisPy"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/FormulaOne-replayer",
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "AI Interview Simulator",
        desc: "Simulates real job interviews using AI. Users answer dynamic questions and get scored with instant feedback.",
        tech: ["React", "OpenRouter", "AI"],
        link: "https://hackathon-ck-7eu7.vercel.app/",
        githubLink: "https://github.com/abhinavkajeev/hackathon-ck",
        className: "md:col-span-2 lg:col-span-1",
    },
    {
        title: "GetChef - Recipe Gen",
        desc: "Generates unique recipes from user-provided ingredients using AI. Features secure user authentication.",
        tech: ["React", "Firebase", "AI"],
        link: "https://getchef.vercel.app/",
        githubLink: "https://github.com/PI-Prasaad-Krishna/CHEF_AI",
        className: "md:col-span-1 lg:col-span-1",
    },
    {
        title: "F1 Race Predictor",
        desc: "Python-based statistical model predicting F1 GP outcomes using driver form and track stats.",
        tech: ["Python", "ML", "Statistics"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/f1-predictions",
        className: "md:col-span-2 lg:col-span-2",
    }
];

const HoverEffectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{ willChange: 'transform, opacity' }}
            className={cn(
                "group relative w-full h-full rounded-2xl overflow-hidden flex flex-col p-6 transform-gpu [backface-visibility:hidden] transition-[transform,box-shadow,background-color] duration-300",
                "bg-white dark:bg-white/[0.04]",
                "border border-slate-200 dark:border-white/10",
                "shadow-lg shadow-slate-200/50 dark:shadow-none",
                "hover:shadow-xl hover:shadow-slate-200 dark:hover:bg-white/[0.06] hover:-translate-y-1",
                project.className
            )}
        >
            {/* CSS-only hover gradient — no JS state, no flicker */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full bg-transparent">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3 text-slate-400 dark:text-gray-400">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-slate-800 dark:hover:text-white transition-colors hover:scale-110 transform"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors hover:scale-110 transform"
                            >
                                <ArrowUpRight size={22} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-600 dark:text-gray-400 mb-8 leading-relaxed text-sm flex-grow transition-colors">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-slate-600 dark:text-gray-300 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative z-10 bg-transparent transition-colors">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                        Portfolio
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
                        Featured Work
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {projects.map((project, index) => (
                        <HoverEffectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
