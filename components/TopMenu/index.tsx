import { Logo } from "./Logo"
import { Tab } from "./Tab"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from "react-icons";

const tabs = [
  {
    label: 'About me',
    href: '/'
  },
  {
    label: 'TIL',
    href: '/'
  },
  {
    label: 'My experience',
    href: '/'
  }
]

const HamburgerMenu = () => {
  return (
    <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: '24px' }}>
      <div className="flex items-center md:hidden">
      <svg viewBox="0 0 100 80" width="24" height="24">
          <rect width="100" height="16"></rect>
          <rect y="30" width="100" height="16"></rect>
          <rect y="60" width="100" height="16"></rect>
        </svg>
      </div>
    </IconContext.Provider>
  )
}

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