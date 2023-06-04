import { Suspense, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Adsense = dynamic(() => import('@components/adsense'), { ssr: false })
const Portal = dynamic(() => import('@components/loaders/portal'), {
  ssr: false,
})
const MappedComponent = dynamic(
  () => import('@components/loaders/mapped-component'),
  { ssr: false }
)

const DeferredLoader = () => {
  const [refs, setRefs] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      const ids = [].slice
        .call(document?.body?.getElementsByClassName('adsense'))
        .map((id) => ({ id }))
      setRefs(ids)
    }, 3000)
  }, [])

  return (
    <Suspense>
      <MappedComponent cond={!!refs} items={refs}>
        <Portal>
          <Adsense />
        </Portal>
      </MappedComponent>
    </Suspense>
  )
}

export default memo(DeferredLoader)
