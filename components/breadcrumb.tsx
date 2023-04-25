import { memo } from 'react'
import parse from 'html-react-parser'
import { BASE_URL } from '@utils/constants'
import truncate from '@utils/truncate'
import SeoLink from '@components/seoLink'

const Breadcrumb = ({
  breadcrumbs,
}: {
  breadcrumbs?: { text: string; url: string }[]
}) => {
  if (breadcrumbs?.length < 2) return <></>

  return (
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
}
export default memo(Breadcrumb)
