import React, { memo, useState } from 'react'

import RegionsList from '@components/regionsList'
import SecteursList from '@components/secteursList'
import Copyright from '@components/copyright'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'
import TermsList from '@components/termsList'
import OnboardingFlow from '@components/onboardingFlow'

const Footer = () => {
  const [active, setActive] = useState(0)
  return (
    <footer>
      <FooterTab {...{ active, setActive }} />
      <OnboardingFlow data={{ active }} loading={false}>
        <></>
        <SecteursList>
          <TermsList />
        </SecteursList>
        <RegionsList>
          <TermsList />
        </RegionsList>
      </OnboardingFlow>
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
