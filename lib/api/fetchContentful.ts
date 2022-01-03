import { PageType } from "../types"
import { createClient } from 'contentful'
import { pageBySlugQuery } from "./queries"

type ResultType = PageType | undefined

const client = createClient({
  space: `${process.env.CF_SPACE_ID}`,
  accessToken: `${process.env.CF_DELIVERY_ACCESS_TOKEN}`
})

export const fetchPageBySlug = async (slug: string) : Promise<ResultType> => {
  const query = pageBySlugQuery(slug)

  const res = await client.getEntries<PageType>(query)

  return !!res.errors?.length ? undefined : res.items[0]?.fields
}