import React, { memo, useState } from 'react'

import Copyright from '@components/copyright'
import { FOOTER_MENU_ITEMS } from '@utils/constants'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'
import TermsList from '@components/termsList'
import OnboardingFlow from '@components/onboardingFlow'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'

const Footer = () => {
  const [active, setActive] = useState(0)
  return (
    <footer>
      <FooterTab {...{ active, setActive }} />
      <OnboardingFlow active={active}>
        <></>
        <TermsList terms={secteurs} className="secteurs-list" />
        <TermsList terms={regions} className="regions-list" />
      </OnboardingFlow>
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
