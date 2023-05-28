import { useQuestionStore } from '../../store/questions'
import { Question } from '../question/Question'

import { ArrowLeft, ArrowRigth } from '../../components/Icons'
import { Footer } from '../../components/Footer'

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
      {/* <Stack
        direction='row'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer /> */}
      <div className='flex items-center gap-1 justify-center my-2'>
        <button
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
          aria-label='boton para ir a la pregunta anterior'
          className='p-1 rounded hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer'
        >
          <ArrowRigth />
        </button>
        <span className='font-bold text-xl'>
          {currentQuestion + 1} / {questions.length}
        </span>
        <button
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
          aria-label='boton para ir a la siguiente pregunta'
          className='p-1 rounded hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer'
        >
          <ArrowLeft />
        </button>
      </div>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}
