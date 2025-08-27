import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, GraduationCap, Heart } from 'lucide-react';

// Your other components
import CustomCursor from './CustomCursor';
import Background3D from './Background3D';

// Icons for the skills section
import { FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMongodb, SiTailwindcss, SiMysql, SiC, SiJsonwebtokens, SiFirebase } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: <FaPython className="text-blue-400" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
            { name: "C", icon: <SiC className="text-gray-400" /> },
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "JWT Auth", icon: <SiJsonwebtokens className="text-purple-400" /> },
            { name: "Machine Learning", icon: <TbBrain className="text-pink-400" /> },
        ]
    }
];

const Portfolio = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

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
      } else {
        console.error("Error sending message:", res);
        alert(res.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred. Please check the console.");
    }

    setIsSending(false);
  };
  
  const projects = [
    {
      title: "LexiGen AI - Legal Document Generation Tool",
      desc: "An AI-powered platform for generating key legal documents, currently featuring rental agreements and NDAs. LexiGen AI is designed to streamline the creation of accurate legal paperwork through an intuitive interface, with plans to expand its document library.",
      tech: ["React", "AI", "Vite", "Tailwind CSS", "Firebase", "Prompt Engineering", "Full-Stack"],
      link: "https://lexigenai.vercel.app/",
      githubLink: "https://github.com/PI-Prasaad-Krishna/LexiGen"
    },
    {
      title: "GetChef - AI Recipe Generator",
      desc: "A full-stack web app that generates unique recipes from user-provided ingredients using AI. Features secure user authentication, a personal recipe collection, and a multi-page interface.",
      tech: ["React", "Firebase", "Tailwind CSS", "Vite", "AI", "Prompt Engineering", "Full-Stack"],
      link: "https://getchef.vercel.app/",
      githubLink: "https://github.com/PI-Prasaad-Krishna/GetChef"
    },
    {
      title: "LearnX - AI Powered E-Learning Platform",
      desc: "MERN Stack + AI with interactive courses, demo videos, and AI Q&A bot. Built during HackVerse'25.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      link: null, 
      githubLink: "https://github.com/abhinavkajeev/Hackverse25-LearnX"
    },
    {
      title: "F1 Race Winner Predictor",
      desc: "Python-based statistical model predicting F1 GP outcomes using driver form and track stats.",
      tech: ["Python", "ML", "Statistics"],
      link: null,
      githubLink: "https://github.com/PI-Prasaad-Krishna/f1-predictions"
    },
    {
        title: "Bus Reservation System",
        desc: "Python + MySQL GUI app for booking multiple seats with visual layout, user login, and real-time seat map.",
        tech: ["Python", "MySQL", "Tkinter"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/Simple_BusReservationSystem"
      },
      {
        title: "Matrix Chain Multiplication Visualizer",
        desc: "C++ implementation with visualization showing optimal parenthesis placement.",
        tech: ["C++", "Algorithms", "Visualization"],
        link: null,
        githubLink: "https://github.com/PI-Prasaad-Krishna/DP-MatrixChainMultiplication"
      },
    {
      title: "MindMate – Mental Wellness Web App",
      desc: "A full-stack platform to help users manage their mental health. Includes journaling, motivational content, and a mood-based support system.",
      tech: ["React", "Firebase", "Tailwind", "WebApp"],
      link: "https://mindmate-34df5.web.app/",
      githubLink: "https://github.com/PI-Prasaad-Krishna/MindMate"
    },
    {
    title: "AI Interview Simulator",
    desc: "Simulates real job interviews using AI. Users answer dynamic questions and get scored with instant feedback. Built for a club hackathon with a full-stack React + AI setup.",
    tech: ["React", "OpenRouter", "AI", "Full-Stack", "Prompt Engineering"],
    link: "https://hackathon-ck-7eu7.vercel.app/",
    githubLink: "https://github.com/abhinavkajeev/hackathon-ck"
    }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const ProjectCard = ({ project }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
        className="relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 group hover:border-purple-400 transition-colors duration-300"
    >
        <div className="relative z-10 flex flex-col h-full">
            <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((tech, i) => (
                        <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur">
                        {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-4">
                {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-white transition-all duration-200 p-2 -ml-2 rounded-lg hover:bg-purple-600/20 transform hover:scale-105"
                    role="button"
                >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm font-medium">View Project</span>
                </a>
                )}
                {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center text-purple-400 hover:text-white transition-all duration-200 transform hover:scale-105 hover:bg-purple-600/20 ${
                    project.link ? 'w-9 h-9 rounded-full' : 'p-2 -ml-2 rounded-lg'
                    }`}
                    role="button"
                >
                    <Github size={16} className={!project.link ? 'mr-2' : ''} />
                    {!project.link && <span className="text-sm font-medium">View Code</span>}
                </a>
                )}
            </div>
        </div>
    </motion.div>
  );

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
        
        <Background3D />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* MODIFICATION: Added hover effect classes */}
            <div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]"
              onClick={handleHomeClick}
              role="button"
              tabIndex={0}
            >
              Prasaad Krishna
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())} className="hover:text-purple-400 transition-colors duration-300 font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-6">
            <motion.div
                className="text-center max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Hi, I'm Prasaad Krishna
                </motion.h1>
                <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 text-gray-300">
                B.Tech CSE Student | Developer | F1 Enthusiast
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Building things that make an impact with cutting-edge technology and creative solutions.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }} transition={{ type: 'spring', stiffness: 300 }} href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg inline-block text-center">
                    Get in Touch
                </motion.a>
                <motion.a whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6', boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }} transition={{ type: 'spring', stiffness: 300 }} href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold text-lg inline-block text-center">
                    View My Work
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6', boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }} 
                  transition={{ type: 'spring', stiffness: 300 }} 
                  href="public/assets/Resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold text-lg inline-block text-center"
                >
                    View Resume
                </motion.a>
                </motion.div>
            </motion.div>
        </section>

        {/* Sections Wrapper for scroll animations */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
          
          <section id="about" className="py-20 px-6 relative z-10 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants} className="space-y-6">
                   <p className="text-lg text-gray-300 leading-relaxed">
                        I'm Prasaad, a Computer Science student at <span className="text-purple-400 font-semibold">SRM Institute of Science and Technology, Ramapuram</span>. 
                        I love creating tech that solves real problems, and I'm deeply interested in web development, competitive programming, and machine learning.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        When I'm not coding, you'll find me diving into Formula 1 or any other motorsport, dreaming about the 
                        <span className="text-yellow-400 font-semibold"> Lamborghini Aventador</span>, or listening to soulful tracks.
                    </p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur border border-white/10 space-y-6">
                   <div className="flex items-center"><GraduationCap className="mr-4 text-purple-400" size={24} /><div><h3 className="font-semibold text-lg">Education</h3><p className="text-gray-400">B.Tech CSE, SRM Institute (2023-2027)</p></div></div>
                   <div className="flex items-center"><MapPin className="mr-4 text-blue-400" size={24} /><div><h3 className="font-semibold text-lg">Location</h3><p className="text-gray-400">Chennai, India</p></div></div>
                   <div className="flex items-center"><Heart className="mr-4 text-red-400" size={24} /><div><h3 className="font-semibold text-lg">Passion</h3><p className="text-gray-400">F1 Racing & Motorsports</p></div></div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-20 px-6 relative z-10 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h2>
              </motion.div>
              <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -10, transition: { type: 'spring', stiffness: 300 } }}
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur border border-white/10"
                  >
                    <h3 className="text-xl font-bold mb-6 text-center text-gray-200">{category.title}</h3>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center text-lg">
                          <span className="text-2xl mr-4">{skill.icon}</span>
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-20 px-6 relative z-10 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </motion.div>
              <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
              </motion.div>
            </div>
          </section>
          
          <section id="experience" className="py-20 px-6 relative z-10 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Experience & Achievements
                </h2>
              </motion.div>
              <div className="flex justify-center">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10, transition: { type: 'spring', stiffness: 300 } }}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur border border-white/10 max-w-2xl w-full"
                >
                  <h3 className="text-2xl font-bold text-white">Hackathon Finalist</h3>
                  <p className="text-purple-300 mb-2 text-lg">HackVerse'25 | March 2025</p>
                  <p className="text-gray-300 leading-relaxed">Developed "LearnX," a MERN stack + AI e-learning platform featuring interactive courses and an AI Q&A bot, securing a place in the finals among numerous competing teams.</p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 px-6 relative z-10 scroll-mt-24">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Let's Connect
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-12">
                    Have a question or want to collaborate? Send me a message!
                </motion.p>
                
                <motion.form ref={form} onSubmit={sendEmail} variants={itemVariants} className="text-left max-w-xl mx-auto space-y-6">
                    <input type="text" name="name" required placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
                    <input type="email" name="email" required placeholder="Your Email" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
                    <textarea name="message" required placeholder="Your Message" rows="5" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>
                    <button
                    type="submit"
                    disabled={isSending || isSent}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    role="button"
                    >
                    {isSending ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
                    </button>
                </motion.form>

                <motion.p variants={itemVariants} className="mt-16 text-lg text-gray-400">
                    Or find me on
                </motion.p>
                <motion.div variants={containerVariants} className="flex justify-center gap-8 mt-6">
                  <motion.a variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }} href="mailto:prasaad2005@gmail.com" className="group text-gray-400 hover:text-white transition-colors" role="button">
                      <Mail size={32} />
                  </motion.a>
                  <motion.a variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }} href="https://github.com/PI-Prasaad-Krishna" className="group text-gray-400 hover:text-white transition-colors" role="button">
                      <Github size={32} />
                  </motion.a>
                  <motion.a variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }} href="https://www.linkedin.com/in/p-i-prasaad-krishna-1b880a290/" className="group text-gray-400 hover:text-white transition-colors" role="button">
                      <Linkedin size={32} />
                  </motion.a>
              </motion.div>
            </div>
          </section>

        </motion.div>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10 relative z-10 text-center">
          <p className="text-gray-400 mb-2">© 2025 Prasaad Krishna. All rights reserved.</p>
          <p className="text-gray-500">Built with ❤️ and React | Open to collaborations!</p>
        </footer>

      </div>
    </>
  );
};

export default Portfolio;