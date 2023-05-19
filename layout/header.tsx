import React, { memo, useState } from 'react'

import NavBar from '@components/navBar'
import Modal from '@components/modal'
import { MENU_ITEMS } from '@utils/constants'
import Search from '@components/search'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <NavBar items={MENU_ITEMS} setOpen={setOpen} />
      <Modal setOpen={setOpen} open={open}>
        <Search />
      </Modal>
    </>
  )
}

export default memo(Header)
