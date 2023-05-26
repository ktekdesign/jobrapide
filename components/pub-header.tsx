import { memo } from 'react'
import Pub from '@components/pub'
import useSidebar from '@hooks/useSidebar'

const PubHeader = () => {
  const { pub2 } = useSidebar()
  return (
    <div className="pub-in-header">
      <Pub
        className="pub-in-header"
        priority
        unoptimized={false}
        posts={pub2}
      />
    </div>
  )
}

export default memo(PubHeader)
