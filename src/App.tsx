import { Outlet } from 'react-router-dom'
import { ThemeProvider, Header } from '@/components'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      <Header />
      <main className='md:mx-auto md:container'>
        <Outlet />
      </main>
    </ThemeProvider>
  )
}

export default App
