import { Entry, Field, Metadata, Sys } from "contentful"
import { CompanyExperience, ExperienceType, PageType, SectionType } from "lib/types"

type ContentfulSection = {
  fields: Array<Field> | SectionType | ExperienceType
  metadata: Metadata
  sys: Sys
}

export type ContentfulCompanyEntry = {
  companyName: string
  url: string
  experience: Array<ContentfulSection>
} & ContentfulSection

export const cleanCompanyEntry = async (
  entry: Entry<ContentfulCompanyEntry>
) : Promise<CompanyExperience> => {
  const { experience, ...otherFields } = entry.fields

  return {
    ...otherFields,
    experience: experience.map(exp => exp.fields) as Array<ExperienceType>
  }
}