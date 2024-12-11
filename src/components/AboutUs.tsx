import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold text-[#010529] sticky top-24 ml-auto">{t('about.title')}</h2>
          </div>
          
          <div className="lg:col-span-8 text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              <strong>{t('about.p1')}</strong>
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              <strong>{t('about.p3')}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}