import React from 'react';
import { Landmark, CreditCard, LineChart, Rocket, Bitcoin, Scale, Gamepad2, Shield, UserCheck, Building } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/pagination';

export default function PracticeAreas() {
  const { t } = useLanguage();

  const practices = [
    {
      icon: Landmark,
      title: t('practice.banking'),
      description: t('practice.banking.desc'),
    },
    {
      icon: CreditCard,
      title: t('practice.payments'),
      description: t('practice.payments.desc'),
    },
    {
      icon: LineChart,
      title: t('practice.capital'),
      description: t('practice.capital.desc'),
    },
    {
      icon: Rocket,
      title: t('practice.fintech'),
      description: t('practice.fintech.desc'),
    },
    {
      icon: Bitcoin,
      title: t('practice.crypto'),
      description: t('practice.crypto.desc'),
    },
    {
      icon: Scale,
      title: t('practice.administrative'),
      description: t('practice.administrative.desc'),
    },
    {
      icon: Gamepad2,
      title: t('practice.gaming'),
      description: t('practice.gaming.desc'),
    },
    {
      icon: Shield,
      title: t('practice.data'),
      description: t('practice.data.desc'),
    },
    {
      icon: UserCheck,
      title: t('practice.consumer'),
      description: t('practice.consumer.desc'),
    },
    {
      icon: Building,
      title: t('practice.corporate'),
      description: t('practice.corporate.desc'),
    },
  ];

  return (
    <section id="areas-de-atuacao" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#010529] mb-2 relative inline-block">
            {t('practice.title')}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#369ACA]"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-8">
            {t('practice.subtitle')}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
          }}
          className="practice-areas-swiper !pb-8"
        >
          {[0, 1].map((pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {practices.slice(pageIndex * 5, (pageIndex + 1) * 5).map((practice, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-gray-200 hover:border-[#369ACA] transition-colors group bg-white hover:bg-gray-50 flex flex-col h-full"
                  >
                    <practice.icon className="h-8 w-8 text-[#369ACA] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-[#010529] mb-2">{practice.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{practice.description}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-bullet {
          width: 2rem;
          height: 4px;
          border-radius: 2px;
          margin: 0 4px;
          display: inline-block;
          background: #369ACA;
          opacity: 0.3;
          cursor: pointer;
          transition: all 0.3s;
        }
        .swiper-bullet-active {
          opacity: 1;
          background: #010529;
        }
      `}</style>
    </section>
  );
}