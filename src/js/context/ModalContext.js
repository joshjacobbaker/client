import React, { useContext, useState } from "react"

export const ModalContext = React.createContext({
  showModal: false,
  onClickShowModal: () => null,
})
const useModal = () => useContext(ModalContext)

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  const onClickShowModal = () => {
    setShowModal((s) => !s)
    console.log(`Show Modal: ${showModal}`)
  }

  return <ModalContext.Provider value={{ showModal, onClickShowModal }}>{children}</ModalContext.Provider>
}

export default ModalContextProvider
