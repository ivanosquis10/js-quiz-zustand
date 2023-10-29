import { useQuestionStore } from '@/store/questions'
import { Question } from '@/Quiz/question/Question'

import { ArrowLeft, ArrowRigth } from '@/components/Icons/Icons'
import { Footer } from '@/components/Footer'

export const Game = () => {
  // extraer los valores del estado
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const goNextQuestion = useQuestionStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionStore(state => state.goPreviousQuestion)

  // luego vamos a pasarle como props la informacion de la pregunta junto a la pregunta acutal
  const questionInfo = questions[currentQuestion]
  return (
    <>
      <div className='flex items-center justify-center gap-1 my-2'>
        <button
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
          aria-label='boton para ir a la pregunta anterior'
          className='p-1 transition-all duration-300 rounded cursor-pointer hover:bg-zinc-800/60'
        >
          <ArrowRigth />
        </button>
        <span className='text-xl font-bold'>
          {currentQuestion + 1} / {questions.length}
        </span>
        <button
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
          aria-label='boton para ir a la siguiente pregunta'
          className='p-1 transition-all duration-300 rounded cursor-pointer hover:bg-zinc-800/60'
        >
          <ArrowLeft />
        </button>
      </div>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}
