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
        <section id="contact" className="py-24 relative z-10 bg-transparent transition-colors">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                        Get In Touch
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6 transition-colors">
                        Let's Collaborate
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-light transition-colors">
                        Have a question or want to collaborate? Send me a message!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-3xl max-w-2xl mx-auto relative overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl transition-colors"
                >
                    <form ref={form} onSubmit={sendEmail} className="text-left space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Jane Doe"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="jane@example.com"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Hi Prasaad, I'd like to talk about..."
                                rows="5"
                                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        {error && (
                            <div className="flex items-center text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/20 p-4 rounded-xl">
                                <AlertCircle size={16} className="mr-2" />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSending || isSent}
                            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center
                                ${isSent
                                    ? 'bg-green-100 text-green-600 border border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30 cursor-default'
                                    : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-dark dark:hover:bg-gray-200 shadow-md'
                                } disabled:opacity-70 disabled:cursor-not-allowed`}
                        >
                            {isSending ? (
                                <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-900 dark:border-dark/30 dark:border-t-dark rounded-full animate-spin"></div>
                            ) : isSent ? (
                                <>
                                    <CheckCircle size={18} className="mr-2" />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={16} className="ml-2" />
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
