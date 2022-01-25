import { RichText } from "components/RichText"
import { RichTextType } from "lib/types"

type Props = {
  children: Array<RichTextType>
}

export const BulletedList = ({ children } : Props) => {
  return (
    <ul>
      {children.map((listItem, index) => {
        return (
          <li key={index} className="inline-block">
            <RichText>{listItem}</RichText>
          </li>
        )
      })}
    </ul>
  )
}