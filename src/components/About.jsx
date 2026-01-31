import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, Code } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        <span className="text-secondary">
                            About Me
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed font-light">
                            I'm Prasaad, a Computer Science student at <span className="text-primary font-semibold">SRM Institute of Science and Technology, Ramapuram</span> with a dual passion for building robust web applications and uncovering insights through Data Science. I believe impactful software bridges the gap between complex data and intuitive user experiences. My focus is on creating scalable, intelligent applications that solve real-world problems.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed font-light">
                            Beyond the code, I'm fueled by the adrenaline of <span className="text-primary font-semibold">Formula 1</span>, Motorsports, the beauty of automotive design, and a good playlist.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid gap-6"
                    >
                        {/* Retained the nice cards but removed the "Focus" one if user thinks it's too much, but keeping standard ones for now based on "content from old about section" request which mainly refers to the text above. I'll keep the cards as visual aids for the "stats" */}

                        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                                    <GraduationCap size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                                    <p className="text-gray-400">B.Tech CSE</p>
                                    <p className="text-sm text-gray-500">SRM Institute (2023-2027)</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                                    <p className="text-gray-400">Chennai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-red-500/20 text-red-400">
                                    <Heart size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Passion</h3>
                                    <p className="text-gray-400">Formula One, Automobiles, Motorsports & Badminton</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
