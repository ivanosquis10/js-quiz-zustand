import { useQuestionStore } from '@/store/questions'
import { useQuestionsData } from '@/hooks/useQuestionsData'
import { Badge } from '../ui/badge'
import { CheckIcon, IncorrectIcon, QuestionIcon } from '@/components/Icons/Icons'

export const QuestionProgress = () => {
  const { correct, incorrect } = useQuestionsData()
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)

  return (
    <div className='flex items-center justify-center gap-2 my-3'>
      <Badge className='text-sm' title='current question and the rest of the questions'>
        <QuestionIcon />: {currentQuestion + 1} / {questions.length}
      </Badge>
      <Badge className='text-sm' title='correct questions'>
        <CheckIcon />: {correct}
      </Badge>
      <Badge className='text-sm' title='incorrect questions'>
        <IncorrectIcon />: {incorrect}
      </Badge>
    </div>
  )
}