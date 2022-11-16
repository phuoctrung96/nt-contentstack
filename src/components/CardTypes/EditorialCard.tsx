import React from "react"

import AddMyTrip from "../AddMyTrip"

interface Props {
  heading?: string
}

const defaultProps = {}

const EditorialCard: React.FC<Props> = props => {
  // console.log("EditorialCard :", props)

  return (
    <div className="card editorialCard">
      <a href="/" className="card__link">
        <div className="card__inner ratio--3-2">
          <div className="card__image"></div>
          <div className="card__overlay">
            <div className="card__content">
              <h5 className="card__category">Category</h5>
              <h4 className="card__heading">{props.heading}</h4>
            </div>
            <div className="card__details">
              <p>
                Tiwi Design is one of the oldest and most artistically diverse
                art centres in Australia.
              </p>
              <div className="card__cta">
                <i className="svg-icon svg-angle-right icon-white" />
                Read more
              </div>
            </div>
          </div>
        </div>
        <AddMyTrip />
      </a>
    </div>
  )
}

EditorialCard.defaultProps = defaultProps

export default EditorialCard
