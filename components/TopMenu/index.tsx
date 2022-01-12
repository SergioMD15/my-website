import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'
import { Tab } from './Tab'

const tabs = [
  {
    label: 'About me',
    href: '/about'
  },
  {
    label: 'TIL',
    href: '/'
  }
]

export const TopMenu = () => {
  return (
    <div className='flex flex-row md:justify-start justify-between sticky top-0 h-20 z-50 px-4'>
      <Logo />
      <div className='hidden md:flex md:flex-row'>
        {tabs.map(tab => (
          <Tab
            key={tab.label}
            label={tab.label}
            href={tab.href}
          />
        ))}
      </div>
      <HamburgerMenu />
    </div>
  )
}