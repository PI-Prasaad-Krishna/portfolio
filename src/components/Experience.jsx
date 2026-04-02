import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const experiences = [
    {
        title: "Technical Team Member",
        role: "Competitive Programmer",
        company: "Codekrafters (SRM IST)",
        date: "Nov 2024 - Present",
        description: "Active member of the Competitive Programming domain. Regularly solving algorithmic challenges, mastering Data Structures & Algorithms, and collaborating on technical events.",
        tags: ["Python", "DSA", "Problem Solving"],
        icon: <Code size={18} />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative z-10 bg-transparent transition-colors">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                        Career Path
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
                        Experience
                    </h3>
                </motion.div>

                <div className="relative border-l border-slate-300 dark:border-white/10 ml-4 md:ml-6 space-y-12 transition-colors">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 pt-1"
                        >
                            {/* Minimal Timeline Dot */}
                            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gray-50 dark:bg-dark border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-500 dark:text-gray-400 transition-colors">
                                {exp.icon}
                            </div>

                            <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-colors relative group">
                                <span className="text-xs tracking-wider text-slate-500 dark:text-gray-500 font-mono mb-3 block uppercase">{exp.date}</span>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 transition-colors">{exp.title}</h3>
                                <div className="text-md text-slate-600 dark:text-gray-400 mb-5 font-medium transition-colors">{exp.role} · <span className="text-primary/90">{exp.company}</span></div>
                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed transition-colors">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
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

export default Experience;
