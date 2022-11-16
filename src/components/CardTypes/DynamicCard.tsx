import React from "react"
import LazyLoad from "react-lazy-load"

import AddMyTrip from "../AddMyTrip"

import { ATDWProductModel } from "../../models/common"

interface Props extends ATDWProductModel {
  disableMyTrip?: boolean
}

const defaultProps = {}

const DynamicCard: React.FC<Props> = props => {
  // console.log("DynamicCard :", props)

  return (
    <div className="card dynamicCard">
      <a href="/" className="card__link">
        <div className="card__imageWrapper ratio--3-2">
          <LazyLoad>
            <img
              src={props.thumbnail}
              alt={props.productName}
              className="card__image"
            />
          </LazyLoad>
        </div>
        <div className="card__content">
          <h5 className="card__category">{props.productCategoryId}</h5>
          <h4 className="card__heading">{props.productName}</h4>
          <p>
            <em>text</em>
          </p>
          <StarRating rating="star-rating--3-5" />
        </div>
        {!props.disableMyTrip && <AddMyTrip />}
      </a>
    </div>
  )
}

DynamicCard.defaultProps = defaultProps

export default DynamicCard

const StarRating: React.FC<{ rating: string }> = props => {
  if (!props.rating) return null
  return (
    <p className={`star-rating ${props.rating || ""}`}>
      <i className="svg-icon" />
      <i className="svg-icon" />
      <i className="svg-icon" />
      <i className="svg-icon" />
      <i className="svg-icon" />
    </p>
  )
}
