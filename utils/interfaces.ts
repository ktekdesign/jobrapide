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
  title: string
  featuredImage: ImageProps
  date?: string
  excerpt?: string
  uri: string
  categories?: TermsProps
  secteurs?: TermsProps
  regions?: TermsProps
  priority?: boolean
}
export interface PostsProps {
  edges: [
    {
      node: PostProps
    }
  ]
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
  secteurs: TermsListProps[]
  regions: TermsListProps[]
  categories: TermsListProps[]
  niveaux?: TermsListProps[]
  posts?: TermProps[]
}
export interface InitialModalStateType {
  toggleModal: boolean
  toggleSearchForm: boolean
}
