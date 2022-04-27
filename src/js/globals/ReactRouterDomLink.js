import { Link as ReactRouterDomLink } from "react-router-dom"

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
}

export default Link
