import { ApolloClient, InMemoryCache } from '@apollo/client'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: API_URL,
    cache: new InMemoryCache(),
  })
}

const client = createApolloClient()

export default client
