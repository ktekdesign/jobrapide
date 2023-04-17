import React, { memo, useReducer } from 'react'
import { modalReducer, initialModalState } from '@context/dataReducer'
import ModalContext from '@context/modalContext'

const ModalContextProvider = ({ children }) => {
  const [stateModal, dispatchModal] = useReducer(
    modalReducer,
    initialModalState
  )

  return (
    <ModalContext.Provider value={{ stateModal, dispatchModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default memo(ModalContextProvider)
