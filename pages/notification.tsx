import { Layout } from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notification() {
  const { changeTheme } = useAppData()

  return (
    <Layout title="Notification" subtitle="Last news">
      <strong>Content!!</strong>
      <button onClick={changeTheme}>ToggleTheme</button>
    </Layout>
  )
}
