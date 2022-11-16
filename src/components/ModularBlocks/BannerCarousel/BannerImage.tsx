import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ModularBanner } from "../../../models/modules"

interface Props extends ModularBanner {
  eagerLoad?: boolean
}

const defaultProps = {}

const BannerImage: React.FC<Props> = props => {
  // console.log("BannerImage: ", props)

  if (props.image?.file) {
    // Image
    const imageData = getImage(props.image?.file?.gatsbyImageData)
    if (imageData) {
      return (
        <GatsbyImage
          image={imageData}
          alt={props.image.file.description || props.image.file.title || ""}
          className="banner__image"
          objectFit="cover"
          loading={props.eagerLoad ? "eager" : "lazy"}
        />
      )
    }
  }

  if (props.image?.link) {
    if (props.image.link.url) {
      return (
        <img
          src={props.image.link.url}
          alt={props.image.link.alt_text || ""}
          className="banner__image"
        />
      )
    }
  }

  return null
}

BannerImage.defaultProps = defaultProps

export default BannerImage
