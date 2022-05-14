import react, { useContext } from "react"
import { useLocation } from "react-router-dom"
import ModalOverlayStyled from "./ModalOverlayStyled"
import NavLinkStyled from "../../navLink/NavLink"
import { ModalContext } from "../../../context/ModalContext"

const ModalOverlay = (props) => {
  const { pathname } = useLocation()
  const ctxModal = useContext(ModalContext)

  return (
    <ModalOverlayStyled>
      <ul>
        <li>
          <NavLinkStyled to="landing">Landing</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="contact">Contact</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="signup">Signup</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="signin">Signin</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="stylists">Stylists</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="salon">Salon</NavLinkStyled>
        </li>
      </ul>
    </ModalOverlayStyled>
  )
}

export default ModalOverlay
