import React from "react"

const SectionHeader = React.lazy(() => import("../SectionHeader"))
import EditorialCard from "../../CardTypes/EditorialCard"

import { EditorialModule } from "../../../models/modules"

interface Props extends EditorialModule {}

const defaultProps = {}

const EditorialListing: React.FC<Props> = props => {
  // console.log("EditorialListing: ", props)

  const isReverse = props.layout === "Editorial reversed"

  const listing = [
    { heading: "item 1" },
    { heading: "item 2" },
    { heading: "item 3" },
    { heading: "item 4" },
    { heading: "item 5" },
    { heading: "item 6" },
  ]

  // const cellClass = ["large", "small", "small", "large", "small", "small"]
  const cellClass = ["large", "small", "small"]

  return (
    <React.Suspense fallback="Loading...">
      <section
        className={`editorialListing ${
          props.add_highlight ? "section--highlighted" : ""
        }`}
      >
        <div className="grid-container">
          {(props.heading || props.intro_paragraph) && (
            <SectionHeader
              heading={props.heading}
              intro={props.intro_paragraph}
            />
          )}

          {/* listing */}
          <div className="grid-x grid-margin-x">
            <div className="cell">
              <ul
                className={`editorial__listing ${
                  isReverse ? "editorial__listing--reversed" : ""
                }`}
              >
                {listing.map((item, index) => (
                  <li
                    key={`item_${index}`}
                    className={`editorial__item ${cellClass[index % 3]}`}
                  >
                    <EditorialCard heading={item.heading} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid-x grid-margin-x">
            <div className="cell">
              <ul className="editorial__listing">
                {listing.slice(0, 3).map((item, index) => (
                  <li
                    key={`item_${index}`}
                    className={`editorial__item medium`}
                  >
                    <EditorialCard heading={item.heading} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Suspense>
  )
}

EditorialListing.defaultProps = defaultProps

export default EditorialListing
