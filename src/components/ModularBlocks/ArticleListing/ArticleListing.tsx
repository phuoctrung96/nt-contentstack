import React from "react"

const SectionHeader = React.lazy(() => import("../SectionHeader"))
const ModularButton = React.lazy(() => import("../../Button/ModularButton"))
import ArticleCard from "../../CardTypes/ArticleCard"

import { ArticleListingModule } from "../../../models/modules"

interface Props extends ArticleListingModule {}

const defaultProps = {}

const ArticleListing: React.FC<Props> = props => {
  // console.log("ArticleListing: ", props)

  const listing = [
    { heading: "item 1" },
    { heading: "item 2" },
    { heading: "item 3" },
    { heading: "item 4" },
    { heading: "item 5" },
    { heading: "item 6" },
  ]

  return (
    <React.Suspense fallback="Loading...">
      <section className={`articleListing`}>
        <div className="grid-container">
          {(props.heading || props.intro_paragraph) && (
            <SectionHeader
              heading={props.heading}
              intro={props.intro_paragraph}
            />
          )}

          {/* listing */}
          <div className="grid-x grid-margin-x xlarge-up-3 align-center xlarge-align-left">
            {listing.map((item, index) => (
              <div
                key={`article_${index}`}
                className="cell small-10 large-8 xlarge-12"
              >
                <ArticleCard key={`item_${index}`} heading={item.heading} />
              </div>
            ))}
          </div>

          {/* cta */}
          <div className="grid-x grid-margin-x">
            <div className="cell text-center">
              <ModularButton
                label="Read more articles"
                url="/articles"
                cssClass="btn-row__button"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Suspense>
  )
}

ArticleListing.defaultProps = defaultProps

export default ArticleListing
