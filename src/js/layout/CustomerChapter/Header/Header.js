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
// import You from "../../../components/you/You"
import ThemeToggle from "../../../components/toggleTheme/ToggleTheme"

// Context
// import ToggleThemeContext from "../../../context/ToggleThemeContext"

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  // const [theme, setTheme] = useContext(ThemeContext)

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
        <YouStyled />
      </div>
      {/* isActive={theme.id === "darkTheme"} onToggle={setTheme} */}
      <MenuContainer>
        <ThemeToggle />
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
