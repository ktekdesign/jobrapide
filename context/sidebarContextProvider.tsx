import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import SidebarContext, { Sidebar } from './sidebarContext'
import getSidebar from '@graphql/api/getSidebar'

const SidebarContextProvider = ({ children }) => {
  const [sidebar, setSidebar]: [Sidebar, Dispatch<SetStateAction<Sidebar>>] =
    useState(null)
  useEffect(() => {
    getSidebar().then((data) => setSidebar(data))
  }, [])
  return (
    <SidebarContext.Provider value={{ ...sidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
