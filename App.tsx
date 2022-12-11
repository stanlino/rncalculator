import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from './src/providers/theme';
import { HomeScreen } from './src/screens/home';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <HomeScreen />
    </ThemeProvider>
  )
}
