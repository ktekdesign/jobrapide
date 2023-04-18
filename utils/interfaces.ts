export interface ImageProps {
  node: {
    sourceUrl: string
  }
}
export interface TermsProps {
  edges: [node: TermProps]
}
export interface TermsListProps {
  id: string
  databaseId: number
  name: string
  uri: string
  count: string
}

export interface PostProps {
  id?: string
  databaseId?: number
  title: string
  featuredImage: ImageProps
  date?: string
  excerpt?: string
  content?: string
  uri: string
  categories?: TermsProps
  secteurs?: TermsProps
  regions?: TermsProps
  priority?: boolean
}
export interface PostsProps {
  nodes: PostProps[]
}
export interface TermProps {
  id: string
  databaseId: number
  name: string
  count?: number
  slug?: string
  uri: string
  parentDatabaseId?: number
  posts?: PostsProps
}
export interface InitialStateType {
  secteurs: Term[]
  regions: Term[]
  categories: Term[]
  niveaux?: Term[]
  posts?: Term[]
}
export interface InitialModalStateType {
  toggleModal: boolean
  toggleSearchForm: boolean
}
export interface PageInfo {
  hasNextPage: boolean
  endCursor: string
}
export interface Post {
  id?: number
  title: string
  image: string
  date?: string
  excerpt?: string
  content?: string
  uri: string
  categories?: Term[]
  secteurs?: Term[]
  regions?: Term[]
}
export interface Term {
  id: number
  name: string
  count?: number
  slug?: string
  uri: string
  parentId?: number
  posts?: Post[]
  info?: PageInfo
}
