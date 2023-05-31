import { FC, LinkHTMLAttributes, ReactNode, memo } from 'react'
import Link from 'next/link'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import LoaderComponent from '@components/loaders/loader'
import StringComponent from './loaders/string-component'

interface LinkContainerProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  as?: string
  target?: string
  children?: ReactNode
  linkClassName?: string
  className?: string
  active?: number
  route?: string
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
  route,
  ...props
}) => (
  <StringComponent
    data-active={href?.includes(route)}
    {...{ className, as, ...props }}
  >
    <OnboardingFlow active={Number(!href)}>
      <Link
        {...{ href, target, title }}
        prefetch={false}
        aria-label={title}
        className={linkClassName ?? ''}
        {...props}
      >
        {!children ? (
          title
        ) : (
          <LoaderComponent {...{ ...props, title }}>{children}</LoaderComponent>
        )}
      </Link>
      <>{!children ? title : children}</>
    </OnboardingFlow>
  </StringComponent>
)

export default memo(SeoLink)
