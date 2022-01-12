import Link from "next/link"

type Props = {
  label: string,
  href: string
}

export const Tab = ({ label, href } : Props) => {
  return (
    <Link href={href} passHref={true}>
      <a className='flex items-center hover:text-sky-600 text-xl px-4'>
        {label}
      </a>
    </Link>
  )
}