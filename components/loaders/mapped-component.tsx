import { memo } from 'react'
import LoaderComponent from '@components/loaders/loader'

const MappedComponent = ({ children, items = null, ...props }) => (
  <>
    {items?.map((item, key) => (
      <LoaderComponent key={key} {...{ ...item, order: key, ...props }}>
        {children}
      </LoaderComponent>
    ))}
  </>
)

export default memo(MappedComponent)
