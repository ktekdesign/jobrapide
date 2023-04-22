import { memo } from 'react'
import Layout from '@layout/layout'
import { preventUndefined } from '@utils/manipulateArray'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, currentPage, pages }) => (
  <Layout seo={preventUndefined(term?.seo)}>
    <ArchiveTitle currentPage={preventUndefined(currentPage)}>
      {preventUndefined(term?.name)}
    </ArchiveTitle>
    <MoreStories posts={preventUndefined(term?.posts)} />
    <Pagination
      pages={preventUndefined(pages)}
      uri={preventUndefined(term?.uri)}
      currentPage={preventUndefined(currentPage)}
    />
  </Layout>
)

export default memo(TermLayout)
