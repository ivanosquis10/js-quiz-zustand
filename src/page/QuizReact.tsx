import { useQuestionStore } from '../store/questions'

import { Game } from '../Quiz/game/Game'
import { StartBtn } from '../components/StartBtn'
import { ReactLogo } from '../components/Icons/Icons'

export const QuizReact = () => {
  const questions = useQuestionStore(state => state.questions)
  return (
    <section className='flex flex-col justify-center items-center min-h-screen w-full'>
      <div className='flex items-center justify-center gap-2'>
        <ReactLogo />
        <h2 className='text-3xl md:text-5xl'>React Quizz</h2>
      </div>
      <main className='max-w-xl'>
        {questions.length === 0 && <StartBtn typeQuiz='react' />}
        {questions.length > 0 && <Game />}
      </main>
    </section>
  )
}
