import { memo, useCallback, useState } from 'react'

import NavBar from '@components/navBar'
import IconMenu from '@components/icons-menu'
import SearchIconButton from '@components/search-icon-button'
import DynamicHeader from '@layout/dynamicHeader'

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleModal = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <NavBar>
      <IconMenu>
        <SearchIconButton onClick={toggleModal} />
      </IconMenu>
      {open && <DynamicHeader open={open} onClick={toggleModal} />}
    </NavBar>
  )
}

export default memo(Header)
