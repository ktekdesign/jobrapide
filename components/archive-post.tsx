import { FC, Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import CoverImage from '@components/cover-image'
import SeoLink from '@components/seoLink'
import ShareButtons from '@components/share-buttons'
import Terms from 'components/terms'
import Date from '@components/date'
import { Post } from '@utils/interfaces/data'
import ParsedComponent from '@components/parsed-component'

import resizeImage from '@utils/resizeImage'
const StringComponent = dynamic(() => import('./loaders/string-component'), {
  ssr: false,
})
const Adsense = dynamic(() => import('@components/adsense'), { ssr: false })

interface ArchivePostType extends Post {
  priority?: boolean
  order?: number
  route?: string
}

const ArchivePost: FC<ArchivePostType> = ({
  image,
  title,
  categories,
  href,
  excerpt,
  date,
  priority,
  order,
}) => (
  <>
    <article>
      <CoverImage
        image={resizeImage({ height: 200, src: image })}
        {...{ title, href, priority }}
        linkClassName="archive-post-feature relative"
      />
      <div className="post-info">
        <Terms
          className="post-list-categories"
          terms={categories}
          title="Categories : "
        />
        <SeoLink className="archive-post-title" {...{ title, href }} as="h3">
          <ParsedComponent title={title} />
        </SeoLink>
        <Date date={date} className="post-list-terms" />
        <ParsedComponent
          className="post-list-excerpt"
          as="div"
          text={excerpt}
        />
        <ShareButtons {...{ href, title }} />
      </div>
    </article>
    <Suspense>
      <StringComponent cond={order === 4}>
        <Adsense />
      </StringComponent>
    </Suspense>
  </>
)

export default memo(ArchivePost)
