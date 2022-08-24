import { createContext, useContext, useState } from 'react';

// creamos el contexto
const themeContext = createContext();
const themeToggleContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
<themeContext.Provider value={theme}>
    <themeToggleContext.Provider value={setTheme}>
        {children}
    </themeToggleContext.Provider>
</themeContext.Provider>
  );
};

// exportamos 2 customhook
export const useThemeContext = () => {
  return useContext(themeContext);
};

export const useThemeToggleContext = () => {
  return useContext(themeToggleContext);
};
