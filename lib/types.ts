import { RichTextData } from "contentful"

type ValidSectionType = 'content' | 'markdownSection' | 'page'

type CommonSectionProps = {
  typename: ValidSectionType
}

export type TextSectionType = {
  sectionId: string
  richText: RichTextData
} & CommonSectionProps

export type MarkdownSectionType = {
  sectionId: string
  language: string
  codeSnippet: string
} & CommonSectionProps

export type SectionType = TextSectionType | MarkdownSectionType

export type SimplePage = {
  title: string
  slug: string
  shortDescription?: string
} & CommonSectionProps

export type PageType = {
  sections: Array<SectionType>
  createdAt: string
  updatedAt: string
} & SimplePage

type TailwindVariant =
  50 | 100 | 200 | 300 | 400 | 
  500 | 600 | 700 | 800 | 900 

export type TailwindTextColor = `text-gray-${TailwindVariant}`