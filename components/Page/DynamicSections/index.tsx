import { BulletedList } from "components/BulletedList"
import Text from "components/Text"
import { RichTextType, SectionType } from "lib/types"
import { MarkdownSection } from "./MarkdownSection"

type Props = {
  section: SectionType
}

export type DynamicSectionProps = {
  children: RichTextType
}

const chosenSection = (section: SectionType) => {
  const type = section.type

  switch (type) {
    case 'heading_1':
      return <Text.Header2>{section[type].text[0].plain_text}</Text.Header2>
    case 'bulleted_list_item':
      return <BulletedList>{section[type].text}</BulletedList>
    case 'paragraph':
      return <Text>{section[type].text[0].plain_text}</Text>
    case 'code':
      return <MarkdownSection>{section[type].text[0]}</MarkdownSection>
    default:
      return null
  }
}

export const DynamicSection = ({ section } : Props) => {
  return (
    <div className="pb-8">
      {chosenSection(section)}
    </div>
  )
}