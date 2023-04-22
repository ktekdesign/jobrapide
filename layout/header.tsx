import React, { memo } from 'react'

import NavBar from '@components/navBar'
import Modal from '@components/modal'
import SearchForm from '@components/searchForm'
import SearchCurriculumForm from '@components/searchCurriculumForm'
import Pub from '@components/pub'
import { MENU_ITEMS } from '@utils/constants'

const Header = ({ pub }) => {
  return (
    <>
      <NavBar items={MENU_ITEMS} />
      <Modal>
        <SearchCurriculumForm />
        <SearchForm />
      </Modal>
      <div className="pub-in-header">
        <Pub items={pub} />
      </div>
    </>
  )
}

export default memo(Header)
