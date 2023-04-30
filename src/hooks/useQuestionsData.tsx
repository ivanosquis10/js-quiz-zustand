import { useQuestionStore } from '../store/questions'

export const useQuestionsData = () => {
  const questions = useQuestionStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let sinResponder = 0

  questions.forEach(question => {
    const { userSelectedAnswer, correctAnswer } = question
    // validamos las que no han sido respondidas todavia
    if (userSelectedAnswer == null) sinResponder++
    // validamos las respondidas
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, sinResponder }
}
