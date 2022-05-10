import react, { useContext } from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalBackdropStyled from "./ModalBackdropStyled"
// Modal Context
import { ModalContext } from "../../../context/ModalContext"

const CustomerPageModalOverlay = (props) => {
  const ctxModal = useContext(ModalContext)
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<ModalBackdropStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(<ModalBackdropStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={ctxModal.onClickShowModal}></ModalBackdropStyled>, document.getElementById("modalBackdrop"))
}

export default CustomerPageModalOverlay
