import { createContext, useContext, useState } from 'react';

// creamos el contexto
const themeContext = createContext(); // guarda el dato
const themeToggleContext = createContext(); // setea el dato

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  console.log(theme);

  return (
    <themeContext.Provider value={theme}>
        <themeToggleContext.Provider value={setTheme}>
            {children}
        </themeToggleContext.Provider>
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(themeContext);
};

export const useThemeToogleContext = () => {
  return useContext(themeToggleContext);
};
