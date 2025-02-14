import { ThemeProvider } from '@/components/providers/theme-provider'

import Layout from './components/layout'
import HomeScreen from './components/screens/home'

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomeScreen />
      </Layout>
    </ThemeProvider>
  )
}
