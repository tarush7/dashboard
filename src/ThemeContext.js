import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState( localStorage.getItem('theme') || "default");
  const [borderColor, setBorderColor] = useState('white');
  const [gridColor, setGridColor] = useState('black');
  
  useEffect(()=> {
    if (theme === 'dark') {
      setBorderColor('#18122B');
      setGridColor('white');
    } else {
      setBorderColor('white');
      setGridColor('rgb(132, 136, 132, 0.8)');
    }
  }, [theme])

  const toggleTheme = (newTheme) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };



  return (
    <ThemeContext.Provider value={{ theme, borderColor, gridColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
