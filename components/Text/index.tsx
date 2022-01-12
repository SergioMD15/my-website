import cn from 'classnames'

const TextSize = {
  small: 'text-base',
  medium: 'text-xl',
  large: 'text-3xl',
  'x-large': 'text-5xl'
}

const TextWeight = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold'
}

type TailwindBaseColor =
  'gray' | 'red' | 'yellow' | 'green' |
  'blue' | 'indigo' | 'purple' | 'pink'

type TailwindVariant =
  50 | 100 | 200 | 300 | 400 | 
  500 | 600 | 700 | 800 | 900 

type TailwindColor = `${TailwindBaseColor}-${TailwindVariant}`

type Props = {
  size?: keyof typeof TextSize
  weight?: keyof typeof TextWeight
  color?: TailwindColor
  className?: string
  children: string
}

export const Text = ({
  size = 'medium',
  weight = 'normal',
  color = 'gray-200',
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