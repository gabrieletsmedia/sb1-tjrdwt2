import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const publications = [
  {
    id: 1,
    title: 'Canais de transmissão de crises bancárias',
    subtitle: 'Por Reinaldo Le Grazie e Pedro Eroles',
    source: 'Valor Econômico',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Valor.svg/1200px-Valor.svg.png',
    date: '26/04/2023',
    type: 'article',
  },
  {
    id: 2,
    title: 'Rotativo do cartão e parcelado sem juros: para onde caminhamos?',
    subtitle: 'Por Reinaldo Le Grazie e Pedro Eroles',
    source: 'Valor Econômico',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Valor.svg/1200px-Valor.svg.png',
    date: '01/09/2023',
    type: 'article',
  },
  {
    id: 3,
    title: 'A atualização do regime de resolução de instituições financeiras',
    subtitle: 'Por Daniel Lima e Pedro Eroles',
    source: 'Valor Econômico',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Valor.svg/1200px-Valor.svg.png',
    date: '23/02/2024',
    type: 'article',
  },
  {
    id: 4,
    title: 'Participação em Podcast Câmbio, Desligo',
    subtitle: 'Discussão sobre o mercado financeiro e regulação',
    source: 'YouTube',
    logo: null,
    icon: Youtube,
    date: '2024',
    type: 'podcast',
    externalLink: 'https://www.youtube.com/watch?v=oEFzjFOI_Z8',
  },
];

export default function PublicationsAndMedia() {
  const { t } = useLanguage();

  return (
    <section id="publicacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#010529] mb-4 relative inline-block">
            {t('publications.title')}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#369ACA]"></div>
          </h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            {t('publications.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {publications.map((pub) => (
            pub.type === 'article' ? (
              <Link
                key={pub.id}
                to={`/publication/${pub.id}`}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group relative"
              >
                <div className="p-6">
                  <span className="text-sm text-gray-500">{pub.date}</span>
                  <h3 className="text-xl font-semibold text-[#010529] mt-2 mb-2 group-hover:text-[#369ACA] transition">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-12">{pub.subtitle}</p>
                  <div className="flex items-center text-[#369ACA] font-medium absolute bottom-4 left-6">
                    {t('publications.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <img
                    src={pub.logo}
                    alt={pub.source}
                    className="h-8 object-contain absolute bottom-4 right-6"
                  />
                </div>
              </Link>
            ) : (
              <a
                key={pub.id}
                href={pub.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#369ACA]/10 p-4 rounded-full">
                      <pub.icon className="h-6 w-6 text-[#369ACA]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#010529] mb-2 group-hover:text-[#369ACA] transition">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pub.subtitle}</p>
                  <div className="flex items-center text-[#369ACA] font-medium">
                    {t('publications.watch')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
}