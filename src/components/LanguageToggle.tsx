import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-12 h-8 rounded-md bg-[#369ACA]/10 hover:bg-[#369ACA]/20 transition-colors"
    >
      <span className="text-white font-medium text-sm">
        {language.toUpperCase()}
      </span>
    </button>
  );
}