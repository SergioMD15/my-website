import { Logo } from "./Logo"
import { Tab } from "./Tab"

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

export const TopMenu = () => {
  return (
    <div className='flex flex-row h-20 px-4 sticky top-0 z-50 bg-emerald-200'>
      <Logo />
      <div className='flex flex-row'>
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