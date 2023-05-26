import { FC, LinkHTMLAttributes, ReactNode, memo } from 'react'
import Link from 'next/link'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import LoaderComponent from '@components/loaders/loader'
import StringComponent from './loaders/string-component'

interface LinkContainerProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  as?: string
  target?: string
  children: ReactNode
  linkClassName?: string
  className?: string
  active?: number
  data?: Omit<LinkContainerProps, 'LinkHTMLAttributes' | 'children'>
}
const SeoLink: FC<LinkContainerProps> = ({
  children,
  title,
  href,
  target,
  className,
  linkClassName,
  as,
  ...props
}) => (
  <StringComponent {...{ className, as, ...props }}>
    <OnboardingFlow active={Number(!href)}>
      <Link
        {...{ href, target, title }}
        aria-label={title}
        className={linkClassName ?? ''}
        {...props}
      >
        <LoaderComponent {...{ ...props, title }}>{children}</LoaderComponent>
      </Link>
      <>{children}</>
    </OnboardingFlow>
  </StringComponent>
)

export default memo(SeoLink)
