import { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import { BreadcrumbType } from '@utils/interfaces/data'
import { prev } from '@utils/manipulateArray'

const Breadcrumb: FC<{ breadcrumbs?: BreadcrumbType[] }> = ({
  breadcrumbs,
}) => (
  <div className="breadcrumb">
    {breadcrumbs?.length > 1 &&
      breadcrumbs.map(({ text, url }, key) => (
        <SeoLink
          className="breadcrumb-item"
          label={text}
          active={Number(key === prev(breadcrumbs.length))}
          key={key}
          href={url}
        >
          {text}
        </SeoLink>
      ))}
  </div>
)

export default memo(Breadcrumb)
