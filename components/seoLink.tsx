import { FC, LinkHTMLAttributes, ReactNode, memo } from 'react'
import Link from 'next/link'
import OnboardingFlow from '@components/onboardingFlow'

interface LinkContainerProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  label?: string
  as?: string
  slides?: number
  target?: string
  children: ReactNode
  innerClassName?: string
  active?: number
}
const SeoLink: FC<LinkContainerProps> = ({
  children,
  label,
  href,
  target,
  innerClassName,
  as: Component = 'span',
  active = 0,
  ...props
}) => (
  <OnboardingFlow active={active}>
    <Component {...props}>
      <Link
        href={href ?? ''}
        aria-label={label ?? ''}
        title={label ?? ''}
        target={target ?? '_self'}
        className={innerClassName ?? ''}
      >
        {children}
      </Link>
    </Component>
    <Component {...props}>{children}</Component>
    <Link
      href={href ?? ''}
      aria-label={label ?? ''}
      title={label ?? ''}
      target={target ?? '_self'}
      className={innerClassName ?? ''}
      {...props}
    >
      {children}
    </Link>
  </OnboardingFlow>
)

export default memo(SeoLink)
