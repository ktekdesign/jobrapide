export const REVALIDATE = parseInt(process.env.NEXT_PUBLIC_REVALIDATE) || 3600
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL
export const BASE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN
export const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
export const PER_PAGE = parseInt(process.env.NEXT_PUBLIC_PER_PAGE)
export const MAX_PAGES = parseInt(process.env.NEXT_PUBLIC_MAX_PAGE)
export const MAX_TERMS = parseInt(process.env.NEXT_PUBLIC_MAX_TERMS_BY_POST)

export const MENU_ITEMS = [
  { title: 'Emplois', uri: '/recrutement/offres/avis-recrutement/' },
  { title: 'Stages', uri: '/recrutement/offres/stage/' },
  {
    title: "Avis d'Appels d'Offres",
    uri: '/recrutement/offres/avis-appel-offres/',
  },
  { title: 'Bourses', uri: '/recrutement/offres/bourses-etude/' },
  { title: 'Concours', uri: '/recrutement/offres/concours/' },
  { title: 'Volontaire', uri: '/recrutement/offres/volontaire/' },
  { title: 'Call for Papers', uri: '/recrutement/offres/call-for-papers/' },
  { title: 'Formations', uri: '/recrutement/offres/formations/' },
  { title: 'Actualités', uri: '/recrutement/actualites/' },
  { title: 'Contact', uri: '/contact/' },
]
export const FOOTER_MENU_ITEMS = [
  { title: 'Qui sommes-nous?', uri: '/qui-sommes-nous/' },
  { title: 'Propriété intellectuelle', uri: '/propriete-intellectuelle/' },
  {
    title: `Conditions générales d’utilisation de ${process.env.NEXT_PUBLIC_CMS_NAME}`,
    uri: '/condition-generale-dutilisation/',
  },
  { title: 'Mentions légales', uri: '/mentions-legales/' },
  {
    title: `Politique de confidentialité ${process.env.NEXT_PUBLIC_CMS_NAME}`,
    uri: '/confidentialite/',
  },
]
