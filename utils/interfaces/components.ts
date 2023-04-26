import { HTMLAttributes, ReactNode } from 'react'
import { Post, Term } from '@utils/interfaces/data'

export default interface ComponentsProps extends HTMLAttributes<HTMLElement> {
  posts?: Post[]
  terms?: Term[]
  body?: string
  uri?: string
  image?: string
  slides?: number
  width?: number
  height?: number
  query?: string
  priority?: boolean
  onlyImage?: boolean
  target?: string
  children?: ReactNode
}
