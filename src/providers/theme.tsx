import { StatusBar } from "expo-status-bar";
import { createContext, ReactNode, useCallback, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { dark, light } from "../themes";

interface ThemeContextData {
  toggleTheme: () => void
  themeName: string
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: { children: ReactNode }) {

  const userColorScheme = useColorScheme() === 'dark' ? dark : light

  const [theme, setTheme] = useState(userColorScheme)

  const toggleTheme = useCallback(() => {
    setTheme(prevState => prevState.name === 'dark' ? light : dark)
  },[])

  useEffect(() => {
    setTheme(userColorScheme)
  },[userColorScheme])

  const statusBarStyle = theme.name === 'dark' ? 'light' : 'dark'
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