// Vendor Modules
// import react from "react"
import { render } from "react-dom"

// Developer Modules
import App from "./components/App"

// Assets
import "./sass/index.scss"

render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
