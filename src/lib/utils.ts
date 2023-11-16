import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Question } from '@/interfaces'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBackgroundColor = (info: Question, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  // usuario no ha seleccionado nada todavia
  if (userSelectedAnswer == null) return 'hover:bg-zinc-900 bg-zinc-900/60'

  // si ya selecciono pero la solucion es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return 'bg-zinc-900/60 opacity-50'

  // si esta es la solucion correcta
  if (index === correctAnswer) return 'bg-green-600'

  // si la solucion del usuario no es correcta
  if (index === userSelectedAnswer) return 'bg-rose-600'

  // en caso de que ninguna de las anteriores
  return 'hover:bg-zinc-900 bg-zinc-900/60'
}