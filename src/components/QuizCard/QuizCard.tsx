import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

import { Badge } from '../ui/badge'
import type { QuizLink } from '@/constants/links'

type Props = {
  item: QuizLink
}

export const QuizCard: React.FC<Props> = ({ item }) => {
  return (
    <Link key={item.id} to={item.url}>
      <Card className={`transition-all shadow-lg bg-zinc-900/50 ring-2 ring-transparent hover:ring-${item.color}`}>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="flex items-center gap-1">
            <Badge>
              Quiz
            </Badge>
            <Badge>
              FrontEnd
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex items-center justify-between gap-1'>
          <div>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <span className='text-sm text-muted-foreground'>Conocimientos en {item.name}!</span>
          </div>
          <div className='p-1 border-2 rounded-full shadow bg-zinc-900 border-opacity-5'>
            <item.logo />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}