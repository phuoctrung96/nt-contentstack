import React from "react"

// const Banner = React.lazy(() => import("./Banner/Banner"))
// const Cards = React.lazy(() => import("./Cards/Cards"))
// const Special = React.lazy(() => import("./Special/Special"))

import { BlockModels } from "../models/components"

interface BlockListProps {
  items: BlockModels[]
}

const defaultProps = {}

export const BlockList: React.FC<BlockListProps> = props => {
  // console.log("BlockList: ", props)
  if (!!!props.items) return null

  return (
    <React.Suspense fallback="Loading...">
      <>
        {props.items.map(item => {
          console.log("BlockList - item: ", item)
          // const type = item.internal?.type
          // if (type === "Contentstack_banner")
          //   return <Banner key={item.id} {...item} />
          // if (type === "Contentstack_cards")
          //   return <Cards key={item.id} {...item} />
          // if (type === "Contentstack_special")
          //   return <Special key={item.id} {...item} />
        })}
      </>
    </React.Suspense>
  )
}

BlockList.defaultProps = defaultProps

export default BlockList
