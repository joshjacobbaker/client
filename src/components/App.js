import React from "react"

// Components
import Header from "./Header"
import Body from "./Body"
import dog from "../images/dog.jpg"

const App = () => (
  <div>
    <Header number="1" />
    <Body />
    <img src={dog} alt="" />
  </div>
)

export default App
