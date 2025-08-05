// .env dosyanıza VITE_FORMSPREE_FORM_ID=your-formspree-form-id ekleyin
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useForm, ValidationError } from '@formspree/react';

// Formspree form ID'sini .env dosyasından al
const formspreeUrl = import.meta.env.VITE_FORMSPREE_FORM_ID || '';
const formspreeFormId = formspreeUrl.includes('formspree.io/f/') 
  ? formspreeUrl.split('formspree.io/f/')[1] 
  : formspreeUrl;

const Contact: React.FC = () => {
  // Formspree entegrasyonu - sadece form ID varsa kullan
  const [state, handleSubmit] = useForm(formspreeFormId || 'x'); // Geçici ID ile başlat
  
  const isSubmitting = state.submitting;
  const hasSucceeded = state.succeeded;
  const hasFormId = !!formspreeFormId && formspreeFormId !== 'your-formspree-form-id' && formspreeFormId.length > 5;

  // Form ID yoksa form gönderimini devre dışı bırak
  const handleFormSubmit = (e: React.FormEvent) => {
    if (!hasFormId) {
      e.preventDefault();
      alert('Formspree form ID yapılandırılmamış. Lütfen .env dosyasına VITE_FORMSPREE_FORM_ID ekleyin.');
      return;
    }
    handleSubmit(e);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            İletişime Geç
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Hadi Bağlantı Kuralım
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Her zaman yeni fırsatlar ve heyecan verici projeler hakkında bilgi almakla ilgileniyorum. 
                  İster bir sorunuz olsun, ister işbirliği yapmak isteyin, ister sadece merhaba demek isteyin, 
                  bana ulaşmaktan çekinmeyin!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">E-posta</h4>
                    <p className="text-slate-300">{personalInfo.email}</p>
                    {personalInfo.secondaryEmail && (
                      <p className="text-slate-300">{personalInfo.secondaryEmail}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Telefon</h4>
                    <p className="text-slate-300">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Konum</h4>
                    <p className="text-slate-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-700 p-8 rounded-2xl">
              {hasSucceeded ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <p className="font-semibold">Teşekkürler!</p>
                  <p>Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağım.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                      placeholder="Adınızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    defaultValue=""
                    required
                    className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                    placeholder="Ne hakkında?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    defaultValue=""
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 resize-none"
                    placeholder="Projeniz hakkında bilgi verin veya sadece merhaba deyin!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}</span>
                </button>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;