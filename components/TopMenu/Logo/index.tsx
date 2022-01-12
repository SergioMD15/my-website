import Image from 'next/image'

export const Logo = () => {
  return (
    <div className='flex items-center ml-2 mr-4'>
      <a>
        <Image
          alt='logo'
          src='/logo.png'
          width={100}
          height={52}
        />
      </a>
    </div>
  )
}