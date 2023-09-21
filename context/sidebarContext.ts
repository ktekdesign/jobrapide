import { Post } from '@utils/interfaces/data'
import { createContext } from 'react'
export interface Sidebar {
  pub2: Post[]
  pub1: Post[]
  pub3: Post[]
  sponsored: Post[]
  partners: Post[]
}
const SidebarContext = createContext({} as Sidebar)

export default SidebarContext
