import cn from 'classnames'
import { useEffect, useState } from 'react'
import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'
import { Tab } from './Tab'

const tabs = [
  // {
  //   label: 'About me',
  //   href: '/about'
  // },
  {
    label: 'TIL',
    href: '/til'
  }
]

export const TopMenu = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const checkScrolledTop = () => {
    setIsScrolled(window.pageYOffset > 0)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", checkScrolledTop);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", checkScrolledTop);
    };
  }, [])

  return (
    <div className={cn(
      'flex flex-row md:justify-start justify-between px-4 bg-light-blue',
      'sticky top-0 h-20 z-50',
      isScrolled && 'border-b-2'
    )}>
      <Logo />
      <div className='flex flex-row md:justify-start justify-end'>
        {tabs.map(tab => (
          <Tab
            key={tab.label}
            label={tab.label}
            href={tab.href}
          />
        ))}
      </div>
    </div>
  )
}