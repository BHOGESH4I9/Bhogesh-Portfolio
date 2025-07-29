import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal, Coffee } from 'lucide-react';

const HeroSection = ({ isLoaded, typedText }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10 max-w-4xl">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold font-mono bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bhogesh Vura
            </h1>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 h-16 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-mono text-gray-300 mr-2">$</span>
            <span className="text-2xl md:text-3xl font-mono text-emerald-400">who am i</span>
            <span className="text-2xl md:text-3xl font-mono text-gray-300 mx-2">|</span>
            <span className="text-2xl md:text-3xl font-mono bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          {/* <p className="text-lg mb-4 text-gray-400 font-mono">
            <span className="text-cyan-400">[</span>
            Hyderabad, India
            <span className="text-cyan-400">]</span>
            <span className="text-purple-400 mx-2">•</span>
            <span className="text-cyan-400">[</span>
            +91 9493998241
            <span className="text-cyan-400">]</span>
          </p> */}
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { href: "https://github.com/BHOGESH4I9", icon: Github, color: "hover:shadow-purple-400/50" },
              { href: "https://www.linkedin.com/in/bhogesh-vura-40588a247/", icon: Linkedin, color: "hover:shadow-blue-400/50" },
              { href: "mailto:vurabhogesh@gmail.com", icon: Mail, color: "hover:shadow-cyan-400/50" }
            ].map(({ href, icon: Icon, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg ${color}`}
              >
                <Icon className="w-6 h-6 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a
            href="#about"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 font-semibold"
          >
            <Coffee className="mr-2 w-5 h-5 group-hover:animate-bounce" />
            Let's Build Something Amazing
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;