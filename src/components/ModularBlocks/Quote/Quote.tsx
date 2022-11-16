import React from "react"

import ModuleImage from "../ModuleImage"

import { QuoteModule } from "../../../models/modules"

interface Props extends QuoteModule {}

const defaultProps = {}

const Quote: React.FC<Props> = props => {
  // console.log("Quote: ", props)

  return (
    <section className="quote">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="column xlarge-2 show-for-xlarge" />
          <div className="column medium-8 xlarge-7">
            <figure>
              <blockquote>{props.quote}</blockquote>
              <figcaption>
                — {props.author}
                <div className="quote__image ratio--1-1">
                  <ModuleImage {...props.image} />
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="column medium-4 xlarge-3 side-right"></div>
        </div>
      </div>
    </section>
  )
}

Quote.defaultProps = defaultProps

export default Quote
