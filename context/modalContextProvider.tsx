import React, { memo, useReducer } from 'react'
import { modalReducer, initialModalState } from './dataReducer'
import ModalContext from './modalContext'

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialModalState)

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export default memo(ModalContextProvider)
