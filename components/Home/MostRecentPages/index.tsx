import { PageInfo } from "../../../pages"
import { Entry } from "./Entry"

type Props = {
  pages: Array<PageInfo>
}

export const MostRecentPagesSection = ({ pages } : Props) => {
  return (
    <div className="flex flex-col md:flex-row px-8 md:px-0 gap-x-6 gap-y-8">
      {pages.map((page, index) => (
        <Entry
          key={page.title + index}
          page={page}
        />
      ))}
    </div>
  )
}