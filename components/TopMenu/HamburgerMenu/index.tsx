import { IconContext } from 'react-icons';

export const HamburgerMenu = () => {
  return (
    <IconContext.Provider value={{ color: 'blue', className: 'global-class-name', size: '24px' }}>
      <div className='flex items-center md:hidden'>
        <svg viewBox='0 0 100 80' width='24' height='24'>
          <rect width='100' height='16'></rect>
          <rect y='30' width='100' height='16'></rect>
          <rect y='60' width='100' height='16'></rect>
        </svg>
      </div>
    </IconContext.Provider>
  )
}