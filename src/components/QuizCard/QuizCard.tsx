import { Link } from 'react-router-dom'

import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons'
import type { QuizLink } from '@/constants/links'

type Props = {
  item: QuizLink
}

export const QuizCard: React.FC<Props> = ({ item }) => {

  const classes: Record<string, string> = {
    sky: 'hover:ring-sky-500',
    yellow: 'hover:ring-yellow-500'
  }

  return (
    <Card className={`shadow-lg bg-zinc-900/50 transition-all ${classes[item.color]}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="flex items-center gap-1">
          <Badge
            title='Quiz badge'
          >
            Quiz
          </Badge>
          <Badge
            title='FrontEnd badge'
          >
            FrontEnd
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className='relative flex items-center justify-between gap-1'>
        <div className='flex flex-col'>
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <span className='text-sm text-muted-foreground'>Conocimientos en {item.name}!</span>
          <Link to={`/quiz/${item.type}`} className='absolute rounded-full right-2 bottom-2 bg-zinc-900 border-opacity-5'
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
  )
}