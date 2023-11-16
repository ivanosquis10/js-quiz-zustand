import { useParams } from 'react-router-dom'
import { useQuestionStore } from '@/store/questions'
import { QuizStartButton, QuizHeader } from '@/components'
import { Game } from '@/Quiz/game/Game'
import type { TypeQuiz } from '@/interfaces'


export const DynamicQuizPage = () => {
  const params = useParams()
  const value = params.id as TypeQuiz
  const questions = useQuestionStore(state => state.questions)
  return (
    <section className='flex flex-col items-center justify-center w-full h-full gap-2 mt-20 mb-10 min-h-[50svh]'>
      <QuizHeader type={value} />

      {questions.length === 0 ? (
        <div className='flex items-center justify-center w-full gap-5 px-2 py-2 md:w-1/2'>
          <QuizStartButton typeQuiz={value} />
        </div>
      ) : (
        <div className='w-full px-4 md:px-0'>
          <Game />
        </div>
      )
      }
    </section>
  )
}