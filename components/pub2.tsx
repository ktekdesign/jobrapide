import { Suspense, memo } from 'react'

import dynamic from 'next/dynamic'

const Pub = dynamic(() => import('@components/pub'), { ssr: false })

const Pub2 = ({ posts }) => (
  <Suspense>
    <Pub
      priority={document?.body?.clientWidth >= 1024}
      className="pub"
      posts={posts}
      unoptimized={false}
      width={300}
      height={250}
    />
  </Suspense>
)

export default memo(Pub2)
