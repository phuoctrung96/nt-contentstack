import React from "react"

const SectionHeader = React.lazy(() => import("../SectionHeader"))

import { DealListingModel } from "../../../models/components"

interface Props extends DealListingModel {
  results: any[]
}

const defaultProps = {
  results: [],
}

const DealsOffersListing: React.FC<Props> = props => {
  return (
    <React.Suspense fallback="Loading...">
      <section className="deals-offers-2">
        <div className="grid-container">
          {(props.heading || props.intro) && (
            <SectionHeader heading={props.heading} intro={props.intro} />
          )}

          <h4>Deal Page Listing</h4>
        </div>
      </section>
    </React.Suspense>
  )
}

DealsOffersListing.defaultProps = defaultProps

export default DealsOffersListing
