import React, { useContext, useState } from "react"

const ModalContext = React.createContext(false)
const useModal = () => useContext(ModalContext)

const ModalProvider = ({ children }) => {
  const [modal, SetModal] = useState((s) => !s)

  return <ModalContext.Provider value={[modal, SetModal]}>{children}</ModalContext.Provider>
}
