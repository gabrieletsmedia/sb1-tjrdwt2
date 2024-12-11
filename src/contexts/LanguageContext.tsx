import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.practice': 'Áreas de Atuação',
    'nav.team': 'Equipe',
    'nav.publications': 'Publicações',
    'nav.contact': 'Contato',

    // Hero
    'hero.title': 'Navegando o Futuro do\nDireito Financeiro',
    'hero.subtitle': 'Consultoria jurídica especializada para inovadores em fintech e instituições financeiras em um cenário digital em evolução.',

    // About
    'about.title': 'Quem Somos',
    'about.p1': 'Eroles Advogados é um escritório boutique altamente especializado em serviços jurídicos para o setor financeiro, de pagamentos e fintechs em geral.',
    'about.p2': 'Nosso time possui mais de 15 anos de experiência com esses setores. Nossa presença estabelecida no Brasil atende nossos diversos clientes ao redor do país e no exterior, atuando em conjunto com bancos, infraestruturas de mercado, instituições de pagamento, arranjos de pagamento, exchanges de criptoativos e outras entidades reguladas.',
    'about.p3': 'Oferecemos um serviço personalizado e especializado, além de uma abordagem abrangente para nossos clientes. Temos a equipe e a experiência necessárias para estruturar todos os tipos de negócios do setor financeiro, de pagamentos e fintechs, com o apoio dos principais contatos do setor e conhecimento amplo do mercado.',

    // Practice Areas
    'practice.title': 'Áreas de Atuação',
    'practice.subtitle': 'Expertise jurídica especializada na intersecção entre finanças, tecnologia e regulação',
    'practice.banking': 'Direito Bancário',
    'practice.banking.desc': 'Assessoria em regulamentação do CMN e Banco Central, análise de estruturas financeiras e processos de autorização para instituições financeiras.',
    'practice.payments': 'Pagamentos',
    'practice.payments.desc': 'Assessoria completa em regulamentação de pagamentos, estruturação de autorizações para instituições e arranjos de pagamento junto ao Banco Central.',
    'practice.capital': 'Mercado de Capitais',
    'practice.capital.desc': 'Consultoria especializada em regulamentação do mercado de capitais e normas da CVM.',
    'practice.fintech': 'Fintechs',
    'practice.fintech.desc': 'Suporte integral para FinTechs e startups na estruturação de modelos de negócios e produtos financeiros.',
    'practice.crypto': 'Criptoativos',
    'practice.crypto.desc': 'Assessoria na estruturação de produtos e conformidade regulatória para criptoativos e ativos digitais.',
    'practice.administrative': 'Processos Administrativos',
    'practice.administrative.desc': 'Condução de processos junto ao Banco Central, CVM e Conselho de Recursos do Sistema Financeiro Nacional.',
    'practice.gaming': 'Jogos e Apostas',
    'practice.gaming.desc': 'Consultoria em conformidade regulatória e estruturação de modelos de negócios no setor de jogos e apostas.',
    'practice.data': 'Proteção de Dados',
    'practice.data.desc': 'Assessoria em LGPD e regulamentação da ANPD, garantindo conformidade e segurança.',
    'practice.consumer': 'Direito do Consumidor',
    'practice.consumer.desc': 'Consultoria em normas do Sistema Nacional de Defesa do Consumidor.',
    'practice.corporate': 'Direito Societário',
    'practice.corporate.desc': 'Assessoria em questões societárias, constituição de empresas e documentação legal.',

    // Team
    'team.founder': 'Sócio Fundador',
    'team.books': 'Livros Publicados',
    'team.highlights': 'Destaques',
    'team.highlight': 'Destaque',
    'team.bio.education': 'Doutor em Direito pela USP, Mestre em Direito pela USP, Graduado em Direito pela USP, Visiting Scholar pela Universidade de Edimburgo - Reino Unido, Consultor da Revista da Procuradoria-Geral do Banco Central do Brasil. Ranqueado como um dos melhores advogados de Banking e FinTechs do Brasil pela Chambers FinTech, Legal 500, Análise Advocacia, Latin Lawyer, Leaders League, dentre outros.',
    'team.bio.experience': 'Pedro atuou como sócio da área Bancária, Financeira, de Pagamentos e FinTechs de grandes escritórios, como CMS, Mattos Filho e TozziniFreire. Pedro é também coordenador de diversos livros sobre regulação financeira.',

    // Publications
    'publications.title': 'Publicações e Mídia',
    'publications.subtitle': 'Análises, insights e aparições de Pedro Eroles nos principais veículos de comunicação',
    'publications.readMore': 'Leia Mais',
    'publications.watch': 'Assistir',

    // Footer
    'footer.description': 'Escritório boutique especializado em direito financeiro, bancário e fintech, oferecendo soluções jurídicas inovadoras para o setor financeiro.',
    'footer.follow': 'Siga-nos no LinkedIn',
    'footer.contact': 'Informações de Contato',
    'footer.talk': 'Fale Conosco',
    'footer.talk.desc': 'Entre em contato para discutir como podemos ajudar em suas necessidades jurídicas.',
    'footer.specialist': 'Falar com Especialista',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.practice': 'Practice Areas',
    'nav.team': 'Team',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Navigating the Future of\nFinancial Law',
    'hero.subtitle': 'Specialized legal consulting for fintech innovators and financial institutions in an evolving digital landscape.',

    // About
    'about.title': 'Who We Are',
    'about.p1': 'Eroles Advogados is a highly specialized boutique law firm providing legal services for the financial sector, payments, and fintechs in general.',
    'about.p2': 'Our team has over 15 years of experience in these sectors. Our established presence in Brazil serves our diverse clients around the country and abroad, working alongside banks, market infrastructures, payment institutions, payment schemes, crypto-asset exchanges, and other regulated entities.',
    'about.p3': 'We offer personalized and specialized service, along with a comprehensive approach for our clients. We have the team and experience necessary to structure all types of businesses in the financial, payments, and fintech sectors, with support from key industry contacts and extensive market knowledge.',

    // Practice Areas
    'practice.title': 'Practice Areas',
    'practice.subtitle': 'Specialized legal expertise at the intersection of finance, technology, and regulation',
    'practice.banking': 'Banking Law',
    'practice.banking.desc': 'Advisory on CMN and Central Bank regulations, analysis of financial structures, and authorization processes for financial institutions.',
    'practice.payments': 'Payments',
    'practice.payments.desc': 'Comprehensive advisory on payment regulations, structuring authorizations for institutions and payment schemes with the Central Bank.',
    'practice.capital': 'Capital Markets',
    'practice.capital.desc': 'Specialized consulting on capital market regulations and CVM standards.',
    'practice.fintech': 'Fintechs',
    'practice.fintech.desc': 'Comprehensive support for FinTechs and startups in structuring business models and financial products.',
    'practice.crypto': 'Crypto Assets',
    'practice.crypto.desc': 'Advisory on product structuring and regulatory compliance for crypto assets and digital assets.',
    'practice.administrative': 'Administrative Proceedings',
    'practice.administrative.desc': 'Handling of proceedings before the Central Bank, CVM, and National Financial System Appeals Council.',
    'practice.gaming': 'Gaming and Betting',
    'practice.gaming.desc': 'Regulatory compliance consulting and business model structuring in the gaming and betting sector.',
    'practice.data': 'Data Protection',
    'practice.data.desc': 'Advisory on LGPD and ANPD regulations, ensuring compliance and security.',
    'practice.consumer': 'Consumer Law',
    'practice.consumer.desc': 'Consulting on National Consumer Protection System standards.',
    'practice.corporate': 'Corporate Law',
    'practice.corporate.desc': 'Advisory on corporate matters, company formation, and legal documentation.',

    // Team
    'team.founder': 'Founding Partner',
    'team.books': 'Published Books',
    'team.highlights': 'Highlights',
    'team.highlight': 'Highlight',
    'team.bio.education': 'Doctor of Law from USP, Master of Law from USP, Law Graduate from USP, Visiting Scholar at the University of Edinburgh - UK, Consultant for the Central Bank of Brazil Attorney General\'s Office Journal. Ranked as one of Brazil\'s leading Banking and FinTech lawyers by Chambers FinTech, Legal 500, Análise Advocacia, Latin Lawyer, Leaders League, among others.',
    'team.bio.experience': 'Pedro served as a partner in the Banking, Financial, Payments, and FinTech practice areas at major law firms such as CMS, Mattos Filho, and TozziniFreire. Pedro is also the coordinator of several books on financial regulation.',

    // Publications
    'publications.title': 'Publications & Media',
    'publications.subtitle': 'Analysis, insights, and appearances by Pedro Eroles in major media outlets',
    'publications.readMore': 'Read More',
    'publications.watch': 'Watch',

    // Footer
    'footer.description': 'Boutique law firm specialized in financial, banking, and fintech law, offering innovative legal solutions for the financial sector.',
    'footer.follow': 'Follow us on LinkedIn',
    'footer.contact': 'Contact Information',
    'footer.talk': 'Talk to Us',
    'footer.talk.desc': 'Get in touch to discuss how we can help with your legal needs.',
    'footer.specialist': 'Talk to a Specialist',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}