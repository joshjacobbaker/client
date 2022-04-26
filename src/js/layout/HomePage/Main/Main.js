import React from "react"
import { Container } from "../../../globals/globalStyled"

import MainStyled from "./MainStyled"

const onFormSubmitHandler = (e) => {
  e.preventDefault()
  console.log("On click")
}

const Main = (props) => {
  return (
    <MainStyled>
      {props.children}
      <Container>
        <form onSubmit={onFormSubmitHandler} action="submit">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" /> />
          <button type="submit">Signup</button>
        </form>
      </Container>
    </MainStyled>
  )
}

export default Main
