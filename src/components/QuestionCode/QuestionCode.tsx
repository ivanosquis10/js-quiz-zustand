import SyntaxHighLighter from 'react-syntax-highlighter'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const QuestionCode = ({ code }: { code: string }) => {
  return (
    <div className='w-full text-base rounded-md h-28 bg-zinc-900/70'>
      <SyntaxHighLighter customStyle={{ height: '100%', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'transparent' }} language='javascript' style={anOldHope}>
        {code}
      </SyntaxHighLighter>
    </div>
  )
}