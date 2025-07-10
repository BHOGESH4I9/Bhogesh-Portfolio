import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Stream Flex-App",
      description: "A fully responsive video streaming platform using React.js, Vite, and Tailwind CSS, achieving <1s load time on most views. Implemented user authentication using Firebase, enabling secure signup/login and real-time session tracking.",
      tech: ["React.js", "Vite", "Firebase", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Git", "Vercel"],
      github: "https://github.com/BHOGESH4I9/StreamFlex-App",
      live: "https://netflix-clone-app-dusky-psi.vercel.app/login",
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
      title: "Sales Savvy – E-Commerce Platform",
      description: "Engineered a scalable e-commerce app with React.js (Vite) frontend and Spring Boot backend, handling user authentication, product listing, and checkout processes. Integrated Razor pay for real-time payments and deployed using Docker.",
      tech: ["Spring Boot", "Razor pay API", "Docker", "React.js", "REST APIs", "MySQL"],
      github: "https://github.com/BHOGESH4I9/Sales-Savvy",
      live: "#",
      gradient: "from-emerald-400 via-green-500 to-teal-600"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern and responsive portfolio website built with React.js featuring smooth animations, interactive UI components, and optimized performance. Showcases projects, skills, and professional experience.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
      github: "https://github.com/BHOGESH4I9/Portfolio",
      live: "https://bhogesh4i9.github.io/Portfolio/",
      gradient: "from-violet-400 via-purple-500 to-indigo-600"
    },
    {
      title: "Weather Application",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features include current weather, 7-day forecast, and weather alerts.",
      tech: ["React", "Weather API", "Geolocation", "Chart.js", "CSS3"],
      github: "https://github.com/BHOGESH4I9",
      live: "#",
      gradient: "from-sky-400 via-cyan-500 to-blue-600"
    },
    {
      title: "Employee Management System",
      description: "Full-stack task management application with user authentication, project collaboration, and real-time updates. Features drag-and-drop functionality and team collaboration tools.",
      tech: ["Java", "JFRAME", "JDBC", "Hibernate", "MySQL"],
      github: "https://github.com/BHOGESH4I9",
      live: "#",
      gradient: "from-fuchsia-400 via-pink-500 to-rose-600"
    },
    {
      title: "Linear Data-Structure Implementation",
      description: "Full-stack task management application with user authentication, project collaboration, and real-time updates. Features drag-and-drop functionality and team collaboration tools.",
      tech: ["Java", "JFRAME"],
      github: "https://github.com/BHOGESH4I9",
      live: "#",
      gradient: "from-fuchsia-400 via-blue-500 to-rose-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-mono">
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/70 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-all duration-300 border border-gray-600/30 hover:border-cyan-400/50"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/70 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-all duration-300 border border-gray-600/30 hover:border-cyan-400/50"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <Code className="w-8 h-8 text-white/80" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-xs font-mono hover:shadow-sm hover:shadow-cyan-400/25 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;