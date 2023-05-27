import { memo } from 'react'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import TermsList from './termsList'

const TabDetails = ({ active }) => (
  <OnboardingFlow active={active}>
    <TermsList name="secteurs" className="secteurs-list" />
    <TermsList name="regions" className="regions-list" />
  </OnboardingFlow>
)

export default memo(TabDetails)
