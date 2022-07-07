interface ContentProps {
  children: any
}

export function Content(props: ContentProps) {
  return (
    <main className="flex flex-col dark:text-gray-200">{props.children}</main>
  )
}
