import React from "react"

const SectionHeader = React.lazy(() => import("../SectionHeader"))

import { MapModule } from "../../../models/modules"

interface Props extends MapModule {}

const defaultProps = {}

const Map: React.FC<Props> = props => {
  console.log("Map: ", props)

  return (
    <React.Suspense fallback="Loading...">
      <section className="listing-map hide-for-print">
        <div className="grid-container">
          {(props.heading || props.intro_paragraph) && (
            <SectionHeader
              heading={props.heading}
              intro={props.intro_paragraph}
            />
          )}

          <section className="explore not-fullscreen">
            <div className="grid-x grid-margin-x">
              <div className="cell view-map-holder">
                <div className="view-map-width">
                  <a href="/map" className="view-map">
                    Loading...
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </React.Suspense>
  )
}

Map.defaultProps = defaultProps

export default Map
