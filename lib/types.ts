// FIXME: Better type sections
type Section = {
  metadata: any,
  sys: any,
  fields: any
}

export type PageType = {
  typeName: string
  title: string
  slug: string
  sections: Array<Section>
  shortDescription?: string
  createdAt: string
  updatedAt: string
}

type TailwindVariant =
  50 | 100 | 200 | 300 | 400 | 
  500 | 600 | 700 | 800 | 900 

export type TailwindTextColor = `text-gray-${TailwindVariant}`