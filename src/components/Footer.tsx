import { useQuestionStore } from '../store/questions'
import { useQuestionsData } from '../hooks/useQuestionsData'

export const Footer = () => {
  const reset = useQuestionStore(state => state.reset)
  const { correct, incorrect, sinResponder } = useQuestionsData()
  return (
    <footer className='mt-5 text-center flex flex-col items-center justify-between space-y-3'>
      <div className='text-sm md:text-base flex font-bold items-center'>
        <span>{`❎ ${correct} correctas`}</span>
        <span>{`❌ ${incorrect} incorrectas `}</span>
        <span>{`❓ ${sinResponder} sin responder`}</span>
      </div>
      {/* <strong className='text-sm md:text-base'>
        {`❎${correct} correctas | ❌${incorrect} incorrectas | ❓${sinResponder} sin responder `}
      </strong> */}

      <button
        className='relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium -tracking-wide text-white bg-gray-800 rounded-lg group uppercase'
        onClick={() => reset()}
      >
        <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
        <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
        <span className='relative'>Reset game</span>
      </button>
    </footer>
  )
}
