import React, { useState, createContext } from "react";

interface ThemeContext {
  option: "light" | "dark";
  toggle: (option: "light" | "dark") => void;
}

export const Context = createContext({} as ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  function handleToggle(type: "light" | "dark") {
    setMode(type);
    document.querySelector("body")?.classList.toggle("dark");
  }
  return (
    <Context.Provider value={{ option: mode, toggle: handleToggle }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeProvider;
