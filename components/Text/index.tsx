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
  'x-small': 'text-base',
  small: 'text-lg',
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

const Text = ({
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

const Header1 = ({
  size = 'x-large',
  weight = 'semibold',
  color = 'text-gray-800',
  className,
  children
} : Props) => {
  return (
    <h1 className={cn(
      TextSize[size],
      TextWeight[weight],
      color,
      className
    )}>
      {children}
    </h1>
  )
}

const Header2 = ({
  size = 'large',
  weight = 'semibold',
  color = 'text-gray-800',
  className,
  children
} : Props) => {
  return (
    <h2 className={cn(
      TextSize[size],
      TextWeight[weight],
      color,
      className
    )}>
      {children}
    </h2>
  )
}

Text.Header1 = Header1
Text.Header2 = Header2

export default Text