import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'

const LIMIT_QUESTIONS = 10

export const StartBtn = () => {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button variant='contained' onClick={handleClick}>
      Empezar!!!
    </Button>
  )
}
