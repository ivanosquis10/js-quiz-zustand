import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <strong className='text-7xl'>404 :( </strong>
      <Link
        className='mt-3 bg-zinc-800 hover:bg-zinc-800/50 duration-300 transition-colors uppercase text-4xl p-2 rounded'
        to='/'
      >
        Go home
      </Link>
    </section>
  )
}
