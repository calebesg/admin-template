import { Content } from './Content'
import { Header } from './Header'
import { SideBar } from './SideBar'

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

export function Layout(props: LayoutProps) {
  return (
    <div>
      <SideBar />
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  )
}
