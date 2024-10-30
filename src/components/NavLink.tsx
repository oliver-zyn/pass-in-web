import { ComponentProps } from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavLinkProps extends ComponentProps<'a'> {}

export function NavLink(props: NavLinkProps) {
  return (
    <a className="font-medium text-sm" {...props} />
  )
}