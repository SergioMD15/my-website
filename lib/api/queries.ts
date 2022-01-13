export type Query = {
  limit?: number
  include?: number
  'fields.slug'?: string
  content_type?: string
  order?: string
}

export const pageBySlugQuery = (slug: string) : Query => (
  {
    limit: 1,
    'fields.slug': slug,
    content_type: 'page'
  }
)

export const recentPagesQuery = (pageLimit: number) : Query => (
  {
    limit: pageLimit,
    content_type: 'page',
    order: '-sys.createdAt'
  }
)