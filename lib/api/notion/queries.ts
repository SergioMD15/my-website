export type Query = {
  database_id: string
  sorts?: Array<any>
  filter?: any
  pageSize?: number
  initialCursor?: string
}

export type QueryCallback = (id: string) => Query
const NOTION_PAGESIZE_LIMIT = 100

export const getPageBySlugQuery = (slug: string) : QueryCallback => {
  return (databaseId: string) => (
    {
      database_id: databaseId,
      sorts: [
        {
          property: 'Publish date',
          direction: 'ascending',
        },
      ],
      filter: {
        property: 'Slug',
        text: {
          equals: slug
        }
      }
    }
  )
}

export const getPagesQuery = (pageSize = NOTION_PAGESIZE_LIMIT) : QueryCallback => {
  return (databaseId: string) => (
    {
      database_id: databaseId,
      sorts: [
        {
          property: 'Publish date',
          direction: 'ascending',
        },
      ],
      page_size: pageSize
    }
  )
}

export const getCompanyExperienceQuery = () : QueryCallback => {
  return (databaseId: string) => (
    {
      database_id: databaseId,
      sorts: [
        {
          property: 'Start date',
          direction: 'ascending',
        },
      ],
    }
  )
}