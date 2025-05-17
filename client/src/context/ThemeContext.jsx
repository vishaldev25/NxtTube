import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext(); // step-1

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        }
        else if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setDarkMode(true)
        }
    }, [])
    
    useEffect(() => {
        const htmlElement = document.documentElement;

        if (darkMode) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode])
    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    return useContext(ThemeContext)
}