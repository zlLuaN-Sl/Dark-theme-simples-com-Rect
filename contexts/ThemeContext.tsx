import { createContext, ReactNode, useContext, useEffect, useState} from "react";

const STORAGE_KEY = 'themeContextKey';

type ThemeType = {
    theme: string;
    setTheme: (newTheme: string) => void;
 }


export const ThemeContext = createContext <ThemeType | null>(null);


export const Themeprovider = ({children}: { children: ReactNode }) => {


   const [theme, setTheme] = useState(
      localStorage.getItem(STORAGE_KEY) || 'light'
   );

   useEffect(() =>{
      localStorage.setItem(STORAGE_KEY, theme)
   }, [theme])


   

   return (
      <ThemeContext.Provider value={{theme, setTheme}}>
         {children}
      </ThemeContext.Provider>
   )
}

export const useTheme = () => useContext(ThemeContext);