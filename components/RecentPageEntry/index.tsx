import { PageInfo } from "../../pages"
import { ArrowLink } from "../ArrowLink"

type Props = {
  page: PageInfo
}

export const RecentPageEntry = ({ page } : Props) => {
  return (
    <div className="flex flex-col bg-gray-100 border rounded-lg border-gray-400 p-4">
      <h1>
        {page.title}
      </h1>
      <p>
        {page.shortDescription}
      </p>
      <ArrowLink href={page.slug}>
        Continue reading
      </ArrowLink>
    </div>
  )
}