import { MarkdownSectionType, SectionType, TextSectionType } from "../../../lib/types"
import { MarkdownSection } from "./MarkdownSection"
import { TextSection } from "./TextSection"

type Props = {
  section: SectionType
}

export const DynamicSection = ({ section } : Props) => {
  switch (section.typename) {
    case 'content':
      return <TextSection {...section as TextSectionType}/>
    case 'markdownSection':
      return <MarkdownSection {...section as MarkdownSectionType}/>
    default:
      return null
  }
}