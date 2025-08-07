import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
  relatedProjects: string[];
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ 
  isOpen, 
  onClose, 
  skillName, 
  relatedProjects 
}) => {
  if (!isOpen) return null;

  const handleViewProjects = () => {
    // Navigate to projects section and highlight related projects
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerHeight = 100;
      const elementPosition = projectsSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Set highlighted skill in localStorage for Projects component to read
      localStorage.setItem('highlightedSkill', skillName);
      localStorage.setItem('highlightedProjects', JSON.stringify(relatedProjects));
      
      // Clear highlight after 3 seconds
      setTimeout(() => {
        localStorage.removeItem('highlightedSkill');
        localStorage.removeItem('highlightedProjects');
        // Force re-render of Projects component
        window.dispatchEvent(new Event('storage'));
      }, 3000);
      
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-navy-800 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gold-500/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {skillName}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Kullanıldığı Projeler
          </h4>
          <div className="space-y-3">
            {relatedProjects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-navy-700 rounded-xl px-4 py-3 border border-gray-200 dark:border-navy-600"
              >
                <p className="text-gray-900 dark:text-white font-medium">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={handleViewProjects}
            className="flex-1 bg-gold-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gold-600 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <ExternalLink size={20} />
            <span>Projeleri Gör</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-gray-300 dark:border-navy-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
