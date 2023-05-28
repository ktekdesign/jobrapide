import React, { memo, useCallback, useState, useTransition } from 'react'

import FooterTab from '@components/footerTab'
import dynamic from 'next/dynamic'

const TabDetails = dynamic(() => import('@components/tab-details'), {
  ssr: false,
})

const FooterTabDetails = () => {
  const [active, setActive] = useState(null)
  const [isPending, startTransition] = useTransition()

  const getActive = useCallback(
    (e) =>
      startTransition(() => {
        setActive(Number(e.target.dataset.order))
      }),
    []
  )

  return (
    <>
      <FooterTab {...{ active, getActive, isPending }} />
      {active !== null && <TabDetails active={active} />}
    </>
  )
}

export default memo(FooterTabDetails)
