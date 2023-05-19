import { Children, memo } from 'react'
import Loading from './loading'

const OnboardingFlow = ({ data = null, children, active = 0 }) => (
  <Loading data={data}>{Children.toArray(children)[active]}</Loading>
)

export default memo(OnboardingFlow)
