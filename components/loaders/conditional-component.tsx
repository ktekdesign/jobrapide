import { FC, HTMLAttributes, ReactNode, memo } from 'react'

interface ConditionalComponentProps extends HTMLAttributes<HTMLElement> {
  as?: string
  cond: boolean
  isFragment?: boolean
  children: ReactNode
}

const ConditionalComponent: FC<ConditionalComponentProps> = ({
  children,
  cond,
  as: Component = 'div',
  isFragment = false,
  ...props
}) =>
  cond &&
  (isFragment ? <>{children}</> : <Component {...props}>{children}</Component>)

export default memo(ConditionalComponent)
