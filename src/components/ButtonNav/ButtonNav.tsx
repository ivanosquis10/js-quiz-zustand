import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

type Props = {
  href: string
  title: string
}

type Icon = {
  [key: string]: ReactElement
}

export const ButtonNav = ({ href, title }: Props) => {
  const icon: Icon = {
    github: <GitHubLogoIcon width={25} height={25} />,
    twitter: <TwitterLogoIcon width={25} height={25} />
  }

  return (
    <Link
      to={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Button variant='ghost' size='icon' className=''>
        {icon[title]}
        <span className='sr-only'>{`${title} logo`}</span>
      </Button>
    </Link>
  )
}