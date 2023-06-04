import { Suspense, memo } from 'react'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import dynamic from 'next/dynamic'

const Pub = dynamic(() => import('@components/pub'))
const Sidebar = dynamic(() => import('@layout/sidebar'), { ssr: false })
const Adsense = dynamic(() => import('@components/adsense'))

const Layout = ({ children, sidebar }) => (
  <>
    <Suspense>
      <Pub className="pub-in-header" priority posts={sidebar?.pub2} />
    </Suspense>
    <Suspense>
      <Adsense />
    </Suspense>
    <main>
      <div className="left">{children}</div>
      <div className="right">
        <Suspense>
          <Sidebar sidebar={sidebar} />
        </Suspense>
        <Facebook />
        <Twitter />
      </div>
    </main>
    <div className="adsense" />
  </>
)

export default memo(Layout)
