// Vendor Modules
// import react from "react"
import { render } from "react-dom"

// Developer Modules
import App from "./components/App"

render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
