import React, { createContext, useContext, useState } from 'react'

const EnquiryContext = createContext(null)

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContext, setModalContext] = useState(null)

  const openModal = (context = null) => {
    setModalContext(context)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContext(null)
  }

  return (
    <EnquiryContext.Provider value={{ isOpen, modalContext, openModal, closeModal }}>
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  return useContext(EnquiryContext)
}
