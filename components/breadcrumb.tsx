import { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import { BreadcrumbType } from '@utils/interfaces/data'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'
import LoaderComponent from './loaders/loader'
import StringComponent from './loaders/string-component'

const Breadcrumb: FC<{ breadcrumbs?: BreadcrumbType[] }> = ({
  breadcrumbs,
}) => (
  <StringComponent
    as="div"
    cond={breadcrumbs?.length > 1}
    className="breadcrumb"
  >
    <MappedComponent items={breadcrumbs}>
      <SeoLink className="breadcrumb-item" as="span">
        <LoaderComponent>
          <ParsedComponent />
        </LoaderComponent>
      </SeoLink>
    </MappedComponent>
  </StringComponent>
)

export default memo(Breadcrumb)
