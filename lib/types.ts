export type Section = {
  metadata: any
  sys: any
  fields: any
}

export type PageType = {
  title: string
  slug: string
  sections: Array<Section>
  shortDescription?: string
}

type TailwindBaseColor =
  'gray' | 'red' | 'yellow' | 'green' |
  'blue' | 'indigo' | 'purple' | 'pink'

type TailwindVariant =
  50 | 100 | 200 | 300 | 400 | 
  500 | 600 | 700 | 800 | 900 

export type TailwindColor = `${TailwindBaseColor}-${TailwindVariant}`
export type TailwindTextColor = `text-${TailwindColor}`