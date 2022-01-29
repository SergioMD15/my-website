import { CopyBlock, dracula as theme } from "react-code-blocks";
import { DynamicSectionProps } from '..';

type Props = {
  language: string
} & DynamicSectionProps

export const MarkdownSection = ({ children, language } : Props) => {
  return (
    <CopyBlock
      text={children.plain_text}
      language='jsx'
      showLineNumbers
      theme={theme}
      codeBlock
      customStyle={{
        padding: '16px',
        fontSize: '16px',
        fontFamily: 'Fira Code'
      }}
    />
  )
}