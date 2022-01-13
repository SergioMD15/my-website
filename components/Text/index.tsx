import cn from 'classnames'
import { ReactNode } from 'react'
import { TailwindTextColor } from '../../lib/types'

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

type Props = {
  size?: keyof typeof TextSize
  weight?: keyof typeof TextWeight
  color?: TailwindTextColor
  className?: string
  children: ReactNode
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