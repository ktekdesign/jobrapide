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
      <OnboardingFlow isModal active={Number(open)} data={{ setOpen }}>
        <Modal />
      </OnboardingFlow>
    </>
  )
}

export default memo(Header)
