import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FileCode2, Award, Send } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FileCode2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Achievements', href: '#achievements', icon: Award },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-4 inset-x-0 mx-auto w-[90%] md:w-[70%] max-w-4xl z-50 transition-all duration-500 rounded-full",
                    scrolled ? "bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl py-3" : "bg-transparent py-4"
                )}
            >
                <div className="flex items-center justify-between px-6 md:px-8 h-full">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 transition-all"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">

                        <a
                            href="assets/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                            Resume
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="bg-slate-900 text-white dark:bg-white dark:text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-md"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            className="text-slate-800 dark:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-2xl font-light text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center justify-center gap-3"
                                >
                                    <item.icon size={24} />
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-4 mt-8 w-full px-12">
                                <a
                                    href="assets/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-100 border border-slate-200 text-slate-800 dark:bg-white/10 dark:border-white/20 dark:text-white px-8 py-3 rounded-full text-lg font-medium flex items-center justify-center"
                                >
                                    View Resume
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    className="bg-slate-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-full text-lg font-bold flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <Send size={20} />
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
