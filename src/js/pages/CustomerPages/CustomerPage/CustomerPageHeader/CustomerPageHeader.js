import React from "react"
import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import { AnimatePresence } from "framer-motion"
// import { useLocation } from "react-router-dom"
// Styled Components
import CustomerPageHeaderStyled, { NavLinkStyled, MenuContainer, MobileMenuIcon, MenuDisplay, YouStyled } from "./CustomerPageHeaderStyled"
// Modal Components
import CustomerPageModalBackdrop from "../CustomerPageModal/CustomerPageModalMenu/CustomerPageModalBackdrop"
import CustomerPageModalOverlay from "../CustomerPageModal/CustomerPageModalMenu/CustomerPageModalOverlay"
// Components
import ThemeToggle from "../../../../components/toggleTheme/ToggleTheme"
import You from "../../../../components/you/You"

// Context

const CustomerPageHeader = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <CustomerPageHeaderStyled>
      <AnimatePresence>
        {showMenu && (
          <>
            <CustomerPageModalBackdrop
              key="modalbackdrop"
              setShowMenu={() => {
                setShowMenu((d) => !d)
              }}></CustomerPageModalBackdrop>

            <CustomerPageModalOverlay key="modaloverlay"></CustomerPageModalOverlay>
          </>
        )}
      </AnimatePresence>
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
    </CustomerPageHeaderStyled>
  )
}

export default CustomerPageHeader
