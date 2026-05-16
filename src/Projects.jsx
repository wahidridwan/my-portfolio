import React from 'react';

const Projects = () => {
  // Tomar original project-guler list
  const projectList = [
    {
      title: "Restaurant Ordering System",
      description: "A complete management and ordering dashboard for restaurants. Features a clean interface to track incoming orders, handle food items, and monitor real-time dining operations.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      liveLink: "https://tamimtxd.github.io/restaurant-ordering-system/management/",
      githubLink: "https://github.com/wahidridwan/restaurant-ordering-system", // Repositoriy name jodi alada hoy change kore nio
      hasLive: true
    },
    {
      title: "Sentiment Analyzer UI",
      description: "An intuitive graphical user interface designed for analyzing text sentiments. It processes textual inputs and provides instant visual feedback on emotional tones and sentiment scores when compiled.",
      tech: ["Java", "Swing/JavaFX", "NLP", "UI Design"],
      liveLink: "https://github.com/wahidridwan/SentimentAnalyzerUI#readme", // Live na thakay readme section-e pathano hoyeche
      githubLink: "https://github.com/wahidridwan/SentimentAnalyzerUI",
      hasLive: false
    }
  ];

  return (
    <section className="py-16 bg-[#050505] text-white max-w-7xl mx-auto px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest">
          Featured <span className="text-[#bef264]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectList.map((project, index) => (
            <div key={index} className="bg-[#111] p-8 rounded-[2rem] border border-[#bef264]/10 hover:border-[#bef264]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2">
              <div>
                <h3 className="text-xl font-black uppercase text-slate-100 group-hover:text-[#bef264] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-gray-300 group-hover:text-[#bef264] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1 text-center bg-[#bef264] text-black py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all hover:bg-[#bef264]/90 shadow-[0_0_15px_rgba(190,242,100,0.15)]">
                  {project.hasLive ? "Live Demo" : "View Interface"}
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 text-center bg-[#1a1a1a] text-white py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border border-white/10 hover:bg-white/5 transition-all">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;