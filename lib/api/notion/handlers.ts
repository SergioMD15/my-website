import { Client } from "@notionhq/client/build/src"
import { ExperienceType } from "lib/types"
import { cleanExperienceItem, cleanNotionPage } from "./responseCleaner"

type AboutMeHandlerCallback = (experience: any) => Promise<ExperienceType>
type TILHandlerCallback = (pageItem: any) => Promise<any>

export type HandlerCallbackType = AboutMeHandlerCallback | TILHandlerCallback

export const tilHandler = (notion: Client) : TILHandlerCallback => {
  return async (pageItem: any) => {
    const pageContent = await notion.blocks.children.list({ block_id: pageItem.id })

    return {
      ...cleanNotionPage(pageItem),
      content: pageContent.results
    }
  }
}

export const aboutMeHandler = () : AboutMeHandlerCallback => {
  return async (experience: any) => {
    return cleanExperienceItem(experience)
  }
}