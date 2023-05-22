import { memo } from 'react'
import OnboardingFlow from './onboardingFlow'
import TermsList from './termsList'

const TabDetails = ({ deferredActive }) => (
  <OnboardingFlow active={deferredActive}>
    <TermsList name="secteurs" className="secteurs-list" />
    <TermsList name="regions" className="regions-list" />
  </OnboardingFlow>
)

export default memo(TabDetails)
