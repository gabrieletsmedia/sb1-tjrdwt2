import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const publications = [
  {
    id: 1,
    title: 'O Futuro do Banking Digital no Brasil',
    subtitle: 'Desafios e Oportunidades Regulatórias',
    source: 'Valor Econômico',
    logo: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?auto=format&fit=crop&q=80&w=100',
    date: '15/03/2024',
  },
  {
    id: 2,
    title: 'Regulamentação de Criptomoedas',
    subtitle: 'Uma Perspectiva Brasileira',
    source: 'Estadão',
    logo: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?auto=format&fit=crop&q=80&w=100',
    date: '28/02/2024',
  },
];

export default function Publications() {
  return (
    <section id="publicacoes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#010529] mb-4 text-center">Publicações</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Análises e insights de Pedro Eroles sobre os últimos desenvolvimentos em direito financeiro
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Link
              key={pub.id}
              to={`/publication/${pub.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={pub.logo}
                    alt={pub.source}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="ml-2 text-gray-600">{pub.source}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#010529] mb-2 group-hover:text-[#369ACA] transition">
                  {pub.title}
                </h3>
                <p className="text-gray-600 mb-4">{pub.subtitle}</p>
                <div className="flex items-center text-[#369ACA] font-medium">
                  Leia Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}