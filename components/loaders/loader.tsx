import { Children, cloneElement, isValidElement, memo } from 'react'
import StringComponent from './string-component'

const LoaderComponent = ({ children, as = null, className = '', ...props }) => (
  <StringComponent {...{ as, className, ...props }}>
    {Children.map(children, (child) => {
      if (isValidElement(child)) return cloneElement(child, { ...props })
      return <>{child}</>
    })}
  </StringComponent>
)

export default memo(LoaderComponent)
