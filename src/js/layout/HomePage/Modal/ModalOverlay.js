import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalStyled from "./ModalStyled"
import NavLinkStyled from "../../../components/navLink/NavLinkStyled"

const ModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<ModalStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(<ModalStyled onClick={props.setShowMenu}></ModalStyled>, document.getElementById("modal"))
}

export default ModalOverlay
