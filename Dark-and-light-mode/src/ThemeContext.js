import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleDarkModeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider, ThemeContext };
