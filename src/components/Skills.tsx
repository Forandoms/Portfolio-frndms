import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
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

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 dark:from-navy-800 dark:via-navy-900 dark:to-navy-800 light:from-gray-50 light:via-white light:to-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-4 font-premium transition-colors duration-300">
            Yeteneklerim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, title]) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-8 text-center font-premium transition-colors duration-300">
                  {title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="bg-gradient-to-br from-navy-700 to-navy-800 dark:from-navy-700 dark:to-navy-800 light:from-white light:to-gray-50 p-6 rounded-2xl border border-gold-500/20 dark:border-gold-500/20 light:border-gray-200 shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 font-premium transition-colors duration-300">{skill.name}</h3>
                        <span className="text-gold-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-navy-600 dark:bg-navy-600 light:bg-gray-200 rounded-full h-3 shadow-inner">
                        <div 
                          className={`bg-gradient-to-r ${categoryColors[skill.category]} h-3 rounded-full shadow-lg transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;