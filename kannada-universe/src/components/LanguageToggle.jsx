import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageProvider';
import { t } from '../i18n';

export default function LanguageToggle(){
  const { lang, setLang } = useContext(LanguageContext);

  function switchTo(l){
    if(l === lang) return;
    setLang(l);
  }

  return (
    <div className="inline-flex items-center bg-white rounded-full px-1 py-0.5 shadow-sm" role="tablist" aria-label="Language selector">
      <button
        className={(lang === 'en' ? 'bg-brandPurple text-white' : 'text-brandPurple') + ' px-3 py-1 rounded-full text-sm font-semibold'}
        onClick={() => switchTo('en')}
        aria-pressed={lang === 'en'}
      >
        {t('english', lang)}
      </button>
      <button
        className={(lang === 'kn' ? 'bg-brandPurple text-white' : 'text-brandPurple') + ' px-3 py-1 rounded-full text-sm font-semibold'}
        onClick={() => switchTo('kn')}
        aria-pressed={lang === 'kn'}
      >
        {t('kannada', lang)}
      </button>
    </div>
  );
}
