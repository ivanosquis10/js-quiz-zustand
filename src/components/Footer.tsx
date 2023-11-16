import { useQuestionStore } from '@/store/questions'

import { ArrowLeft, ArrowRight } from '@/components/Icons/Icons'
import { QuestionProgress } from '@/components'
import { Button } from './ui/button'

export const Footer = () => {
  const reset = useQuestionStore(state => state.reset)
  const nextQuestion = useQuestionStore(state => state.goNextQuestion)
  const previousQuestion = useQuestionStore(state => state.goPreviousQuestion)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const questions = useQuestionStore(state => state.questions)

  return (
    <footer className='flex items-center justify-between mt-3 text-center'>
      <Button
        variant='ghost'
        size='icon'
        onClick={previousQuestion}
        aria-label='go to the previous question'
        disabled={currentQuestion === 0}
      >
        <ArrowLeft />
      </Button>
      <div className='flex flex-col items-center gap-2 md:flex-row'>
        <Button
          variant='default'
          className='font-semibold tracking-wide'
          onClick={() => reset()}
        >
          Reset game
        </Button>
        <QuestionProgress />

      </div>
      <Button
        variant='ghost'
        size='icon'
        onClick={nextQuestion}
        aria-label='go to the next question'
        disabled={currentQuestion >= questions.length - 1}
      >
        <ArrowRight />
      </Button>
    </footer>
  )
}
