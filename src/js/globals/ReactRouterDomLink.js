import { NavLink as ReactRouterDomLink } from "react-router-dom"

const NavLink = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
}

export default NavLink
