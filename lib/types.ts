export type ValidSectionType = 'heading_1' | 'code' | 'paragraph'

export type RichTextType = {
  type: string,
  text: {
    content: string,
    link: any
  }
  annotations: StylesAnnotations
  plain_text: string
  href: string | null
}

type ValidSectionContent = {
  [key in ValidSectionType]: {
    text: Array<RichTextType>
  }
}

type StylesAnnotations = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: boolean
}

export type SectionType = {
  type: ValidSectionType
} & ValidSectionContent

export type SimplePage = {
  title: string
  slug: string
  shortDescription?: string
  createdAt: string
}

export type PageType = {
  content: Array<SectionType>
} & SimplePage

export type ExperienceType = {
  companyName: string
  url: string
  dates: string
  position: string
  description: Array<string>
}