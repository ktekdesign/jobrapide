import { Children, memo } from 'react'
import Loading from '@components/loaders/loading'

const OnboardingFlow = ({ data = null, children, active = 0 }) =>
  data ? (
    <Loading data={data}>{Children.toArray(children)[active]}</Loading>
  ) : (
    <>{Children.toArray(children)[active]}</>
  )

export default memo(OnboardingFlow)
