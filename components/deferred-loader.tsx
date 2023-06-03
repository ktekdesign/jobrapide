import { createPortal } from 'react-dom'
import { Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Adsense = dynamic(() => import('@components/adsense'), { ssr: false })

const Translate = dynamic(() => import('@components/translate'), { ssr: false })

const DeferredLoader = () => {
  const [refs, setRefs] = useState(null)

  useEffect(() => {
    setRefs([].slice.call(document?.body?.getElementsByClassName('adsense')))
  }, [])

  return (
    refs && (
      <Fragment>
        {refs.map((ref, key) => (
          <Fragment key={key}>{createPortal(<Adsense />, ref)}</Fragment>
        ))}
        <Translate />
      </Fragment>
    )
  )
}

export default memo(DeferredLoader)
