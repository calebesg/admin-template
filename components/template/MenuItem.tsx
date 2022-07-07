import Link from 'next/link'

interface MenuItemProps {
  text: string
  url?: string
  icon: any
  onClick?: () => void
  className?: string
}

export function MenuItem(props: MenuItemProps) {
  const renderItem = () => (
    <a
      className={`w-20 h-20 flex flex-col items-center justify-center ${props.className}`}
    >
      {props.icon}
      <span className="text-xs font-light">{props.text}</span>
    </a>
  )

  return (
    <li
      onClick={props.onClick}
      className="hover:bg-gray-200 transition-colors list-none cursor-pointer text-gray-600"
    >
      {props.url ? (
        <Link href={props.url} passHref>
          {renderItem()}
        </Link>
      ) : (
        renderItem()
      )}
    </li>
  )
}
