import { IconContext } from "react-icons"

const iconValueObject = { size: "4rem", color: "black", fill: "orange" }

const IconContextProvider = ({ children, ...props }) => {
  return <IconContext.Provider value={iconValueObject}>{children}</IconContext.Provider>
}

export default IconContextProvider
