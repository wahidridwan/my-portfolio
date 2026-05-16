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
        <div className="mb-20 border-l-4 border-[#bef264] pl-8">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3 uppercase">
            Projects I've Built
          </h2>
          <p className="text-gray-400 text-base font-medium">
            Here's some of my projects that I have worked on.
          </p>
        </div>

        {/* প্রজেক্ট লিস্ট (ত্রিমাত্রিক গ্রিড) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          {projectList.map((project, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* ছবি সেকশন - যা থেকে ত্রিমাত্রিক পপ-আউট লুক শুরু হবে */}
              <div className="w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 relative transition-all duration-700 group-hover:-translate-y-4 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { 
                    console.error("Image failed to load:", project.image);
                  }} 
                />
                {/* ছবিটির ওপরে হালকা গ্রাডিয়েন্ট শেড যা ত্রিমাত্রিক অনুভূতি বাড়ায় */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* বিবরণ সেকশন - ত্রিমাত্রিক বাটন ডিজাইন সহ */}
              <div className="bg-[#111] p-10 mt-[-60px] relative z-10 mx-6 rounded-[2.5rem] border border-[#bef264]/10 transition-all duration-700 group-hover:-translate-y-2 group-hover:border-[#bef264]/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                    Featured Project
                  </span>
                  
                  {/* সবুজ তীর চিহ্ন */}
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#bef264] hover:text-white transition-colors"
                    title={project.hasLive ? "Live Demo" : "View Code/Interface"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-500">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                {/* প্রজেক্টের নাম */}
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase mb-6 group-hover:text-[#bef264] transition-colors">
                  {project.title}
                </h3>

                {/* টেকনোলজি স্ট্যাক */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-xs font-bold text-gray-400">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#bef264] rounded-full"></span>
                      {t}
                    </span>
                  ))}
                </div>

                {/* প্রজেক্টের ডেসক্রিপশন */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-10 min-h-[100px]">
                  {project.description}
                </p>

                {/* ত্রিমাত্রিক পপ-আউট অ্যাকশন বাটনসমূহ */}
                <div className="flex flex-wrap gap-6 mt-auto">
                  {project.hasLive && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="group relative inline-flex items-center px-10 py-4 font-black text-black uppercase transition-all bg-[#bef264] rounded-2xl hover:-translate-y-2 shadow-[0_0_20px_rgba(190,242,100,0.3)]">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="group relative inline-flex items-center px-10 py-4 font-black text-white uppercase transition-all bg-[#1a1a1a] rounded-2xl border border-white/10 hover:-translate-y-2 hover:bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;