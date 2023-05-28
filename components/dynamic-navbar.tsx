import { memo, useCallback, useState } from 'react'
import dynamic from 'next/dynamic'

import IconMenu from '@components/icons-menu'
import SearchIconButton from '@components/search-icon-button'

const Modal = dynamic(() => import('@components/modal'))
const Search = dynamic(() => import('@components/search'))

const DynamicNavBar = () => {
  const [open, setOpen] = useState(false)

  const toggleModal = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <IconMenu>
        <SearchIconButton onClick={toggleModal} />
      </IconMenu>
      {open && (
        <Modal open={open} onClick={toggleModal}>
          <Search />
        </Modal>
      )}
    </>
  )
}

export default memo(DynamicNavBar)
