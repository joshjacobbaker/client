import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalBackdropStyled from "./ModalBackdropStyled"
import NavLinkStyled from "../../../components/navLink/NavLinkStyled"

const ModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<ModalBackdropStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(<ModalBackdropStyled onClick={props.setShowMenu}></ModalBackdropStyled>, document.getElementById("modalBackdrop"))
}

export default ModalOverlay
