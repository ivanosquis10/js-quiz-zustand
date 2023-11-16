import { Link } from 'react-router-dom'
import { useQuestionStore } from '@/store/questions'
import { Button } from './ui/button'
import { HomeIcon, RocketIcon } from '@radix-ui/react-icons'
import type { TypeQuiz } from '@/interfaces'

interface Props {
  typeQuiz?: TypeQuiz
}

const LIMIT_QUESTIONS = 5

export const QuizStartButton: React.FC<Props> = ({ typeQuiz }) => {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS, typeQuiz)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 my-5 lg:flex-row'>

      <Button variant='default' className='relative flex-1 w-full overflow-hidden font-bold group'
        onClick={handleClick}
      >
        {/* <span className='absolute w-0 h-0 transition-all duration-700 ease-out rounded-full bg-primary-foreground group-hover:w-56 group-hover:h-56'></span> */}
        {/* <p className='relative flex items-center group-hover:text-primary'> */}
        <p className='relative flex items-center'>
          START THE GAME <RocketIcon className='w-5 h-5 ml-2' />
        </p>
      </Button>

      <Button variant='outline' className='flex-1 w-full font-bold transition-all duration-300 hover:bg-zinc-900' asChild>
        <Link to='/'>
          GO HOME <HomeIcon className='w-5 h-5 ml-2' />
        </Link>
      </Button>
    </div>
  )
}
