export const getLast = (elt) => elt.slice(-1)[0]
export const getFirst = (elt) => elt[0]
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
export const preventUndefined = (obj) => (isEmpty(obj) ? null : obj)
