import { CopyBlock, hopscotch as theme } from "react-code-blocks";
import { DynamicSectionProps } from '..';

export const MarkdownSection = ({ children } : DynamicSectionProps) => {
  return (
    <CopyBlock
      text={children.plain_text}
      language='JavaScript'
      showLineNumbers
      theme={theme}
      codeBlock
    />
  )
}