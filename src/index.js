// Vendor Modules
import react from "react"
import * as ReactDOMClient from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// Redux
import { Provider } from "react-redux"
import store from "./js/redux/store"
import { fetchUsers } from "./js/redux/features/users/usersSlice"

// Establishing access to .env variables
// require("dotenv").config()
// Componentss
import App from "./js/App"

// Assets
import "./sass/index.scss"

store.dispatch(fetchUsers())

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}
