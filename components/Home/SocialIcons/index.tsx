import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { IconContext } from 'react-icons'

const socialLinks = [
  {
    socialNetwork: 'github',
    href: 'https://github.com/SergioMD15',
    icon: FaGithubSquare
  },
  {
    socialNetwork: 'linkedin',
    href: 'https://linkedin.com/in/sergio-mosquera-dopico',
    icon: FaLinkedin
  },
  {
    socialNetwork: 'mail',
    href: 'mailto:sergiomosquera96@gmail.com',
    icon: GrMail
  }
]

type SocialIconProps = {
  href: string
  icon: IconType
}

const SocialIcon = ({ href, icon } : SocialIconProps) => {
  return (
    <Link href={href} passHref>
      <a>
        <IconContext.Provider value={{ size: '36px', color: '#111827' }}>
          {React.createElement(icon, null)}
        </IconContext.Provider>
      </a>
    </Link>
  )
}

export const SocialIcons = () => {
  return (
    <div className="flex flex-row items-center gap-x-12 md:gap-x-8">
      {socialLinks.map((linkInfo) => (
        <SocialIcon
          key={linkInfo.socialNetwork}
          icon={linkInfo.icon}
          href={linkInfo.href}
        />
      ))}
    </div>
  )
}