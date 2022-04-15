import React, { useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"
import Right from "./Right"
import Main from "./Main"

const Layout = (props) => {
  const [state, setState] = useState(0)
  return (
    <div className="grid">
      {/* <div className="header">Header</div>
      <div className="hero">Hero</div>
      <div className="left">Left</div>
      <div className="main">Main</div>
      <div className="right">Right</div>
      <div className="footer">Footer</div> */}
      <Header number={state} />
      <Hero></Hero>
      <Main>{props.children}</Main>
      <Right></Right>
      <Footer />
    </div>
  )
}

export default Layout
