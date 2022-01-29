import React from "react";
import { CompanyIcon } from "components/CompanyIcon";
import Text from "components/Text";
import { ExperienceType } from "lib/types"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Props = {
  experiences: Array<ExperienceType>
}

type ValidCompany = 'zapiens' | 'upc' | 'factorial'

const companyBackground = {
  zapiens: '#399FFF',
  upc: '#FFFFFF',
  factorial: '#FFFFFF'
}

export const ExperienceTimeline = ({ experiences } : Props) => {

  return (
    <VerticalTimeline>
      {experiences.map(experience => {
        const { companyName, dates, description, position, url } = experience
        const cleanCompanyName = companyName.split(' ')[0].toLowerCase() as ValidCompany
        const background = companyBackground[cleanCompanyName]
        const companyIcon = <CompanyIcon companyName={companyName} url={url}/>

        return (
          <VerticalTimelineElement
            key={`${companyName}-${position}`}
            iconStyle={{ background: background }}
            icon={companyIcon}
            date={dates}
          >
            <Text tagName="h1" weight="medium" size="medium">
              {position}
            </Text>
            <div className="px-6 pt-4">
              <ul className="list-disc">
                {description.map((descriptionFragment, index) => {
                  return (
                    <li key={descriptionFragment[0] + index}>
                      {descriptionFragment}
                    </li>
                  )
                })}
              </ul>
            </div>
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  )
}