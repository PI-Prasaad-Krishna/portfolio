import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-sm border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="text-2xl font-bold font-heading text-secondary hover:opacity-80 transition-opacity"
                >
                    Prasaad Krishna
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="assets/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium text-sm"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="assets/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center w-full px-6 py-3 rounded-lg bg-primary/20 text-primary border border-primary/50 font-medium"
                            >
                                View Resume
                            </a>
                            <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
                                <a href="https://github.com/PI-Prasaad-Krishna" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/p-i-prasaad-krishna-1b880a290/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
                                <a href="mailto:prasaad2005@gmail.com" className="text-gray-400 hover:text-white"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
