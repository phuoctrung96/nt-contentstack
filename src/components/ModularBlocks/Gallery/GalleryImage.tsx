import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { CmsImage } from "../../../models/common"

interface Props {
  file?: CmsImage
  link?: {
    alt_text?: string
    url?: string
  }
  caption?: string
  caption_link?: string
  caption_target?: string
  cssClass?: string
}

const defaultProps = {}

const GalleryImage: React.FC<Props> = props => {
  // console.log("GalleryImage: ", props)

  if (props.file) {
    const imageData = getImage(props.file?.gatsbyImageData)

    if (imageData) {
      return (
        <figure className="gallery__item">
          <GatsbyImage
            image={imageData}
            alt={props.file?.description || props.file?.title || ""}
            className={`gallery__image ${props.cssClass}`}
            objectFit="cover"
          />
          <GalleryCaption {...props} />
        </figure>
      )
    }
  }

  if (props.link) {
    if (props.link.url) {
      return (
        <img
          src={props.link.url}
          alt={props.link.alt_text || ""}
          className="banner__image"
        />
      )
    }
  }

  return null
}

GalleryImage.defaultProps = defaultProps

export default GalleryImage

const GalleryCaption: React.FC<Props> = props => {
  if (props.caption) {
    if (props.caption_link)
      return (
        <figcaption>
          <a href={props.caption_link} target={props.caption_target || "_self"}>
            {props.caption}
          </a>
        </figcaption>
      )

    return <figcaption>{props.caption}</figcaption>
  }

  return null
}
