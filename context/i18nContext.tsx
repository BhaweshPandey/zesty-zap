
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import i18n from '@/lib/i18n';

type I18nContextType = {
  language: string;
  changeLanguage: () => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

type I18nProviderProps = {
  children: ReactNode;
};


const Language = {
  en:"en",
  ar:"ar"
}
type LanguageTypes = keyof typeof Language;
const LANGUAGE_KEY = 'preferredLanguage';

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<string>('en'); 
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.locale = savedLanguage
    }
  }, []);

  const changeLanguage = () => {
    if(Language.en == i18n.locale){
      i18n.locale = Language.ar
      localStorage.setItem(LANGUAGE_KEY, Language.ar);
      setLanguage(Language.ar)
      
  }else{
      i18n.locale = Language.en;
      setLanguage(Language.en)
      localStorage.setItem(LANGUAGE_KEY, Language.en);
  }
    
  };

  return (
    <I18nContext.Provider value={{ language, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nContext;
