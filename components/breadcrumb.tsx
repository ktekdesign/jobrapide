import { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import { BreadcrumbType } from '@utils/interfaces/data'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'
import ConditionalComponent from '@components/loaders/conditional-component'

const Breadcrumb: FC<{ breadcrumbs?: BreadcrumbType[] }> = ({
  breadcrumbs,
}) => (
  <ConditionalComponent cond={breadcrumbs?.length > 1} className="breadcrumb">
    <MappedComponent items={breadcrumbs}>
      <SeoLink className="breadcrumb-item" as="small">
        <ParsedComponent />
      </SeoLink>
    </MappedComponent>
  </ConditionalComponent>
)

export default memo(Breadcrumb)
