import { createPortal } from 'react-dom'
import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Adsense = dynamic(() => import('@components/adsense'))

const AdsenseLoader = () => {
  const [refs, setRefs] = useState(null)

  useEffect(() => {
    setRefs([].slice.call(document?.body?.getElementsByClassName('adsense')))
  }, [])

  return (
    <Fragment>
      {refs?.map((ref, key) => (
        <Fragment key={key}>{createPortal(<Adsense />, ref)}</Fragment>
      ))}
    </Fragment>
  )
}

export default AdsenseLoader
