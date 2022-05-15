import React, { useContext } from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalBackdropStyled from "./ModalBackdropStyled"
import ModalOverlay from "./ModalOverlay"
// Modal Context
import { ModalContext } from "../../../context/ModalContext"

const PageModalOverlay = (props) => {
  const ctxModal = useContext(ModalContext)
  const { pathname } = useLocation()
  const onHandleDragEnd = (event, info) => {
    if (info.offset.y < -150) {
      ctxModal.onClickShowModal()
    }
    if (info.offset.y > 150) {
      ctxModal.onClickShowModal()
    }
  }
  // return ReactDOM.createPortal(<ModalBackdropStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(
    <ModalBackdropStyled drag="y" onDragEnd={onHandleDragEnd} dragConstraints={{ bottom: 0 }} dragElastic={0.8}>
      <ModalOverlay />
    </ModalBackdropStyled>,
    document.getElementById("modalBackdrop")
  )
}

export default PageModalOverlay

// https://www.youtube.com/watch?v=mJkhhAG6qZ4&list=PLNG2YBDrzK-yhlQtfsrzzQvaLDVj-pMXI&index=10
