import Link from "next/link"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IconContext } from "react-icons";

type Props = {
  href: string,
  children: string
}

const ArrowIcon = () => (
  <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
    <div className="flex items-center pl-1">
      <AiOutlineArrowRight />
    </div>
  </IconContext.Provider>
)

export const ArrowLink = ({ href, children } : Props) => {
  return (
    <Link href={href} passHref>
      <a href={href} className="inline-flex">
        <p className="text-blue">
          {children}
        </p>
        <ArrowIcon />
      </a>
    </Link>
  )
}