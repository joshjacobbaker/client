// Vendor Modules
import react from "react"
import ReactDOM from "react-dom"

// Redux
import { Provider } from "react-redux"
import store from "./js/redux/store"
import { fetchUsers } from "./js/redux/features/users/usersSlice"

// Componentss
import App from "./js/App"

// Assets
import "./sass/index.scss"

store.dispatch(fetchUsers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept()
}
