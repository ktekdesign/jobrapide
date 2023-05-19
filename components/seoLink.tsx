import { FC, HTMLAttributes, ReactNode, memo } from 'react'
import Link from 'next/link'
import OnboardingFlow from './onboardingFlow'

interface LinkContainerProps extends HTMLAttributes<HTMLElement> {
  label?: string
  href?: string
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
  <Component {...props}>
    <OnboardingFlow active={active}>
      <Link
        href={href ?? ''}
        aria-label={label ?? ''}
        title={label ?? ''}
        target={target ?? '_self'}
        className={innerClassName ?? ''}
      >
        {children}
      </Link>
      <>{children}</>
    </OnboardingFlow>
  </Component>
)

export default memo(SeoLink)
