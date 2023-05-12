import { loadFromWPGraphQL } from '../../../graphql/api'
import {
  categoriesQuery,
  niveauxQuery,
  regionsQuery,
  secteursQuery,
  tagsQuery,
} from '../../../graphql/termQueries'
import { filterTerms } from '../../filterTerms'
import { outputErrors } from '../../outputErrors'
import * as fsPromise from 'node:fs/promises'

const loadTerms = async (name) => {
  const query =
    name === 'secteurs'
      ? secteursQuery
      : name === 'regions'
      ? regionsQuery
      : name === 'niveaux'
      ? niveauxQuery
      : name === 'tags'
      ? tagsQuery
      : categoriesQuery

  try {
    const data = await loadFromWPGraphQL(query)
    const terms = filterTerms(data)

    fsPromise.writeFile(`utils/data/${name}.json`, JSON.stringify(terms))
  } catch (error) {
    outputErrors(error)
  }
}
export default async function load() {
  await loadTerms('secteurs')
  await loadTerms('regions')
  await loadTerms('categories')
  await loadTerms('niveaux')
  await loadTerms('tags')
}
