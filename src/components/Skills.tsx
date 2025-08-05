import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: 'Ön Uç',
    backend: 'Arka Uç',
    tools: 'Araçlar & DevOps',
    design: 'Tasarım'
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-purple-600',
    backend: 'from-green-500 to-teal-600',
    tools: 'from-orange-500 to-red-600',
    design: 'from-pink-500 to-rose-600'
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Yetenekler & Uzmanlıklar
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, title]) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-yellow-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${categoryColors[skill.category]} transition-all duration-1000`}
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