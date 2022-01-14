import React from "react";
import { CompanyIcon } from "components/CompanyIcon";
import Text from "components/Text";
import { CompanyExperience } from "lib/types"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RichText } from "components/RichText";

type Props = {
  companies: Array<CompanyExperience>
}

type ValidCompany = 'zapiens' | 'upc' | 'factorial'

const companyBackground = {
  zapiens: '#399FFF',
  upc: '#FFFFFF',
  factorial: '#FFFFFF'
}

const formatDateExperience = (company: CompanyExperience) => {
  const startDate = company.experience[0].startDate
  const endDate = company.experience?.at(-1)?.endDate

  const startYear = new Date(Date.parse(startDate)).getFullYear()
  const endYear = endDate ? new Date(Date.parse(endDate)).getFullYear() : 'In progress'

  if (startYear === endYear) {
    return `${endYear}`
  }

  return `${startYear} - ${endYear}`
} 

export const ExperienceTimeline = ({ companies } : Props) => {
  return (
    <VerticalTimeline>
      {companies.map(company => {
        const { companyName, experience: experiencesList } = company
        const cleanCompanyName = companyName.split(' ')[0].toLowerCase() as ValidCompany
        const background = companyBackground[cleanCompanyName]
        const companyIcon = <CompanyIcon companyName={companyName} url={company.url}/>
        const companyDates = formatDateExperience(company)

        return(
          <React.Fragment key={company.companyName}>
            {experiencesList.map((experience, index) => {
              const isFirst = index === 0

              return (
                <VerticalTimelineElement
                  key={`${companyName}-${experience.position}`}
                  iconStyle={{ background: background }}
                  icon={companyIcon}
                  date={isFirst ? companyDates : ''}
                >
                  <Text.Header1 weight="medium" size="medium">
                    {experience.position}
                  </Text.Header1>
                  <div className="px-6">
                    <RichText>
                      {experience.description}
                    </RichText>
                  </div>
                </VerticalTimelineElement>
              )
            })}
          </React.Fragment>
        )
      })}
    </VerticalTimeline>
  )
}