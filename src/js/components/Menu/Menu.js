import React, { useContext } from "react"
import { AnimatePresence } from "framer-motion"
// Context
import { ModalContext } from "../../context/ModalContext"
// Menu Styled Components
import { MenuContainer, MobileMenuIcon } from "./MenuStyled"
// Modal Components
import CustomerPageModalBackdrop from "../Modal/CustomerPageModalMenu/ModalBackdrop"
import ThemeToggle from "../../components/toggleTheme/ToggleTheme"

const Menu = () => {
  const ctxModal = useContext(ModalContext)

  return (
    <>
      <AnimatePresence>{ctxModal.showModal && <CustomerPageModalBackdrop />}</AnimatePresence>
      <MenuContainer>
        <ThemeToggle />
        <MobileMenuIcon id="mobileMenuIcon" onClick={ctxModal.onClickShowModal}>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuIcon>
      </MenuContainer>
    </>
  )
}

export default Menu
