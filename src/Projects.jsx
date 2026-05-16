import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Restaurant Ordering System",
      description: "A complete management and ordering dashboard for restaurants. Features a clean interface to track incoming orders, handle food items, and monitor real-time dining operations.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      image: "/restaurant.png.png", // উইন্ডোজের ডাবল ডট পিএনজি ফরম্যাট ফিক্স করা হলো
      liveLink: "https://tamimtxd.github.io/restaurant-ordering-system/management/",
      githubLink: "https://github.com/wahidridwan/restaurant-ordering-system",
      hasLive: true
    },
    {
      title: "Sentiment Analyzer UI",
      description: "An intuitive graphical user interface designed for analyzing text sentiments. It processes textual inputs and provides instant visual feedback on emotional tones and sentiment scores when compiled.",
      tech: ["Java", "Swing/JavaFX", "NLP", "UI Design"],
      image: "/sentiment.png.png", // উইন্ডোজের ডাবল ডট পিএনজি ফরম্যাট ফিক্স করা হলো
      liveLink: "https://github.com/wahidridwan/SentimentAnalyzerUI#readme",
      githubLink: "https://github.com/wahidridwan/SentimentAnalyzerUI",
      hasLive: false
    }
  ];

  return (
    <section className="py-24 bg-[#050505] text-white max-w-7xl mx-auto px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        
        {/* হেডিং সেকশন */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Projects I've Built
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Here's some of my projects that I have worked on.
          </p>
        </div>

        {/* প্রজেক্ট লিস্ট (বামে ছবি, ডানে বিবরণ) */}
        <div className="space-y-24">
          {projectList.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start group">
              
              {/* বাম পাশের বড় ছবি */}
              <div className="w-full lg:w-[55%] aspect-[16/10] rounded-xl overflow-hidden bg-[#111] border border-white/10 relative shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => { 
                    console.error("Image failed to load:", project.image);
                  }} 
                />
              </div>

              {/* ডান পাশের বিস্তারিত তথ্য */}
              <div className="w-full lg:w-[45%] pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
                    Featured Project
                  </span>
                  
                  {/* সবুজ তীর চিহ্ন */}
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#bef264] hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4 group-hover:text-[#bef264] transition-colors">
                  {project.title}
                </h3>

                {/* টেকনোলজি স্ট্যাক */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs font-bold text-gray-400">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#bef264] rounded-full"></span>
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.hasLive && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-[#bef264] text-black rounded-xl text-xs font-black uppercase tracking-wider transition-all hover:bg-[#bef264]/90 shadow-[0_0_15px_rgba(190,242,100,0.15)]">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-xl text-xs font-black uppercase tracking-wider border border-white/10 hover:bg-white/5 transition-all">
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