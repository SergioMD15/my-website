export const pageBySlugQuery = (slug: string) => (
  {
    limit: 1,
    include: 10,
    'fields.slug': slug,
    content_type: 'page'
  }
)

export const recentPagesQuery = (pageLimit: number) => (
  {
    limit: pageLimit,
    content_type: 'page'
  }
)