import Link from "next/link"

type Props = {
  label: string,
  href: string
}

export const Tab = ({ label, href } : Props) => {
  return (
    <Link href={href} passHref={true}>
      <a className='flex items-center hover:bg-emerald-300 text-lg px-4'>
        {label}
      </a>
    </Link>
  )
}