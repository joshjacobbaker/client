import React from "react"
import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import { AnimatePresence } from "framer-motion"
// import { useLocation } from "react-router-dom"
// Styled Components
import HeaderStyled, { NavLinkStyled, MenuContainer, MobileMenuIcon, MenuDisplay, YouStyled } from "./HeaderStyled"
// Modal Components
import ModalBackdrop from "../Modal/ModalMenu/ModalBackdrop"
import ModalOverlay from "../Modal/ModalMenu/ModalOverlay"
// Components
// import ThemeToggle from "../../../../../components/toggleTheme/ToggleTheme"
// import You from "../../../../../../js/components/you/You"

// Context

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderStyled>
      <AnimatePresence>
        {showMenu && (
          <>
            <ModalBackdrop
              key="modalbackdrop"
              setShowMenu={() => {
                setShowMenu((d) => !d)
              }}></ModalBackdrop>

            <ModalOverlay key="modaloverlay"></ModalOverlay>
          </>
        )}
      </AnimatePresence>
      <div>
        <p>You</p>
      </div>
      {/* isActive={theme.id === "darkTheme"} onToggle={setTheme} */}
      <MenuContainer>
        <p>Toggle Theme</p>
        <MobileMenuIcon id="mobileMenuIcon" onClick={() => setShowMenu((d) => !d)}>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuIcon>
      </MenuContainer>
    </HeaderStyled>
  )
}

export default Header
