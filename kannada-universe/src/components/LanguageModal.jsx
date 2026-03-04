import React, { useEffect, useState, useContext } from 'react';
import './LanguageModal.css';
import { LanguageContext } from '../contexts/LanguageProvider';

export default function LanguageModal(){
  const [show, setShow] = useState(false);
  const ctx = useContext(LanguageContext);
  const [lang, setLang] = useState(() => ctx?.lang || localStorage.getItem('lang') || '');

  useEffect(()=>{
    if(!lang){
      setTimeout(()=> setShow(true), 200);
    } else {
      if(ctx && ctx.setLang) ctx.setLang(lang);
      document.documentElement.setAttribute('data-lang', lang);
      document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';
    }
  }, [lang]);

  function choose(l){
    localStorage.setItem('lang', l);
    setLang(l);
    if(ctx && ctx.setLang) ctx.setLang(l);
    setShow(false);
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.lang = l === 'kn' ? 'kn' : 'en';
  }

  if(!show) return null;

  return (
    <div className="lang-overlay" role="dialog" aria-modal="true">
      <div className="lang-card">
        <h3>{ctx?.t ? ctx.t('chooseLanguage') : 'Choose language'}</h3>
        <p>{ctx?.t ? ctx.t('chooseLanguageSub') : 'Choose your language'}</p>
        <div className="lang-actions">
          <button className="lang-btn" onClick={()=>choose('en')}>{ctx?.t ? ctx.t('english') : 'English'}</button>
          <button className="lang-btn primary" onClick={()=>choose('kn')}>{ctx?.t ? ctx.t('kannada') : 'ಕನ್ನಡ'}</button>
        </div>
        <button className="lang-close" onClick={()=>{ setShow(false); }}>{ctx?.t ? ctx.t('close') : 'Close'}</button>
      </div>
    </div>
  );
}
