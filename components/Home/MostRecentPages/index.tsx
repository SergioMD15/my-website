import { PageType } from "../../../lib/types"
import { Entry } from "./Entry"

type Props = {
  pages: Array<PageType>
}

export const MostRecentPagesSection = ({ pages } : Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-x-6 gap-y-8">
      {pages.map((page, index) => (
        <Entry
          key={page.title + index}
          page={page}
        />
      ))}
    </div>
  )
}