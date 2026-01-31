import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark z-0 pointer-events-none"></div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                        Available for Internships
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
                        <span className="text-secondary">
                            Prasaad Krishna
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                        Crafting digital experiences with <span className="text-white font-medium">code</span> and <span className="text-white font-medium">creativity</span>.
                        <br />
                        <span className="text-gray-400 text-lg mt-2 block">
                            Full Stack Developer | Data Science Enthusiast | F1 Fanatic
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all hover:border-white/20"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 text-gray-400">
                        <a href="https://github.com/PI-Prasaad-Krishna" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/p-i-prasaad-krishna-1b880a290/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:prasaad2005@gmail.com" className="hover:text-red-400 transition-colors hover:scale-110 transform duration-200">
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
                <ArrowDown className="text-gray-400 hover:text-white transition-colors" size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
