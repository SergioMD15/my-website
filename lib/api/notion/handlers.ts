import { Client } from "@notionhq/client/build/src"
import { cleanExperienceItem, cleanNotionPage } from "./responseCleaner"

export const tilHandler = (notion: Client) => {
  return async (pageItem: any) => {
    const pageContent = await notion.blocks.children.list({ block_id: pageItem.id })

    return {
      ...cleanNotionPage(pageItem),
      content: pageContent.results
    }
  }
}

export const aboutMeHandler = () => {
  return async (experience: any) => {
    return cleanExperienceItem(experience)
  }
}