import { ReactNode } from "react"
import { TopMenu } from "../TopMenu"

type Props = {
  children: ReactNode
}

export const Layout = ({ children } : Props) => {
  return (
    <>
      <TopMenu/>
      <div className="p-5">
        {children}
      </div>
    </>
  )
}