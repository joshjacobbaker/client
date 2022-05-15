import React, { useContext } from "react"
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
            Sign-up
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled onClick={ctxModal.onClickShowModal} to="login">
            Login
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
    </ModalOverlayStyled>
  )
}

export default ModalOverlay
