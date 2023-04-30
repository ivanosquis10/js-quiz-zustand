import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import confetti from 'canvas-confetti'
import { type Question } from '../types'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

export const useQuestionStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,

        fetchQuestions: async (limit: number) => {
          const res = await fetch('http://localhost:5173/data.json')
          const data = await res.json()

          // esto lo que hara es agarrar el array, desordenarlo y luego limitarlo con el numero que se le pase
          const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
          set({ questions })
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
          const { questions } = get()
          // creamos una copia profunda del estado con el structureClone
          const newQuestions = structuredClone(questions)

          // luego tenemos que buscar el indice del ID de la pregunta
          const questionIndex = newQuestions.findIndex(
            (query: { id: number }) => query.id === questionId
          ) // encontramos el indice de la pregunta en cuestion

          // luego de eso vamos a recuperar la informacion de la pregunta
          const questionInfo = newQuestions[questionIndex] // esta mezcla es para saber en que pregunta nos encontramos

          // averiguamos si el usuario le dio a la respuesta correcta
          const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

          if (isCorrectUserAnswer) confetti()

          // cambiar la informacion en la copia de la pregunta
          newQuestions[questionIndex] = {
            ...questionInfo, // hacemos una copia de toda la informacion
            isCorrectUserAnswer, // le pasamos si es correcta la respuesta del usuario
            userSelectedAnswer: answerIndex, // nos ayudara visualmente para darle un feedback al usuario, si respondio bien o mal
          }

          // actualizamos el estado
          set({ questions: newQuestions })
        },

        goNextQuestion: () => {
          const { questions, currentQuestion } = get()

          // actualizamos la pregunta actual para ir a la siguiente
          const nextQuestion = currentQuestion + 1

          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion })
          }
        },

        goPreviousQuestion: () => {
          const { currentQuestion } = get()

          // actualizamos la pregunta actual para ir a la siguiente
          const nextQuestion = currentQuestion - 1

          if (nextQuestion >= 0) {
            set({ currentQuestion: nextQuestion })
          }
        },

        reset: () => {
          set({ currentQuestion: 0, questions: [] })
        },
      }
    },
    {
      name: 'questions',
    }
  )
)
