import {
  Children,
  FC,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
  memo,
} from 'react'

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
}) => (
  <Component {...{ className, ...props }}>
    {Children.map(children, (child) => {
      if (isValidElement(child)) return cloneElement(child, { ...props })
      return <>{child}</>
    })}
  </Component>
)

export default memo(LoaderComponent)
