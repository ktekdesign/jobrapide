import { HTMLAttributes } from 'react'

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
  seo?: Seo
}
export interface Term {
  id: number
  name: string
  count?: number
  slug?: string
  uri: string
  parentId?: number
  posts?: Post[]
  seo?: Seo
}
export interface Page {
  id: number
  title: string
  content: string
  seo?: Seo
}
export interface Seo {
  breadcrumbs: { text: string; url: string }[]
  canonical: string
  metaDesc: string
  metaKeywords: string
  metaRobotsNofollow: string
  metaRobotsNoindex: string
  opengraphAuthor: string
  opengraphDescription: string
  opengraphImage: string
  opengraphModifiedTime: string
  opengraphPublishedTime: string
  opengraphPublisher: string
  opengraphSiteName: string
  opengraphTitle: string
  opengraphType: string
  opengraphUrl: string
  schema: string
  title: string
  twitterDescription: string
  twitterImage: string
  twitterTitle: string
}
export enum TermType {
  Category = 'CATEGORY',
  Secteur = 'SECTEUR',
  Region = 'REGION',
  Niveau = 'NIVEAU',
  Tag = 'TAG',
}

export enum TermTypePlural {
  categories = 'categories',
  secteurs = 'secteurs',
  regions = 'regions',
  niveaux = 'niveaux',
  tags = 'tags',
}

export interface PostsContainerProps extends HTMLAttributes<HTMLElement> {
  items?: Post[]
  slides?: number
  width?: number
  height?: number
}
