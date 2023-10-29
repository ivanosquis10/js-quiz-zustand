import { useQuestionStore } from '../store/questions'

import { Game } from '../Quiz/game/Game'
import { StartBtn } from '../components/StartBtn'
import { JavaScriptLogo } from '../components/Icons/Icons'

export function QuizJavascript() {
  const questions = useQuestionStore(state => state.questions)
  return (
    <section className='flex flex-col justify-center items-center min-h-screen w-full'>
      <div className='flex items-center justify-center gap-2'>
        <JavaScriptLogo />
        <h2 className='text-3xl md:text-5xl'>JavaScript Quizz</h2>
      </div>
      <main className='max-w-xl px-2'>
        {questions.length === 0 && <StartBtn typeQuiz='js' />}
        {questions.length > 0 && <Game />}
      </main>
    </section>
  )
}
