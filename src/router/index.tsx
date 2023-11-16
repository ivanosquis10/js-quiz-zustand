import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { Hero } from '@/components'
import { DynamicQuizPage, NotFound } from '@/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Hero /> },
      // { path: '/quiz-js', element: <QuizJavascript /> },
      // { path: '/quiz-react', element: <QuizReact /> },
      { path: '/quiz/:id', element: <DynamicQuizPage /> }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
