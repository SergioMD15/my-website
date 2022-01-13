import { TextSectionType } from "../../../../lib/types"

export const TextSection = ({ sectionId, richText } : TextSectionType) => {
  return (
    <div id={sectionId}>
      {richText}
    </div>
  )
}