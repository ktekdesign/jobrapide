import React, { useCallback, useDeferredValue, useState } from 'react'
import { TranslateContext } from './translateContext'
import LangSelector from '@components/lang-selector'

const TranslateProvider = ({ children }) => {
  const [lang, setLang] = useState('fr')
  const deferredLang = useDeferredValue(lang)
  const onChange = useCallback((e) => setLang(e.target.value), [])

  return (
    <>
      <LangSelector onChange={onChange} />
      <TranslateContext.Provider value={{ lang, deferredLang }}>
        {children}
      </TranslateContext.Provider>
    </>
  )
}

export default TranslateProvider
