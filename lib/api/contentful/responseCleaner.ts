import { Entry, Field, Metadata, Sys } from "contentful"
import { CompanyExperience, ExperienceType, MarkdownSectionType, PageType, SectionType, TextSectionType } from "lib/types"

type ContentfulSection = {
  fields: Array<Field> | SectionType | ExperienceType
  metadata: Metadata
  sys: Sys
}

export type ContentfulPageEntry = {
  title: string
  slug: string
  shortDescription: string
  sections: Array<ContentfulSection>
} & ContentfulSection

export type ContentfulCompanyEntry = {
  companyName: string
  url: string
  experience: Array<ContentfulSection>
} & ContentfulSection


const cleanSections = (sections: Array<ContentfulSection>) => {
  return sections.map(section => {
    switch (section.sys.contentType.sys.id) {
      case 'markdownSection':
        return {
          typename: section.sys.contentType.sys.id,
          ...section.fields as MarkdownSectionType
        }
      case 'content':
        return {
          typename: section.sys.contentType.sys.id,
          ...section.fields as TextSectionType
        }
      default:
        return null
    }
  })
}

export const cleanPageEntry = async (
  entry: Entry<ContentfulPageEntry>
) : Promise<PageType> => {
  const { createdAt, updatedAt } = entry.sys
  const { sections, ...entryFields } = entry.fields

  return {
    ...entryFields,
    sections: cleanSections(sections) as Array<SectionType>,
    createdAt,
    updatedAt
  }
}

export const cleanCompanyEntry = async (
  entry: Entry<ContentfulCompanyEntry>
) : Promise<CompanyExperience> => {
  const { experience, ...otherFields } = entry.fields

  return {
    ...otherFields,
    experience: experience.map(exp => exp.fields) as Array<ExperienceType>
  }
}