export type Query = {
  limit?: number
  include?: number
  'fields.slug'?: string
  content_type?: string
  order?: string,
  select?: string
}

export const allCompanyExperienceQuery = () : Query => (
  {
    content_type: 'company',
    order: 'fields.startDate',
  }
)