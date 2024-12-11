import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#010529]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Entre em Contato</h2>
          <p className="text-gray-300 mb-12">
            Entre em contato com nossa equipe jurídica especializada para discutir suas necessidades em direito financeiro e bancário.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#369ACA] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Localização</h3>
                <p className="text-gray-300">
                  Avenida Juscelino Kubitschek, 1327<br />
                  4º andar - Conjunto 41<br />
                  CEP 04543-011 - São Paulo - SP
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#369ACA] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Telefone</h3>
                <p className="text-gray-300">+55 11 94301 1841</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#369ACA] mt-1" />
              <div>
                <h3 className="text-white font-semibold">E-mail</h3>
                <p className="text-gray-300">contato@erolesadvogados.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-[#369ACA] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Horário de Funcionamento</h3>
                <p className="text-gray-300">Segunda - Sexta: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}