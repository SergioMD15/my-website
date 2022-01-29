import cn from 'classnames'
import React, { ReactNode } from 'react'

type TailwindColor = 'red' | 'gray'

type TailwindVariant =
  50 | 100 | 200 | 300 | 400 | 
  500 | 600 | 700 | 800 | 900 

export type TailwindTextColor = `text-${TailwindColor}-${TailwindVariant}`

type HeaderProps = {
  className?: string
  children: ReactNode
}

type Props = {
  size?: keyof typeof TextSize
  weight?: keyof typeof TextWeight
  color?: TailwindTextColor
  tagName?: string
} & HeaderProps


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
  tagName = 'p',
  children
} : Props) => {
  return (
    React.createElement(
      tagName,
      {
        className: cn(
          TextSize[size],
          TextWeight[weight],
          color,
          className
        )
      },
      children
    )
  )
}

const Header1 = ({
  className,
  children
} : HeaderProps) => {
  return (
    <Text
      size='x-large'
      weight='semibold'
      color='text-gray-800'
      tagName='h1'
      className={className}
    >
      {children}
    </Text>
  )
}

const Header2 = ({
  className,
  children
} : HeaderProps) => {
  return (
    <Text
      size='large'
      weight='semibold'
      color='text-gray-800'
      tagName='h2'
      className={className}
    >
      {children}
    </Text>
  )
}

Text.Header1 = Header1
Text.Header2 = Header2

export default Text