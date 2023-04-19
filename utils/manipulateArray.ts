export const getLast = (elt) => elt.slice(-1)[0]
export const getFirst = (elt) => elt[0]
export const next = (elt) => elt + 1
export const prev = (elt) => elt - 1
export const isFirstPage = (page) => page === 1
export const isEmpty = (elt) => {
  if (typeof elt === 'string') return elt.trim() === ''
  if (elt instanceof Array) return elt.length === 0
  return elt === null
}
export const preventStringUndefined = (obj) => obj || ''
export const preventArrayUndefined = (obj) => obj || []
export const preventObjectUndefined = (obj) => obj || null
export const preventNumberUndefined = (obj) => obj || 0
