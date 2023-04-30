import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton,
} from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

import SyntaxHighLighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useQuestionStore } from '../store/questions'

import { type Question as QuestionType } from '../types'
import Footer from './Footer'

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  // usuario no ha seleccionado nada todavia
  if (userSelectedAnswer == null) return 'transparent'

  // si ya selecciono pero la solucion es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return 'transparent'

  // si esta es la solucion correcta
  if (index === correctAnswer) return 'green'

  // si la solucion del usuario no es correcta
  if (index === userSelectedAnswer) return 'red'

  // en caso de que ninguna de las anteriores
  return 'transparent'
}

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore(state => state.selectAnswer)

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card
      variant='outlined'
      sx={{ textAlign: 'left', p: 2, bgcolor: '#222', mt: 4 }}
    >
      <Typography variant='h5'>{info.question}</Typography>

      <SyntaxHighLighter language='javascript' style={monokai}>
        {info.code}
      </SyntaxHighLighter>

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info?.answers?.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={handleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(info, index) }}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export const Game = () => {
  // extraer los valores del estado
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const goNextQuestion = useQuestionStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionStore(state => state.goPreviousQuestion)

  // luego vamos a pasarle como props la informacion de la pregunta junto a la pregunta acutal
  const questionInfo = questions[currentQuestion]
  return (
    <>
      <Stack
        direction='row'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}
