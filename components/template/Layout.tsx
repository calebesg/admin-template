import useAppData from '../../data/hook/useAppData'
import { Content } from './Content'
import { Header } from './Header'
import { SideBar } from './SideBar'

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

export function Layout(props: LayoutProps) {
  const { theme } = useAppData()

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <SideBar />

      <div className="flex-1 flex flex-col gap-8 p-7 bg-gray-100 dark:bg-gray-800 transition-colors">
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  )
}
