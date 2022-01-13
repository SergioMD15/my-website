import { MarkdownSectionType } from "../../../../lib/types"

export const MarkdownSection = ({ sectionId, language, codeSnippet } : MarkdownSectionType) => {
  return (
    <div id={sectionId}>
      {codeSnippet}
    </div>
  )
}