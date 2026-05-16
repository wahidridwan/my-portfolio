import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Restaurant Ordering System",
      description: "A complete management and ordering dashboard for restaurants. Features a clean interface to track incoming orders, handle food items, and monitor real-time dining operations.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      image: "/restaurant.png.png", 
      liveLink: "https://tamimtxd.github.io/restaurant-ordering-system/management/",
      githubLink: "https://github.com/wahidridwan/restaurant-ordering-system",
      hasLive: true
    },
    {
      title: "Sentiment Analyzer UI",
      description: "An intuitive graphical user interface designed for analyzing text sentiments. It processes textual inputs and provides instant visual feedback on emotional tones and sentiment scores when compiled.",
      tech: ["Java", "Swing/JavaFX", "NLP", "UI Design"],
      image: "/sentiment.png.png", 
      liveLink: "https://github.com/wahidridwan/SentimentAnalyzerUI#readme",
      githubLink: "https://github.com/wahidridwan/SentimentAnalyzerUI",
      hasLive: false
    }
  ];

  return (
    <section className="py-24 bg-[#050505] text-white max-w-7xl mx-auto px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        
        {/* হেডিং সেকশন */}
        <div className="mb-16 border-l-4 border-[#bef264] pl-6">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 uppercase">
            Projects I've Built
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Here's some of my projects that I have worked on.
          </p>
        </div>

        {/* প্রজেক্ট গ্রিড (পাশাপাশি দুটি কার্ড, কোনো ওভারল্যাপ ছাড়া) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#111] rounded-[2.5rem] p-6 md:p-8 border border-[#bef264]/10 hover:border-[#bef264]/40 transition-all duration-500 hover:-translate-y-3 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(190,242,100,0.1)] flex flex-col justify-between group"
            >
              <div>
                {/* প্রজেক্ট ইমেজ - সুন্দর 3D কার্ভ এবং হালকা গ্লো সহ */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 relative mb-6 shadow-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700"
                    onError={(e) => { 
                      console.error("Image failed to load:", project.image);
                    }} 
                  />
                </div>

                {/* মেটা ইনফো এবং লাইভ অ্যারো লিঙ্ক */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                    Featured Project
                  </span>
                  
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#bef264] hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-500">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                {/* প্রজেক্ট টাইটেল */}
                <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4 group-hover:text-[#bef264] transition-colors">
                  {project.title}
                </h3>

                {/* টেকনোলজি স্ট্যাক */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs font-bold text-gray-400">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#bef264] rounded-full"></span>
                      {t}
                    </span>
                  ))}
                </div>

                {/* প্রজেক্ট ডেসক্রিপশন */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-8">
                  {project.description}
                </p>
              </div>

              {/* অ্যাকশন বাটনসমূহ - হুবহু তোমার বাকি বাটনগুলোর মতো 3D ভাইব */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.hasLive && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center px-6 py-3 font-black text-black text-xs uppercase tracking-wider transition-all bg-[#bef264] rounded-xl hover:-translate-y-1 shadow-[0_0_15px_rgba(190,242,100,0.35)] hover:shadow-[0_0_25px_rgba(190,242,100,0.6)]"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                )}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center px-6 py-3 font-black text-white text-xs uppercase tracking-wider transition-all bg-[#1a1a1a] rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                >
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