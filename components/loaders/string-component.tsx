import { memo } from 'react'

const StringComponent = ({
  as: Component = null,
  cond = true,
  children,
  ...props
}) => {
  if (!cond) return <></>
  if (!Component) return <>{children}</>
  return <Component {...props}>{children}</Component>
}

export default memo(StringComponent)
