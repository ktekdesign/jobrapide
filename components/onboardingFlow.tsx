import { Children, memo } from 'react'
import Loading from './loading'

const OnboardingFlow = ({
  children,
  data = null,
  active = 0,
  isModal = false,
  loading = false,
}) =>
  isModal && !active ? (
    <></>
  ) : data ? (
    <Loading data={data} loading={loading}>
      {console.log(active)}
      {active && isModal ? children : Children.toArray(children)[active]}
    </Loading>
  ) : (
    <>{active && isModal ? children : Children.toArray(children)[active]}</>
  )

export default memo(OnboardingFlow)
