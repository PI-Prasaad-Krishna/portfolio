import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setError(null);

        const formData = new FormData(form.current);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            }).then((res) => res.json());

            if (res.success) {
                setIsSent(true);
                e.target.reset();
                setTimeout(() => setIsSent(false), 5000);
            } else {
                setError(res.message || "An error occurred.");
            }
        } catch (err) {
            setError("An error occurred. Please check your internet connection.");
        }

        setIsSending(false);
    };

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        <span className="text-secondary">
                            Let's Collaborate
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Have a question or want to collaborate? Send me a message!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl mx-auto relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

                    <form ref={form} onSubmit={sendEmail} className="text-left space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full bg-dark/50 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email "
                                className="w-full bg-dark/50 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Your message here..."
                                rows="5"
                                className="w-full bg-dark/50 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                            ></textarea>
                        </div>

                        {error && (
                            <div className="flex items-center text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                                <AlertCircle size={16} className="mr-2" />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSending || isSent}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center
                ${isSent
                                    ? 'bg-green-500 text-white cursor-default'
                                    : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-primary/25'
                                } disabled:opacity-70 disabled:cursor-not-allowed`}
                        >
                            {isSending ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : isSent ? (
                                <>
                                    <CheckCircle size={20} className="mr-2" />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} className="ml-2" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
