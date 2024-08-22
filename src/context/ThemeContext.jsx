// import { useEffect, useState } from "react";
// import { createContext } from "react";

// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("onyx-black");

//   const changeTheme = (newTheme) => {
//     setTheme(newTheme);
//   };

//   useEffect(() => {
//     document.body.className = `bg-${theme}`;
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, changeTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }


import { useEffect } from "react";
import { createContext } from "react";
import UseLocalStorageState from "../hooks/UseLocalStorageState";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = UseLocalStorageState("theme","dark-night")

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const previousTheme = document.body.className;
    document.body.className = `bg-${theme}`;
    
    if (previousTheme && previousTheme !== `bg-${theme}`) {
      document.body.classList.remove(previousTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

