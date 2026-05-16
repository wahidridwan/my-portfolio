import React, { useState, useEffect } from 'react';
import Experience from './components/Experience';
const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const myImage = "https://media.licdn.com/dms/image/v2/D4D03AQGV9la5iZkm9A/profile-displayphoto-shrink_400_400/B4DZRkhG1UHEAk-/0/1736853188848?e=1779926400&v=beta&t=wf7LDgbtNyp2Wu_WnooDJ74BPSTQM1EDLrWzdAs0dSs";    
  
  const socialLinks = {
    github: "https://github.com/wahidridwan",
    linkedin: "https://www.linkedin.com/in/wahid-ridwan-7959482a8/",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=wahidridwan58@gmail.com",
    resume: "https://drive.google.com/file/d/1m5pMLy71aXoGcpAEIuOd6hZmHZGiMicP/view?usp=sharing" 
  };

  const techStack = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  const skillCategories = [
    { title: "Frontend Development", skills: ["React", "HTML5", "CSS3", "JavaScript"], bg: "from-[#bef264]/10 to-transparent", border: "border-[#bef264]/30" },
    { title: "Backend Development", skills: ["Java", "Spring Boot", "Python", "Django", "Node.js"], bg: "from-[#bef264]/10 to-transparent", border: "border-[#bef264]/30" },
    { title: "Database Management", skills: ["SQL", "PostgreSQL", "MongoDB"], bg: "from-[#bef264]/10 to-transparent", border: "border-[#bef264]/30" },
    { title: "Tools & DevOps", skills: ["Git", "GitHub", "Docker", "VS Code"], bg: "from-[#bef264]/10 to-transparent", border: "border-[#bef264]/30" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden pb-20">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#bef264 1px, transparent 1px), linear-gradient(90deg, #bef264 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent, #050505 100%)` }}></div>

      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: scroll 25s linear infinite; }`}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="mb-10 text-center md:text-left">
            <span className="text-[#bef264] font-mono text-lg font-bold tracking-widest uppercase">Hey there!, I'm</span>
            <h1 className="mb-6"><span className="block text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] uppercase">Wahid Ridwan</span></h1>
            <p className="text-gray-300 text-xl md:text-3xl font-bold max-w-2xl">
              I’m a <span className="text-[#bef264]">Full Stack Web Developer</span> skilled in 
              <span className="text-white"> Java, Python, React,</span> and <span className="text-white"> Spring Boot.</span>
            </p>
            <p className="text-gray-400 text-lg md:text-xl mt-8 border-l-4 border-[#bef264] pl-6 font-medium leading-relaxed">
              Passionate about creating <span className="text-gray-200">scalable, responsive,</span> and <span className="text-gray-200"> user-friendly</span> web applications.
            </p>
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-center md:justify-start mb-12">
            <a href="https://github.com/wahidridwan?tab=repositories" target="_blank" rel="noreferrer"
               className="group relative inline-flex items-center px-10 py-4 font-black text-black uppercase transition-all bg-[#bef264] rounded-2xl hover:-translate-y-2 shadow-[0_0_20px_rgba(190,242,100,0.3)]">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-2 group-hover:translate-x-2 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Corrected Social Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="bg-[#1a1a1a] text-white px-6 py-3 rounded-xl font-bold uppercase border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1">
              GitHub
            </a>
            
            <a href={socialLinks.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold uppercase transition-all hover:-translate-y-1 shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Resume
            </a>

            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="bg-[#bef264] text-black px-6 py-3 rounded-xl font-bold uppercase transition-all hover:-translate-y-1">
              LinkedIn
            </a>

            <a href={socialLinks.email} target="_blank" rel="noreferrer" className="border-2 border-[#bef264] text-[#bef264] px-6 py-3 rounded-xl font-bold uppercase transition-all hover:-translate-y-1 hover:bg-[#bef264]/10">
              Email Me
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-[#bef264] rounded-[3rem] blur-2xl opacity-10"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] p-2 bg-[#111] border border-[#bef264]/20 overflow-hidden shadow-2xl">
            <img src={myImage} alt="Wahid Ridwan" className="w-full h-full object-cover rounded-[2rem]" />
          </div>
        </div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <section className="relative z-10 mt-20 border-y border-white/5 bg-white/[0.02] py-16">
        <div className="max-w-7xl mx-auto px-6 mb-12"><h2 className="text-4xl md:text-6xl font-black uppercase">Tech <span className="text-[#bef264]">Stack</span></h2></div>
        <div className="relative flex overflow-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20">
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="flex items-center gap-6 group cursor-pointer">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 transition-all group-hover:scale-125" />
                <span className="text-2xl md:text-5xl font-black text-white/20 group-hover:text-[#bef264] transition-all uppercase">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERTISE BOXES --- */}
      <section className="relative z-10 px-6 max-w-7xl mx-auto mt-32">
        <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest">Technical <span className="text-[#bef264]">Expertise</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`group p-10 rounded-[2.5rem] bg-gradient-to-br ${cat.bg} border ${cat.border} transition-all hover:-translate-y-2`}>
              <h3 className="text-xl font-black uppercase mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => <span key={sIdx} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-gray-300 group-hover:text-[#bef264] transition-colors">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 text-center py-20 opacity-30 text-sm tracking-[0.2em]">© 2026 WAHID RIDWAN</footer>
    </div>
  );
};

export default App;