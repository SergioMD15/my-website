import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <div className='flex items-center ml-2 mr-4'>
      <Link href='/' passHref={true}>
        <a>
          <Image
            alt='logo'
            src='/doberman.png'
            width={64}
            height={64}
            layout='fixed'
          />
        </a>
      </Link>
    </div>
  )
}