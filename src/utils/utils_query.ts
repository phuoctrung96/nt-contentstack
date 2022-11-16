/****************************************************

	Utilities - Query

****************************************************/
import { ATDWProductModel } from "../models/common"
import { QueryModule } from "../models/modules"
import { intersectArrays } from "./utils_arrays"

type ExcludesFalse = <T>(x: T | false) => x is T

interface QueryModel {
  tags?: string[]
  operator?: string
  join?: string
  group?: QueryModel[]
}

/****************************************************
  build a list of query instructions
****************************************************/
export const buildQuerySet = (set: QueryModule[]): QueryModel[] => {
  return set
    .map((query, index) => {
      if (index === 0 && query.operator) return false

      if (query.nt_tags) {
        const tagList = query.nt_tags.nt_tags?.map(x => x.display_name) || []
        return { tags: tagList, operator: query.nt_tags.operator } as QueryModel
      }

      if (query.operator) {
        if (typeof query.operator === "string") return { join: query.operator }
        else {
          return { join: query.operator.operator } as QueryModel
        }
      }

      if (query.group)
        return { group: buildQuerySet(query.group.set) } as QueryModel

      return false
    })
    .filter(Boolean as any as ExcludesFalse)
}

/****************************************************
  apply query instructions to the dataset
****************************************************/
export const queryAtdwProducts = (
  original: ATDWProductModel[],
  query: QueryModel[]
) => {
  let result = [...original]
  let join = ""

  query.forEach(action => {
    // set the next join action
    if (action.join) join = action.join

    // apply tag filtering
    // - OR starts from the original dataset
    // - AND / AND NOT refines the current results
    if (action.tags) {
      const source = join === "OR" ? original : result
      const matches =
        action.operator === "AND"
          ? and_op(source, action.tags)
          : action.operator === "AND NOT"
          ? and_not_op(source, action.tags)
          : or_op(source, action.tags)
      result = join === "OR" ? or_join(result, matches) : matches
    }

    // build results if query group and then apply to results
    if (action.group) {
      const groupSource = join === "OR" ? original : result
      const group = queryAtdwProducts([...groupSource], action.group)
      if (join === "OR") result = or_join(result, group)
      if (join === "AND") result = and_join(result, group)
      if (join === "AND NOT") result = and_not_join(result, group)
    }
  })

  return result
}

/****************************************************
  tag operation helpers
****************************************************/
const or_op = (source: ATDWProductModel[], tags: string[]) => {
  return source.filter(
    product => intersectArrays(product.tags, tags).length > 0
  )
}

const and_op = (source: ATDWProductModel[], tags: string[]) => {
  return source.filter(product => tags.every(tag => product.tags.includes(tag)))
}

const and_not_op = (source: ATDWProductModel[], tags: string[]) => {
  return source.filter(product =>
    tags.every(tag => !product.tags.includes(tag))
  )
}

/****************************************************
  join helpers
****************************************************/
const or_join = (source: ATDWProductModel[], matches: ATDWProductModel[]) => {
  const allItems = [...source, ...matches]
  const productIds = new Set()
  return allItems.filter(product => {
    const isDuplicate = productIds.has(product.productId)
    productIds.add(product.productId)
    return !isDuplicate
  })
}

const and_join = (source: ATDWProductModel[], matches: ATDWProductModel[]) => {
  const list = matches.map(x => x.productId)
  return source.filter(product => list.indexOf(product.productId) !== -1)
}

const and_not_join = (
  source: ATDWProductModel[],
  matches: ATDWProductModel[]
) => {
  const list = matches.map(x => x.productId)
  return source.filter(product => list.indexOf(product.productId) === -1)
}
