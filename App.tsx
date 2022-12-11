import { ThemeProvider } from './src/providers/theme';
import { HomeScreen } from './src/screens/home';

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  )
}
