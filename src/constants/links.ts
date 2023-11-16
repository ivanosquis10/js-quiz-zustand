import { JavaScriptLogo, ReactLogo } from '@/components/Icons/Icons'
import type { TypeQuiz, LogoProps } from '@/interfaces'

export type QuizLink = {
  id: number
  name: string
  url: string
  // eslint-disable-next-line no-empty-pattern
  logo: ({ }: LogoProps) => JSX.Element
  color: string
  type: TypeQuiz
}


export const QuizLinks: QuizLink[] = [
  {
    id: 1,
    name: 'JavaScript',
    url: '/quiz-js',
    logo: JavaScriptLogo,
    color: 'yellow',
    type: 'js'
  },
  {
    id: 2,
    name: 'React',
    url: '/quiz-react',
    logo: ReactLogo,
    color: 'sky',
    type: 'react'
  }
]