import { ThemeProvider, Header, Hero, FooterApp } from '@/components'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      <Header />
      <main className='md:mx-auto md:container'>
        <Hero />
      </main>
      <FooterApp />
    </ThemeProvider>
  )
}

export default App
