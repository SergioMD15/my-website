import cn from 'classnames'
import { ReactNode } from 'react'

type TailwindColor = 'red' | 'gray'

type TailwindVariant =
  50 | 100 | 200 | 300 | 400 | 
  500 | 600 | 700 | 800 | 900 

export type TailwindTextColor = `text-${TailwindColor}-${TailwindVariant}`

type Props = {
  size?: keyof typeof TextSize
  weight?: keyof typeof TextWeight
  color?: TailwindTextColor
  className?: string
  children: ReactNode
}

const TextSize = {
  small: 'text-base',
  normal: 'text-xl',
  medium: 'text-2xl',
  large: 'text-3xl',
  'x-large': 'text-5xl'
}

const TextWeight = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold'
}

export const Text = ({
  size = 'medium',
  weight = 'normal',
  color = 'text-gray-800',
  className,
  children
} : Props) => {
  return (
    <p className={cn(
      TextSize[size],
      TextWeight[weight],
      color,
      className
    )}>
      {children}
    </p>
  )
}