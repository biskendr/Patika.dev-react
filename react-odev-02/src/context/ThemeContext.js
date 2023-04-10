import { createContext, useContext, useState, useEffect } from "react";

//create context with createContext
const ThemeContext = createContext();

//theme provider component for state management
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("");

    //update the theme based on the time of day
    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        if (hour > 19 || hour < 7) {
            setTheme("dark")
        }
        else
            setTheme("light")
    }, [])

    //state or function to pass as the context value
    const values = {
        theme, setTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)