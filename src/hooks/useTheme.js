import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined)
    throw new Error("ThemeContext was used outside of darkModeProvider");

  return context;
}

export default useTheme;
