import Image from 'next/image'
import { memo } from 'react'

const Logo = (props) => (
  <Image src="/images/logo.webp" alt="Logo de JobRapide" {...props} />
)

export default memo(Logo)
