import { ReactNode } from 'react'
import { TopMenu } from '../TopMenu'

type Props = {
  children: ReactNode
}

export const Layout = ({ children } : Props) => {
  return (
    <>
      <TopMenu/>
      <div className='flex flex-col max-w-5xl mx-auto px-8 lg:px-0 pt-8'>
        {children}
      </div>
    </>
  )
}