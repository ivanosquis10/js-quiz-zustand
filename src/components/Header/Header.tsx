import { Link } from 'react-router-dom'
import { ButtonNav } from '@/components'


export const Header = () => {
  return (
    <header className='absolute top-0 w-full border-b dark:bg-zinc-800/50 dark:border-zinc-700'>
      <nav className='flex items-center justify-between px-5 py-1 mx-auto max-w-7xl md:px-0'>
        <Link to="/" className="flex items-end gap-1">
          <img src="/logo.jpg" className="w-12 h-12 rounded" alt="logo of the quiz app" />
        </Link>
        <ul className='flex items-center justify-between gap-2'>

          <li>
            <ButtonNav
              title='github'
              href='https://github.com/ivanosquis10/js-quiz-zustand'
            />
          </li>
          <li>
            <ButtonNav
              title='twitter'
              href='https://twitter.com/ivanosquis13'
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}