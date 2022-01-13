import { PageType, SimplePage, CompanyExperience } from "lib/types"
import { createClient } from 'contentful'
import { Query } from "./queries"
import { cleanExperienceEntry, cleanPageEntry, ContentfulEntry } from "./responseCleaner"

export type ResultType = Array<PageType | SimplePage | CompanyExperience>

const client = createClient({
  space: `${process.env.CF_SPACE_ID}`,
  accessToken: `${process.env.CF_DELIVERY_ACCESS_TOKEN}`
})

export const fetchPages = async (query: Query) : Promise<ResultType> => {
  const res = await client.getEntries<ContentfulEntry>(query)

  if (res.errors) return []

  return await Promise.all(
    res.items.map(async (entry) => await cleanPageEntry(entry))
  )
}

export const fetchExperience = async (query: Query) : Promise<ResultType> => {
  const res = await client.getEntries<ContentfulEntry>(query)

  if (res.errors) return []

  return await Promise.all(
    res.items.map(async (entry) => await cleanExperienceEntry(entry))
  )
}