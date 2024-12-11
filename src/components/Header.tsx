import React, { useState } from 'react';
import { Menu, X, Phone, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Height of the fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function NavLinks({ mobile = false, onClick }: { mobile?: boolean; onClick: (id: string) => void }) {
  const { t } = useLanguage();
  const links = [
    { id: 'sobre', label: t('nav.about') },
    { id: 'areas-de-atuacao', label: t('nav.practice') },
    { id: 'equipe', label: t('nav.team') },
    { id: 'publicacoes', label: t('nav.publications') },
  ];

  const baseStyles = 'text-white hover:text-[#369ACA] transition-colors duration-200';
  const mobileStyles = 'block py-2';
  const desktopStyles = '';

  return (
    <div className={mobile ? 'flex flex-col' : 'flex space-x-8'}>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onClick(link.id)}
          className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed w-full bg-[#010529]/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="https://www.linkedin.com/company/eroles-advogados"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img 
              src="https://letsmediahub.com.br/wp-content/uploads/2024/11/logo_branco-2.png" 
              alt="Eroles Advogados" 
              className="h-12 w-auto group-hover:opacity-80 transition-opacity"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onClick={(id) => {
              scrollToSection(id);
              setIsOpen(false);
            }} />
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <a 
                href="https://www.linkedin.com/company/eroles-advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#369ACA] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5511943011841&text=Olá,%20vim%20pelo%20site%20Eroles%20Advogados%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#369ACA] text-white px-6 py-2 rounded-md hover:bg-[#369ACA]/90 transition flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                {t('nav.contact')}
              </a>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <NavLinks 
              mobile 
              onClick={(id) => {
                scrollToSection(id);
                setIsOpen(false);
              }} 
            />
          </div>
        )}
      </nav>
    </header>
  );
}