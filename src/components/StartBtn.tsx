import { useQuestionStore } from '../store/questions'
import { TypeQuiz } from '../types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  typeQuiz?: TypeQuiz
}

const LIMIT_QUESTIONS = 10

export const StartBtn: FC<Props> = ({ typeQuiz }) => {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS, typeQuiz)
  }

  return (
    <div className='flex items-center justify-center gap-5 my-5'>
      <button
        className='relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium -tracking-wide text-white bg-gray-800 rounded-lg group uppercase'
        onClick={handleClick}
      >
        <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
        <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
        <span className='relative'>Start</span>
      </button>

      <Link
        to='/'
        className='relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-wider text-white bg-gray-800 rounded-lg group uppercase'
      >
        <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
        <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
        <span className='relative'>Home</span>
      </Link>
    </div>
  )
}
