import { PageType } from "../types"
import { createClient, Entry } from 'contentful'
import { Query } from "./queries"

export type ResultType = Array<PageType>

const client = createClient({
  space: `${process.env.CF_SPACE_ID}`,
  accessToken: `${process.env.CF_DELIVERY_ACCESS_TOKEN}`
})

const cleanEntry = async (
  entry: Entry<PageType>
) : Promise<PageType> => {
  const { createdAt, updatedAt } = entry.sys
  const typeName = await getSectionName(entry.sys.contentType.sys.id)

  return {
    ...entry.fields,
    createdAt,
    updatedAt,
    typeName
  }
}

const getSectionName = async (sectionId: string) : Promise<string> => {
  const res = await client.getContentType(sectionId)

  return res.name
}

export const fetchContentful = async (query: Query) : Promise<ResultType> => {
  const res = await client.getEntries<PageType>(query)

  if (res.errors) return []

  return await Promise.all(
    res.items.map(async (entry) => await cleanEntry(entry))
  )
}