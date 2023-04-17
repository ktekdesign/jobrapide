import React, { memo } from 'react'

import NavBar from '@components/navBar'
import Modal from '@components/modal'
import SearchForm from '@components/searchForm'
import SearchCurriculumForm from '@components/searchCurriculumForm'
import Pub from '@components/pub'
import { MENU_ITEMS } from '@lib/constants'

const Header = () => {
  return (
    <>
      <NavBar items={MENU_ITEMS} />
      <Modal>
        <SearchCurriculumForm />
        <SearchForm />
      </Modal>
      <div className="mb-4 mt-4">
        <Pub
          term="/recrutement/publicite/pub-niveau-2/"
          width={768}
          height={90}
        />
      </div>
    </>
  )
}

export default memo(Header)
