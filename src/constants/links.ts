import { JavaScriptLogo, ReactLogo } from '@/components/Icons/Icons';

export type QuizLink = {
  id: number
  name: string
  url: string
  logo: () => JSX.Element
  color: string
}


export const QuizLinks: QuizLink[] = [
  {
    id: 1,
    name: 'JavaScript',
    url: '/quiz-js',
    logo: JavaScriptLogo,
    color: 'yellow'
  },
  {
    id: 2,
    name: 'React',
    url: '/quiz-react',
    logo: ReactLogo,
    color: 'sky'
  }
]