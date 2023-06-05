import { memo } from 'react'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import TermsList from './termsList'

const TabDetails = ({ active, ...props }) => (
  <OnboardingFlow active={active}>
    <TermsList name="secteurs" className="secteurs-list" {...props} />
    <TermsList name="regions" className="regions-list" {...props} />
  </OnboardingFlow>
)

export default memo(TabDetails)
