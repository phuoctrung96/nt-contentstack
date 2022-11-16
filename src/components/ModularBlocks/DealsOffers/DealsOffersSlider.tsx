import React from "react"
import { Link } from "gatsby"
import Flickity from "react-flickity-component"

const SectionHeader = React.lazy(() => import("../SectionHeader"))
import DealCard from "../../CardTypes/DealCard"

import { FLICKITY_ARROW } from "../../../utils/constants"
import { DealListingModel } from "../../../models/components"

interface Props extends DealListingModel {
  results: any[]
}

const defaultProps = {
  results: [],
}

const DealsOffersSlider: React.FC<Props> = props => {
  // slider options
  const flickityOptions = {
    cellSelector: ".deal__carousel-cell",
    groupCells: true,
    cellAlign: "center",
    percentPosition: false,
    dragThreshold: 40,
    arrowShape: FLICKITY_ARROW,
  }

  // slider classes
  const designClass = "deals-design-2"
  const countClass = "count-" + props.results.length
  const viewMoreClass = props.view_more_deals ? "" : "no-view-more"

  return (
    <React.Suspense fallback="Loading...">
      <section className="deals-offers-2">
        {(props.heading || props.intro) && (
          <div className="grid-container">
            <SectionHeader heading={props.heading} intro={props.intro} />
          </div>
        )}

        <Flickity
          className={`deal__carousel ${designClass} ${countClass} ${viewMoreClass}`}
          options={flickityOptions}
        >
          {props.results.map((deal, index) => (
            <div key={`deal_${index}`} className="deal__carousel-cell">
              <DealCard {...deal} />
            </div>
          ))}

          {props.view_more_deals && (
            <div key={`deal_more`} className="deal__carousel-cell">
              <Link
                to="/deals-and-offers"
                className="deal__more-deals deal__link"
              >
                <div className="deal__more-deals__wrapper">
                  <h3 className="deal__more-deals__title">
                    Looking for more holiday deals?
                  </h3>
                  <div className="deal__more-deals__button button brand-button">
                    Find deals
                  </div>
                </div>
              </Link>
            </div>
          )}
        </Flickity>
      </section>
    </React.Suspense>
  )
}

DealsOffersSlider.defaultProps = defaultProps

export default DealsOffersSlider
