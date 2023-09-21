import SidebarContext from '@context/sidebarContext'
import { useContext } from 'react'

export default function useSidebar() {
  return useContext(SidebarContext)
}
