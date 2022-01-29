import { RichText } from "components/RichText"
import Text from "components/Text"
import { RichTextCodeType, RichTextParagraphType, SectionType } from "lib/types"
import { MarkdownSection } from "./MarkdownSection"

type Props = {
  section: SectionType
}

export type DynamicSectionProps = {
  children: RichTextParagraphType
}

const chosenSection = (section: SectionType) => {
  const type = section.type
  let sectionContent
  console.log(section)

  switch (type) {
    case 'heading_1':
      sectionContent = section[type].text as Array<RichTextParagraphType>

      return <Text.Header2 className="mt-8">{sectionContent[0].plain_text}</Text.Header2>
    case 'paragraph':
      sectionContent = section[type].text as Array<RichTextParagraphType>

      return (
        <Text size="normal" className="inline-block">
          {sectionContent.map((paragraphContent, index) => {
            return <RichText key={index}>{paragraphContent}</RichText>
          })}
        </Text>
      )
    case 'code':
      sectionContent = section[type] as RichTextCodeType

      return (
        <MarkdownSection language={sectionContent.language}>
          {sectionContent.text[0]}
        </MarkdownSection>
      )
    case 'bulleted_list_item':
      sectionContent = section[type].text as Array<RichTextParagraphType>

      return (
        <ul className="list-disc list-inside">
          <li className="text-gray-800">
            {sectionContent.map((listItemContent, index) => {
              const key = listItemContent.plain_text.substring(0, 10) + index

              return (
                <RichText key={key}>
                  {listItemContent}
                </RichText>
              )
            })}
          </li>
        </ul>
      )
    default:
      return null
  }
}

export const DynamicSection = ({ section } : Props) => {
  return (
    <div className="pb-4">
      {chosenSection(section)}
    </div>
  )
}