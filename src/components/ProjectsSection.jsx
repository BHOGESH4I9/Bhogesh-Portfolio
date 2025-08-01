import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import LiveLocationTracker from '../assets/LiveLocationTracker.png';
import ECommerce from '../assets/ECommerce.png';
import ChatApp from '../assets/ChatApp.png';
import TemplateEditor from '../assets/TemplateEditor.png';
import EmployeeManagement from '../assets/EmployeeManagement.png';
import DataStrucute from '../assets/LinearDataStructre.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shopease E-Commerce Platform",
      image : ECommerce,
      description:
        "Engineered a scalable e-commerce app with React.js (Vite) frontend and Spring Boot backend, handling user authentication, product listing, and checkout processes. Integrated Razor pay for real-time payments and deployed using Docker.",
      tech: [
        "Spring Boot",
        "Razor pay API",
        "Docker",
        "React.js",
        "REST APIs",
        "MySQL",
      ],
      github: "https://github.com/BHOGESH4I9/E-Commerce",
      live: "https://e-commerce-gamma-ruddy-69.vercel.app/",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
    },
    {
      title: "Employee Live Tracker",
      image: LiveLocationTracker,
      description:
        "Built a real-time location tracker using React.js and Firebase Realtime DB. Displays moving user/device locations on a live-updating map with role-based access and session tracking.",
      tech: [
        "React.js",
        "Firebase",
        "Leaflet",
        "OpenCage API",
        "BootStrap",
        "JavaScript",
      ],
      github: "https://github.com/BHOGESH4I9/Live-Location-Tracker",
      live: "https://live-location-tracker-ten.vercel.app/auth",
      gradient: "from-blue-400 via-sky-500 to-cyan-600",
    },
    {
      title: "Chat Application",
      image: ChatApp,
      description:
        "Built a responsive real-time chat application using React.js and Firebase Firestore. Supports live messaging, authentication, chat rooms, and message history sync.",
      tech: ["React.js", "Firebase Firestore", "BootStrap", "React Router"],
      github: "https://github.com/BHOGESH4I9/Chat-Application",
      live: "https://chat-application-flame-three.vercel.app",
      gradient: "from-purple-400 via-indigo-500 to-blue-600",
    },
    {
      title: "Template Editor",
      image: TemplateEditor,
      description:
        "A powerful React-based Template Editor using Tiptap, allowing users to select templates, fill dynamic fields, and live-preview rich content. Features include image upload, tables, task lists, styling options, PDF export, and customizable formatting via an interactive toolbar.",
      tech: ["React.js", "BootStrap", "Local Storage", "React Tiptap Editor"],
      github: "https://github.com/BHOGESH4I9/Template-Editor",
      live: "https://template-editor-git-main-bhogesh-vuras-projects.vercel.app/",
      gradient: "from-lime-400 via-green-500 to-emerald-600",
    },
    {
      title: "Employee Management System",
      image: EmployeeManagement,
      description:
        "Full-stack task management application with user authentication, project collaboration, and real-time updates. Features drag-and-drop functionality and team collaboration tools.",
      tech: ["Java", "JFRAME", "JDBC", "Hibernate", "MySQL"],
      github: "https://github.com/BHOGESH4I9/Employee_Management_System",
      live: "#",
      gradient: "from-fuchsia-400 via-pink-500 to-rose-600",
    },
    {
      title: "Linear Data-Structure Implementation",
      image: DataStrucute,
      description:
        "Full-stack task management application with user authentication, project collaboration, and real-time updates. Features drag-and-drop functionality and team collaboration tools.",
      tech: ["Java", "JFRAME"],
      github: "https://github.com/BHOGESH4I9/Linear-Data-Structure-Implementation-using-Java",
      live: "#",
      gradient: "from-fuchsia-400 via-blue-500 to-rose-600",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-mono">
          <span className="text-cyan-400">&lt;</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div
                className={`h-48 relative overflow-hidden group`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/4 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
