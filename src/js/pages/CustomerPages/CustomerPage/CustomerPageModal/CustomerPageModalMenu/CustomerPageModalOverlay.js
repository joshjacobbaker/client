import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import CustomerPageModalOverlayStyled from "./CustomerPageModalOverlayStyled"
import NavLinkStyled from "../../../../../components/navLink/NavLink"
import { AnimatePresence } from "framer-motion"

const CustomerPageModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<CustomerPageModalOverlayStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(
    <CustomerPageModalOverlayStyled key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
      <ul>
        <li>
          <NavLinkStyled to="/">Route /</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/employee">Route /counter</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/addpostform">Route /addpostform</NavLinkStyled>
        </li>
      </ul>
    </CustomerPageModalOverlayStyled>,
    document.getElementById("modalOverlay")
  )
}

export default CustomerPageModalOverlay
