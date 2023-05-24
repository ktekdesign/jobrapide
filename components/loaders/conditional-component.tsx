import { FC, HTMLAttributes, ReactNode, memo } from 'react'

interface ConditionalComponentProps extends HTMLAttributes<HTMLElement> {
  as?: string
  cond: boolean
  children: ReactNode
}

const ConditionalComponent: FC<ConditionalComponentProps> = ({
  children,
  cond,
  as: Component = 'div',
  ...props
}) => cond && <Component {...props}>{children}</Component>

export default memo(ConditionalComponent)
