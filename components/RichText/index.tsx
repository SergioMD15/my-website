import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer"
import { Text } from 'components/Text';
import cn from 'classnames'
import React, { ReactNode } from 'react';
import { RichText as RichTextType } from 'lib/types';

type Props = {
  children: RichTextType
}

export const RichText = ({ children } : Props) => {
  const commonStyles = 'inline-block clear-both'

  const options : Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => {
        return (
          <Text weight='semibold' size='normal'>{text}</Text>
        )
      },
      [MARKS.CODE]: (text: ReactNode) => {
        return (
          <div className={cn(
            'bg-zinc-200 p-1 rounded-md',
            commonStyles
          )}>
            <Text size='normal' color='text-red-600'>
              {text}
            </Text>
          </div>
        )
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => {
        return (
          <div className='mb-4'>
            <Text size='normal'>{children}</Text>
          </div>
        )
      },
      [BLOCKS.HEADING_1]: (node: any, children: ReactNode) => {
        return (
          <div className='mb-8'>
            <Text size='x-large' weight='medium'>{children}</Text>
          </div>
        )
      }
    }
  }
  return(
    <div>
      {documentToReactComponents(children, options)}
    </div>
  )
}