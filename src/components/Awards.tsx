import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const awards = [
  {
    id: 1,
    name: 'Melhor Advogado Bancário 2023',
    logo: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Excelência em Direito Financeiro',
    logo: 'https://images.unsplash.com/photo-1569937372550-3c24937d14c4?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Prática Jurídica Inovadora',
    logo: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Awards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#010529] mb-12">Reconhecimentos & Prêmios</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {awards.map((award) => (
            <SwiperSlide key={award.id}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={award.logo}
                  alt={award.name}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#010529]">{award.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}