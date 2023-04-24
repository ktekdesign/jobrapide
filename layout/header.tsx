import React, { memo, useState } from 'react'

import NavBar from '@components/navBar'
import Modal from '@components/modal'
import { MENU_ITEMS } from '@utils/constants'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <NavBar items={MENU_ITEMS} setOpen={setOpen} />
      {open && <Modal open={open} setOpen={setOpen} />}
    </>
  )
}

export default memo(Header)
