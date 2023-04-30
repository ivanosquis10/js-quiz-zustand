import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import { useQuestionsData } from '../hooks/useQuestionsData'

const Footer = () => {
  const reset = useQuestionStore(state => state.reset)
  const { correct, incorrect, sinResponder } = useQuestionsData()
  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>
        {`❎${correct} correctas | ❌${incorrect} incorrectas | ❓${sinResponder} sin responder `}
      </strong>
      <div style={{ marginTop: '10px' }}>
        <Button color='secondary' variant='outlined' onClick={() => reset()}>
          resetear juego
        </Button>
      </div>
    </footer>
  )
}

export default Footer
