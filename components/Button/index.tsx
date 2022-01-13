import cn from 'classnames'
import Link from 'next/link'

type ButtonType = 'primary' | 'secondary'

const ButtonTypeStyles = {
  primary: {
    hover: 'hover:bg-amber-300',
    backgroundColor: 'bg-amber-200',
    borderColor: 'border-yellow-400',
  },
  secondary: {
    hover: 'hover:bg-slate-300',
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
  const typeStyles = Object.values(ButtonTypeStyles[type])

  return (
    <Link href={href} passHref>
      <a>
        <button
          className={cn(
            'py-2 px-8 rounded-full border-2',
            'font-bold',
            ...typeStyles
          )}
        >
          {children}
        </button>
      </a>
    </Link>
  )
}