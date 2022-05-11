import react, { useContext } from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import CustomerPageModalOverlayStyled from "./ModalOverlayStyled"
import NavLinkStyled from "../../navLink/NavLink"
import { ModalContext } from "../../../context/ModalContext"
import { AnimatePresence } from "framer-motion"

const CustomerPageModalOverlay = (props) => {
  const { pathname } = useLocation()
  const ctxModal = useContext(ModalContext)
  // return ReactDOM.createPortal(<CustomerPageModalOverlayStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(
    <CustomerPageModalOverlayStyled key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <ul>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="landing">
            Landing
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="contact">
            Contact
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="signup">
            Signup
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="signin">
            Signin
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="stylists">
            Stylists
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="salon">
            Salon
          </NavLinkStyled>
        </li>
      </ul>
    </CustomerPageModalOverlayStyled>,
    document.getElementById("modalOverlay")
  )
}

export default CustomerPageModalOverlay
