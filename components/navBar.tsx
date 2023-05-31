import React, { memo, useCallback, useState, useTransition } from 'react'
import MobileMenuClose from './mobile-menu-close'
import Menu from './menu'

const NavBar = ({ children, route }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [isPending, startTransition] = useTransition()

  const toggleMenu = useCallback(
    (e) =>
      startTransition(() =>
        setShowMenu(!e.target.dataset.toggle ? !showMenu : false)
      ),
    [showMenu]
  )

  return (
    <nav data-loading={isPending} className="navbar">
      <MobileMenuClose onClick={toggleMenu} toggle={Number(showMenu)} />
      <Menu onClick={toggleMenu} route={route} toggle={!showMenu}>
        {children}
      </Menu>
    </nav>
  )
}

export default memo(NavBar)
