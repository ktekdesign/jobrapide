import { Suspense, memo } from 'react'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import dynamic from 'next/dynamic'

const Pub = dynamic(() => import('@components/pub'))
const Sidebar = dynamic(() => import('@layout/sidebar'))
const Adsense = dynamic(() => import('@components/adsense'))
const InlineScripts = dynamic(() => import('@components/inline-scripts'), {
  ssr: false,
})
const FloatComponent = dynamic(() => import('@components/floatComponents'), {
  ssr: false,
})

const Layout = ({ children, pub2, ...props }) => (
  <>
    <Suspense>
      <InlineScripts />
    </Suspense>
    <Suspense>
      <Pub className="pub-in-header" priority posts={pub2} />
    </Suspense>
    <div className="adsContainer">
      <Suspense>
        <Adsense />
      </Suspense>
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
      <Suspense>
        <Adsense />
      </Suspense>
    </div>
    <Suspense>
      <FloatComponent />
    </Suspense>
  </>
)

export default memo(Layout)
