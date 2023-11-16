import { useQuestionStore } from '@/store/questions'
import { getBackgroundColor } from '@/lib/utils'
import type { Question } from '@/interfaces'

type Props = {
  answer: string
  index: number
  question: Question
}

export const QuestionOptions = ({ answer, index, question }: Props) => {
  const selectAnswer = useQuestionStore(state => state.selectAnswer)
  const backgroundStyle = getBackgroundColor(question, index);

  return (
    <div className={`border rounded-md md:h-[60px] py-3 px-5 ${backgroundStyle}`}>
      <button
        className="w-full text-center rounded-md text-sm flex items-center justify-center h-full"
        disabled={question.userSelectedAnswer != null}
        onClick={() => selectAnswer(question.id, index)}
      >
        {answer}
      </button>
    </div>
  )
}