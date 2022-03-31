import React from "react"

// Components
import Recipes from "./Recipes"
// Assets
import "../styles/index.scss"
import dog from "../images/dog.jpg"

const App = () => (
  <div>
    <h1> Oh, hiii React </h1>
    <Recipes number="1" />
    <img src={dog} alt="" />
  </div>
)

export default App
