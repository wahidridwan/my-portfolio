import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Assistant Site Engineer (Intern)",
      company: "Spectra Engineers Limited",
      location: "Dhaka, Bangladesh",
      description: [
        "Assisted in daily site supervision, project monitoring, and quality control.",
        "Coordinated with senior engineers and labor forces to ensure construction safety and standards."
      ]
    },
    {
      role: "Site Engineer",
      company: "Scion Asset Developers Ltd.",
      location: "Dhaka, Bangladesh",
      description: [
        "Managed on-site operations, structural execution, and materials management.",
        "Ensured project timelines were met according to architectural and structural layouts."
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#050505] text-white max-w-7xl mx-auto px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest">
          Working <span className="text-[#bef264]">Experience</span>
        </h2>
        
        <div className="relative border-l border-[#bef264]/20 ml-4 md:ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] top-1.5 bg-[#bef264] w-4 h-4 rounded-full border-4 border-[#050505] shadow-[0_0_15px_rgba(190,242,100,0.5)]"></span>
              
              {/* Experience Card */}
              <div className="bg-[#111] p-8 rounded-[2rem] border border-[#bef264]/10 hover:border-[#bef264]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-slate-100">{exp.role}</h3>
                    <h4 className="text-md text-[#bef264] font-bold mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <span className="text-xs text-gray-500 block font-medium uppercase tracking-wider">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="hover:text-gray-200 transition-colors">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;