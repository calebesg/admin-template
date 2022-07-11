import Link from 'next/link'
import { useAuth } from '../../data/hook'

export function Avatar() {
  const { user } = useAuth()

  return (
    <Link href="/profile" passHref>
      <img
        src={user?.avatarUrl || '/images/avatar.svg'}
        alt={user?.name ?? 'Avatar'}
        className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 hover:opacity-90 transition-all"
      />
    </Link>
  )
}
