import { memo } from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'
import { BASE_URL } from '@utils/constants'
import truncate from '@utils/truncate'

const Breadcrumb = ({ breadcrumbs }) => {
  if (breadcrumbs?.length < 2) return <></>

  return (
    <div className="row">
      <div className="breadcrumb">
        {breadcrumbs?.map(({ text, url }, key) => (
          <Link
            className="breadcrumb-item"
            key={key}
            href={url.replaceAll('https://www.jobrapide.org', BASE_URL)}
          >
            {parse(truncate(text))}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default memo(Breadcrumb)
