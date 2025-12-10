import { createContext, useState } from "react";

export const Theme = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme((prev)=>!prev)
  };
  return <Theme.Provider value={[theme, handleTheme]}>{children}</Theme.Provider>;
};

export default ThemeContext;
