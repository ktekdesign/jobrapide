import dynamic from 'next/dynamic'
import { memo } from 'react'

const TagManager = dynamic(
  () =>
    import('react-gtm-module-nonce').then((mod) =>
      mod.initialize({
        gtmId: 'GTM-W66949R',
        nonce: 'random123',
        cookie_flags: 'SameSite=None;Secure',
      })
    ),
  {
    ssr: false,
  }
)

const TagManagerLoader = () => <TagManager />

export default memo(TagManagerLoader)
