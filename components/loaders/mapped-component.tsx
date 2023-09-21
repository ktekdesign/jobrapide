import { memo } from 'react'
import LoaderComponent from '@components/loaders/loader'
import StringComponent from './string-component'

const MappedComponent = ({ children, items, ...props }) => (
  <StringComponent {...props}>
    {items?.map((item, key) => (
      <LoaderComponent key={key} {...{ ...item, order: key }}>
        {children}
      </LoaderComponent>
    ))}
  </StringComponent>
)

export default memo(MappedComponent)
