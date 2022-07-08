import useAppData from '../../data/hook/useAppData'
import { ThemeButton } from './ThemeButton'
import { Title } from './Title'

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData()

  return (
    <header className="flex justify-between">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex">
        <ThemeButton value={theme} onChange={changeTheme} />
      </div>
    </header>
  )
}
