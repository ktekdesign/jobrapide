import { FC, HTMLAttributes, ReactNode, memo } from 'react'
import Link from 'next/link'

interface LinkContainerProps extends HTMLAttributes<HTMLElement> {
  label?: string
  href?: string
  as?: string
  slides?: number
  target?: string
  children: ReactNode
  innerClassName?: string
}
const SeoLink: FC<LinkContainerProps> = ({
  children,
  label,
  href,
  target,
  innerClassName,
  as: Component = 'span',
  ...props
}) => (
  <Component {...props}>
    <Link
      href={href}
      aria-label={label}
      title={label}
      target={target || '_self'}
      className={innerClassName || ''}
    >
      {children}
    </Link>
  </Component>
)

export default memo(SeoLink)
