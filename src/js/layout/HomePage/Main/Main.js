import React from "react"
import MainStyled from "./MainStyled"
import Modal from "../Modal/Modal"

const Main = (props) => {
  return <MainStyled>{props.children}</MainStyled>
}

export default Main
