import { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import { BreadcrumbType } from '@utils/interfaces/data'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'

const Breadcrumb: FC<{ breadcrumbs?: BreadcrumbType[] }> = ({
  breadcrumbs,
}) => (
  <MappedComponent
    as="div"
    cond={breadcrumbs?.length > 1}
    className="breadcrumb"
    items={breadcrumbs}
  >
    <SeoLink className="breadcrumb-item" as="span">
      <ParsedComponent />
    </SeoLink>
  </MappedComponent>
)

export default memo(Breadcrumb)
