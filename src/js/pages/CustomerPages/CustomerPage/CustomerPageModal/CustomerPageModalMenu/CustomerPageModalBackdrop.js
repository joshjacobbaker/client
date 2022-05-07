import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalBackdropStyled from "./CustomerPageModalBackdropStyled"

const CustomerPageModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<ModalBackdropStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(<ModalBackdropStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={props.setShowMenu}></ModalBackdropStyled>, document.getElementById("modalBackdrop"))
}

export default CustomerPageModalOverlay
