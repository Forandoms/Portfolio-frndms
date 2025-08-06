import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-premium">
            Yeteneklerim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-gradient-to-br from-navy-700 to-navy-800 p-6 rounded-2xl border border-gold-500/20 shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-premium">{skill.name}</h3>
                  <span className="text-gold-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-navy-600 rounded-full h-3 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-gold-500 to-gold-600 h-3 rounded-full shadow-lg transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-4">
                  <span className="text-premium-200 text-sm font-medium capitalize">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;