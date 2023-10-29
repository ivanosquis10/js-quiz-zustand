// import { Badge } from '../ui/badge'

export const HeadingApp = () => {
  return (
    <div className='p-2 mt-3 font-medium text-center border md:mt-0 lg:w-8/12 bg-zinc-900/50 rounded-xl'>
      <h3 className='text-3xl font-bold md:text-6xl'>
        DevQuiz
      </h3>
      <p className='mt-2 text-lg md:text-base text-muted-foreground'>
        Aquí encontrarás diferentes{' '}
        <span className='font-bold text-accent-foreground'>Quizzz</span> en relación a{' '}
        <p className='inline-flex items-center font-semibold underline transition-colors rounded-md cursor-default focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-accent-foreground'>Librerías/Frameworks</p>
        {/* <Badge variant='outline' className='text-base bg-zinc-950'>Librerías/Frameworks</Badge> */}
      </p>
    </div>
  )
}