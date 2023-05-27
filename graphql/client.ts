import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    cache: new InMemoryCache(),
  })
}

const client = createApolloClient()

export default client
