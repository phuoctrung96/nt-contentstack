import React, { useState, useEffect } from "react"

const DealsOffersListing = React.lazy(() => import("./DealsOffersListing"))
const DealsOffersSlider = React.lazy(() => import("./DealsOffersSlider"))

import { DealsOffersModule } from "../../../models/modules"

interface Props extends DealsOffersModule {
  pageListing?: boolean
}

const defaultProps = {}

const DealsOffers: React.FC<Props> = props => {
  // console.log("DealsOffers: ", props)
  const listing = props.listing ? props.listing[0] : undefined
  if (!listing) return null

  // state
  const [results, setResults] = useState<any[]>([])

  // load initial items
  useEffect(() => {
    setResults([...Array(8).keys()])
  }, [])

  return (
    <React.Suspense fallback="Loading...">
      <>
        {props.pageListing ? (
          <DealsOffersListing {...listing} results={results} />
        ) : (
          <DealsOffersSlider {...listing} results={results} />
        )}
      </>
    </React.Suspense>
  )
}

DealsOffers.defaultProps = defaultProps

export default DealsOffers
