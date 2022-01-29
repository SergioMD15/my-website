import cn from "classnames"
import { RichTextParagraphType, StylesAnnotations } from "lib/types"
import Link from "next/link"
import React from "react"

type Props = {
  children: RichTextParagraphType
}

const sanitizeColor = (color: string | undefined) : string => {
  if (!color || color === 'default') return ''
  
  return `text-${color}-600`
}

const annotationClassnames = {
  bold: 'font-medium',
  italic: 'italic',
  strikethrough: 'line-through',
  underline: 'underline',
  code: {
    wrapper: 'inline-block px-4 py-2 bg-slate-200',
    text: 'text-red-500'
  },
  color: sanitizeColor
}

type AnnotationType = keyof typeof annotationClassnames

const getAnnotationsClassnames = (annotations : StylesAnnotations) : string => {
  const sanitisedColor = annotationClassnames.color(annotations?.color)
  delete annotations.color
  
  const formattingClassnames : Array<string> = []
  for (let key in annotations) {
    if (annotations[key as keyof StylesAnnotations]) {
      // I hate using "as" everywhere...
      formattingClassnames.push(annotationClassnames[key as AnnotationType] as string)
    }
  }

  return `${formattingClassnames.join(' ')} ${sanitisedColor}`
}

const PlainTextRepresentation = ({ children } : Props) => {
  return (
    <span className={getAnnotationsClassnames(children.annotations)}>
      {children.plain_text}
    </span>
  )
}

export const RichText = ({ children } : Props) => {
  {return children?.href
    ? (
      <Link href={children.href} passHref>
        <a>
          <PlainTextRepresentation>
            {children}
          </PlainTextRepresentation>
        </a>
      </Link>
    ) : (
      <PlainTextRepresentation>
        {children}
      </PlainTextRepresentation>
    )
  }
}