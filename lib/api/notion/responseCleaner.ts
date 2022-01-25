import { SimplePage } from "lib/types"

export type NotionPageType = {
  pageContent?: Array<any>
} & SimplePage

export const cleanNotionPage = (page: any) : NotionPageType => {
  const { Slug, Description, Title } = page.properties

  return {
    slug: Slug.formula.string,
    shortDescription: Description.rich_text[0]?.plain_text,
    title: Title.title[0]?.plain_text,
    createdAt: page.created_time
  }
}