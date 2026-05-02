import React, { createContext, useState, useEffect } from 'react';
import { t } from '../i18n';

export const LanguageContext = createContext({ lang: 'en', setLang: ()=>{}, t: (k)=>k });

export function LanguageProvider({ children }){
  const [lang, setLang] = useState(()=> localStorage.getItem('lang') || 'en');

  useEffect(()=>{
    if(lang){
      localStorage.setItem('lang', lang);
      document.documentElement.setAttribute('data-lang', lang);
      document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: (key)=> t(key, lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
