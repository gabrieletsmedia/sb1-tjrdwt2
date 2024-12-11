import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contato" className="bg-[#010529] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <div>
            <img 
              src="https://letsmediahub.com.br/wp-content/uploads/2024/11/logo_branco-2.png" 
              alt="Eroles Advogados" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <a 
              href="https://www.linkedin.com/company/eroles-advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#369ACA] hover:text-white transition-colors mt-6"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              {t('footer.follow')}
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#369ACA] mt-1" />
                <div className="text-gray-400 text-sm">
                  Avenida Juscelino Kubitschek, 1327<br />
                  4º andar - Conjunto 41<br />
                  CEP 04543-011 - São Paulo - SP
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#369ACA]" />
                <span className="text-gray-400 text-sm">+55 11 94301 1841</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#369ACA]" />
                <span className="text-gray-400 text-sm">contato@erolesadvogados.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.talk')}</h3>
            <p className="text-gray-400 text-sm mb-6">
              {t('footer.talk.desc')}
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5511943011841&text=Olá,%20vim%20pelo%20site%20Eroles%20Advogados%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#369ACA] text-white px-6 py-3 rounded-md hover:bg-[#369ACA]/90 transition"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t('footer.specialist')}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Eroles Advogados. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}