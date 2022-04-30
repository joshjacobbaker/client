import React from "react"
import { useState } from "react"

// import { useLocation } from "react-router-dom"
// Styled Components
import HeaderStyled, { NavLinkStyled, MenuContainer, MobileMenuIcon, MenuDisplay } from "./HeaderStyled"
// Components
import ModalBackdrop from "../Modal/ModalBackdrop"
import ModalOverlay from "../Modal/ModalOverlay"

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderStyled>
      {showMenu && (
        <>
          <ModalBackdrop
            setShowMenu={() => {
              setShowMenu((d) => !d)
            }}></ModalBackdrop>
          <ModalOverlay></ModalOverlay>
        </>
      )}
      <div>
        <p>You</p>
      </div>
      <MenuContainer onClick={() => setShowMenu((d) => !d)}>
        <div>Theme Toggle</div>
        <MobileMenuIcon id="mobileMenuIcon">
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuIcon>
      </MenuContainer>
    </HeaderStyled>
  )
}

export default Header
