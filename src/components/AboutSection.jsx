import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-mono">
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">About</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-cyan-400/30 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <span className="text-cyan-400 font-mono">const</span> <span className="text-blue-400">developer</span> = <span className="text-emerald-400">&#123;</span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed ml-4">
                <span className="text-purple-400">expertise</span>: <span className="text-yellow-400">"Full Stack Development"</span>,<br/>
                <span className="text-purple-400">passion</span>: <span className="text-yellow-400">"Creating scalable web solutions"</span>,<br/>
                <span className="text-purple-400">focus</span>: <span className="text-yellow-400">"Clean code & performance"</span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-emerald-400">&#125;</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Proficient in React.js, Spring Boot, and JavaScript (ES6+), with a strong focus on performance optimization, 
              clean code architecture, and version control using Git. Adept at collaborating in agile environments to 
              deliver production-ready software.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['React.js', 'Spring Boot', 'JavaScript', 'Java', 'Firebase', 'MySQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full animate-pulse border border-cyan-400/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">1+</div>
                <div className="text-xl font-mono text-gray-300">Years of Experience</div>
                <div className="text-sm text-cyan-400 mt-2">Building Digital Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;