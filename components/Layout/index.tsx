import { ReactNode } from "react"
import { TopMenu } from "../TopMenu"

type Props = {
  children: ReactNode
}

export const Layout = ({ children } : Props) => {
  return (
    <>
      <TopMenu/>
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        {children}
      </div>
    </>
  )
}