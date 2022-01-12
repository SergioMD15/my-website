import cn from 'classnames'

type ButtonType = 'primary' | 'secondary'

const ButtonTypeStyles = {
  primary: {
    backgroundColor: 'bg-amber-200',
    borderColor: 'border-yellow-400',
  },
  secondary: {
    backgroundColor: 'bg-slate-100',
    borderColor: 'border-slate-700'
  }
}

type Props = {
  type?: ButtonType
  children: string
  href: string
}

export const Button = ({
  type = 'primary',
  href,
  children
} : Props) => {
  const { backgroundColor, borderColor } = ButtonTypeStyles[type]

  return (
    <a href={href}>
      <button
        className={cn(
          'py-2 px-8 rounded-full border-2',
          'font-bold',
          backgroundColor,
          borderColor
        )}
      >
        {children}
      </button>
    </a>
  )
}