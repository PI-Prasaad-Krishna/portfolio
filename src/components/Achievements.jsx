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
        icon: <Trophy size={18} />
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 relative z-10 bg-transparent transition-colors">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                        Milestones
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
                        Achievements
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                    {achievements.map((ach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-14 md:pl-16"
                        >
                            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/35 via-slate-300/30 to-transparent dark:from-primary/40 dark:via-white/10 dark:to-transparent" />
                            <div className="absolute left-1 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-gray-50 dark:bg-dark text-slate-600 dark:text-gray-300 shadow-sm transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                                {ach.icon}
                            </div>

                            <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-colors relative group overflow-hidden">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">{ach.title}</h3>
                                    <span className="text-xs tracking-wider text-slate-500 dark:text-gray-500 font-mono mt-2 md:mt-0 uppercase transition-colors">{ach.date}</span>
                                </div>
                                <div className="text-md text-slate-600 dark:text-gray-400 mb-4 font-medium transition-colors">{ach.role} · <span className="text-primary/90">{ach.company}</span></div>
                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed transition-colors">
                                    {ach.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {ach.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/5 transition-colors">
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
