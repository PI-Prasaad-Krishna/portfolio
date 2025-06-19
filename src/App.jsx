import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Database, Server, Smartphone, Trophy, GraduationCap, Briefcase, User, Zap, Target, Heart } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'Python', icon: '🐍', color: 'bg-yellow-500', position: { x: 20, y: 20 } },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-400', position: { x: 80, y: 30 } },
    { name: 'React', icon: '⚛️', color: 'bg-blue-500', position: { x: 60, y: 70 } },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500', position: { x: 10, y: 60 } },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-600', position: { x: 90, y: 65 } },
    { name: 'C++', icon: '⚙️', color: 'bg-blue-600', position: { x: 75, y: 15 } },
    { name: 'MySQL', icon: '🐬', color: 'bg-orange-500', position: { x: 40, y: 25 } },
    { name: 'Git', icon: '📊', color: 'bg-red-500', position: { x: 15, y: 85 } }
  ];

  const projects = [
    {
      title: "LearnX - AI Powered E-Learning Platform",
      desc: "MERN Stack + AI with interactive courses, demo videos, and AI Q&A bot. Built during HackVerse'25.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      color: "from-purple-600 to-blue-600",
      link: "https://github.com/abhinavkajeev/Hackverse25-LearnX"
    },
    {
      title: "F1 Race Winner Predictor",
      desc: "Python-based statistical model predicting F1 GP outcomes using driver form and track stats.",
      tech: ["Python", "ML", "Statistics"],
      color: "from-red-600 to-orange-600",
      link: "https://github.com/PI-Prasaad-Krishna/f1-predictions"
    },
    {
      title: "Bus Reservation System",
      desc: "Python + MySQL GUI app for booking multiple seats with visual layout, user login, and real-time seat map.",
      tech: ["Python", "MySQL", "Tkinter"],
      color: "from-green-600 to-teal-600",
      link: "https://github.com/PI-Prasaad-Krishna/Simple_BusReservationSystem"
    },
    {
      title: "Matrix Chain Multiplication Visualizer",
      desc: "C++ implementation with visualization showing optimal parenthesis placement.",
      tech: ["C++", "Algorithms", "Visualization"],
      color: "from-blue-600 to-purple-600",
      link: "https://github.com/PI-Prasaad-Krishna/DP-MatrixChainMultiplication"
    }
  ];

  const FloatingLogo = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - (skill.position.x * window.innerWidth / 100), 2) +
      Math.pow(mousePosition.y - (skill.position.y * window.innerHeight / 100), 2)
    );
    const attraction = Math.max(0, 200 - distance) / 200;
    const scale = isHovered ? 1.3 : 1 + attraction * 0.3;

    return (
      <div
        className={`absolute transition-all duration-300 ease-out ${skill.color} rounded-full p-4 shadow-2xl cursor-pointer group`}
        style={{
          left: `${skill.position.x}%`,
          top: `${skill.position.y}%`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          zIndex: isHovered ? 50 : 10,
          animation: `float-${index} 6s ease-in-out infinite`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-2xl">{skill.icon}</div>
        <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {skill.name}
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => (
    <div className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${project.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">{project.title}</h3>
        <p className="text-white/90 mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur">
              {tech}
            </span>
          ))}
        </div>
        <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">
  <ExternalLink size={16} className="mr-2" />
  <span className="text-sm font-medium">View Project</span>
</a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full animate-pulse"></div>
      </div>



      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Prasaad Krishna
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300 font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Hi, I'm Prasaad Krishna
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-gray-300">
              <span className="inline-block animate-bounce">👨‍💻</span>
              <span className="ml-2">B.Tech CSE Student | Developer | F1 Enthusiast</span>
            </div>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building things that make an impact with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 inline-block text-center">
                Get in Touch
              </a>
              <a href="#projects" className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block text-center">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Prasaad, a Computer Science student at <span className="text-purple-400 font-semibold">SRM Institute of Technology, Ramapuram</span>. 
                I love creating tech that solves real problems, and I'm deeply interested in web development, competitive programming, and machine learning.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me diving into Formula 1 or any other motorsport, dreaming about the 
                <span className="text-yellow-400 font-semibold"> Lamborghini Aventador</span>, or listening to soulful tracks.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-purple-600/20 px-4 py-2 rounded-full">
                  <Code className="mr-2" size={20} />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center bg-blue-600/20 px-4 py-2 rounded-full">
                  <Database className="mr-2" size={20} />
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center bg-green-600/20 px-4 py-2 rounded-full">
                  <Target className="mr-2" size={20} />
                  <span>Competitive Programming</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <GraduationCap className="mr-4 text-purple-400" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Education</h3>
                      <p className="text-gray-400">B.Tech CSE, SRM Institute (2023-2027)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-blue-400" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-gray-400">Chennai, India</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Heart className="mr-4 text-red-400" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Passion</h3>
                      <p className="text-gray-400">F1 Racing & Motorsports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400">Technologies I work with to bring ideas to life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 backdrop-blur border border-white/10 hover:scale-105 transition-transform duration-300">
              <Code className="mb-4 text-purple-400" size={32} />
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🐍</span>
                  <span className="text-gray-300">Python</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  <span className="text-gray-300">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⚙️</span>
                  <span className="text-gray-300">C++</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🔧</span>
                  <span className="text-gray-300">C</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 backdrop-blur border border-white/10 hover:scale-105 transition-transform duration-300">
              <Server className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⚛️</span>
                  <span className="text-gray-300">React</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🟢</span>
                  <span className="text-gray-300">Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🍃</span>
                  <span className="text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎨</span>
                  <span className="text-gray-300">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 backdrop-blur border border-white/10 hover:scale-105 transition-transform duration-300">
              <Database className="mb-4 text-green-400" size={32} />
              <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  <span className="text-gray-300">Git & GitHub</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🐬</span>
                  <span className="text-gray-300">MySQL</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🔒</span>
                  <span className="text-gray-300">JWT Auth</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🤖</span>
                  <span className="text-gray-300">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">Some of my recent work and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start">
                <Trophy className="mr-4 text-yellow-400 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">HackVerse'25 | Hackathon Finalist</h3>
                  <p className="text-purple-400 font-semibold mb-3">LearnX Platform</p>
                  <p className="text-gray-300 leading-relaxed">Designed backend and AI bot for a smart learning platform. Worked with a team using agile methodology to deliver a comprehensive e-learning solution.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl p-8 backdrop-blur border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start">
                <Briefcase className="mr-4 text-green-400 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Freelance Projects</h3>
                  <p className="text-green-400 font-semibold mb-3">Independent Developer</p>
                  <p className="text-gray-300 leading-relaxed">Built custom Python tools for automation and data analysis, helping clients streamline their workflows and improve efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12">Ready to collaborate and build something awesome together!</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:prasaad2005@gmail.com" className="group bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-2xl p-6 backdrop-blur border border-white/10 hover:scale-105 transition-all duration-300">
              <Mail className="mx-auto mb-4 text-red-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">prasaad2005@gmail.com</p>
            </a>
            
            <a href="https://github.com/PI-Prasaad-Krishna" className="group bg-gradient-to-br from-gray-600/20 to-black/20 rounded-2xl p-6 backdrop-blur border border-white/10 hover:scale-105 transition-all duration-300">
              <Github className="mx-auto mb-4 text-gray-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">PI-Prasaad-Krishna</p>
            </a>
            
            <a href="https://www.linkedin.com/in/p-i-prasaad-krishna-1b880a290/" className="group bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 backdrop-blur border border-white/10 hover:scale-105 transition-all duration-300">
              <Linkedin className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2025 Prasaad Krishna. All rights reserved.</p>
          <p className="text-gray-500">Built with ❤️ and React | Open to collaborations!</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-0 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-20px); } }
        @keyframes float-1 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-15px); } }
        @keyframes float-2 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-25px); } }
        @keyframes float-3 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-18px); } }
        @keyframes float-4 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-22px); } }
        @keyframes float-5 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-16px); } }
        @keyframes float-6 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-19px); } }
        @keyframes float-7 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-24px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default Portfolio;