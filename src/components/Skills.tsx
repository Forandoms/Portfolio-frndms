import React, { useState } from 'react';
import { skills } from '../data/portfolio';
import ProjectsModal from './ProjectsModal';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<{name: string, projects: string[]} | null>(null);

  const skillCategories = {
    frontend: 'Front-end',
    backend: 'Back-end',
    tools: 'Araçlar & DevOps',
    design: 'Tasarım'
  };

  const categoryColors = {
    frontend: 'from-gold-500 to-gold-600',
    backend: 'from-blue-500 to-blue-600',
    tools: 'from-green-500 to-green-600',
    design: 'from-purple-500 to-purple-600'
  };

  // Skill to project mapping
  const skillProjectMap: { [key: string]: string[] } = {
    'React': ['E-Ticaret Platformu', 'Yapay Zeka Sohbet Uygulaması'],
    'Node.js': ['E-Ticaret Platformu'],
    'TypeScript': ['Görev Yönetim Uygulaması'],
    'Next.js': ['Görev Yönetim Uygulaması'],
    'Python': ['Yapay Zeka Sohbet Uygulaması'],
    'PostgreSQL': ['E-Ticaret Platformu'],
    'Tailwind CSS': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması'],
    'Vercel': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması'],
    'Netlify': ['E-Ticaret Platformu'],
    'Git': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması', 'Yapay Zeka Sohbet Uygulaması'],
    'UI/UX Design': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması'],
    'Responsive Design': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması'],
    'JavaScript': ['E-Ticaret Platformu', 'Yapay Zeka Sohbet Uygulaması'],
    'HTML/CSS': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması'],
    'Express.js': ['E-Ticaret Platformu'],
    'Django': ['Yapay Zeka Sohbet Uygulaması'],
    'MongoDB': ['Görev Yönetim Uygulaması'],
    'REST API': ['E-Ticaret Platformu', 'Yapay Zeka Sohbet Uygulaması'],
    'GraphQL': ['Görev Yönetim Uygulaması'],
    'Docker': ['Yapay Zeka Sohbet Uygulaması'],
    'AWS': ['Yapay Zeka Sohbet Uygulaması'],
    'Figma': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması'],
    'Wireframing': ['E-Ticaret Platformu', 'Görev Yönetim Uygulaması']
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-navy-800 dark:via-navy-900 dark:to-navy-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-premium transition-colors duration-300">
            Yeteneklerim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, title]) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center font-premium transition-colors duration-300">
                  {title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => {
                    const relatedProjects = skillProjectMap[skill.name] || [];
                    const isHovered = hoveredSkill === skill.name;
                    
                    return (
                      <div 
                        key={skill.name} 
                        className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-navy-700 dark:to-navy-800 p-6 rounded-2xl border border-gray-200 dark:border-gold-500/20 shadow-2xl transition-all duration-500 animate-fade-in-up cursor-pointer group ${
                          isHovered 
                            ? 'scale-105 shadow-2xl shadow-gold-500/20 border-gold-500/40' 
                            : 'hover:shadow-gold-500/10 hover:scale-102'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => {
                          if (relatedProjects.length > 0) {
                            setSelectedSkill({ name: skill.name, projects: relatedProjects });
                            setModalOpen(true);
                          }
                        }}
                      >
                        {/* Main skill content */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white font-premium transition-colors duration-300">{skill.name}</h3>
                          <span className="text-gold-600 dark:text-gold-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-navy-600 rounded-full h-3 shadow-inner">
                          <div 
                            className={`bg-gradient-to-r ${categoryColors[skill.category]} h-3 rounded-full shadow-lg transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>

                        {/* Click indicator */}
                        {relatedProjects.length > 0 && (
                          <div className="absolute top-2 right-2">
                            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Projects Modal */}
      {selectedSkill && (
        <ProjectsModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedSkill(null);
          }}
          skillName={selectedSkill.name}
          relatedProjects={selectedSkill.projects}
        />
      )}
    </section>
  );
};

export default Skills;