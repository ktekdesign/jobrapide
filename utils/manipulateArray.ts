export const getLast = (elt) => (elt ? elt.slice(-1)[0] : null)
export const getFirst = (elt) => (elt ? elt[0] : null)
export const next = (elt) => elt + 1
export const prev = (elt) => elt - 1
export const isFirstPage = (current) => current === 1
export const isCurrentPage = (current, lastPage) =>
  current === parseInt(lastPage)
export const isEmpty = (elt) => {
  if (!elt) return true
  if (typeof elt === 'string') return elt.trim() === ''
  if (elt instanceof Array) return elt.length === 0
  return elt === null
}
export const preventUndefined = (obj) =>
  isEmpty(obj) || obj === 'undefined'
    ? null
    : typeof obj === 'string'
    ? obj.replaceAll('TchadCarriere', 'JobRapide')
    : obj

export const getOptimizedImageUrl = (url: string) => {
  if (!url) return
  const imageUrl = url.replace(
    'wp-content/uploads',
    'wp-content/webp-express/webp-images/uploads'
  )
  return `${imageUrl}.webp`
}
