import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { dark, light } from "../themes";

interface ThemeContextData {
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: { children: ReactNode }) {

  const [theme, setTheme] = useState(dark)

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'dark' ? light : dark)
  },[])

  return (
    <ThemeContext.Provider value={{
      toggleTheme,
    }}>
      <SCThemeProvider theme={theme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)

  return context
}