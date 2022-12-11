import { StatusBar } from "expo-status-bar";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { dark, light } from "../themes";

interface ThemeContextData {
  toggleTheme: () => void
  themeName: string
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: { children: ReactNode }) {

  const [theme, setTheme] = useState(dark)

  const toggleTheme = useCallback(() => {
    setTheme(prevState => prevState.name === 'DARK' ? light : dark)
  },[])

  const statusBarStyle = theme.name === 'DARK' ? 'light' : 'dark'
  const statusBarBackgroundColor = theme.colors.bg

  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      themeName: theme.name
    }}>
      <StatusBar 
        style={statusBarStyle}
        backgroundColor={statusBarBackgroundColor} 
        translucent={false} 
      />
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