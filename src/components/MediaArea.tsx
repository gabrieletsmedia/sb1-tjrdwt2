import React from 'react';
import { Mic, Video, Newspaper, Radio } from 'lucide-react';

const mediaAppearances = [
  {
    type: 'podcast',
    title: 'Futuro do Direito Fintech',
    platform: 'Podcast Inovação Jurídica',
    date: '10/03/2024',
    link: '#',
    icon: Mic,
  },
  {
    type: 'interview',
    title: 'Regulações Bancárias na Era Digital',
    platform: 'Rede de Notícias Financeiras',
    date: '15/02/2024',
    link: '#',
    icon: Video,
  },
  {
    type: 'article',
    title: 'Opinião: Leis de Criptomoedas',
    platform: 'Valor Econômico',
    date: '20/01/2024',
    link: '#',
    icon: Newspaper,
  },
  {
    type: 'radio',
    title: 'Futuro do Banking Digital',
    platform: 'Rádio CBN',
    date: '05/01/2024',
    link: '#',
    icon: Radio,
  },
];

export default function MediaArea() {
  return (
    <section id="media" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#010529] mb-4 text-center">Mídia</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore os insights e a expertise de Pedro Eroles através de diversos canais de mídia
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaAppearances.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-[#010529] transition-all duration-300">
                <div className="bg-[#369ACA]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#369ACA]">
                  <item.icon className="h-8 w-8 text-[#369ACA] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#010529] mb-2 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2 group-hover:text-gray-300">{item.platform}</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-400">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}