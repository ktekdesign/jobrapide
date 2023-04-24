import React, { memo, useState } from 'react'

import NavBar from '@components/navBar'
import Modal from '@components/modal'
import Pub from '@components/pub'
import { MENU_ITEMS } from '@utils/constants'

const Header = ({ pub }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <NavBar items={MENU_ITEMS} setOpen={setOpen} />
      {open && <Modal open={open} setOpen={setOpen} />}
      <div className="pub-in-header">
        <Pub items={pub} />
      </div>
    </>
  )
}

export default memo(Header)
