import React, {
  memo,
  useCallback,
  useDeferredValue,
  useState,
  useTransition,
} from 'react'

import Copyright from '@components/copyright'
import FooterMenu from '@components/footerMenu'
import FooterTab from '@components/footerTab'
import dynamic from 'next/dynamic'

const TabDetails = dynamic(() => import('@components/tab-details'), {
  ssr: false,
})

const Footer = () => {
  const [active, setActive] = useState(null)
  const deferredActive = useDeferredValue(active)
  const [isPending, startTransition] = useTransition()

  const getActive = useCallback(
    (e) =>
      startTransition(() => {
        setActive(Number(e.target.dataset.order))
      }),
    []
  )

  return (
    <footer>
      <FooterTab {...{ deferredActive, getActive, isPending }} />
      {active !== null && <TabDetails deferredActive={deferredActive} />}
      <FooterMenu />
      <Copyright />
    </footer>
  )
}

export default memo(Footer)
