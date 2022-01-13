import { RichText } from 'components/RichText';
import { TextSectionType } from 'lib/types';

export const TextSection = ({ sectionId, richText } : TextSectionType) => {
  return (
    <div id={sectionId}>
      <RichText>
        {richText}
      </RichText>
    </div>
  )
}