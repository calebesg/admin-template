import { Title } from './Title'

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <Title title={props.title} subtitle={props.subtitle} />
    </header>
  )
}
