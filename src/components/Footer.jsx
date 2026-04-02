import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-transparent transition-colors overflow-hidden py-12 border-t border-slate-200 dark:border-white/5">
            {/* Minimal top gradient that respects theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 dark:via-primary/50 to-transparent"></div>
            
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-slate-800 dark:text-gray-300 font-medium mb-1 transition-colors">
                        &copy; {new Date().getFullYear()} Prasaad Krishna.
                    </p>
                    <p className="text-sm text-slate-500 dark:text-gray-500 font-light transition-colors">
                        All rights reserved.
                    </p>
                </div>
                
                <div className="text-center md:text-right">
                    <p className="text-sm text-slate-600 dark:text-gray-400 font-light hidden md:block transition-colors">
                        Designed & Developed with <span className="text-slate-900 dark:text-white font-medium">Precision</span>
                    </p>
                    <div className="flex items-center justify-center md:justify-end gap-6 mt-4 md:mt-2 text-sm text-slate-500 dark:text-gray-500 font-medium transition-colors">
                        <a href="#hero" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</a>
                        <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
                        <a href="mailto:prasaad2005@gmail.com" className="hover:text-primary transition-colors">Email Me</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
