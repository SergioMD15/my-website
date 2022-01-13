import { MarkdownSectionType, PageType, SectionType, SimplePage, TextSectionType } from "lib/types"
import { createClient, Entry, Field, Metadata, Sys } from 'contentful'
import { Query } from "./queries"

export type ResultType = Array<PageType | SimplePage>

type ContentfulSection = {
  fields: Array<Field> | SectionType
  metadata: Metadata
  sys: Sys
}

type ContentfulEntry = {
  title: string
  slug: string
  shortDescription: string
  sections: Array<ContentfulSection>
} & ContentfulSection

const client = createClient({
  space: `${process.env.CF_SPACE_ID}`,
  accessToken: `${process.env.CF_DELIVERY_ACCESS_TOKEN}`
})

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

const cleanEntry = async (
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

export const fetchContentful = async (query: Query) : Promise<ResultType> => {
  const res = await client.getEntries<ContentfulEntry>(query)

  if (res.errors) return []

  return await Promise.all(
    res.items.map(async (entry) => await cleanEntry(entry))
  )
}