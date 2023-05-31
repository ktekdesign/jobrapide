import { memo } from 'react'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import TermsList from './termsList'

const TabDetails = ({ active, route }) => (
  <OnboardingFlow active={active}>
    <TermsList route={route} name="secteurs" className="secteurs-list" />
    <TermsList route={route} name="regions" className="regions-list" />
  </OnboardingFlow>
)

export default memo(TabDetails)
