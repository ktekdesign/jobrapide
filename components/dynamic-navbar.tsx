import { memo, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'

import IconMenu from '@components/icons-menu'
import SearchIconButton from '@components/search-icon-button'

const Modal = dynamic(() => import('@components/modal'), { ssr: false })
const Search = dynamic(() => import('@components/search'), { ssr: false })

const DynamicNavBar = () => {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const toggleModal = () => startTransition(() => setOpen(!open))

  return (
    <>
      <IconMenu>
        <SearchIconButton data-loading={isPending} onClick={toggleModal} />
      </IconMenu>
      {open && (
        <Modal onClick={toggleModal}>
          <Search />
        </Modal>
      )}
    </>
  )
}

export default memo(DynamicNavBar)
