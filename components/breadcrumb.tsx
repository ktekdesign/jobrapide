import { FC, memo } from 'react'
import parse from 'html-react-parser'
import { BASE_URL } from '@utils/constants'
import truncate from '@utils/truncate'
import SeoLink from '@components/seoLink'
import { BreadcrumbType } from '@utils/interfaces/data'

const Breadcrumb: FC<{ breadcrumbs?: BreadcrumbType[] }> = ({ breadcrumbs }) =>
  breadcrumbs?.length < 2 ? (
    <></>
  ) : (
    <div className="row breadcrumb">
      {breadcrumbs?.map(({ text, url }, key) => (
        <SeoLink
          className="breadcrumb-item"
          label={text}
          key={key}
          href={url.replaceAll('https://www.jobrapide.org', BASE_URL)}
        >
          {parse(truncate(text))}
        </SeoLink>
      ))}
    </div>
  )

export default memo(Breadcrumb)
