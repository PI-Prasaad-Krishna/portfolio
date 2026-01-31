import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "AyuSetu - Medical Interface",
        desc: "Full-stack medical coding app with a responsive React UI, multi-mode search (voice, autocomplete), and a Rust backend for mapping traditional Indian medical codes to the global ICD-11 standard.",
        tech: ["React", "Rust", "MongoDB", "Redis"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/CodeVedas_SIH"
    },
    {
        title: "LexiGen AI - Legal Docs",
        desc: "AI-powered platform for generating key legal documents like rental agreements and NDAs. Streamlines the creation of accurate legal paperwork through an intuitive interface.",
        tech: ["React", "AI", "Vite", "Firebase"],
        link: "https://lexigenai.vercel.app/",
        githubLink: "https://github.com/PI-Prasaad-Krishna/Legal_Document_Generator"
    },
    {
        title: "AI Interview Simulator",
        desc: "Simulates real job interviews using AI. Users answer dynamic questions and get scored with instant feedback. Built for a club hackathon with a full-stack setup.",
        tech: ["React", "OpenRouter", "AI"],
        link: "https://hackathon-ck-7eu7.vercel.app/",
        githubLink: "https://github.com/abhinavkajeev/hackathon-ck"
    },
    {
        title: "GetChef - Recipe Gen",
        desc: "Generates unique recipes from user-provided ingredients using AI. Features secure user authentication, a personal recipe collection, and a multi-page interface.",
        tech: ["React", "Firebase", "AI", "Tailwind"],
        link: "https://getchef.vercel.app/",
        githubLink: "https://github.com/PI-Prasaad-Krishna/CHEF_AI"
    },
    {
        title: "MindMate – Wellness App",
        desc: "A full-stack platform to help users manage their mental health. Includes journaling, motivational content, and a mood-based support system.",
        tech: ["React", "Firebase", "Tailwind"],
        link: "https://mindmate-34df5.web.app/",
        githubLink: "https://github.com/PI-Prasaad-Krishna/MindMate"
    },
    {
        title: "F1 Race Predictor",
        desc: "Python-based statistical model predicting F1 GP outcomes using driver form and track stats.",
        tech: ["Python", "ML", "Statistics"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/f1-predictions"
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-full"
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="glass-card h-full p-8 rounded-2xl border border-white/5 group hover:border-primary/50 transition-colors duration-500 flex flex-col"
            >
                <div style={{ transform: "translateZ(30px)" }}>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-all duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                        {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ transform: "translateZ(40px)" }} className="mt-auto flex gap-4 pt-4 border-t border-white/10">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                        >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            <Github size={16} className="mr-2" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        <span className="text-secondary">
                            Featured Work
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A selection of projects that showcase my passion for building.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
