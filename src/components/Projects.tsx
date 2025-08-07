import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [highlightedProjects, setHighlightedProjects] = useState<string[]>([]);

  useEffect(() => {
    // Check for highlighted projects from localStorage
    const checkHighlightedProjects = () => {
      const highlightedProjectsData = localStorage.getItem('highlightedProjects');
      
      if (highlightedProjectsData) {
        try {
          const projects = JSON.parse(highlightedProjectsData);
          setHighlightedProjects(projects);
        } catch (error) {
          console.error('Error parsing highlighted projects:', error);
        }
      } else {
        setHighlightedProjects([]);
      }
    };

    // Check on mount
    checkHighlightedProjects();

    // Listen for storage events (when localStorage changes)
    const handleStorageChange = () => {
      checkHighlightedProjects();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('storage', handleStorageChange); // For same-tab updates

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Öne Çıkan Projeler
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const isHighlighted = highlightedProjects.includes(project.title);
              
              return (
                <div 
                  key={project.id} 
                  className={`bg-white dark:bg-slate-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl border ${
                    isHighlighted 
                      ? 'border-purple-500 shadow-purple-500/50 animate-pulse' 
                      : 'border-gray-200 dark:border-transparent'
                  }`}
                >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-semibold"
                      >
                        <ExternalLink size={16} />
                        <span>Canlı Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border-2 border-gray-300 dark:border-slate-500 text-gray-600 dark:text-slate-300 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Kod</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;