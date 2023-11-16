import { QuestionOptions, QuestionCode } from '@/components'
import type { Question as QuestionType } from '@/interfaces'

export const Question = ({ question }: { question: QuestionType }) => {
  const { question: questionTitle, code, answers } = question
  return (
    <div className='w-full space-y-2 rounded-md shadow-md lg:max-w-3xl lg:mx-auto'>
      <h3 className='p-2 mt-5 text-base font-semibold tracking-wider text-center rounded-md bg-zinc-900/70 md:bg-transparent'>
        {questionTitle}
      </h3>

      {code && <QuestionCode code={code} />}

      <div className='grid gap-2 md:grid-cols-2'>
        {answers.map((answer, index) => (
          <QuestionOptions key={index} answer={answer} index={index} question={question} />
        ))}
      </div>
    </div>
  )
}
