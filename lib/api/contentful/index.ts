import { PageType, SimplePage, CompanyExperience } from "lib/types"
import { createClient } from 'contentful'
import { Query } from "./queries"
import { cleanCompanyEntry, ContentfulCompanyEntry } from "./responseCleaner"

export type ResultType = Array<PageType | SimplePage | CompanyExperience>

const client = createClient({
  space: `${process.env.CF_SPACE_ID}`,
  accessToken: `${process.env.CF_DELIVERY_ACCESS_TOKEN}`
})

export const fetchCompanyExperience = async (query: Query) : Promise<ResultType> => {
  const res = await client.getEntries<ContentfulCompanyEntry>(query)

  if (res.errors) return []

  return await Promise.all(
    res.items.map(async (entry) => await cleanCompanyEntry(entry))
  )
}