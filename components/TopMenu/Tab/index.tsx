import { Text } from '../../Text'

type Props = {
  label: string,
  href: string
}

export const Tab = ({ label, href } : Props) => {
  return (
    <div className='flex items-center px-4'>
      <a href={href}>
        <Text size='normal' weight='medium' className='hover:text-sky-600'>
          {label}
        </Text>
      </a>
    </div>
  )
}