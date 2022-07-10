import useAppData from '../../data/hook/useAppData'
import { Avatar } from './Avatar'
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
      <div className="flex items-center gap-4">
        <ThemeButton value={theme} onChange={changeTheme} />
        <Avatar />
      </div>
    </header>
  )
}
