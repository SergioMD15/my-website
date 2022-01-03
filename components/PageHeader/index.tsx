type Props = {
  title: string
}

export const PageHeader = ({ title } : Props) => {
  return (
    <h1>
      {title}
    </h1>
  )
}