import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
    {
        title: "AthlTech Track Winner",
        role: "Project: Scoutrix",
        company: "NxtGen'26",
        date: "Feb 2026",
        description: "Emerged as the AthlTech track winner for developing Scoutrix, a full-stack AI-powered sports discovery platform. Built a custom local video processing pipeline for athlete evaluation and an automated recruitment engine during the hackathon.",
        tags: ["Hackathon Winner", "AI", "Sports Tech"],
        icon: <Trophy size={20} />
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 relative z-10">
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
                            Achievements
                        </span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
                    {achievements.map((ach, index) => (
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
                                {ach.icon}
                            </div>

                            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300">
                                <span className="text-sm text-secondary font-mono mb-2 block">{ach.date}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{ach.title}</h3>
                                <div className="text-lg text-gray-400 mb-4">{ach.role} • {ach.company}</div>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {ach.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {ach.tags.map((tag, i) => (
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

export default Achievements;
