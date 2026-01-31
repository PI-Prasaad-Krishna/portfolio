import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMongodb, SiTailwindcss, SiMysql, SiC, SiJsonwebtokens, SiFirebase, SiTypescript, SiNextdotjs, SiDocker, SiRust } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: <FaPython className="text-blue-400" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
            { name: "C", icon: <SiC className="text-blue-600" /> },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        ]
    },
    {
        title: "Backend & DB",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-purple-500" /> },
            { name: "AI/ML", icon: <TbBrain className="text-pink-500" /> },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative z-10">
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
                            Tech Stack
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors duration-300 group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-200 group-hover:text-primary transition-colors">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
