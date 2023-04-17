import React, { memo, useReducer } from 'react'
import { termsReducer, initialState } from '@context/dataReducer'
import TermsContext from '@context/termsContext'

const TermsContextProvider = ({ children }) => {
  const [stateTerms, dispatchTerms] = useReducer(termsReducer, initialState)
  return (
    <TermsContext.Provider value={{ stateTerms, dispatchTerms }}>
      {children}
    </TermsContext.Provider>
  )
}

export default memo(TermsContextProvider)
