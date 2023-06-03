import { createPortal } from 'react-dom'
import { Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Adsense = dynamic(() => import('@components/adsense'))

const Translate = dynamic(() => import('@components/translate'))
const ShareButtons = dynamic(() => import('@components/share-buttons'))
const NotificationSignal = dynamic(() => import('messaging-next'))

const DeferredLoader = () => {
  const [refs, setRefs] = useState(null)
  const [refWindow, setRefWindow] = useState(null)

  useEffect(() => {
    setRefs([].slice.call(document?.body?.getElementsByClassName('adsense')))
  }, [])

  useEffect(() => {
    if (window)
      window.addEventListener('scroll', () => {
        if (!refWindow) setRefWindow(true)
      })
  }, [refWindow])

  return (
    <Fragment>
      {refs?.map((ref, key) => (
        <Fragment key={key}>{createPortal(<Adsense />, ref)}</Fragment>
      ))}
      {refWindow && (
        <Fragment>
          <Translate />
          <ShareButtons float />
          <NotificationSignal />
        </Fragment>
      )}
    </Fragment>
  )
}

export default memo(DeferredLoader)
