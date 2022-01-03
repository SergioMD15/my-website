export type Section = {
  metadata: any
  sys: any
  fields: any
}

export type PageType = {
  title: string
  slug: string
  sections: Array<Section>
}