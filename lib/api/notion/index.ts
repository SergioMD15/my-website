import { Client } from "@notionhq/client"
import { ExperienceType } from "lib/types"
import { aboutMeHandler, tilHandler } from "./handlers"
import { Query, QueryCallback } from "./queries"
import { NotionTILPageType } from "./responseCleaner"


type ValidFetchResult = Array<NotionTILPageType | ExperienceType>

const notion = new Client({ auth: process.env.NOTION_KEY })

const fetchNotion = async (query: Query, handler: any) : Promise<ValidFetchResult> => {
  const response = await notion.databases.query(query)
  
  return Promise.all(response.results.map(handler))
}
  
export const fetchTILPage = async (query: QueryCallback) : Promise<Array<NotionTILPageType>> => {
  const databaseId = process.env.NOTION_TIL_DATABASE_ID as string
  
  return await fetchNotion(query(databaseId), tilHandler(notion)) as Array<NotionTILPageType>
}

export const fetchAboutMePage = async (query: QueryCallback) : Promise<Array<ExperienceType>> => {
  const databaseId = process.env.NOTION_ABOUT_ME_DATABASE_ID as string
  
  return await fetchNotion(query(databaseId), aboutMeHandler()) as Array<ExperienceType>
}