import { createBrowserRouter } from 'react-router-dom'
import { QuizReact } from '../page/QuizReact'
import { QuizJavascript } from '../page/QuizJavascript'
import { NotFound } from '../page/NotFound'
import App from '@/App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/quiz-js',
    element: <QuizJavascript />,
  },
  {
    path: '/quiz-react',
    element: <QuizReact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
