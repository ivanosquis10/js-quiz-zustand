import type { SVGProps } from "react"

export interface Question {
  id: number
  question: string
  code?: string
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}

export type TypeQuiz = 'js' | 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type LogoProps = {
  className?: string
}