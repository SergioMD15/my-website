import Link from "next/link"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { Text } from "../Text";

type Props = {
  href: string,
  children: string
}

const ArrowIcon = () => (
  <IconContext.Provider value={{ color: "" }}>
    <div className="flex items-center pl-1">
      <AiOutlineArrowRight />
    </div>
  </IconContext.Provider>
)

export const ArrowLink = ({ href, children } : Props) => {
  return (
    <Link href={href} passHref>
      <a href={href} className="inline-flex">
        <Text size="small" weight="medium" className="underline">
          {children}
        </Text>
        <ArrowIcon />
      </a>
    </Link>
  )
}