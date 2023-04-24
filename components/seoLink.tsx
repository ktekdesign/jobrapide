import { memo } from 'react'
import Link from 'next/link'

const SeoLink = ({ children, label, href, ...props }) => (
  <Link href={href} aria-label={label} {...props}>
    {children}
  </Link>
)

export default memo(SeoLink)
