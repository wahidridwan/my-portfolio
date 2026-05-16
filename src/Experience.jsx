import React from 'react';

const Experience = () => {
  // তোমার দেওয়া এক্সপেরিয়েন্স ডাটা এখানে সেট করা হয়েছে
  const experiences = [
    {
      role: "Assistant Site Engineer (Intern)",
      company: "Spectra Engineers Limited",
      type: "Full-time",
      duration: "Oct 2023 - Dec 2023 · 3 mos",
      location: "Dhaka, Bangladesh",
      description: [
        "Assisted in daily site supervision, project monitoring, and quality control.",
        "Coordinated with senior engineers and labor forces to ensure construction safety and standards."
      ]
    },
    {
      role: "Site Engineer",
      company: "Scion Asset Developers Ltd.",
      type: "Full-time",
      duration: "Jan 2023 - Sep 2023 · 9 mos",
      location: "Dhaka, Bangladesh",
      description: [
        "Managed on-site operations, structural execution, and materials management.",
        "Ensured project timelines were met according to architectural and structural layouts."
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
          💼 Working Experience
        </h2>
        
        {/* Timeline Line */}
        <div className="relative border-l border-teal-500/30 ml-4 md:ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] top-1.5 bg-teal-500 w-4 h-4 rounded-full border-4 border-slate-900 shadow-md shadow-teal-500/50"></span>
              
              {/* Experience Card */}
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                    <h4 className="text-md text-teal-400 font-semibold">{exp.company} <span className="text-xs text-slate-400 font-normal">· {exp.type}</span></h4>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <span className="text-sm text-slate-400 block">{exp.duration}</span>
                    <span className="text-xs text-slate-500 block">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
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