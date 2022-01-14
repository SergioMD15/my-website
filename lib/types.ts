export type ValidSectionType = 'content' | 'markdownSection' | 'page'

export type RichText = any

type CommonSectionProps = {
  typename?: ValidSectionType
}

export type TextSectionType = {
  sectionId: string
  // FIXME: Improve this
  richText: RichText
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
  createdAt: string
} & CommonSectionProps

export type PageType = {
  sections: Array<SectionType>
  updatedAt: string
} & SimplePage

export type ExperienceType = {
  startDate: string
  endDate?: string
  position: string
  description: RichText
}

export type CompanyExperience = {
  companyName: string
  url: string
  experience: Array<ExperienceType>
}