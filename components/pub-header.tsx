import { memo } from 'react'
import Pub from '@components/pub'
import useSidebar from '@hooks/useSidebar'

const PubHeader = () => {
  const { pub2 } = useSidebar()
  return <Pub className="pub-in-header" posts={pub2} />
}

export default memo(PubHeader)
