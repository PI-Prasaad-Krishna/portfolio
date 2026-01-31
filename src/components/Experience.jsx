import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, Code } from 'lucide-react';

const experiences = [
    {
        title: "Technical Team Member",
        role: "Competitive Programmer",
        company: "Codekrafters (SRM IST)",
        date: "Nov 2024 - Present",
        description: "Active member of the official Competitive Programming club. regularly solving algorithmic challenges, mastering Data Structures & Algorithms, and collaborating on technical events.",
        tags: ["Python", "DSA", "Problem Solving"],
        icon: <Code size={20} />
    },
    // Add more experience here
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        <span className="text-secondary">
                            Experience
                        </span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-dark border-2 border-secondary flex items-center justify-center text-secondary shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                                {exp.icon}
                            </div>

                            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300">
                                <span className="text-sm text-secondary font-mono mb-2 block">{exp.date}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                <div className="text-lg text-gray-400 mb-4">{exp.role} • {exp.company}</div>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
