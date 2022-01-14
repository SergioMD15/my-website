import Image from "next/image"
import Link from "next/link"

type Props = {
  companyName: string
  url?: string
}

export const CompanyIcon = ({ companyName, url } : Props) => {
  const filename = companyName.split(' ')[0].toLowerCase()
  const image = <Image alt={`${companyName} logo`} src={`/companies/${filename}.svg`} layout="fill" />

  if (url) {
    return (
      <Link href={url} passHref>
        <a>
          {image}
        </a>
      </Link>
    )
  }

  return image
}