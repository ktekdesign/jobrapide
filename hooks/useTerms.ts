import { useContext } from 'react'
import TermsContext from '@context/termsContext'

const useTerms = () => {
  const context = useContext(TermsContext)

  if (context === undefined) {
    throw new Error('useTerms must be used within TermsContext')
  }
  return context
}

export default useTerms
