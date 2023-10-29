import SyntaxHighLighter from 'react-syntax-highlighter'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useQuestionStore } from '@/store/questions'
import type { Question as QuestionType } from '@/interfaces'

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  // usuario no ha seleccionado nada todavia
  if (userSelectedAnswer == null) return 'bg-transparent'

  // si ya selecciono pero la solucion es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return 'bg-transparent'

  // si esta es la solucion correcta
  if (index === correctAnswer) return 'bg-green-800'

  // si la solucion del usuario no es correcta
  if (index === userSelectedAnswer) return 'bg-rose-800'

  // en caso de que ninguna de las anteriores
  return 'bg-transparent'
}

export const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore(state => state.selectAnswer)

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <div className='max-w-md mx-auto md:w-full'>
      <h3 className='my-2 text-base font-bold text-center md:text-2xl md:p-2'>
        {info.question}
      </h3>

      {info.code && (
        <div className='w-full'>
          <SyntaxHighLighter language='javascript' style={anOldHope}>
            {info.code}
          </SyntaxHighLighter>
        </div>
      )}

      <ul className=''>
        {info.answers?.map((answer, index) => (
          <li key={index} className='hover:bg-zinc-800 bg-zinc-900'>
            <button
              className={`w-full text-start p-2 border-b border-gray-500 px-5  text-sm md:text-base ${getBackgroundColor(
                info,
                index
              )}`}
              disabled={info.userSelectedAnswer != null}
              onClick={handleClick(index)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
