import { Children, Fragment, cloneElement, isValidElement, memo } from 'react'

const MappedComponent = ({ children, items, ...props }) => (
  <>
    {items?.map((item, key) => (
      <Fragment key={key}>
        {Children.map(children, (child) => {
          if (isValidElement(child))
            return cloneElement(child, { ...item, ...props })
          return <>{child}</>
        })}
      </Fragment>
    ))}
  </>
)

export default memo(MappedComponent)
