import { Entry, Field, Metadata, Sys } from "contentful"
import { CompanyExperience, MarkdownSectionType, PageType, SectionType, TextSectionType } from "lib/types"

type ContentfulSection = {
  fields: Array<Field> | SectionType
  metadata: Metadata
  sys: Sys
}

export type ContentfulEntry = {
  title: string
  slug: string
  shortDescription: string
  sections: Array<ContentfulSection>
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
  entry: Entry<ContentfulEntry>
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

export const cleanExperienceEntry = async (
  entry: Entry<ContentfulEntry>
) : Promise<CompanyExperience> => {
  console.log(entry)

  return {
    companyName: '',
    experience: []
  }
}