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
}
