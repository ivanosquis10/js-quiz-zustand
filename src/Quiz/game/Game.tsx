import { useQuestionStore } from '@/store/questions'
import { Question } from '@/Quiz/question/Question'
import { Footer } from '@/components'

export const Game = () => {
  // extraer los valores del estado
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)

  // luego vamos a pasarle como props la informacion de la pregunta junto a la pregunta acutal
  const questionInfo = questions[currentQuestion]
  return (
    <div className="w-full lg:max-w-3xl lg:mx-auto">
      <Question question={questionInfo} />
      <Footer />
    </div>
  )
}
