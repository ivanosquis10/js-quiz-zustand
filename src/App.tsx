import { Link } from 'react-router-dom'
import { JavaScriptLogo, ReactLogo } from './components/Icons'

const navigationLinks = [
  {
    id: 1,
    name: 'javascript',
    url: '/quiz-js',
    logo: <JavaScriptLogo />,
  },
  {
    id: 2,
    name: 'react',
    url: '/quiz-react',
    logo: <ReactLogo />,
  },
]

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <div className='text-center'>
        <h3 className='text-4xl md:text-6xl'>
          Bienvenido al <span className='text-white font-bold'>DevQuiz</span>
        </h3>
        <p className='text-xl md:text-base mt-2 font-medium'>
          Aquí encontrarás diferentes{' '}
          <span className='text-sky-400 font-bold'>Quiz</span> en relación a
          <span className='text-sky-400 font-bold'>
            {' '}
            librerías - framework - lenguajes web
          </span>
        </p>
      </div>

      <nav className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 p-2 w-full max-w-xl'>
        {navigationLinks.map(link => (
          <Link
            key={link.id}
            to={link.url}
            className='p-2 capitalize rounded flex items-center gap-2 flex-1 bg-zinc-800/60 border-b border-t hover:bg-zinc-900 duration-300 transition-colors'
          >
            {link.logo}
            <p className='text-xl md:text-3xl'>{link.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default App
