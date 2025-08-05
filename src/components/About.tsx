import React from 'react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Kişisel Bilgiler
                </h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between">
                    <span className="font-medium">İsim:</span>
                    <span>{personalInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">E-posta:</span>
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Telefon:</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Konum:</span>
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ne Yapıyorum
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Her zaman yeni zorluklara açığım ve heyecan verici projelerde işbirliği yapmaktan keyif alırım. 
                  Birlikte harika bir şeyler inşa edelim!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;