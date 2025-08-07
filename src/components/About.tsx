import React from 'react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-premium transition-colors duration-300">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-navy-800 dark:to-navy-700 p-8 rounded-2xl border border-gray-200 dark:border-gold-500/20 shadow-2xl transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-premium transition-colors duration-300">
                  Kişisel Bilgiler
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-premium-200">
                  <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gold-500/20">
                    <span className="font-medium text-gold-600 dark:text-gold-400">İsim:</span>
                    <span className="font-premium">{personalInfo.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gold-500/20">
                    <span className="font-medium text-gold-600 dark:text-gold-400">E-posta:</span>
                    <span className="font-premium">{personalInfo.email}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gold-500/20">
                    <span className="font-medium text-gold-600 dark:text-gold-400">Telefon:</span>
                    <span className="font-premium">{personalInfo.phone}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gold-600 dark:text-gold-400">Konum:</span>
                    <span className="font-premium">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-navy-800 dark:to-navy-700 p-8 rounded-2xl border border-gray-200 dark:border-gold-500/20 shadow-2xl transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-premium transition-colors duration-300">
                  Profesyonel Özet
                </h3>
                <p className="text-gray-600 dark:text-premium-200 leading-relaxed font-premium text-lg transition-colors duration-300">
                  Modern web teknolojilerinde uzmanlığa sahip tutkulu bir full-stack geliştiriciyim. 
                  Yenilikçi çözümler üretmeyi ve yeni teknolojiler öğrenmeyi seviyorum. 
                  Kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gold-500/20">
                  <h4 className="text-lg font-semibold text-gold-600 dark:text-gold-400 mb-3 font-premium">
                    Uzmanlık Alanları
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-sm font-medium border border-gold-500/20">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-sm font-medium border border-gold-500/20">
                      Backend Development
                    </span>
                    <span className="px-3 py-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-sm font-medium border border-gold-500/20">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-sm font-medium border border-gold-500/20">
                      Database Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;