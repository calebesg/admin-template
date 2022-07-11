import Image from 'next/image'
import Router from 'next/router'
import { useAuth } from '../../data/hook'

interface RequiredAuthProps {
  children: any
}

export function RequiredAuth({ children }: RequiredAuthProps) {
  const { user, loading } = useAuth()

  const renderContent = () => children

  const renderSpinner = () => (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/images/loading.gif"
        width={200}
        height={200}
        alt="Loading..."
      />
    </div>
  )

  if (!loading && user?.email) return renderContent()
  if (loading) return renderSpinner()

  Router.push('/authentication')
  return null
}
