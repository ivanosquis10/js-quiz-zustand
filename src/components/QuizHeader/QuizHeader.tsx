import { JavaScriptLogo, ReactLogo } from '@/components/Icons/Icons'

type options = 'js' | 'react'

type Props = {
  type: options
}

type QuizData = {
  [key in options]: {
    title: string;
    description: string;
    color: string;
  }
}

type LogoData = {
  react: React.ReactElement;
  js: React.ReactElement;
}


const quizData: QuizData = {
  react: {
    title: 'React DevQuiz',
    description: 'Pon a prueba tus conocimientos de React',
    color: 'border-sky-500'
  },
  js: {
    title: 'JavaScript DevQuiz',
    description: 'Pon a prueba tus conocimientos de JavaScript',
    color: 'border-yellow-500',
  }
}

export const QuizHeader = ({ type }: Props) => {
  const { title, description, color } = quizData[type]

  const logoStyle = 'border-2 rounded-md shadow w-20 h-20 sm:w-24 sm:h-24 bg-zinc-900 border-opacity-60'

  const logos: LogoData = {
    react: <ReactLogo className={`${logoStyle} ${color}`} />,
    js: <JavaScriptLogo className={`${logoStyle} ${color}`} />
  }
  return (
    <header className='flex flex-col items-center gap-1 sm:flex-row lg:gap-3'>
      {logos[type]}
      <div className='text-center sm:text-start'>
        <h2 className='text-3xl font-bold md:text-5xl'>{title}</h2>
        <p className='text-sm font-semibold lg:text-base text-muted-foreground'>{description}</p>
      </div>
    </header>
  )
}