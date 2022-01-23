export type NotionPageType = {
  title: string,
  slug: string,
  description: string,
  createdTime: string,
  pageContent?: Array<any>
}

export const cleanNotionPage = (page: any) : NotionPageType => {
  const { Slug, Description, Title } = page.properties

  return {
    slug: Slug.formula.string,
    description: Description.rich_text[0].plain_text,
    title: Title.title[0].plain_text,
    createdTime: page.created_time
  }
}