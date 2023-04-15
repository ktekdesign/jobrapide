import React, { memo, useReducer } from 'react'
import { termsReducer, initialState } from './dataReducer'
import TermsContext from './termsContext'

const TermsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(termsReducer, initialState)
  return (
    <TermsContext.Provider value={{ state, dispatch }}>
      {children}
    </TermsContext.Provider>
  )
}

export default memo(TermsContextProvider)
