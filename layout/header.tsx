import React, { memo, useState } from 'react'

import NavBar from '@components/navBar'
import Modal from '@components/modal'
import { MENU_ITEMS } from '@utils/constants'
import OnboardingFlow from '@components/onboardingFlow'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <NavBar items={MENU_ITEMS} setOpen={setOpen} />
      <OnboardingFlow data={{ open, setOpen }} loading={false}>
        <></>
        <Modal />
      </OnboardingFlow>
    </>
  )
}

export default memo(Header)
