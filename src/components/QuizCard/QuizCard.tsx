import { Link } from 'react-router-dom'

import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

import type { QuizLink } from '@/constants/links'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons'

type Props = {
  item: QuizLink
}

export const QuizCard: React.FC<Props> = ({ item }) => {
  const ringColor: Record<string, string> = {
    javascript: 'ring-yellow-500',
    react: 'ring-sky-500'
  }

  const color = ringColor[item.name.toLocaleLowerCase()] || 'ring-transparent'

  return (
    // <Link to={item.url}>
    <Card className={`shadow-lg bg-zinc-900/50 transition-all hover:${color}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="flex items-center gap-1">
          <Badge
            title='quiz badge'
          >
            Quiz
          </Badge>
          <Badge
            title='frontEnd badge'
          >
            FrontEnd
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className='relative flex items-center justify-between gap-1'>
        <div className='flex flex-col'>
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <span className='text-sm text-muted-foreground'>Conocimientos en {item.name}!</span>
          <Link to={item.url} className='absolute rounded-full right-2 bottom-2 bg-zinc-900 border-opacity-5'
            title='start the game'
          >
            <Button variant='outline' size='icon' className='rounded-full'>
              <DoubleArrowRightIcon className='w-5 h-5 font-bold' />
            </Button>
          </Link>
        </div>
        <div className='p-1 border-2 rounded-full shadow bg-zinc-900 border-opacity-5'>
          <item.logo />
        </div>
      </CardContent>
    </Card>
    // </Link>
  )
}