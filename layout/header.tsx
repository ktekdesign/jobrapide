import DynamicNavbar from '@components/dynamic-navbar'
import NavBar from '@components/navBar'
import { memo } from 'react'

const Header = ({ route }) => (
  <NavBar route={route}>
    <DynamicNavbar />
  </NavBar>
)

export default memo(Header)
