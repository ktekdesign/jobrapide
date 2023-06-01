import LoadingComponent from '@components/loading-component'
import React, { Children, cloneElement, isValidElement, memo } from 'react'

const Loading = ({
  children,
  data = null,
  loading = false,
  error = null,
  serial = false,
}) => {
  if (loading) return <LoadingComponent />
  if (error) return <></>

  return (
    <>
      {Children.map(children, (child, key) => {
        if (isValidElement(child)) {
          if (serial) {
            const datas = Object.values(data)

            return cloneElement(child, datas[key])
          }
          return cloneElement(child, { ...data })
        }
        return <>{child}</>
      })}
    </>
  )
}
export default memo(Loading)
