import { createContext, useEffect } from "react";
import translations from "../i18n";
import UseLocalStorageState from "../hooks/UseLocalStorageState";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = UseLocalStorageState("language","en");
  const currentTranslations = translations[language];

  useEffect(() => {
    if (language === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [language]);

  const changeLanguage = (newLanguage) => setLanguage(newLanguage);

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, currentTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
