import { useContext } from 'react'
import PostsContext from '@context/postsContext'

const usePosts = () => {
  const context = useContext(PostsContext)

  if (context === undefined) {
    throw new Error('useTerms must be used within TermsContext')
  }
  return context
}

export default usePosts
