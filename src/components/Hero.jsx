import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';
import { WordRotate } from './ui/WordRotate';

const Hero = () => {

    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Minimalist gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-200/50 dark:to-dark/50 z-0 pointer-events-none transition-colors duration-500"></div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-200/50 dark:bg-white/[0.03] border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm font-medium mb-8 backdrop-blur-md shadow-sm transition-all hover:bg-slate-300/50 dark:hover:bg-white/[0.08]">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Available for Internships
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight text-slate-900 dark:text-white drop-shadow-sm transition-colors">
                        Prasaad Krishna
                    </h1>

                    <div className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed flex flex-col items-center justify-center transition-colors">
                        <p className="mb-2">Crafting digital experiences with code.</p>
                        <WordRotate
                            className="text-primary"
                            words={["Full Stack Developer", "Data Science Enthusiast", "F1 Fanatic"]}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="relative group px-8 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-dark font-medium transition-all transform hover:-translate-y-1 overflow-hidden shadow-lg shadow-black/5 dark:shadow-white/5"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-slate-800 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl"></div>
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="px-8 py-3.5 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-medium backdrop-blur-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-all hover:border-slate-400 dark:hover:border-white/20"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 text-slate-500 dark:text-gray-500 transition-colors">
                        <a href="https://github.com/PI-Prasaad-Krishna" target="_blank" rel="noreferrer" className="hover:text-primary dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/p-i-prasaad-krishna-1b880a290/" target="_blank" rel="noreferrer" className="hover:text-primary dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:prasaad2005@gmail.com" className="hover:text-primary dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                onClick={handleScrollDown}
            >
                <ArrowDown className="text-slate-400 dark:text-gray-500 hover:text-primary dark:hover:text-white transition-colors" size={28} />
            </motion.div>
        </section>
    );
};

export default Hero;
