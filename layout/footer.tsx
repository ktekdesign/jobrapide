import React, { memo, useState } from 'react'

import Copyright from '@components/copyright'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'
import TermsList from '@components/termsList'
import OnboardingFlow from '@components/onboardingFlow'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'

const Footer = () => {
  const [active, setActive] = useState(null)
  return (
    <footer>
      <FooterTab {...{ active, setActive }} />
      <OnboardingFlow active={active}>
        <TermsList terms={secteurs} className="secteurs-list" />
        <TermsList terms={regions} className="regions-list" />
      </OnboardingFlow>
      <FooterMenu />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
