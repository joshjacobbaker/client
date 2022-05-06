import React, { useEffect } from "react"
import MainStyled from "./MainStyled"

const Main = (props) => {
  return <MainStyled>{props.children}</MainStyled>
}

export default Main
