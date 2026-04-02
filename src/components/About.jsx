import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10 bg-transparent transition-colors">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                        Introduction
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
                        About Me
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light transition-colors">
                            I'm Prasaad, a Computer Science student at <span className="text-slate-900 dark:text-white font-medium transition-colors">SRM Institute of Science and Technology, Ramapuram</span> with a dual passion for building robust web applications and uncovering insights through Data Science. I believe impactful software bridges the gap between complex data and intuitive user experiences. My focus is on creating scalable, intelligent applications that solve real-world problems.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light transition-colors">
                            Beyond the code, I'm fueled by the adrenaline of <span className="text-slate-900 dark:text-white font-medium transition-colors">Formula 1</span>, Motorsports, the beauty of automotive design, and a good playlist.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid gap-4"
                    >
                        <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-colors flex items-start gap-5">
                            <div className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 transition-colors">Education</h3>
                                <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors">B.Tech Computer Science & Engineering</p>
                                <p className="text-xs text-slate-400 dark:text-gray-500 mt-1 transition-colors">SRM Institute of Science & Technology (2023-2027)</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-colors flex items-start gap-5">
                            <div className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 transition-colors">Location</h3>
                                <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors">Chennai, Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-colors flex items-start gap-5">
                            <div className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 transition-colors">Interests</h3>
                                <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors">Formula One, Automobiles, Motorsports & Badminton</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
