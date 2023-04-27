import { Children, memo } from 'react'
import Loading from '@components/loading'

const OnboardingFlow = ({ children, data, loading, error = null }) => {
  const active = data?.active ?? Number(data?.open)
  return (
    <Loading data={data} loading={loading} error={error}>
      {data?.isModal ? children : Children.toArray(children)[active]}
    </Loading>
  )
}

export default memo(OnboardingFlow)
