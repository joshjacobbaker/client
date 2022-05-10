import React from "react"
import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import { AnimatePresence } from "framer-motion"
// import { useLocation } from "react-router-dom"
// Styled Components
import CustomerPageHeaderStyled, { MenuContainer, MobileMenuIcon } from "./CustomerPageHeaderStyled"
// Modal Components
import CustomerPageModalBackdrop from "../CustomerPageModal/CustomerPageModalMenu/CustomerPageModalBackdrop"
import CustomerPageModalOverlay from "../CustomerPageModal/CustomerPageModalMenu/CustomerPageModalOverlay"
// Components
import ThemeToggle from "../../../../components/toggleTheme/ToggleTheme"
import You from "../../../../components/You/You"
import Menu from "../../../../components/Menu/Menu"

// Context

const CustomerPageHeader = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <CustomerPageHeaderStyled>
      <AnimatePresence>
        {showMenu && (
          <>
            <CustomerPageModalOverlay key="modaloverlay"></CustomerPageModalOverlay>
            <CustomerPageModalBackdrop
              key="modalbackdrop"
              setShowMenu={() => {
                setShowMenu((d) => !d)
              }}></CustomerPageModalBackdrop>
          </>
        )}
      </AnimatePresence>
      <div>
        <You />
      </div>
      {/* isActive={theme.id === "darkTheme"} onToggle={setTheme} */}
      <Menu />
    </CustomerPageHeaderStyled>
  )
}

export default CustomerPageHeader
