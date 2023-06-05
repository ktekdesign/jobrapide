import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import { memo } from 'react'
import MappedComponent from '@components/loaders/mapped-component'
import ArchivePost from '@components/archive-post'

const TermLayout = ({
  title,
  posts,
  href,
  currentPage,
  breadcrumbs,
  ...props
}) => (
  <>
    <ArchiveTitle {...{ title, currentPage }} />
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <section className="archive-body">
      <MappedComponent items={posts}>
        <ArchivePost />
      </MappedComponent>
    </section>
    <Pagination {...{ href, currentPage, ...props }} />
  </>
)

export default memo(TermLayout)
