import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800 dark:bg-slate-800 light:bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-4 transition-colors duration-300">
            Öne Çıkan Projeler
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-700 dark:bg-slate-700 light:bg-white rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl border border-gray-200 light:border-gray-200 dark:border-transparent">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-3 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-300 dark:text-slate-300 light:text-gray-600 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
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
                        className="flex items-center space-x-2 border-2 border-slate-500 dark:border-slate-500 light:border-gray-300 text-slate-300 dark:text-slate-300 light:text-gray-600 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Kod</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;