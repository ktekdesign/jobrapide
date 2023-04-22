export const REVALIDATE = parseInt(process.env.NEXT_PUBLIC_REVALIDATE) || 3600
export const MENU_ITEMS = [
  { title: 'Emploi', uri: '/recrutement/offres/avis-recrutement' },
  { title: 'Stage', uri: '/recrutement/offres/stage' },
  {
    title: "Avis d'appel d'offres",
    uri: '/recrutement/offres/avis-appel-offres',
  },
  { title: 'Bourses', uri: '/recrutement/offres/bourses-etude' },
  { title: 'Concours', uri: '/recrutement/offres/concours' },
  { title: 'Volontaire', uri: '/recrutement/offres/volontaire' },
  { title: 'Call for Papers', uri: '/recrutement/offres/call-for-papers' },
  { title: 'Formations', uri: '/recrutement/offres/formations' },
  { title: 'Actualités', uri: '/recrutement/actualites' },
  { title: 'Contact', uri: '/contact' },
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
