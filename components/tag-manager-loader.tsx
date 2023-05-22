import dynamic from 'next/dynamic'
import { memo } from 'react'

const TagManager = dynamic(
  () =>
    import('react-gtm-module').then((mod) =>
      mod.initialize({ gtmId: 'GTM-W66949R' })
    ),
  {
    ssr: false,
  }
)

const TagManagerLoader = () => <TagManager />

export default memo(TagManagerLoader)
