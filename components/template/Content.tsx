interface ContentProps {
  children: any
}

export function Content(props: ContentProps) {
  return <main>{props.children}</main>
}
