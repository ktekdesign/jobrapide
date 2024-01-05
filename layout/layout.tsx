import { Suspense, memo } from 'react'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import Pub from '@components/pub'
import Adsense from '@components/adsense'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('@layout/sidebar'), {
  ssr: false,
})
const InlineScripts = dynamic(() => import('@components/inline-scripts'), {
  ssr: false,
})
const FloatComponent = dynamic(() => import('@components/floatComponents'), {
  ssr: false,
})

const Layout = ({ children, pub2, ...props }) => (
  <>
    <div id="zone_1276733290" />
    <Suspense>
      <Pub className="pub-in-header" priority posts={pub2} />
    </Suspense>
    <div className="adsContainer">
      <Adsense />
    </div>
    <main>
      <div className="left">{children}</div>
      <div className="right">
        <Suspense>
          <Sidebar {...props} />
        </Suspense>
        <Facebook />
        <Twitter />
      </div>
    </main>
    <div className="adsContainer">
      <Adsense />
    </div>
    <FloatComponent />
    <InlineScripts />
  </>
)

export default memo(Layout)
