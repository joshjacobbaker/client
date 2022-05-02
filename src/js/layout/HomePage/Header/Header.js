import React from "react"
import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
// import { useLocation } from "react-router-dom"
// Styled Components
import HeaderStyled, { NavLinkStyled, MenuContainer, MobileMenuIcon, MenuDisplay } from "./HeaderStyled"
// Modal Components
import ModalBackdrop from "../Modal/ModalBackdrop"
import ModalOverlay from "../Modal/ModalOverlay"
// Components
import You from "../../../components/you/You"
import ThemeToggle from "../../../components/toggleTheme/ToggleTheme"

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  // const [theme, setTheme] = useContext(ThemeContext)

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
        <You />
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
