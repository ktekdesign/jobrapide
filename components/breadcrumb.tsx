import { FC, memo } from 'react'
import parse from 'html-react-parser'
import { BASE_URL } from '@utils/constants'
import truncate from '@utils/truncate'
import SeoLink from '@components/seoLink'
import { BreadcrumbType } from '@utils/interfaces/data'
import { prev } from '@utils/manipulateArray'

const Breadcrumb: FC<{ breadcrumbs?: BreadcrumbType[]; length?: number }> = ({
  breadcrumbs,
  length = breadcrumbs?.length ?? 0,
}) =>
  length < 2 ? (
    <></>
  ) : (
    <div className="row breadcrumb">
      {breadcrumbs?.map(({ text, url }, key) =>
        key === prev(length) ? (
          <span key={key} className="breadcrumb-item">
            {parse(truncate(text))}
          </span>
        ) : (
          <SeoLink
            className="breadcrumb-item"
            label={text}
            key={key}
            href={url.replaceAll('https://www.jobrapide.org', BASE_URL)}
          >
            {parse(text)}
          </SeoLink>
        )
      )}
    </div>
  )

export default memo(Breadcrumb)
