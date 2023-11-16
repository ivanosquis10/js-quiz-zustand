import { useQuestionStore } from '@/store/questions'
import { Game } from '@/Quiz/game/Game'
import { QuizStartButton } from '@/components'
import { QuizHeader } from '@/components/QuizHeader/QuizHeader'

export const QuizJavascript = () => {
  const questions = useQuestionStore(state => state.questions)
  return (
    <section className='flex flex-col items-center justify-center w-full h-full gap-2 mt-20 mb-10 min-h-[50svh]'>
      <QuizHeader type='js' />


      {questions.length === 0 ? (
        <div className='flex items-center justify-center w-full gap-5 px-2 py-2 md:w-1/2'>
          <QuizStartButton typeQuiz='js' />
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
