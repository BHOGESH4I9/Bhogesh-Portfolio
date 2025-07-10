import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 font-mono">
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Contact</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30">
          <p className="text-xl text-gray-300 font-mono">
            <span className="text-cyan-400">$</span> <span className="text-emerald-400">echo</span> <span className="text-yellow-400">"Ready to collaborate on your next project!"</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { href: "https://github.com/BHOGESH4I9", icon: Github, label: "GitHub", gradient: "from-purple-500/20 to-pink-500/20", hoverColor: "hover:shadow-purple-400/25" },
            { href: "https://www.linkedin.com/in/bhogesh-vura-40588a247/", icon: Linkedin, label: "LinkedIn", gradient: "from-blue-500/20 to-cyan-500/20", hoverColor: "hover:shadow-blue-400/25" },
            { href: "mailto:vurabhogesh@gmail.com", icon: Mail, label: "Email", gradient: "from-emerald-500/20 to-teal-500/20", hoverColor: "hover:shadow-emerald-400/25" }
          ].map(({ href, icon: Icon, label, gradient, hoverColor }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center p-8 bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl ${hoverColor}`}
            >
              <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400" />
              <span className="text-lg font-semibold font-mono">{label}</span>
            </a>
          ))}
        </div>
        
        <div className="text-center text-gray-400 font-mono">
          <p>
            <span className="text-cyan-400">©</span> 2024 Bhogesh Vura. 
            <span className="text-purple-400 mx-2">•</span>
            Built with <span className="text-red-400 animate-pulse">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;