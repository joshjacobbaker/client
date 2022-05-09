import React from "react"
import StrobeStyled from "./StrobeStyled"

const Strobe = ({ children, ...props }) => {
  return <StrobeStyled {...props}>{children}</StrobeStyled>
}

export default Strobe
