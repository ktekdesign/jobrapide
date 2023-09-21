import { Suspense, memo } from 'react'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import Adsense from '@components/adsense'
import dynamic from 'next/dynamic'
import SidebarContextProvider from '@context/sidebarContextProvider'

const InlineScripts = dynamic(() => import('@components/inline-scripts'), {
  ssr: false,
})
const FloatComponent = dynamic(() => import('@components/floatComponents'), {
  ssr: false,
})
const Sidebar = dynamic(() => import('@layout/sidebar'), {
  ssr: false,
})

const Layout = ({ children }) => {
  return (
    <>
      <div id="pub2" />
      <div className="adsContainer">
        <Adsense />
      </div>
      <main>
        <div className="left">{children}</div>
        <div className="right">
          <SidebarContextProvider>
            <Suspense>
              <Sidebar />
            </Suspense>
          </SidebarContextProvider>
          <Facebook />
          <Twitter />
        </div>
      </main>
      <div className="adsContainer">
        <Adsense />
      </div>
      <Suspense>
        <FloatComponent />
      </Suspense>
      <Suspense>
        <InlineScripts />
      </Suspense>
    </>
  )
}

export default memo(Layout)
