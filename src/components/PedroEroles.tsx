import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { LinkedinIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import 'swiper/css';

const highlights = [
  'https://letsmediahub.com.br/wp-content/uploads/2024/11/11-1.webp',
  'https://letsmediahub.com.br/wp-content/uploads/2024/11/22.webp',
  'https://letsmediahub.com.br/wp-content/uploads/2024/11/33.webp',
  'https://letsmediahub.com.br/wp-content/uploads/2024/11/44.webp',
  'https://letsmediahub.com.br/wp-content/uploads/2024/11/55.webp',
  'https://letsmediahub.com.br/wp-content/uploads/2024/11/66.webp',
];

export default function PedroEroles() {
  const { t } = useLanguage();

  return (
    <section id="equipe" className="py-20 bg-[#010529]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative lg:sticky lg:top-24">
            <a 
              href="https://www.linkedin.com/in/pedro-eroles-a18224151/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <img
                src="https://letsmediahub.com.br/wp-content/uploads/2024/11/https__img.migalhas.com_.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2022__SL__08__SL__02__SL__104248db-0b3e-4eb4-ba0c-ae54a4923249.jpg._PROC_CP65.jpg"
                alt="Pedro Eroles"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-[#010529]/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <LinkedinIcon className="h-12 w-12 text-[#369ACA]" />
              </div>
            </a>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-[#010529] font-bold text-4xl mb-1">5</div>
              <div className="text-gray-600">{t('team.books')}</div>
            </div>
          </div>

          <div className="text-white">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h2 className="text-4xl font-bold">Pedro Eroles</h2>
                <h3 className="text-[#369ACA] text-xl">{t('team.founder')}</h3>
              </div>
              <a 
                href="https://www.linkedin.com/in/pedro-eroles-a18224151/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#369ACA] p-3 rounded-lg hover:bg-[#369ACA]/80 transition-colors"
              >
                <LinkedinIcon className="h-6 w-6 text-white" />
              </a>
            </div>
            
            <div className="prose prose-invert">
              <p className="text-gray-300 leading-relaxed">
                <strong>{t('team.bio.education')}</strong>
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed">
                <strong>{t('team.bio.experience')}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t('team.highlights')}</h2>
          <div className="bg-white py-12 rounded-lg">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="highlights-swiper"
            >
              {highlights.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center px-4">
                    <img
                      src={logo}
                      alt={`${t('team.highlight')} ${index + 1}`}
                      className="w-auto h-[140px] object-contain transform hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <style>{`
          .highlights-swiper {
            padding: 0 40px;
          }
          .highlights-swiper .swiper-slide {
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    </section>
  );
}