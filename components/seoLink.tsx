import { FC, LinkHTMLAttributes, ReactNode, memo } from 'react'
import Link from 'next/link'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import LoaderComponent from '@components/loaders/loader'

interface LinkContainerProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  as?: string
  target?: string
  children: ReactNode
  innerClassName?: string
  active?: number
  data?: Omit<LinkContainerProps, 'LinkHTMLAttributes' | 'children'>
}
const SeoLink: FC<LinkContainerProps> = ({
  children,
  title,
  href,
  target,
  innerClassName,
  as: Component = 'a',
  data,
  ...props
}) => {
  const CustomLink = ({ children, ...props }) => (
    <OnboardingFlow active={Number(!href)}>
      <Link
        {...{ href, target, title }}
        aria-label={title}
        className={innerClassName ?? ''}
        {...props}
      >
        {children}
      </Link>
      <>{children}</>
    </OnboardingFlow>
  )

  return (
    <OnboardingFlow active={Number(Component === 'a')}>
      <Component {...props}>
        <CustomLink>
          <LoaderComponent {...{ ...data, title }}>{children}</LoaderComponent>
        </CustomLink>
      </Component>
      <CustomLink {...props}>{children}</CustomLink>
    </OnboardingFlow>
  )
}

export default memo(SeoLink)
