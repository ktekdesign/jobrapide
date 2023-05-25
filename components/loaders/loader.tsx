import {
  Children,
  FC,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
  memo,
} from 'react'
import OnboardingFlow from './onboardingFlow'

interface LoaderProps extends HTMLAttributes<HTMLElement> {
  as?: string
  children: ReactNode
  data?: Omit<LoaderProps, 'HTMLAttributes' | 'children'>
}
const LoaderComponent: FC<LoaderProps> = ({
  children,
  as: Component = 'span',
  className,
  ...props
}) => {
  const FormattedChildren = ({ children }) => {
    return (
      <>
        {Children.map(children, (child) => {
          if (isValidElement(child)) return cloneElement(child, { ...props })
          return <>{child}</>
        })}
      </>
    )
  }
  return (
    <OnboardingFlow active={Number(Component === 'span')}>
      <Component {...{ className, ...props }}>
        <FormattedChildren>{children}</FormattedChildren>
      </Component>
      <FormattedChildren>{children}</FormattedChildren>
    </OnboardingFlow>
  )
}

export default memo(LoaderComponent)
