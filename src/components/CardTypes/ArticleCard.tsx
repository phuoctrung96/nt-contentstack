import React from "react"
import { Link } from "gatsby"

interface Props {
  heading?: string
  cssClass?: string
}

const defaultProps = {}

const ArticleCard: React.FC<Props> = props => {
  // console.log("ArticleCard :", props)

  return (
    <div className={`card articleCard ${props.cssClass || ""}`}>
      <div className="card__inner">
        <Link to="/" className="card__link">
          <div className="card__image ratio--16-9"></div>
          <div className="card__content">
            <h5 className="card__category">Articles</h5>
            <h4 className="card__heading">{props.heading}</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = defaultProps

export default ArticleCard
