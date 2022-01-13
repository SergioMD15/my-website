export type Query = {
  limit?: number
  include?: number
  'fields.slug'?: string
  content_type?: string
  order?: string,
  select?: string
}

export const pageBySlugQuery = (slug: string) : Query => (
  {
    limit: 1,
    'fields.slug': slug,
    content_type: 'page',
    include: 10
  }
)

export const recentPagesQuery = (pageLimit: number) : Query => (
  {
    limit: pageLimit,
    content_type: 'page',
    order: '-sys.createdAt',
  }
)

export const allRecentPagesQuery = () : Query => (
  {
    content_type: 'page',
    order: '-sys.createdAt',
  }
)

export const allExperienceQuery = () : Query => (
  {
    content_type: 'company',
    order: '-sys.createdAt',
  }
)