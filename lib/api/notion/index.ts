import { Client } from "@notionhq/client"
import { QueryCallback } from "./queries"
import { cleanNotionPage, NotionPageType } from "./responseCleaner"

export const fetchNotion = async (query: QueryCallback) : Promise<Array<NotionPageType>> => {
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID as string
  const notionQuery = query(databaseId)
  const response = await notion.databases.query(notionQuery)

  return await Promise.all(
    response.results.map(async (pageItem) => {
      const pageContent = await notion.blocks.children.list({ block_id: pageItem.id })

      return {
        ...cleanNotionPage(pageItem),
        content: pageContent.results
      }
    })
  )
}