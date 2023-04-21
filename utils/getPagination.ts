import { getFirst, getLast, next, prev } from '@utils/manipulateArray'
import { PER_PAGE } from './constants'

const getPagination = (count, currentPage) => {
  const PAGE_BREAK = 3
  const totalPages = getAllPages(count)

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
    if (next(currentPage) !== getFirst(last)) {
      middle.push(next(currentPage))
      middle.push('...')
    }
  }
  return [...first, ...middle, ...last]
}

export const getAllPages = (count) => Math.ceil(count / PER_PAGE)

export default getPagination
