import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined)
    throw new Error("LanguageContext was used outside of darkModeProvider");

  return context;
}

export default useLanguage;
