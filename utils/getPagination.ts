import { next, prev } from '@utils/manipulateArray'
import { PER_PAGE } from '@utils/constants'

const getPagination = (count, currentPage) => {
  const PAGE_BREAK = 3
  const totalPages = getAllPages(count)

  const first = []
  const middle = []
  const last = []
  if (totalPages <= PER_PAGE) {
    for (let index = 1; index <= totalPages; index++) {
      first.push({ page: index })
    }
    return first
  } else {
    middle.push({ page: 0 })
  }
  for (let index = 1; index <= Math.min(PAGE_BREAK, totalPages); index++) {
    first.push({ page: index })
  }

  for (let index = totalPages - PAGE_BREAK + 1; index <= totalPages; index++) {
    last.push({ page: index })
  }

  if (currentPage >= PAGE_BREAK && currentPage <= totalPages - PAGE_BREAK + 1) {
    if (prev(currentPage) > PAGE_BREAK) {
      middle.push({ page: prev(currentPage) })
    } else {
      first.pop()
    }
    middle.push({ page: currentPage })
    if (next(currentPage) <= totalPages - PAGE_BREAK) {
      middle.push({ page: next(currentPage) })
      middle.push({ page: 0 })
    }
    if (currentPage === totalPages - PAGE_BREAK + 1) last.shift()
  }
  return [...first, ...middle, ...last]
}

export const getAllPages = (count) => Math.ceil(count / PER_PAGE)

export default getPagination
