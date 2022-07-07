interface TitleProps {
  title: string
  subtitle: string
}

export function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900">{props.title}</h1>
      <span className="font-light text-gray-500">{props.subtitle}</span>
    </div>
  )
}
