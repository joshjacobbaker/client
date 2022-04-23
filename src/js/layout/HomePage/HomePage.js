import React, { useState } from "react"

// Sections of Layout w/ Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Right from "./Right/Right"
import Main from "./Main/Main"
import StyledFooter from "./Footer/Styled.Footer"

const HomePage = (props) => {
  const [number, setNumber] = useState(0)
  return (
    <div className="gridHomePage">
      <Header number={number} />
      <Hero></Hero>
      <Main>{props.children}</Main>
      <Right></Right>
      <StyledFooter />
    </div>
  )
}

export default HomePage
