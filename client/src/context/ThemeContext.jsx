import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize state with correct value from localStorage (only once during initial render)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false; 
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
    return false; // Default to light if no preference set
  });

  // Apply theme class and save to localStorage whenever darkMode changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (darkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Initialize theme on first render (only runs once)
  useEffect(() => {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      // Apply saved theme immediately
      if (savedTheme === "dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
    // Don't check system preference here to prevent unwanted changes
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}