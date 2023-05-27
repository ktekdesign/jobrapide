import React, { memo, useCallback, useState, useTransition } from 'react'

import FooterTab from '@components/footerTab'
import TabDetails from '@components/tab-details'

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
      <TabDetails active={active} />
    </>
  )
}

export default memo(FooterTabDetails)
