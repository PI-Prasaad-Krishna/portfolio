import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-gray-400 mb-2 font-light">
                    &copy; {new Date().getFullYear()} Prasaad Krishna. All rights reserved.
                </p>
                <p className="text-sm text-gray-500">
                    Designed & Developed by Prasaad Krishna | Open to collaborations!   
                </p>
            </div>
        </footer>
    );
};

export default Footer;
