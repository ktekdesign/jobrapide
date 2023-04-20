import React, { memo, useMemo, useState } from 'react'
import TermsContext from '@context/termsContext'

const TermsContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [secteurs, setSecteurs] = useState([])
  const [regions, setRegions] = useState([])
  const [niveaux, setNiveaux] = useState([])
  const value = useMemo(
    () => ({
      categories,
      setCategories,
      secteurs,
      setSecteurs,
      regions,
      setRegions,
      niveaux,
      setNiveaux,
    }),
    [categories, secteurs, regions, niveaux]
  )
  return <TermsContext.Provider value={value}>{children}</TermsContext.Provider>
}

export default memo(TermsContextProvider)
