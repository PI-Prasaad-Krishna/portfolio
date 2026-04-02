import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMongodb, SiTailwindcss, SiMysql, SiC, SiJsonwebtokens, SiFirebase } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { Marquee } from './ui/Marquee';

const allSkills = [
    { name: "Python", icon: <FaPython className="text-blue-500 dark:text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 dark:text-yellow-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700 dark:text-blue-500" /> },
    { name: "C", icon: <SiC className="text-blue-700 dark:text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 dark:text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-600 dark:text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 dark:text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 dark:text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 dark:text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600 dark:text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-purple-600 dark:text-purple-500" /> },
    { name: "AI/ML", icon: <TbBrain className="text-pink-600 dark:text-pink-500" /> },
];

const SkillCard = ({ name, icon }) => {
    return (
        <div className="flex flex-row items-center gap-4 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-colors cursor-pointer w-48">
            <div className="text-3xl">{icon}</div>
            <div className="text-sm font-medium text-slate-700 dark:text-gray-300">{name}</div>
        </div>
    );
};

const Skills = () => {
    const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
    const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2));

    return (
        <section id="skills" className="py-24 relative z-10 bg-transparent overflow-hidden flex flex-col justify-center items-center transition-colors">

            {/* Edge fades — match bg per theme */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none transition-colors duration-500"></div>

            <div className="max-w-6xl mx-auto px-6 mb-16 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                        Tech Stack
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white transition-colors">
                        Tools of the Trade
                    </h3>
                </motion.div>
            </div>

            {/* Marquees */}
            <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s] mt-4">
                    {secondRow.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
