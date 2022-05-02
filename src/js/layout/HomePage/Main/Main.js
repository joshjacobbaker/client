import React from "react"
import MainStyled from "./MainStyled"
import { motion } from "framer-motion"

const Main = (props) => {
  return <MainStyled>{props.children}</MainStyled>
}

export default Main
