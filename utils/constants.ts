export const REVALIDATE = parseInt(process.env.NEXT_PUBLIC_REVALIDATE) || 3600
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL
export const BASE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN
export const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
export const PER_PAGE = parseInt(process.env.NEXT_PUBLIC_PER_PAGE) || 10
export const MAX_PAGES = parseInt(process.env.NEXT_PUBLIC_MAX_PAGE)
export const MAX_TERMS = parseInt(process.env.NEXT_PUBLIC_MAX_TERMS_BY_POST)

export const MENU_ITEMS = [
  { title: 'Emplois', href: '/recrutement/offres/avis-recrutement/' },
  { title: 'Stages', href: '/recrutement/offres/stage/' },
  {
    title: "Avis d'Appels d'Offres",
    href: '/recrutement/offres/avis-appel-offres/',
  },
  { title: 'Bourses', href: '/recrutement/offres/bourses-etude/' },
  { title: 'Concours', href: '/recrutement/offres/concours/' },
  { title: 'Volontaire', href: '/recrutement/offres/volontaire/' },
  { title: 'Call for Papers', href: '/recrutement/offres/call-for-papers/' },
  { title: 'Formations', href: '/recrutement/offres/formations/' },
  { title: 'Actualités', href: '/recrutement/actualites/' },
  { title: 'Contact', href: '/contact/' },
]
export const FOOTER_MENU_ITEMS = [
  { title: 'Qui sommes-nous?', href: '/qui-sommes-nous/' },
  { title: 'Propriété intellectuelle', href: '/propriete-intellectuelle/' },
  {
    title: `Conditions générales d’utilisation de ${process.env.NEXT_PUBLIC_CMS_NAME}`,
    href: '/condition-generale-dutilisation/',
  },
  { title: 'Mentions légales', href: '/mentions-legales/' },
  {
    title: `Politique de confidentialité ${process.env.NEXT_PUBLIC_CMS_NAME}`,
    href: '/confidentialite/',
  },
]
