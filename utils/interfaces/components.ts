import { HTMLAttributes, ReactNode } from 'react'
import { Post, Term } from '@utils/interfaces/data'

export default interface ComponentsProps extends HTMLAttributes<HTMLElement> {
  posts?: Post[]
  terms?: Term[]
  name?: string
  body?: string
  uri?: string
  slides?: number
  width?: number
  height?: number
  query?: string
  children?: ReactNode
}
