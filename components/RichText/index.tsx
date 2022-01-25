import { RichTextType } from "lib/types"

type Props = {
  children: RichTextType
}

const annotationsCSS = {
  bold: 'font-medium',
  italic: 'italic',
  strikethrough: 'line-through',
  underline: 'underline',
  code: {
    wrapper: 'inline-block px-4 py-2 bg-slate-200',
    text: 'text-red-500'
  }
}

export const RichText = ({ children } : Props) => {
  return (
    <></>
  )
}