import React, { createContext, useContext, useState } from 'react'

const EnquiryContext = createContext(null)

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <EnquiryContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  return useContext(EnquiryContext)
}
