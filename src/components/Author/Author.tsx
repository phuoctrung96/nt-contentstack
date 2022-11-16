import React from "react"
import { graphql } from "gatsby"

import RichText from "../RichText"
const Image = React.lazy(() => import("../Image/Image"))

import { AuthorModel } from "../../models/components"

interface Props extends AuthorModel {}

const defaultProps = {}

const Author: React.FC<Props> = props => {
  // console.log("Author :", props)

  return (
    <React.Suspense fallback="Loading...">
      <section className="author">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell xlarge-2 show-for-xlarge" />
            <div className="cell medium-8 xlarge-7 author__inner">
              {props.image && (
                <Image
                  image={props.image}
                  altText={props.name}
                  cssClass="author__image"
                  objectFit="cover"
                />
              )}
              <div className="author__content">
                <div className="author__action">Written by</div>
                <div className="author__name">{props.name}</div>

                {/* content */}
                <RichText content={props.content} cssClass="author__bio" />

                {/* website */}
                {props.website && (
                  <a
                    href={props.website}
                    className="author__link"
                    target="_blank"
                  >
                    View website
                  </a>
                )}
              </div>
              <div className="cell medium-4 xlarge-3" />
            </div>
          </div>
        </div>
      </section>
    </React.Suspense>
  )
}

Author.defaultProps = defaultProps

export default Author

/******************************************************
	Data
******************************************************/
export const query = graphql`
  fragment AuthorFields on Contentstack_author {
    id
    name
    image {
      ...CmsImageFields
      gatsbyImageData(width: 200, placeholder: BLURRED, quality: 80)
    }
    content
    website
    internal {
      type
    }
  }
`
