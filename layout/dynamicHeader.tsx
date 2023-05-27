import dynamic from 'next/dynamic'
import { memo } from 'react'

const Modal = dynamic(() => import('@components/modal'), { ssr: false })
const Search = dynamic(() => import('@components/search'), { ssr: false })

const DynamicHeader = ({ open, ...props }) => (
  <Modal open={open} {...props}>
    <Search />
  </Modal>
)

export default memo(DynamicHeader)
