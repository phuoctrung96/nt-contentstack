import React from "react"

import DynamicCard from "../../CardTypes/DynamicCard"
import DummyButton from "../../Button/DummyButton"

interface Props {
  results: any[]
  hasMore?: boolean
  nextPage: () => void
  disableMyTrip?: boolean
}

const defaultProps = {}

const ListingResults: React.FC<Props> = props => {
  if (!props.results.length) return null

  return (
    <>
      {props.results.length === 0 && (
        <div className="listing__noResults">
          <h3 className="regional">
            Your search returned no results. Please try again.
          </h3>
        </div>
      )}

      {props.results.length > 0 && (
        <div className="listing__results">
          <div className="grid-x grid-margin-x medium-up-2 large-up-4">
            {props.results.map((result, index) => (
              <div key={`result_${index}`} className="cell">
                <DynamicCard {...result} disableMyTrip={props.disableMyTrip} />
              </div>
            ))}
          </div>
        </div>
      )}

      {props.hasMore && (
        <div className="listing__cta">
          <DummyButton label="Show more" onClick={props.nextPage} />
        </div>
      )}
    </>
  )
}

ListingResults.defaultProps = defaultProps

export default ListingResults
