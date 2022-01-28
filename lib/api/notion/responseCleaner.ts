import { ExperienceType, SimplePage } from "lib/types"

export type NotionTILPageType = {
  pageContent?: Array<any>
} & SimplePage

const getPlainTextFromRichText = (description: any) : string => {
  return description.rich_text[0]?.plain_text
}

const getTitle = (title: any) : string => {
  return title.title[0]?.plain_text
}

const getSplittedDate = (date: any, dateFormatter: Intl.DateTimeFormat) : string => {
  if (!date) return 'Today'

  const splitDate = date.start.split('-').map((dateFragment: string) => parseInt(dateFragment))
  const cleanDate = new Date(splitDate[0], splitDate[1], splitDate[2])

  return dateFormatter.format(cleanDate)
}

const getDates = (startDate: any, endDate: any) : string => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
  const cleanStartDate = getSplittedDate(startDate, dateFormatter)
  const cleanEndDate = getSplittedDate(endDate, dateFormatter)

  return `${cleanStartDate} - ${cleanEndDate}`
}

export const cleanNotionPage = (page: any) : NotionTILPageType => {
  const { Slug, Description, Title } = page.properties

  return {
    title: getTitle(Title),
    shortDescription: getPlainTextFromRichText(Description),
    slug: Slug.formula.string,
    createdAt: page.created_time
  }
}

export const cleanExperienceItem = (experience: any) : ExperienceType => {
  const {
    URL,
    Company,
    Description,
    Name,
    "Start date": startDate,
    "End date": endDate,
  } = experience.properties

  return {
    companyName: Company.select.name,
    url: URL.url,
    description: getPlainTextFromRichText(Description).split('\n'),
    position: getTitle(Name),
    dates: getDates(startDate.date, endDate.date)
  }
}