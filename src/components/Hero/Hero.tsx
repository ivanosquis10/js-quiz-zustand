import { HeadingApp, QuizCard } from '@/components'
import { QuizLinks } from '@/constants/links'

export const Hero = () => {
  return (
    <section className='min-h-[100svh] lg:h-screen px-4 mx-auto space-y-5 md:px-0 flex flex-col justify-center items-center'>
      <HeadingApp />
      <div className='grid w-full gap-5 lg:w-8/12 md:grid-cols-2'>
        {QuizLinks.map((item) => (
          <QuizCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}
