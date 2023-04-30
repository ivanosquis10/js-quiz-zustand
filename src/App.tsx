import { Container, Stack, Typography } from '@mui/material'
import { useQuestionStore } from './store/questions'
import { StartBtn } from './components/StartBtn'
import { Game } from './components/Game'
import { JavaScriptLogo } from './JavaScriptLogo'

const App = () => {
  const questions = useQuestionStore(state => state.questions)
  return (
    <>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          gap={2}
        >
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quizz
          </Typography>
        </Stack>
        <main>
          {questions.length === 0 && <StartBtn />}
          {questions.length > 0 && <Game />}
        </main>
      </Container>
    </>
  )
}

export default App
