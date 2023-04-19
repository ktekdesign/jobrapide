import { getFirst, getLast, next, prev } from '@utils/manipulateArray'

export const getPagination = (count, currentPage) => {
  const PER_PAGE = 10
  const PAGE_BREAK = 3
  const totalPages = Math.ceil(count / PER_PAGE)

  const first = []
  const middle = []
  const last = []

  for (let index = 1; index <= Math.min(PAGE_BREAK, totalPages); index++) {
    first.push(index)
  }
  if (totalPages <= PER_PAGE && totalPages > PAGE_BREAK) {
    for (let index = PAGE_BREAK + 1; index <= totalPages; index++) {
      last.push(index)
    }
  } else if (totalPages > PER_PAGE) {
    middle.push('...')
    for (
      let index = totalPages - PAGE_BREAK + 1;
      index <= totalPages;
      index++
    ) {
      last.push(index)
    }
  }
  if (currentPage >= getLast(first) && currentPage <= getFirst(last)) {
    first.pop()
    last.shift()
    if (currentPage === 3 || currentPage === 4) middle.splice(0, 1)
    if (prev(currentPage) !== getLast(first)) middle.push(prev(currentPage))
    middle.push(currentPage)
    if (currentPage + 1 !== getFirst(last)) {
      middle.push(next(currentPage))
      middle.push('...')
    }
  }
  return [...first, ...middle, ...last]
}

export default getPagination
