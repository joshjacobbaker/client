import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalOverlayStyled from "./ModalOverlayStyled"
import NavLinkStyled from "../../../components/navLink/NavLinkStyled"

const ModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<ModalOverlayStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(
    <ModalOverlayStyled>
      <ul>
        <li>
          <NavLinkStyled to="/">Route /</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/counter">Route /counter</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/addpostform">Route /addpostform</NavLinkStyled>
        </li>
      </ul>
    </ModalOverlayStyled>,
    document.getElementById("modalOverlay")
  )
}

export default ModalOverlay
