import { Children, memo } from 'react'
import Loading from './loading'

const OnboardingFlow = ({
  data = null,
  loading = false,
  children,
  active = 0,
}) => (
  <Loading {...{ data, loading }}>{Children.toArray(children)[active]}</Loading>
)

export default memo(OnboardingFlow)
