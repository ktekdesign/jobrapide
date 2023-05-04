import { memo, useMemo, useState } from 'react'
import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import SwiperHome from '@components/swiperHome'
import SwiperTitle from '@components/swiperTitle'
import Loading from '@components/loading'
import { getFirst, isEmpty } from '@utils/manipulateArray'
import { gql, useQuery } from '@apollo/client'
import { similarQuery } from '@graphql/similarQuery'
import { mapPost } from '@utils/mapping'

const PostLayout = ({ breadcrumbs, ...props }) => {
  const [posts, setPosts] = useState([])

  const QUERY = gql`
    ${similarQuery
      .replace('$id', props?.id)
      .replace('$categoryId', getFirst(props?.categories)?.id)}
  `

  const { data } = useQuery(QUERY)
  useMemo(
    () => setPosts(data?.posts?.nodes?.map((post) => mapPost(post))),
    [data?.posts?.nodes]
  )
  return (
    <>
      <Loading data={{ ...props, breadcrumbs }} loading={isEmpty(props)}>
        <PostHeader />
        <PostBody />
      </Loading>
      <SwiperTitle
        title="Publications similaires"
        className="title-secondary"
      />
      <Loading data={{ posts }} loading={isEmpty(posts)}>
        <SwiperHome />
      </Loading>
    </>
  )
}

export default memo(PostLayout)
