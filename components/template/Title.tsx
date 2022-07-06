interface TitleProps {
  title: string
  subtitle: string
}

export function Title(props: TitleProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <span>{props.subtitle}</span>
    </div>
  )
}
