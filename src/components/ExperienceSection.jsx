import React from 'react';
import { Code, Terminal, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const experience = [
    {
      title: "React Intern",
      company: "Pranathi Software Services",
      period: "June 2025 – Present",
      description: "Developed responsive user interface components using React.js, which increased session time by 25% and improved engagement. Connected the frontend to Firebase and REST APIs, reducing data load time by 40% and supporting real-time updates.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Java Full Stack Intern",
      company: "KodNest",
      period: "July 2024 – December 2024",
      description: "Developed RESTful APIs using Spring Boot, enabling seamless data exchange for 3 full-stack applications and reducing API response times by 25%. Built interactive and responsive front-end interfaces using React.js, JavaScript (ES6+), HTML, and CSS.",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      period: "2023 – Present",
      description: "Developed multiple full-stack applications including e-commerce platforms, streaming applications, and portfolio websites. Worked with modern technologies like React.js, Spring Boot, Firebase, and various databases to create scalable and responsive web applications.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-mono">
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.title}
              className="group p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gradient-to-r from-gray-700/50 to-gray-600/50 px-3 py-1 rounded-full mt-2 md:mt-0 border border-gray-500/30 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;