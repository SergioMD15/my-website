import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <div className='flex items-center ml-2 mr-4 cursor-pointer'>
      <Link href='/' passHref>
        <a>
          <Image
            alt='logo'
            src='/logo.png'
            width={100}
            height={52}
          />
        </a>
      </Link>
    </div>
  )
}